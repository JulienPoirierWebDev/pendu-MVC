// const cartes = document.querySelectorAll('.cartes button');
const carteSelectionnées = [];
const cartesPourJavaScript = [
	'A',
	'A',
	'B',
	'B',
	'C',
	'C',
	'D',
	'D',
	'E',
	'E',
	'F',
	'F',
	'G',
	'G',
].sort(() => Math.random() - 0.5);
// let compteur = 1;
const cards = document.createElement('div');
cards.classList.add('cartes');

console.log(cards);

for (const valeur of cartesPourJavaScript) {
	const carte = document.createElement('div');
	const boutton = document.createElement('button');
	carte.appendChild(boutton); // ajoute les bouttons dans la div.carte
	// boutton.classList.add(compteur);
	boutton.classList.add('hidden');
	// compteur++;
	boutton.textContent = valeur; // ajoute les lettres du tableau dans chaque bouttons
	cards.appendChild(carte); // ajoute la div.carte dans la div.cards
	carte.addEventListener('click', function () {
		if (carteSelectionnées.length < 2) {
			carteSelectionnées.push(boutton); // Stocke la carte dans la variable "carteSelectionnées"
			boutton.disabled = true; // desactive la carte pour ne pas re cliquer dessus
			boutton.classList.remove('hidden');
			if (carteSelectionnées.length === 2) {
				verifierPaire();
			}
		}
	});
}

document.body.appendChild(cards);

// cartes.forEach((carte) => {
// 	carte.addEventListener('click', function () {
// 		if (carteSelectionnées.length < 2) {
// 			carteSelectionnées.push(this); // Stocke la carte dans la variable "carteSelectionnées"
// 			this.disabled = true; // desactive la carte pour ne pas re cliquer dessus
// 			this.classList.remove('hidden');
// 			if (carteSelectionnées.length === 2) {
// 				verifierPaire();
// 			}
// 		}
// 	});
// });

// cartesPourJavaScript.forEach((carte) => {
// 	carte.addEventListener('click', function () {
// 		if (carteSelectionnées.length < 2) {
// 			carteSelectionnées.push(this); // Stocke la carte dans la variable "carteSelectionnées"
// 			this.disabled = true; // desactive la carte pour ne pas re cliquer dessus
// 			this.classList.remove('hidden');
// 			if (carteSelectionnées.length === 2) {
// 				verifierPaire();
// 			}
// 		}
// 	});
// });

function verifierPaire() {
	const [carte1, carte2] = carteSelectionnées;
	console.log(carte1, carte2);

	if (carte1.textContent === carte2.textContent) {
		console.log('Bravo vous avez trouver une paire');
	} else {
		console.log("Ce n'est pas une paire réessayer !");
		setTimeout(() => {
			carte1.disabled = false;
			carte2.disabled = false;
			carte1.classList.add('hidden');
			carte2.classList.add('hidden');
		}, 1000);
	}
	carteSelectionnées.pop();
	carteSelectionnées.pop();
}

// console.log(cartes.children);
