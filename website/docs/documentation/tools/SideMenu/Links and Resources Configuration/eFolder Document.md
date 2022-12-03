# Document

## Setup

:::caution

This functionality requires that the [eFolder Document plugin](/docs/documentation/tools/Utilities/Open%20eFolder%20Document) be configured properly. 

:::

1. In Encompass
2. Click on the Settings Menu
3. Expand the Community Menu
4. Click on PluginManagement

![Community Plugin Menu](/img/CommunityPluginMenu.png)

5. Select SideMenu from the plugin dropdown list
6. Click on the Configuration button to launch the SideMenu_Form configuration window:

![Side Menu Configuration Menu](/img/SideMenu/SideMenuConfiguration.png)

7. Set the Link Type to `EFolder`
8. Name the `Link Text` as you would like it to appear in the Side Menu
9. The `Link Value` should exactly match the name of the eFolder document that you would like to open. This is case sensitive. Behind the scenes, this will set `CX.OPENDOCUMENT` and that [tool](/docs/documentation/tools/Utilities/Open%20eFolder%20Document) will then take over to open the document.
10. Click on the `Save` button to commit the changes
11. All users will need to logout and back in to Encompass for the changes to take effect

## Usage

1. In Encompass with a loan open
2. A user with permissions to the Side Menu, the LinksAndResources plugin, and the OpeneFolderDocument plugin can now take advantage of the new link in the Side Menu
3. With the Side Menu expanded
4. Click the document link previously configured
5. If the document exists in the eFolder, the eFolder will open directly to the document
