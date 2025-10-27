# Scripts

This module leverages the Playwright test infrastructure provided by the DU profile 
(drupal-composer-managed). These scripts help you bootstrap a site locally and in CI so you can 
run the module's Playwright tests using the profile's shared configuration.

Local Development Setup:
1. Clone the DU profile repository (drupal-composer-managed).
2. Clone this module into the profile at web/modules/custom/du_banners.
3. From the module directory, run: bash scripts/bootstrap-local.sh.
4. Run tests from the profile's tests directory: cd ../../../tests && npm run test du-banners.

Test Development:
- Module tests live in tests/du-banners/ within this module repository.
- After changing tests, re-run the bootstrap script or manually copy them:
  cp -r web/modules/custom/du_banners/tests/du-banners tests/
- Run with npm run test du-banners from the profile's tests directory.

Test Structure:
- The module repo only contains test specs under tests/du-banners/ and optional data under tests/fixtures/.
- The profile provides all test infrastructure (package.json, Playwright config, helpers, fixtures).
- During setup, tests are copied into the profile's tests/du-banners/ directory and fixtures (if any) are copied into tests/fixtures/du_banners/.

Scripts:
- bootstrap-local.sh — Bootstraps a local Drupal site in DDEV and copies module tests into the profile tests directory.
- bootstrap-ci.sh — Used by CI to copy this module into the upstream profile checkout, install Drupal in DDEV, and copy tests into upstream/tests.