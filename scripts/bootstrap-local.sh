#!/usr/bin/env bash
set -euxo pipefail

# Enable the du_banners module
ddev drush en du_banners -y

# Import configurations for du_banners.
ddev drush cim --partial --source=modules/custom/du_banners/config/optional -y



