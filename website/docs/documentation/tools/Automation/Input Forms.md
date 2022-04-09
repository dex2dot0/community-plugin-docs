# Input Form Automator

## Features

Want your input form list to be truly automated? We thought so and we do too!

With the Input Form Automator tool you can start applying Input Form Sets based on a specific user, a persona, the current milestone, the loan type, or a default :boom:

## Setup

### Enable Input Form Automator in Plugin Management

Enabling the Input Form Automator is as simple as:

1. In Encompass
2. Click on the Settings Menu
3. Expand the Community Menu
4. Click on PluginManagement

![Community Plugin Menu](/img/CommunityPluginMenu.png)

5. select the AutomateInputFormsSet plugin from the dropdown
6. Specified access will control what users get get to take advantage of this tool. All Access for example would apply the Input Form Sets to all logged in users.

### Input Form Template Setup

1. In Ecnompass
2. Click on the Settings Menu
3. Click on Settings...
4. Navigate to Loan Template > Input Form Sets
5. With the Public Form Lists folder select, in the Input Form Sets settings, create a folder called Persona:

![Persona Folder Setup](/img/InputFormAutomator/PersonaFolder.png)

6. The templates you want to apply and in what situations will dictate what actions to take next.

### Username Templates

1. In the new Persona folder created in the steps above, if you would like to create specific Input Form Templates for specific users:
2. Create a new input form set
3. Name the new input form set User_UsernameHere
4. For example, if my user is jsmith, I'd create a new input form set as follows in my new Persona folder:

![Example User Input Form Set](/img/InputFormAutomator/UserInputFormSet.png)

### Loan Type Templates

1. In the new Persona folder created in the steps above, if you would like to create specific Input Form Templates for specific loan types:
2. Create a new input form set
3. Name the new input form set LoanType_LoanTypeHere_PersonaHere
4. For example, if my target loan type is conventional loans, I'd create a new input form set as follows in my new Persona folder:

![Example User Input Form Set](/img/InputFormAutomator/LoanTypeSet.png)

### Milestone Type Template

1. In the new Persona folder created in the steps above, if you would like to create specific Input Form Templates for a specific milestone:
2. Create a new input form set
3. Name the new input form set Milestone_LastFinishedMilestoneName_PersonaHere
4. For example, if my target last finished milestone is Processing, I'd create a new input form set as follows in my new Persona folder:

![Example User Input Form Set](/img/InputFormAutomator/MilestoneTypeSet.png)

### Persona Type Templates

1. In the new Persona folder created in the steps above, if you would like to create specific Input Form Templates for specific personas:
2. Create a new input form set
3. Name the new input form set LoanType_PersonaHere
4. For example, if my the target persona is Processor, I'd create a new input form set as follows in my new Persona folder:

![Example User Input Form Set](/img/InputFormAutomator/PersonaTypeSet.png)

### Default Template

1. In the new Persona folder created in the steps above, if you would like to create a specific Input Form Template to apply when none of the above templates apply:
2. Create a new input form set
3. Name the new input form set Default
4. For example:

![Example User Input Form Set](/img/InputFormAutomator/DefaultTypeSet.png)

## Usage

1. Once you have enabled and configured the Input Form Automator
2. In Encompass
3. Upon opening a loan, if the user has been provided access to the Input Form Automator, the tool will automatically apply the appropriate Input Form Set
4. The tool follows a hierarchy of rules to determine which Input Form Set to apply. In the order below, the tool will apply the first matching input form set based on the following criteria:

   - [x] Current user's username
   - [x] Loan Type from field 1172
   - [x] Last completed milestone name
   - [x] Persona name
   - [x] Default Input Form Set

5. As an example, if you have an input form set that matches the name of one of your personas and the current user is enabled to use the tool and has that persona assigned to them, the tool will apply that input form set to the loan.
