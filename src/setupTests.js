const suppressedErrors = /(React does not recognize the.*prop on a DOM element|Unknown event handler property|is using uppercase HTML|Received.*for a non-boolean attribute.*|The tag.*is unrecognized in this browser|An update to.*inside a test was not wrapped in act)/;
const realConsoleError = console.error;
console.error = (message) => {
  if (message.match(suppressedErrors)) {
    return;
  }
  realConsoleError(message);
};
