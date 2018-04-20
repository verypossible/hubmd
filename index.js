const yargs = require('yargs');
var argv = yargs
  .usage('This is my awesome program\n\nUsage: $0 [options]')
  .help('help').alias('help', 'h')
  .options({
      input: {
            alias: 'i',
            description: "<filename> Input file name",
            requiresArg: true,
            required: true
          },
      output: {
            alias: 'o',
            description: "<filename> output file name",
            requiresArg: true,
            required: true
          },
      language: {
            alias: 'l',
            description: "<language> language supported for syntax highlighting",
            requiresArg: true,
            required: false
          }
    })
  .argv;

console.log("input:", argv.input);
console.log("output:", argv.output);

const Prism = require("prismjs");
const Remarkable = require("remarkable");
const fs = require("fs");
const loadLanguages = require("prismjs/components/index.js");

const unparsed = fs.readFileSync(argv.input).toString();

if(argv.language) {
  loadLanguages([argv.language]);
}

const md = new Remarkable({
  highlight: function(str, lang) {
    if (lang && argv.language) {
      return Prism.highlight(str, Prism.languages[argv.language], argv.language);
    }
    return ""; // use external default escaping
  }
});

const parsed = md.render(unparsed);

fs.writeFile(argv.output, parsed, function(err, data) {
  if (err) console.log(err);
  console.log("done");
});
