/// <reference types="cypress" />

describe('Search and Navigation', () => {
	beforeEach(() => {
		// Visit the home page before each test
		cy.visit('/');
	});

	it('should search for a user and navigate to their detail page', () => {
		// Wait for the page to load completely
		cy.get('[data-cy="search-input"]').should('be.visible');

		// Type in the search input
		cy.get('[data-cy="search-input"]').type('octocat');

		// Wait for search results to appear
		cy.get('[data-cy="search-results"]').should('be.visible');
		cy.get('[data-cy="user-card"]').should('have.length.greaterThan', 0);

		// Get the first search result and click it
		cy.get('[data-cy="user-card"]').first().click();

		// Verify navigation to user detail page
		cy.url().should('include', '/octocat');

		// Verify the user profile page loads
		cy.get('[data-cy="user-profile"]').should('be.visible');
		cy.get('[data-cy="user-avatar"]').should('be.visible');
		cy.get('[data-cy="user-name"]').should('be.visible');
	});

	it('should handle empty search results gracefully', () => {
		// Type a search query that will likely return no results
		cy.get('[data-cy="search-input"]').type('nonexistentuser12345678');

		// Wait and check for empty search message
		cy.get('[data-cy="empty-search"]').should('be.visible');
	});

	it('should clear search results when input is cleared', () => {
		// First, perform a search
		cy.get('[data-cy="search-input"]').type('octocat');
		cy.get('[data-cy="search-results"]').should('be.visible');

		// Clear the input
		cy.get('[data-cy="search-input"]').clear();

		// Verify search results are no longer visible
		cy.get('[data-cy="search-results"]').should('not.exist');

		// Verify banner is visible again
		cy.get('[data-cy="banner"]').should('be.visible');
	});
});
