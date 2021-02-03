const Multivocal = require('multivocal');
const Util = require('multivocal/lib/util');

const config = {
  Local: {
    en: {
      Response: {
        "Action.welcome": [
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
              Markdown: "I tend to think about [mark:'red']Red, [mark:'green']Green, and [mark:'blue']Blue.",
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
              Markdown: "Have you considered [mark:'cyan']Cyan, [mark:'magenta']Magenta, or [mark:'yellow']Yellow.",
              Page: {
                "marks": {
                  "cyan": "Cyan",
                  "magenta": "Magenta",
                  "yellow": "Yellow"
                }
              }
            }
          }
        ],
        "Action.input_unknown": [
          "I'm not familiar with that color.",
          "Is that a color? Let's try again.",
          "I don't know a lot of colors, but I'm still learning."
        ]
      },
      Suffix: {
        "Action.color":[
          "Give me another color, please.",
          "Try me with a different color."
        ]
      }
    }
  },
  Setting: {
    Page: {
      Url: "https://{{Hostname}}/immersiveCanvas.html?session={{Session.StartTime}}"
    }
  }
};
exports.init = function(){
  new Multivocal.Config.Simple( config );
};