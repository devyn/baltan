// vim:et:ts=2:sw=2

var g
  , p
  , w = 0
  , scale = 1
  , strokeWidth = 2
  , english = false
  , drawers = {
    'a': function () {
      g.translate(-w, 0);
      g.beginPath();
      g.moveTo(w/2-4, 8);
      g.lineTo(w/2+4, 4);
      g.stroke();
    },
    'A': function () {
      g.translate(-w, 0);
      g.beginPath();
      g.moveTo(w/2-3, 9);
      g.lineTo(w/2+5, 5);
      g.moveTo(w/2-5, 6);
      g.lineTo(w/2+3, 2);
      g.stroke();
    },
    'e': function () {
      g.translate(-w, 0);
      g.beginPath();
      g.moveTo(w/2-4, 4);
      g.lineTo(w/2+4, 8);
      g.stroke();
    },
    'E': function () {
      g.translate(-w, 0);
      g.beginPath();
      g.moveTo(w/2-5, 5);
      g.lineTo(w/2+3, 9);
      g.moveTo(w/2-3, 2);
      g.lineTo(w/2+5, 6);
      g.stroke();
    },
    'i': function () {
      g.translate(-w, 0);
      g.beginPath();
      if (p === 'p') {
        g.moveTo(w/2-6, 28);
        g.lineTo(w/2+6, 28);
      } else {
        g.moveTo(w/2-4, 28);
        g.lineTo(w/2+4, 28);
      }
      g.stroke();
    },
    'I': function () {
      g.translate(-w, 0);
      g.beginPath();
      if (p === 'p') {
        g.moveTo(w/2-6, 28);
        g.lineTo(w/2+6, 28);
        g.moveTo(w/2-6, 32);
        g.lineTo(w/2+6, 32);
      } else {
        g.moveTo(w/2-4, 28);
        g.lineTo(w/2+4, 28);
        g.moveTo(w/2-4, 32);
        g.lineTo(w/2+4, 32);
      }
      g.stroke();
    },
    'o': function () {
      g.translate(-w, 0);
      g.beginPath();
      g.arc(w/2, 6, 1.5, 0, Math.PI*2);
      g.fill();
      g.fill();
    },
    'O': function () {
      g.translate(-w, 0);
      g.beginPath();
      g.arc(w/2-3, 6, 1.5, 0, Math.PI*2);
      g.arc(w/2+3, 6, 1.5, 0, Math.PI*2);
      g.fill();
      g.fill();
    },
    'u': function () {
      g.translate(-w, 0);
      g.beginPath();
      if (p === 'p')
        g.arc(w/2+4, 28, 1.5, 0, Math.PI*2);
      else
        g.arc(w/2, 28, 1.5, 0, Math.PI*2);
      g.fill();
      g.fill();
    },
    'U': function () {
      g.translate(-w, 0);
      g.beginPath();
      if (p === 'p') {
        g.arc(w/2+3, 28, 1.5, 0, Math.PI*2);
        g.arc(w/2+6, 28, 1.5, 0, Math.PI*2);
      } else {
        g.arc(w/2-3, 28, 1.5, 0, Math.PI*2);
        g.arc(w/2+3, 28, 1.5, 0, Math.PI*2);
      }
      g.fill();
      g.fill();
    },
    'x': function () {
      w = 16;
      g.beginPath();
      g.arc(8, 18, 6, 0, Math.PI*2);
      g.stroke();
    },
    '-': function () {
      w = 8;
      g.beginPath();
      g.moveTo(4, 12);
      g.lineTo(4, 24);
      g.stroke();
    },
    'p': function () {
      w = 16;
      g.beginPath();
      g.arc(8, 18, 6, 0, Math.PI*2);
      g.moveTo(2, 34);
      g.arcTo(16, 18, 2, 2, 6);
      g.stroke();
    },
    't': function () {
      w = 16;
      g.beginPath();
      g.moveTo(2, 24);
      g.lineTo(2, 12);
      g.lineTo(14, 12);
      g.stroke();
    },
    'T': function () {
      w = 16;
      g.beginPath();
      g.moveTo(2, 24);
      g.lineTo(2, 12);
      g.lineTo(14, 12);
      g.moveTo(2, 18);
      g.lineTo(14, 18);
      g.stroke();
    },
    'c': function () {
      w = 16;
      g.beginPath();
      g.moveTo(2, 24);
      g.lineTo(2, 12);
      g.lineTo(14, 12);
      g.moveTo(2, 18);
      g.lineTo(14, 18);
      g.lineTo(14, 24);
      g.stroke();
    },
    's': function () {
      w = 16;
      g.beginPath();
      g.moveTo(2, 12);
      g.lineTo(14, 12);
      g.moveTo(8, 12);
      g.lineTo(8, 24);
      g.moveTo(2, 24);
      g.lineTo(14, 24);
      g.stroke();
    },
    'S': function () {
      w = 16;
      g.beginPath();
      g.moveTo(2, 12);
      g.lineTo(14, 12);
      g.moveTo(8, 12);
      g.lineTo(8, 24);
      g.moveTo(4, 18);
      g.lineTo(12, 18);
      g.moveTo(2, 24);
      g.lineTo(14, 24);
      g.stroke();
    },
    'k': function () {
      w = 16;
      g.beginPath();
      g.moveTo(13, 12);
      g.lineTo(3, 18);
      g.lineTo(13, 24);
      g.stroke();
    },
    'h': function () {
      w = 16;
      g.beginPath();
      g.moveTo(2, 12);
      g.bezierCurveTo(14, 10, 2, 26, 14, 24);
      g.moveTo(2, 24);
      g.lineTo(14, 12);
      g.stroke();
    },
    'f': function () {
      w = 16;
      g.beginPath();
      g.moveTo(2, 12);
      g.bezierCurveTo(14, 10, 2, 26, 14, 24);
      g.moveTo(2, 21);
      g.lineTo(12, 11);
      g.moveTo(4, 25);
      g.lineTo(14, 15);
      g.stroke();
    },
    'r': function () {
      w = 16;
      g.beginPath();
      g.moveTo(2, 12);
      g.lineTo(14, 12);
      g.quadraticCurveTo(14, 24, 2, 24);
      g.stroke();
    },
    'l': function () {
      w = 16;
      g.beginPath();
      g.moveTo(2, 12);
      g.lineTo(14, 12);
      g.quadraticCurveTo(14, 24, 2, 24);
      g.moveTo(2, 18);
      g.lineTo(12, 18);
      g.stroke();
    },
    'n': function () {
      w = 16;
      g.beginPath();
      g.moveTo(2, 24);
      g.lineTo(2, 12);
      g.lineTo(14, 12);
      g.lineTo(14, 24);
      g.stroke();
    },
    'm': function () {
      w = 16;
      g.beginPath();
      g.moveTo(2, 24);
      g.lineTo(2, 12);
      g.lineTo(14, 12);
      g.lineTo(14, 24);
      g.moveTo(2, 18);
      g.lineTo(14, 18);
      g.stroke();
    },
    'N': function () {
      w = 16;
      g.beginPath();
      g.moveTo(2, 24);
      g.lineTo(2, 12);
      g.lineTo(14, 12);
      g.lineTo(14, 24);
      g.lineTo(2, 24);
      g.closePath();
      g.stroke();
    },
    'y': function () {
      w = 16;
      g.beginPath();
      g.moveTo(2, 12);
      g.arcTo(14, 12, 14, 24, 4);
      g.lineTo(14, 24);
      g.stroke();
      g.beginPath();
      g.arc(7, 20, 4, 0, Math.PI*2);
      g.stroke();
    },
    'w': function () {
      w = 16;
      g.beginPath();
      g.moveTo(2, 12);
      g.lineTo(14, 12);
      g.quadraticCurveTo(10, 20, 2, 24);
      g.moveTo(10, 20);
      g.lineTo(14, 24);
      g.stroke();
    },
    '\n': function () {
      w = 0;
      g.restore();
      g.translate(0, 36);
      g.save();
    },
    ' ': function () {
      w = 16;
    },
    'z': function () {
      w = 8;
      g.beginPath();
      g.moveTo(2, 24);
      g.lineTo(2, 32);
      g.moveTo(6, 24);
      g.lineTo(6, 32);
      g.stroke();
    },
    '@a-e': function () {
      var t = w;
      drawers['-']();
      g.translate(-8-w, 0);

      g.beginPath();
      g.moveTo(4, 8);
      g.lineTo(12, 4);
      g.lineTo(20, 8);
      g.stroke();

      w += t;
    },
    '.': function () {
      w = 8;
      g.beginPath();
      g.arc(4, 14, 1.5, 0, Math.PI*2);
      g.arc(4, 22, 1.5, 0, Math.PI*2);
      g.fill();
      g.fill();
    },
    '?': function () {
      w = 8;
      g.beginPath();
      g.arc(4, 14, 1.5, 0, Math.PI*2);
      g.arc(4, 18, 1.5, 0, Math.PI*2);
      g.arc(4, 22, 1.5, 0, Math.PI*2);
      g.fill();
      g.fill();
    },
    '!': function () {
      w = 8;
      g.beginPath();
      g.moveTo(2, 14);
      g.lineTo(6, 14);
      g.moveTo(2, 22);
      g.lineTo(6, 22);
      g.stroke();
    },
    '`': function () {
      w = 8;
      g.beginPath();
      g.moveTo(2, 14);
      g.lineTo(6, 14);
      g.moveTo(2, 18);
      g.lineTo(6, 18);
      g.moveTo(2, 22);
      g.lineTo(6, 22);
      g.stroke();
    },
    ',': function () {
      w = 8;
      g.beginPath();
      g.moveTo(2, 16);
      g.lineTo(6, 16);
      g.lineTo(6, 20);
      g.stroke();
    },
    ':': function () {
      w = 32;
      g.beginPath();
      g.moveTo(4, 18);
      g.bezierCurveTo(12, 12, 20, 24, 28, 18);
      g.stroke();
    },
    '“': function () {
      w = 16;
      g.beginPath();
      g.moveTo(14, 2);
      g.lineTo(8, 2);
      g.lineTo(8, 8);
      g.stroke();
    },
    '”': function () {
      w = 16;
      g.beginPath();
      g.moveTo(2, 30);
      g.lineTo(8, 30);
      g.lineTo(8, 24);
      g.stroke();
    }
  };

