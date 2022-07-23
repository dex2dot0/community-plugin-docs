# Print Input Form to eFolder

## Features

Need a screenshot of the input form you've worked up to be added to the eFolder? This tool can do that to save you from having to create a custom print form that contains the same information but in different formatting. That or making an awkward screenshot of the input form. Very handy indeed! :100:

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

The custom field should be a String format with a suitable length to fit the size of how you name you input forms. For shorter input form names, such as "Loan Details", a length of 32 will likely be suitable. For longer input form names such as "Operations - Loan Information - Borrower Detials", a length of 100 will likely be suitable however the length of the field is ultimately up to you and should cover all scenarios for your environment.

![CX.PRINT.FORM](/img/PrintToEFolder/CX_PRINT_FORM.png)

### Set CX.PRINT.FORM to the name of the input form you want to print on a triggered basis/event

1. Create a new field trigger or any other event you want to trigger the input form to be printed on.
2. Set the CX.PRINT.FORM field to the name of the input form you want to print.
3. The input form will then print on the event you've specified.
4. The document placeholder in the eFolder will reflect the name of the input form you've printed.

## Usage

1. Once you have enabled and configured the Print Input Form to eFolder plugin
2. In Encompass
3. Upon opening a loan, if the user has been provided access to the tool, once CX.PRINT.FORM is set to the name of the input form you want to print, the input form will print on the event you've specified.

:::caution

This might only work if the input form that the user is currently on is the one that you are trying to print. Additionally, the user must have access to the input form that you are trying to print.

:::
