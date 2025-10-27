# DU Banners (Also called Alerts...shhh!)

This is the DU Banners repository providing Drupal sites the ability to display banners across 
the top of the page and also to work with Rave Alerts for campus safety and security.

## Main Documentation

The main documentation for this package can be found at:

- [Banners Confluence Page](https://ducloudwiki.atlassian.net/wiki/x/CYB-Iw)

## Local Setup

You will need to have a local copy of the DU profile set up and running first.

- [Install DU Profile Locally](https://ducloudwiki.atlassian.net/wiki/x/F4DDRQ)

Once you have the profile running, you can install this module locally:

1. `cd` into the `web/modules/custom` directory
2. `git clone git@github.com:DU-University-Relations/du_banners.git`
3. `cd du_banners`
4. `./scripts/bootstrap-local.sh`

## Testing

This module uses the Playwright E2E testing infrastructure from the DU profile 
(drupal-composer-managed). The module repository keeps only module-specific test specs in 
tests/du-banners/ and optional data in tests/fixtures/.

Quick start:
- [Install Testing on a Package](https://ducloudwiki.atlassian.net/wiki/x/F4DDRQ) has 
  instructions on how to install the testing infrastructure on a package.

See scripts/README.md for detailed instructions on local setup, CI, and the test structure.

## Dependencies

- `cms_content_sync` - This module depends on the CMS Content Sync module for content 
  synchronization because...

