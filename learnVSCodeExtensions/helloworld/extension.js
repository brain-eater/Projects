// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const fs = require("fs");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "helloworld" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.j son
  let disposable = vscode.commands.registerCommand(
    "extension.helloWorld",
    function() {
      // The code you place here will be executed every time your command is executed

      // Display a message box to the user
      let textDocument = vscode.workspace.textDocuments;
      let text = fs.readFileSync(textDocument[0].fileName, "utf-8");
      // let splittedText = text.match(/const.*function(.*){.*^}/);
      console.log(text);
      // let finalText = text.split("};").join("};\n\n");
      // console.log(finalText);
      // let finalText = [];
      // let i = 1;
      // for (let a of splittedText) {
      //   if (i % 3 != 0) {
      //     finalText.push(a);
      //   }
      //   i++;
      // }
      // console.log(finalText.join("\n\n"));

      vscode.window.showErrorMessage("ganesh");
    }
  );

  context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate
};
