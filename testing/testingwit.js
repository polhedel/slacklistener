//Wit application test
var util = require ('util');
var config = require ('../config/config.json');
var wit = require('node-wit');
const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('Indica la pregunta a enviar a Wit.AI:\n> ');
rl.prompt();

rl.on('line', (line) => {
  switch(line.trim()) {
    default:
      console.log("\tEnviando texto a Wit.AI:");
      inputText = line.trim();
      console.log("\t\'"+inputText+"\'");

      wit.captureTextIntent(config.wit_token, inputText, function (err, res) {
          console.log("Respuesta desde Wit para el texto de entrada: ");
          if (err) console.log("Error: ", err);
          console.log(JSON.stringify(res, null, " "));

          // var jsonobject = JSON.parse(res);
          // console.log(util.inspect(jsonobject));
          // console.log('Instent:'+JSON.parse(res).outcomes.intent);
          rl.prompt();
      });

      break;
  }
}).on('close', () => {
  console.log('Finalizando ejecución!');
  process.exit(0);
});
