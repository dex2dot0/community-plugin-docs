# Print Input Form to eFolder

## Features

Need a screenshot of the input form you've worked up to be added to the eFolder? This tool can do exactly that to save you from having to create a custom print form or make an awkward screenshot of the input form. Very handy indeed! :100:

## Setup

### Enable the PrintToEFolder in Plugin Management

Enabling the Input Form Automator is as simple as:

1. In Encompass
2. Click on the Settings Menu
3. Expand the Community Menu
4. Click on PluginManagement

![Community Plugin Menu](/img/CommunityPluginMenu.png)

5. select the PrintFormToEfolder plugin from the dropdown
6. Specified access will control what users get get to take advantage of this tool.

### Create CX.PRINT.FORM field

The custom field should be a String format with a suitable length to fit the size of your document placeholder name(s) that you will be printing to (or creating with the tool itself).

![CX.PRINT.FORM](/img/PrintToEFolder/CX_PRINT_FORM.png)

### Set CX.PRINT.FORM to the name of the document placeholder you want the screenshot added to

1. Create a new field trigger or any other event you want to trigger the input form screenshot to be printed on (such as form code).
2. Set the CX.PRINT.FORM field to the name of the document placeholder you want to print to.

:::caution

The document placeholder must already be in the eFolder. If it isn't then a new document placeholder will be created and named as the same name of your input form

:::

3. Re-use and re-trigger as needed.

## Usage

1. Once you have enabled and configured the Print Input Form to eFolder plugin,
2. In Encompass when the user is in a loan,
3. If the user has been provided access to the tool, once CX.PRINT.FORM is set, a screenshot of the input form will print on the event you've specified and be availabe in the eFolder under the document placeholder that was set for CX.PRINT.FORM.
4. The document attachment will be named Screenshot - followed by whatever you've set CX.PRINT.FORM to. For example, if CX.PRINT.FORM is set to "Awesome Form", the document attachment will be named Screenshot - Awesome Form.
