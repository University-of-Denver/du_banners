#!/usr/bin/env bash
set -euxo pipefail

DEST_MODULE_DIR="$GITHUB_WORKSPACE/upstream/web/modules/packages/du_banners"

# Copy entire module into upstream/web/modules/packages/du_banners
mkdir -p "$DEST_MODULE_DIR"
cp -r "$GITHUB_WORKSPACE/module/"* "$DEST_MODULE_DIR/"

# Install PHP dependencies
cd "$GITHUB_WORKSPACE/upstream"
ddev composer install --no-interaction --prefer-dist

# Install Drupal using the ducore profile
ddev drush si ducore -y

# Enable modules
ddev drush en du_banners du_functional_testing -y

# Install test dependencies and generate roles
cd "$GITHUB_WORKSPACE/upstream/tests"

if [ -f package-lock.json ]; then
  npm ci
else
  npm install
fi
npm run generate-roles || true
