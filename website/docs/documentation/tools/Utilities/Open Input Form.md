# Input Form Pop-Out Window

## Features

Are your users tired of being blocked from working in Encompass while viewing an eFolder document? We thought so. :frowning:

The Input Form Pop-Out will allow you to enable your users to open eFolder documents while continuing work within input forms in Encompass. Win:tada: Win:tada:

## Setup

This tool requires two custom fields to be created in Encompass. 

### Create CX.OPENFORM field

The custom field should be a String format with a suitable length to fit the name of your input form (e.g. 100 characters). You can adjust the character limit to fit your specific needs. 

![CX.OPENFORM](/img/OpenInputForm/CX_OPENFORM.png)

### Create CX.OPENFORM.SIZE field

The custom field should be a String format with a suitable length to fit the size you want your input form to display at, for example 800,800 which would mean the input form would render as 800 pixels by 800 pixels. A length of 10 will likely be suitable for most cases. 

![CX.OPENFORM.SIZE](/img/OpenInputForm/CX_OPENFORM_SIZE.png)

### Enable the Open Input Form Plugin for Users

1. In Encompass, select the Encompass menu
2. Select Community Menu and
3. Select Plugin Management
4. In the Plugin Management form, select the OpenInputForm as the "Plugin"
5. Enable All Access or configure more fine tuned access using either Personas or Users

## Usage

1. In Encompass
2. Open a loan
3. Set CX.OPENFORM.SIZE to the width and height you desire, e.g. 800,800. If no size is set for this field then the default size will be 600 x 600. 
4. Next, set CX.OPENFORM to the name of the input form you want to open, for example:

![Example of Setting Fields](/img/OpenInputForm/SetFields.png)

5. The input form will then open in a new pop-out window.
