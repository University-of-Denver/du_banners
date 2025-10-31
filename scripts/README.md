# Scripts

This module leverages the Playwright test infrastructure provided by the DU profile 
(drupal-composer-managed). These scripts help you bootstrap a site locally and in CI so you can 
run the module's Playwright tests using the profile's shared configuration.

Scripts:
- bootstrap-local.sh — Bootstraps a local Drupal site in DDEV
- bootstrap-ci.sh — Used by CI to copy this module into the upstream profile checkout, install 
  Drupal in DDEV, and setup test dependencies.