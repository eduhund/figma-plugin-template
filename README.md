Below are the steps to get your plugin running. You can also find instructions at:

[https://www.figma.com/plugin-docs/plugin-quickstart-guide/](https://www.figma.com/plugin-docs/plugin-quickstart-guide/)

This plugin template uses Typescript and NPM, two standard tools for creating JavaScript applications.

First, download Node.js which comes with NPM. This will allow you to install TypeScript and other
libraries. You can find the download link here:

[https://nodejs.org/en/download/](https://nodejs.org/en/download/)

Next, install TypeScript using the command:

`npm install -g typescript`

Finally, in the directory of your plugin, get all the needed dependencies to develop and build the plugin:

`npm install`

We recommend using Visual Studio code:

1. Download Visual Studio Code if you haven't already: https://code.visualstudio.com/.
2. Open this directory in Visual Studio Code.
3. Compile TypeScript to JavaScript: Run the "Terminal > Run Build Task..." menu item (or press ⌘⇧B,
   then select "npm: watch". You will have to do this again every time
   you reopen Visual Studio Code.

That's it! Visual Studio Code will regenerate the JavaScript file every time you save.
