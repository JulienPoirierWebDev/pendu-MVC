async function game() {
	// start
	let start = document.querySelector('#start');
	let rejouer = document.querySelector('#rejouer');
	let h3 = document.querySelector('h3');
	let gamestart = document.querySelector('#gamestart');

	start.addEventListener('click', (event) => {
		gamestart.style.display = 'flex';
		start.style.display = 'none';
	});
	//  game
	const wordDef = await apiword();
	console.log(wordDef);

	let motCache = wordDef.mot.toUpperCase();
	let leMotCache = document.querySelector('#motCache');
	leMotCache.textContent = `le mot caché est : ${motCache}`;
	console.log(motCache);

	// cas des tirets -> garder les tirets      X
	// Cas des espaces
	let motCrepte = motCache
		.split('')
		.map((letter) => {
			if (letter === ' ') {
				return ' ';
			} else if (letter === '-') {
				return '-';
			} else if (letter === "'") {
				return "'";
			} else {
				return '_';
			}
		})
		.join('');

	let affichage = document.querySelector('#affichage');
	const result = document.querySelector('#result');
	affichage.textContent = motCrepte;

	let pendu = [
		document.querySelector('.pendu-1'),
		document.querySelector('.pendu-2'),
		document.querySelector('.pendu-3'),
		document.querySelector('.pendu-4'),
		document.querySelector('.pendu-5'),
		document.querySelector('.pendu-6'),
		document.querySelector('.pendu-7'),
		document.querySelector('.pendu-8'),
		document.querySelector('.pendu-9'),
		document.querySelector('.pendu-10'),
	];

	let nombreDeMauvaiseReponse = 0;

	const alphabet = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
	];
	const clavier = document.querySelector('#clavier');
	let propositionMauvaise = [];
	function ajouterUnEvenmentSurLeButton(lettre) {
		lettre.addEventListener('click', clickButton);
	}

	const clickButton = (evenment) => {
		let lettrePropose = evenment.target.textContent;
		console.log(lettrePropose);

		let mauvaiseLettre;
		let lettreTrouve = false;
		for (let i = 0; i < motCache.length; i++) {
			if (sansAccent(motCache[i]) === lettrePropose) {
				motCrepte[i] = lettrePropose;
				motCrepte =
					motCrepte.substring(0, i) +
					lettrePropose +
					motCrepte.substring(i + 1);
				affichage.textContent = motCrepte;
				lettreTrouve = true;
			}
		}
		let allButton = document.querySelectorAll('.disabled');

		if (lettreTrouve == false) {
			mauvaiseLettre = lettrePropose;
			propositionMauvaise.push(mauvaiseLettre);
			if (nombreDeMauvaiseReponse < 8) {
				nombreDeMauvaiseReponse++;
				pendu[nombreDeMauvaiseReponse].classList.remove('hidden');
			} else {
				nombreDeMauvaiseReponse++;
				pendu[nombreDeMauvaiseReponse].classList.remove('hidden');
				result.innerHTML = 'YOU LOST';
				h3.style.color = 'red';

				allButton.forEach((oneButton) => {
					oneButton.setAttribute('disabled', 'true');
				});
				document.getElementById('popup1').style.visibility = 'visible';
				document.getElementById('popup1').style.opacity = 1;

				document
					.querySelector('.close')
					.addEventListener('click', function () {
						document.getElementById('popup1').style.visibility =
							'hidden';
						document.getElementById('popup1').style.opacity = 0;
					});
			}
		}
		if (motCrepte === motCache) {
			result.innerHTML = 'YOU WEEN';
			h3.style.color = 'green';
			allButton.forEach((oneButton) => {
				oneButton.setAttribute('disabled', 'true');
			});
			document.getElementById('popup1').style.visibility = 'visible';
			document.getElementById('popup1').style.opacity = 1;
		}
		evenment.target.setAttribute('disabled', 'true');

		// console.log(propositionMauvaise);
	};

	for (const car of alphabet) {
		const button = document.createElement('button');
		button.classList.add('disabled');
		button.classList.add('car');
		button.textContent = car;
		clavier.appendChild(button);
		ajouterUnEvenmentSurLeButton(button);
	}

	rejouer.addEventListener('click', (event) => {
		index = Math.floor(Math.random() * mots.length);
		motCache = mots[index];
		motCrepte = '_'.repeat(motCache.length);
		affichage.textContent = motCrepte;
		console.log(motCache);
		let allButton = document.querySelectorAll('.disabled');
		allButton.forEach((oneButton) => {
			oneButton.removeAttribute('disabled');
		});
		document.getElementById('popup1').style.visibility = 'hidden';
		document.getElementById('popup1').style.opacity = 0;
		pendu.forEach((onePendu) => {
			onePendu.classList.add('hidden');
		});
		nombreDeMauvaiseReponse = 0;
		propositionMauvaise = [];
		lettreTrouve = false;
		leMotCache.textContent = `le mot caché est : ${motCache}`;
	});

	// function testAlphabet(lettre) {
	//     if(clickAlphabet(lettre)  ){

	//     }
	// }
}
game();
async function apiword() {
	try {
		const response = await fetch('http://localhost:3000/words/random');
		const mots = await response.json();
		return mots;
	} catch (error) {
		console.log(error);
	}
}

function sansAccent(lettre) {
	return lettre.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
