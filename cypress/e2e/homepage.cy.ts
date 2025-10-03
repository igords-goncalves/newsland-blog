import { sampleResults, stubLatestNews } from '../mock/stubLastestNews';
describe('Visiting page', () => {
    it('Should visit the page', () => {
        cy.visit('/');
    });

    it('Should render the news cards on page', () => {
        cy.visit('/');
        cy.get('.c-card').should('exist');
        cy.get('.c-card').should('be.visible');
        cy.get('.c-card').should('have.length.greaterThan', 0);
    });

    it('Should render the news with date, title and description in a card', () => {
        cy.visit('/');
        cy.get('[data-testid="news-date"]').should('exist');
        cy.get('[data-testid="news-title"]').should('exist');
        cy.get('[data-testid="news-description"]').should('exist');
    });
});

describe('Homepage', () => {
    it('Should render news with date, title and description coming from request', () => {
        stubLatestNews(sampleResults);
        cy.visit('/');
        cy.wait('@getLatestNews');
        // cy.get('[data-testid="news-date"]').should(
        //     'contain.text',
        //     parseDate('2025-01-01T00:00:00.000Z'),
        // );
        cy.get('[data-testid="news-title"]').should(
            'contain.text',
            'Primeira notícia',
        );
        cy.get('[data-testid="news-description"]').should(
            'contain.text',
            'Descrição da primeira notícia',
        );
    });

    it('Should render a fallback message if there are no news', () => {
        stubLatestNews([]);
        cy.visit('/');
        cy.wait('@getLatestNews');
        cy.get('[data-testid="no-news-message"]')
            .should('exist')
            .and('contain.text', 'Nenhuma notícia disponível');
        cy.get('.c-card').should('not.exist');
    });
});

describe('Click on news', () => {
    // it.todo('Should open a modal');
    // it.todo('Should render the news content with date, title and content');
});
