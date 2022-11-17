---
sidebar_label: eFolder Request and Retrieve 🚧
---

<underconstruction />

# Features

Automate requesting and retrieving eFolder documents through business rules. This tool utilizes the same process you'd normally use for document request and retrieval but allows for this to be performed in an automated way to help streamline your process and save your user's time! 

:::caution
If you are using a 3rd party service to request and retrieve documents, this tool may not work properly. This tool is designed to work with the standard Encompass eFolder request and retrieve processes and 3rd party services that override or change the standard functionality may cause this tool to not work properly.
:::

## Setup

### Enable eFolder Request and Retrieve
1. In Encompass
2. Click on the Settings Menu
3. Expand the Community Menu
4. Click on PluginManagement

![Community Plugin Menu](/img/CommunityPluginMenu.png)

5. Select the eFolderButtons plugin from the dropdown menu
6. Specified access will control what users get get to take advantage of this tool. All Access is typical for this tool

### Create CX.EFOLDER.REQUEST Field

The custom field should be a String format with a suitable length to fit the size of your document placeholder name(s) list that you will be requesting. 

![CX.EFOLDER.REQUEST](/img/eFolderRequestRetrieve/CX_EFOLDER_REQUEST.png)

### Create CX.EFOLDER.RETRIEVE Field

The custom field should be a String format with a suitable length to fit the size of your document placeholder name(s) that you will be retrieving. 

![CX.EFOLDER.RETRIEVE](/img/eFolderRequestRetrieve/CX_EFOLDER_RETRIEVE.png)

## Usage

### Requesting eFolder Documents

1. Once you have enabled and configured the eFolder Request and Retrieve plugin,
2. Create a new field trigger or any other event you want to trigger the document request from
3. The triggering event should set the CX.EFOLDER.REQUEST field to the name of the document placeholder(s) you want to request, with each document separated by a comma for example:

`Borrower Authorization to Release Information,Paystubs,W2`

4. Once the field is set to a valid list of documents, the eFolder Request window will open and the documents will be listed and checked for the request to be completed. 

### Retrieving eFolder Documents

1. Once you have enabled and configured the eFolder Request and Retrieve plugin,
2. Create a new field trigger or any other event you want to trigger the document retrieval from
3. The triggering event should set the CX.EFOLDER.RETRIEVE field to the name of the document placeholder(s) you want to retrieve, with each document separated by a comma for example:

`Borrower Authorization to Release Information,Paystubs,W2`

4. Once the field is set to a valid list of documents, the eFolder Retrieve window will open and the documents will be listed and checked for the retrieval to be completed.