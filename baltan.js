var g
  , p
  , w = 0
  , scale = 1
  , strokeWidth = 2
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
      g.moveTo(w/2-5, 7);
      g.lineTo(w/2+3, 3);
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
      g.moveTo(w/2-3, 3);
      g.lineTo(w/2+5, 7);
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
    },
    'u': function () {
      g.translate(-w, 0);
      g.beginPath();
      if (p === 'p')
        g.arc(w/2+4, 28, 1.5, 0, Math.PI*2);
      else
        g.arc(w/2, 28, 1.5, 0, Math.PI*2);
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
      g.moveTo(4, 12);
      g.arcTo(12, 12, 12, 24, 4);
      //g.lineTo(12, 24);
      g.lineTo(12, 25);
      g.arc(8, 20, 4, 0, Math.PI*2);
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
    '.': function () {
      w = 8;
      g.beginPath();
      g.arc(4, 14, 1.5, 0, Math.PI*2);
      g.arc(4, 22, 1.5, 0, Math.PI*2);
      g.fill();
    },
    ',': function () {
      w = 8;
      g.beginPath();
      g.moveTo(2, 16);
      g.lineTo(6, 16);
      g.lineTo(6, 20);
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

	for (c in text) {
		var d = drawers[text[c]];

		if (typeof d === 'function') d();

    g.translate(w, 0);

    p = text[c];
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
        sw += 16;
        break;
      case 'z':
      case '-':
      case '.':
      case ',':
        sw += 8;
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

window.onload = function () {
  document.getElementById("text").onkeyup = function () {
    clear();
    draw();
  };
  g = document.getElementById("out").getContext("2d");
  initialize();
};
