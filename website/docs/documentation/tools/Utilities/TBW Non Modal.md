---
sidebar_label: Task Based Workflow Non-Modal 🚧
---

<underconstruction/>

## Features
Added method to open the Task Based Workflow window in a non-modal window. This allows the user to continue working in Encompass while the Task Based Workflow window is open.

## Setup
### Create CX.MISC.TRIGGER Field
The custom field should be a String format field named `CX.MISC.TRIGGER`:

![CX.MISC.TRIGGER](/img/TBWNonModal/CX_MISC_TRIGGER.png)

## Usage

1. In Encompass,
2. Open a loan and using business rules or similar triggering logic, set the `CX.MISC.TRIGGER` field to `TBWNonModal`