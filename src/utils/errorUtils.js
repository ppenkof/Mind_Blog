export function getErrorMessage(error) {
    if (error.name === 'ValidationError') {
        const messages = Object.values(error.errors).at(0).message;
        return messages;
    } else {
        return error.message || 'An unexpected error occurred.';
    }
}