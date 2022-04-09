# Appraiser Dialog

## Features

Want to limit access to the appraisers and AMC companies that show up in the Appraisal services menu? With this tool, you can do precisely that and easily with just a custom field. Amazing!

## Setup

### Create CX.AMC.DISABLE field

A custom field needs to be created and the ID needs to be CX.AMC.DISABLE. The custom field should be a String format with a large maximum length (500 characters). You can adjust the character limit to fit your specific needs. For example, if you only have a few appraisers/AMCs to remove then you may not need as many characters but if you have a lot to remove, you may need more than 500.

![CX.AMC.DISABLE](/img/AppraiserDialog/cx_amc_disable.png)

### Enable AppraiserDialog in Plugin Management

1. In Encompass
2. Click on the Settings Menu
3. Expand the Community Menu
4. Click on PluginManagement

![Community Plugin Menu](/img/CommunityPluginMenu.png)

5. Enable the Appraiser Dialog tool
6. Access will specify what users will be affected by the tool. All Access for example would restrict the appraisers/AMC companies that you specify to be restricted in CX.AMC.DISABLE.

### Populate CX.AMC.DISABLE field

CX.AMC.DISABLE should contain a list of the names of appraisers or companies that from the Order Appraisal menu. To see the list of possible options to limit, click on the Services tab and then click on Order Appraisal. Switch to the All Appraiser tab to see what options you can potentially limit. Please note the list is based on location so this will not show all the options available across all geographies.

![Services Menu](/img/AppraiserDialog/AppraisalOrderMenu.png)

If you wanted to restrict A1 AMC and AAA AMC from the menu shown above, you'd need to populate CX.AMC.DISABLE with the following:

`A1 AMC AAA AMC`
