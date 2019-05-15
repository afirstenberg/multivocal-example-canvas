const Multivocal = require('multivocal');
const Util = require('multivocal/lib/util');

const config = {
  Local: {
    en: {
      Response: {
        "Action.multivocal.welcome": [
          {
            Template: {
              Text: "Hello. What is your favorite color?",
              Page: {
                "show": "welcome"
              }
            }
          }
        ],
        "Action.color": [
          {
            Base: {Set: true},
            Template: {
              Page: {
                "show": "result"
              }
            }
          },
          {
            Template: {
              Ssml: "I tend to think about <mark name='red'/>Red, <mark name='green'/>Green, and <mark name='blue'/>Blue",
              Page: {
                "marks": {
                  "red": "Red",
                  "green": "Green",
                  "blue": "Blue"
                }
              }
            }
          },
          {
            Template: {
              Ssml: "Have you considered <mark name='cyan'/>Cyan, <mark name='magenta'/>Magenta, or <mark name='yellow'/>Yellow",
              Page: {
                "marks": {
                  "cyan": "Cyan",
                  "magenta": "Magenta",
                  "yellow": "Yellow"
                }
              }
            }
          }
        ]
      }
    }
  },
  Setting: {
    Page: {
      Url: "https://7905f075.ngrok.io/immersiveCanvas.html?session={{Session.StartTime}}"
    }
  }
};
exports.init = function(){
  new Multivocal.Config.Simple( config );
};