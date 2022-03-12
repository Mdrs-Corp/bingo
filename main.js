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
let aaaa = [false];

/**
 * @param {number} n 
 * @param {string[]} data 
 */
const gen = (n, data) => {
	grille.innerHTML = '';
	const c = [...data];
    aaaa = new Array(n*n).fill(false);

	for (let i = 0; i < n*n; i++) {
		const index = Math.floor(Math.random() * (data.length - i));
		const texte = c[index];
		c.splice(index, 1);
		
		const div = document.createElement('div');
		div.className = 'case';
        div.style.width = `calc(min(${70/n}vw, ${70/n}vh) - 4px)`;
        div.style.height = `calc(min(${70/n}vw, ${70/n}vh) - 4px)`;

        div.addEventListener('click', () => {
            aaaa[i] = !aaaa[i];
            div.style.backgroundColor = aaaa[i] ? '#edb928' : 'white';
            verifieurdebingo(i%n, Math.floor(i/n), n);
        })

		const p = document.createElement('p');
		p.textContent = texte;
		div.appendChild(p);
		grille.appendChild(div);
	}
}

/**
 * @param {number} x 
 * @param {number} y 
 * @param {number} n 
 */
const verifieurdebingo = (x, y, n) => {
    let ligne = 0;
    let colonne = 0;

    for (let i = 0; i < n; i++) {
        ligne += aaaa[y*n + i];
        colonne += aaaa[i*n + x];
    }

    let diag1 = 0;
    let diag2 = 0;

    console.log(x, y)
    if (x === y || n-1-x === y) {
        for (let i = 0; i < n; i++) {
            diag1 += aaaa[i*n + i];
            diag2 += aaaa[(n-1-i)*n + i];
        }
    }

    if (Math.max(ligne, colonne, diag1, diag2) === n)
        console.log('bingo!');
}

document.querySelector('input').addEventListener('click', () => gen(3, grilles['maths exp']));
gen(1, ['mdrs'])