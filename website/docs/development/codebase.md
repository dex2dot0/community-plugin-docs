---
sidebar_position: 3
---

# Codebase Attachment

The Community Plugin has a base implementation for an easy way that you can attach codebase to your input forms using a single plugin rather than the traditional method of doing so in input form builder and attaching to each form directly.

## Features

- [x] Share dependencies across your codebase assemblies. No more need to have each codebase split out in to a separate projects (though there are other solutions for this)
- [x] All your codebase assemblies in one project
- [x] Reduces manual uploads within the IFB for each codebase update

## Extending the Base Configuration

1. Open the Community Plugin project locally
2. The entry points for the example can be found at the following directory:
   - CommunityPlugin\Standard Plugins\Forms\CodebaseAssemblies\SettingsExtract\
3. Attach_Sample.cs is an example file where you can add and attach whatever codebase you setup under this directory (or another)
4. Form_Example.cs provides a sample of a codebase assembly
5. From here, you can add additional codebases by replicating the Form_Example.cs example
6. For example, you can create a new file called My_Form.cs in this directory and add your codebase assembly to it:

```
// My_Form.cs Example

using EllieMae.Encompass.Forms;
using System;
using MessageBox = System.Windows.Forms.MessageBox;

namespace CommunityPlugin.Standard_Plugins.Forms.CodebaseAssemblies.SettingsExtract
{
    public class My_Form: Form
    {
        public override void CreateControls()
        {
            this.Load += Form_SettingsExtract_Load;
        }

        private void Form_SettingsExtract_Load(object sender, EventArgs e)
        {
            //Classic Hello World!
            MessageBox.Show("Hello World!");
        }
    }
}

```

7. After you have completed the codebase in My_Form.cs, open Attach_Sample.cs and a reference to your new class (where the new class in My_Form.cs is My_Form and the name of your input form is My Form), e.g.:

```
// Attach_Sample.cs Example

namespace CommunityPlugin.Standard_Plugins.Forms.CodebaseAssemblies.SettingsExtract
{
    public class Attach_Sample : Plugin, ILogin
    {

        public override void Run()
        {
            LoansScreen loans = (LoansScreen)EncompassApplication.Screens[EncompassScreen.Loans];
            if (loans == null)
                return;
            loans.AttachCodebaseToForm("My Form", typeof(My_Form));
        }
    }
}
```

8. Build the Community Plugin project and load your plugin and then when you open the My Form input form, viola! Add as many codebase assemblies as you need. :100:
