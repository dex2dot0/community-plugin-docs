# Pipline Color

## Features

Highlight different loan characteristics directly from the pipeline view. For example, you could color the loans in the pipeline view by lock date, loan amounts, loan exceptions, alerts, or any other field/logic. The Community Plugin provides you with a base to build whatever you'd like! :tada:

:::caution

The Community Plugin currently provides a base example from which you can customize and make your own. However, to do so you will need to modify the development code of the project. 

:::

## Setup

1. In Encompass
2. Click on the Settings Menu
3. Expand the Community Menu
4. Click on PluginManagement

![Community Plugin Menu](/img/CommunityPluginMenu.png)

5. Select PipelineColor as the Plugin
6. Provide either All Access or more fine grained access by persona or individual user accounts. This will control who sees the modfiied pipeline coloring when viewing pipeline views. 

## Usage

1. In Encompass
2. Open the pipeline tab
3. The base configuration for this tool is to highlight any loan that has a loan amount greater than $500,000 with a green background
4. To further configure the tool, you will need to modify the code within the Community Plugin project itself. Specifically, the PipelineColor.cs file located in the CommunityPlugin/src/Non Native Modifications/Pipeline/ directory.
