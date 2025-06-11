export const parseDate = (date: string) => {
    return new Date(date).toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};
