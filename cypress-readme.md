# Cypress E2E Testing

This project includes end-to-end testing with Cypress to test the search and navigation functionality.

## Setup

Cypress has been configured with the following structure:
- `cypress.config.ts` - Main Cypress configuration
- `cypress/e2e/` - Test files
- `cypress/support/` - Support files and custom commands

## Running Tests

### Prerequisites
1. Make sure your development server is running:
   ```bash
   npm run dev
   ```
   The app should be available at `http://localhost:5173`

### Run Tests in Interactive Mode
```bash
npm run cypress:open
# or
npm run test:e2e:dev
```

### Run Tests in Headless Mode
```bash
npm run cypress:run
# or
npm run test:e2e
```

## Test Cases

### Search and Navigation (`search-and-navigate.cy.ts`)

1. **Search and Navigate to User Detail**
   - Searches for a user (default: "octocat")
   - Clicks on the first search result
   - Verifies navigation to the user detail page
   - Verifies user profile elements are visible

2. **Empty Search Results**
   - Searches for a non-existent user
   - Verifies empty search message is displayed

3. **Clear Search Results**
   - Performs a search
   - Clears the search input
   - Verifies search results disappear and banner reappears

## Data Attributes

The components include `data-cy` attributes for reliable test selectors:
- `data-cy="search-input"` - Main search input
- `data-cy="search-results"` - Search results container
- `data-cy="user-card"` - Individual user cards in search results
- `data-cy="empty-search"` - Empty search message
- `data-cy="banner"` - Homepage banner
- `data-cy="user-profile"` - User profile container
- `data-cy="user-avatar"` - User avatar
- `data-cy="user-name"` - User name

## Configuration

The Cypress configuration includes:
- Base URL: `http://localhost:5173`
- Viewport: 1280x720
- No video recording (for performance)
- Screenshots on failure enabled
- Test files pattern: `cypress/e2e/**/*.cy.{js,jsx,ts,tsx}`

## Tips

1. Make sure the development server is running before executing tests
2. Tests use real GitHub API calls, so ensure you have internet connectivity
3. The test searches for "octocat" which should always exist on GitHub
4. Tests include proper waits and assertions for reliable execution