function draw() {
	var text = document.getElementById("text").value
    , ns   = text.match(/\n/g)
    ;

  g.canvas.width  = width(text) * scale;
  g.canvas.height = 36 * (1 + (ns ? ns.length : 0)) * scale;

  g.fillStyle   = "#000";
  g.strokeStyle = "#000";
  g.lineWidth   = strokeWidth;
  g.lineCap     = 'square';

  p = null;
  w = 0;

  g.scale(scale, scale);

  g.save();

	for (var c = 0; c < text.length; c++) {
    if (text.slice(c, c+3) === 'a-e') {
      drawers['@a-e']();

      g.translate(w, 0);

      p = 'e';
      c += 2;
    } else {
		  var d = drawers[text[c]];

		  if (typeof d === 'function') d();

      g.translate(w, 0);

      p = text[c];
    }
	}

  g.restore();
}

function width(str) {
  var w  = 0
    , sw = 0
    ;

  for (c in str) {
    switch (str[c]) {
      case 'a':
      case 'A':
      case 'e':
      case 'E':
      case 'i':
      case 'I':
      case 'o':
      case 'O':
      case 'u':
      case 'U':
        break;
      case 'x':
      case 'p':
      case 't':
      case 'T':
      case 'c':
      case 's':
      case 'S':
      case 'k':
      case 'h':
      case 'f':
      case 'r':
      case 'l':
      case 'n':
      case 'm':
      case 'N':
      case 'y':
      case 'w':
      case ' ':
      case '“':
      case '”':
        sw += 16;
        break;
      case 'z':
      case '-':
      case '.':
      case ',':
      case '?':
      case '!':
      case '`':
        sw += 8;
        break;
      case ':':
        sw += 32;
        break;
      case '\n':
        w = Math.max(sw, w);
        sw = 0;
    }
  }

  w = Math.max(sw, w);

  return w;
}

