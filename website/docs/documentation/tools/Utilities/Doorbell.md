# Doorbell

## Features

Trying to get in to a loan but can't because another user is already editing it? It happens... All the time...  :weary: 

With Doorbell, you can notify the user in that loan that you are trying to get in to the loan to make changes, all right from within Encompass. No need to IM, email, call, slack, yell across the hall, or whatever you are  currently doing today. :smile:

## Setup

1. In Encompass
2. Click on the Settings Menu
3. Expand the Community Menu
4. Click on PluginManagement

![Community Plugin Menu](/img/CommunityPluginMenu.png)

5. Select Doorbell from the Plugin menu
6. Enable All Access or configure more fine tuned access using either Personas or Users

![](/img/Doorbell/DoorbellConfiguration.png)

7. Additional configuration can be found by clicking on the Configuration button which will allow you to customize the message that is displayed to the user. For example, you could alert the user with following custom message:

`
Red Alert! {user} is requesting access to this loan. They will not be able to edit the loan as requested until you have exited.
`

## Usage

### Ringing the Doorbell

1. In Encompass from the pipeline view, right click on a loan that is currently locked by another user.
2. Select the Doorbell menu item

![](/img/Doorbell/DoorbellPipelineOption.png)

3. The user that is in the loan will then get a popup notification:

![](/img/Doorbell/DoorbellExitNotification.png)

If you have customized the messsage then the popup notification will reflect your customizations, for example:

![](/img/Doorbell/DoorbellCustomMessage.png)
