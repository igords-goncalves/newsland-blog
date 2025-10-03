export const sampleResults = [
    {
        id: '1',
        title: 'Primeira notícia',
        description: 'Descrição da primeira notícia',
        published_at: '2025-01-01T00:00:00.000Z',
    },
    {
        id: '2',
        title: 'Segunda notícia',
        description: 'Descrição da segunda notícia',
        published_at: '2025-01-02T00:00:00.000Z',
    },
];

export function stubLatestNews(results: any[]) {
    cy.intercept(
        { method: 'GET', url: '**/latest*' },
        {
            statusCode: 200,
            body: {
                results,
            },
        },
    ).as('getLatestNews');
}
