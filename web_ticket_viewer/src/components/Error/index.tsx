import React from 'react';
import { Container } from './styles';

interface ErrorProps {
    code: number;
    message: string;
}
const AppError: React.FC<ErrorProps> = ({ code, message }) => {
    const error = {
        title: `Something went wrong - ${code}`,
        message,
    };

    if (!code && !message) {
        error.title = `something is wrong. Please,  Try Access the link bellow`;
        error.message = 'http://localhost:3000/tickets';
    }

    return (
        <Container>
            <h1>{error.title}</h1>
            <p>Error: {error.message}</p>
            <a href="http://localhost:3000/tickets">Back</a>
        </Container>
    );
};

export default AppError;
