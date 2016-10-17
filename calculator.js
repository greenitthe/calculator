//Randomized colors on the title sign
var curRGB = [140,220,70];
function gibStandardRand() {
  var rand = Math.random();
  if (rand < 0.5) {
    rand = Math.round((rand * 5) * -1);
  }
  else {
    rand = Math.round((rand * 5));
  }
  return rand;
}
function animate() {
  console.log("start:" + curRGB)
  for (var ii = 0; ii < curRGB.length; ii++) {
    var rand = gibStandardRand();
    if (curRGB[ii] >= 255) {
      curRGB[ii] = (gibStandardRand() * 51);
    }
    else if (curRGB[ii] <= 50) {
      curRGB[ii] += (gibStandardRand() * 51);
    }
    else {
      curRGB[ii] += rand;
    }
  }
  document.getElementById("title").style.color = "rgb(" + curRGB[0] + ", " + curRGB[1] + ", " + curRGB[2] + ")";
  console.log("end:" + curRGB);
  window.requestAnimationFrame(animate);
}

// Create keys
// Using spans instead of buttons because it was easier to make look pretty
var textDiv = document.createElement('div');
  textDiv.className = 'motd';
  var textThing = document.createElement('span');
  textThing.setAttribute("id", 'title');
  textThing.appendChild( document.createTextNode("Spooky Calculator") );
textDiv.appendChild( textThing );
document.body.appendChild(textDiv);
var calcDiv = document.createElement('div');
calcDiv.id = 'calculator';
  var topDiv = document.createElement('div');
    topDiv.className = 'top';
    var clearSpan = document.createElement('span');
      clearSpan.className = 'clear';
      clearSpan.appendChild( document.createTextNode("C") );
    topDiv.appendChild(clearSpan);
    var screenDiv = document.createElement('div');
      screenDiv.className = 'screen';
    topDiv.appendChild(screenDiv);
  calcDiv.appendChild(topDiv);
  var keyDiv = document.createElement('div');
  keyDiv.className = 'keys';
    var sevenKey = document.createElement('span');
      sevenKey.appendChild( document.createTextNode("7") );
    keyDiv.appendChild(sevenKey);
    var eightKey = document.createElement('span');
      eightKey.appendChild( document.createTextNode("8") );
    keyDiv.appendChild(eightKey);
    var nineKey = document.createElement('span');
      nineKey.appendChild( document.createTextNode("9") );
    keyDiv.appendChild(nineKey);
    var plusKey = document.createElement('span');
      plusKey.className = 'operator';
      plusKey.appendChild( document.createTextNode("+") );
    keyDiv.appendChild(plusKey);
    var fourKey = document.createElement('span');
      fourKey.appendChild( document.createTextNode("4") );
    keyDiv.appendChild(fourKey);
    var fiveKey = document.createElement('span');
      fiveKey.appendChild( document.createTextNode("5") );
    keyDiv.appendChild(fiveKey);
    var sixKey = document.createElement('span');
      sixKey.appendChild( document.createTextNode("6") );
    keyDiv.appendChild(sixKey);
    var minusKey = document.createElement('span');
      minusKey.className = 'operator';
      minusKey.appendChild( document.createTextNode("-") );
    keyDiv.appendChild(minusKey);
    var oneKey = document.createElement('span');
      oneKey.appendChild( document.createTextNode("1") );
    keyDiv.appendChild(oneKey);
    var twoKey = document.createElement('span');
      twoKey.appendChild( document.createTextNode("2") );
    keyDiv.appendChild(twoKey);
    var threeKey = document.createElement('span');
      threeKey.appendChild( document.createTextNode("3") );
    keyDiv.appendChild(threeKey);
    var divideKey = document.createElement('span');
      divideKey.className = 'operator';
      divideKey.appendChild( document.createTextNode("/") );
    keyDiv.appendChild(divideKey);
    var zeroKey = document.createElement('span');
      zeroKey.appendChild( document.createTextNode("0") );
    keyDiv.appendChild(zeroKey);
    var decimalKey = document.createElement('span');
      decimalKey.appendChild( document.createTextNode(".") );
    keyDiv.appendChild(decimalKey);
    var evalKey = document.createElement('span');
      evalKey.className = 'eval';
      evalKey.appendChild( document.createTextNode("=") );
    keyDiv.appendChild(evalKey);
    var multKey = document.createElement('span');
      multKey.className = 'operator';
      multKey.appendChild( document.createTextNode("*") );
    keyDiv.appendChild(multKey);
  calcDiv.appendChild(keyDiv);
document.body.appendChild(calcDiv);

var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', '*', '/'];
var decimalAdded = false;

// Add onclick event to all the keys and perform operations
for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		// Get the input and button values
		var input = document.querySelector('.screen');
		var inputVal = input.textContent;
		var btnVal = this.textContent;

		// If clear key is pressed, erase everything
		if(btnVal == 'C') {
			input.textContent = '';
			decimalAdded = false;
		}

		// If eval key is pressed, calculate and display the result
		else if(btnVal == '=') {
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];

			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');

			if(equation)
				input.textContent = math.eval(equation);

			decimalAdded = false;
		}

		else if(operators.indexOf(btnVal) > -1) {
			// Operator is clicked
			var lastChar = inputVal[inputVal.length - 1];

			if(inputVal != '' && operators.indexOf(lastChar) == -1)
				input.textContent += btnVal;

			else if(inputVal == '' && btnVal == '-')
				input.textContent += btnVal;

			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				input.textContent = inputVal.replace(/.$/, btnVal);
			}

			decimalAdded =false;
		}

		else if(btnVal == '.') {
			if(!decimalAdded) {
				input.textContent += btnVal;
				decimalAdded = true;
			}
		}

		else {
			input.textContent += btnVal;
		}

		e.preventDefault();
	}
}

animate();