function clear() {
  g.restore();
  g.save();
  g.clearRect(0, 0, g.canvas.width, g.canvas.height);
  g.canvas.width = 0;
  g.canvas.height = 36;
}

function initialize() {
  g.save();
}

var enBaltan = {};
function enableEnglish() {
  var req = new XMLHttpRequest;

  req.onreadystatechange = function () {
    if (req.readyState === 4) {
      var res = req.responseText
        , one = null
        , two = null
        , sta = 0
        ;

      for (var i = 0; i < res.length; i++) {
        var cc = res.charCodeAt(i);
        switch (sta) {
          case 0:
            switch (cc) {
              case 10: // \n
              case 9:  // \t
                break;
              default:
                one = i;
                sta = 1;
            }
            break;
          case 1:
            switch (cc) {
              case 10:
                one = null;
                sta = 0;
                break;
              case 9:
                one = res.slice(one, i);
                sta = 2;
                break;
            }
            break;
          case 2:
            switch (cc) {
              case 10:
                one = null;
                two = null;
                sta = 0;
                break;
              default:
                two = i;
                sta = 3;
            }
            break;
          case 3:
            switch (cc) {
              case 10:
                two = res.slice(two, i);
                enBaltan[one] = two;
                sta = 0;
                break;
            }
            break;
          default:
            one = null;
            two = null;
            sta = 0;
            break;
        }
      }

      english = true;
      document.getElementById("text").disabled = true;
      document.getElementById("engtext").style.display = '';
      document.getElementById("engbutton").style.display = 'none';
    }
  };

  req.open('GET', 'dict/en-baltan');
  req.send(null);
}

function translateEnglish() {
  document.getElementById("text").value =
    document.getElementById("engtext").value.replace(/[A-Za-z']+/g, function (word) {
      return enBaltan[word.toLowerCase()] || '???';
    });
  clear();
  draw();
}

window.onload = function () {
  document.getElementById("text").onkeyup = function () {
    clear();
    draw();
  };
  document.getElementById("engtext").onkeyup = function () {
    if (english) {
      translateEnglish();
    }
  };
  g = document.getElementById("out").getContext("2d");
  initialize();
};
