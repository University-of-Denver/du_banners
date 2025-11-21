import { test, expect } from '@du_pw/test';
import { getRole, logInViaForm, logOutViaUi } from "@du_pw/support/users";

test.describe('@banners - Login and out Tests', () => {
  const administrator = getRole('administrator');

  // @source https://ducloudwiki.atlassian.net/wiki/spaces/DS/pages/1115062392/UAT+-+Alerts+local
  test.only('AL1 - Create a new Alert node', async ({page, context}) => {
    // 1. Authenticate as qa_site_admin.
    await page.goto('/does/not/exist');
    // await logInViaForm(page, context, administrator);

    // 2. Navigate to the "add Alert" form using the Admin toolbar.
    //    Content > Add content > Alert
    await page.getByRole('link', { name: 'Content', exact: true }).click();

    // await page.locator('[data-drupal-link-system-path="admin/content"]').click();
    // await page.locator('[data-drupal-link-system-path="node/add"]').click();

    // await page.getByRole('link', { name: 'Alert' }).click();

    // Select Informational for Alert Type, which is called "notification" in the select list.
    // await page.selectOption(
    //   'select[data-drupal-selector="edit-field-alert-type"]',
    //   'notification'
    // );

    // Enter “Hello” for the First Word
    //
    // Enter “World” for the Title
    //
    // Leave Color and all other fields blank
    //
    // At the bottom of the editing form, click Save.
  });
});