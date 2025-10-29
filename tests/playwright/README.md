# DU Core Profile Tests

These are the tests for the DU Core Profile written using Drupal 10.

## Testing Docs

Some documentation about testing is available on the DU Confluence wiki abd some documentation 
within this repository. You should place general testing documentation on the Confluence wiki 
and docs specifically for writing tests within this repository.

General testing documentation:
- [Testing Introduction & Background](https://ducloudwiki.atlassian.net/wiki/spaces/DS/pages/1168900125/Testing+-+Introduction+Background)

## Testing Setup

The `./scripts/bootstrap-local.sh` script will setup the environment for running the tests, but 
you can look at the commands in the script and run them manually if you need to.

```bash
# Install testing dependencies.
npm install
ddev drush en du_functional_testing -y

# Generate test user data.
npm run generate-roles
```

## Running Tests

The tests are set to run using a `baseURL` in the Playwright config file, but you can also pass 
in the base URL as an argument to the `npm run test` command in order to run the tests against 
a different environment, like on Pantheon.

```bash
# Run tests against a local environment.
npx playwright test

# Run tests for specific tags.
npx playwright test --tag @smoke,@banners

# Run tests against a Pantheon environment.
PLAYWRIGHT_BASE_URL="https://test-site.pantheonsite.io/" npx playwright test  
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
