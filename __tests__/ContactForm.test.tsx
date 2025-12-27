import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ContactForm } from '@/components/contact/ContactForm';
import userEvent from '@testing-library/user-event';

// Mock scrollIntoView for Radix/Hook Form if needed, though basic HTML form doesn't always need it
window.HTMLElement.prototype.scrollIntoView = jest.fn();

describe('ContactForm', () => {
    it('renders correctly', () => {
        render(<ContactForm />);
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
    });

    it('shows validation errors when fields are empty', async () => {
        render(<ContactForm />);
        const submitButton = screen.getByRole('button', { name: /send message/i });

        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(screen.getByText(/name must be at least 2 characters/i)).toBeInTheDocument();
            expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
            expect(screen.getByText(/message must be at least 10 characters/i)).toBeInTheDocument();
        });
    });

    it('shows validation error for invalid email', async () => {
        render(<ContactForm />);
        const emailInput = screen.getByLabelText(/email/i);
        const submitButton = screen.getByRole('button', { name: /send message/i });

        await userEvent.type(emailInput, 'invalid-email');
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
        });
    });

    it('submits valid form data', async () => {
        render(<ContactForm />);
        const nameInput = screen.getByLabelText(/name/i);
        const emailInput = screen.getByLabelText(/email/i);
        const messageInput = screen.getByLabelText(/message/i);
        const submitButton = screen.getByRole('button', { name: /send message/i });

        await userEvent.type(nameInput, 'John Doe');
        await userEvent.type(emailInput, 'john@example.com');
        await userEvent.type(messageInput, 'This is a valid message for testing.');

        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(screen.getByText(/sending.../i)).toBeInTheDocument();
        });

        // Wait for simulate API delay (mocked timeout in component is 2000ms)
        // Jest timer mocks could be used, but for simple integration test we wait
        // Actually, real timers in tests are slow. We should verify loading state appears.
        // To verify success state, we might need to mock setTimeout or wait 2s.
    });
});
