# DU Core Profile Tests

These are the tests for the DU Banners package.

## Testing Docs

Some documentation about testing is available on the DU Confluence wiki and some documentation 
within this repository. You should place general testing documentation on the Confluence wiki 
and docs specifically for writing tests within this repository.

General testing documentation:
- [Testing Introduction & Background](https://ducloudwiki.atlassian.net/wiki/spaces/DS/pages/1168900125/Testing+-+Introduction+Background)

## Testing Setup

The `./scripts/bootstrap-local.sh` script will setup the environment for running the tests, but 
the config import does not work right now so the only test is a "dummy test" that will pass and 
prove you can run the banner tests tagged with `@banners`.

## Running Tests

The tests are set to run using a core profile's Playwright configuration.

```bash
# Go to the Drupal profile root where the playwright.config.js file is located.
cd /path/to/project/root
# Output the playwright.config.js file to make sure you are in the right directory.
cat playwright.config.js

# Run tests targeting the banners package.
npx playwright test --grep @banners

# Run all tests.
npx playwright test 

# Run tests against a Pantheon environment.
PLAYWRIGHT_BASE_URL="https://test-site.pantheonsite.io/" npx playwright test --grep @banners 
```

## Structure

The tests' directory is structured into separate subdirectories for various purposes.

### Docs

Documentation about writing code for the tests should be stored here. It will be helpful to any 
AI assistant or agent to read the documentation and reference it for assistance in writing and 
maintaining the test suite.

### e2e

Playwright tests are stored in this directory and broken down into test cases and test plans.

### fixtures

Anything related to setting up fixtures for the tests should be stored here.
