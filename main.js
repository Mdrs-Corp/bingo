//const grilles = fetch('grilles.json').then(response => response.json()).then(json => console.log(json));
const grilles = JSON.parse(`
{
    "maths exp": [
        "Daria mange",
        "Théo fait un bruit sus",
        "Antoine est prié de se taire",
        "\\\"la pause monsieur ! la pause !!!\\\"",
        "blague de Florian",
        "Thomas fait tout autre chose",
        "précision signée Rayan",
        "Plee \\\"n'a rien compris\\\"",
        "Olarribau vs l'ordi",
        "démonstration super longue et sus",
        "hilarité générale",
        "\\\"Nico ? Nico !!\\\"",
        "allusion de Larrib à la tablette",
        "quelqu'un se lève sans raison",
        "Olarribau fait ZUT!",
        "de confusion Olarribau efface 3 fois ou plus un résultat"
    ]
}`);

const grille = document.querySelector('#grille');

/**
 * @param {number} n 
 * @param {string[]} data 
 */
function gen(n, data) {
	grille.innerHTML = '';
	const c = [...data];

	for (let i = 0; i < n*n; i++) {
		const index = Math.floor(Math.random() * (data.length - i));
		const texte = c[index];
		c.splice(index, 1);
		
		const div = document.createElement('div');
		div.className = 'case';
		div.style = `width: calc(min(${70/n}vw, ${70/n}vh) - 4px); height: calc(min(${70/n}vw, ${70/n}vh) - 4px);`;
		const p = document.createElement('p');
		p.textContent = texte;
		div.appendChild(p);
		grille.appendChild(div);
	}
}

document.querySelector('input').addEventListener('click', () => gen(3, grilles['maths exp']));
gen(1, ['mdrs'])