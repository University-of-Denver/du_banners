import { test, expect } from '@playwright/test';
import { getRole, logInViaForm, logOutViaUi } from "@support/users";

test.describe('@banners - Login and out Tests', () => {
  const site_admin = getRole('site_admin');

  test('AL1 - Create a new Alert node', async ({page, context}) => {
    // 1. Authenticate as qa_site_admin.
    await logInViaForm(page, context, site_admin);

    // 2. Navigate to the "add Alert" form using the Admin toolbar.
    //    Content > Add content > Alert
    // await page.getByRole('link', { name: 'Content' }).click();
    // mm
    await page.locator('[data-drupal-link-system-path="admin/content"]').click();
    await page.locator('[data-drupal-link-system-path="node/add"]').click();

    // Select Informational for Alert Type.


    // Enter “Hello” for the First Word
    //
    // Enter “World” for the Title
    //
    // Leave Color and all other fields blank
    //
    // At the bottom of the editing form, click Save.
  });
});