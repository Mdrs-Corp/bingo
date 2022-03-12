const grilles = fetch('grilles.json').then(response => response.json()).then(json => console.log(json));
const grids = JSON.parse(`
{
    "maths exp": [
    "Daria mange",
    "Théo fait un bruit sus",
    "Antoine est prié de se taire",
    "'la pause monsieur ! la pause !!!'",
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
    "de confusion, Olarribau efface 3 fois ou plus un résultat"
	"Quelqu'un arrive en retard",
	"Olarribau soupire de désespoir",
	"La pause dure anormalement longtemps"
    ]
}`);

const gridsListDisplay = document.querySelector('#grids-list');

for (const name of Object.keys(grids)) {
    const div = document.createElement('div');
    div.className = 'grid-name';
    const p = document.createElement('p');
    p.textContent = name;
    div.appendChild(p);
    gridsListDisplay.appendChild(div);
}

const grid = document.querySelector('#grid');
let selected = 'maths exp';
let aaaa = [false];

const gen = (n, data) => {
	grid.innerHTML = '';
	const c = [...data];
    aaaa = new Array(n*n).fill(false);

	for (let i = 0; i < n*n; i++) {
		const index = Math.floor(Math.random() * (data.length - i));
		const text = c[index];
		c.splice(index, 1);
		
		const div = document.createElement('div');
		div.className = 'box';
        div.style.width = `calc(${100/n}% - 4px)`;
        div.style.height = `calc(${100/n}% - 4px)`;

        div.addEventListener('click', () => {
            aaaa[i] = !aaaa[i];
            div.style.backgroundColor = aaaa[i] ? '#edb928' : 'white';
            check(i%n, Math.floor(i/n), n);
        })

		const p = document.createElement('p');
		p.textContent = text;
		div.appendChild(p);
		grid.appendChild(div);
	}
}

const check = (x, y, n) => {
    let row = 0;
    let column = 0;

    for (let i = 0; i < n; i++) {
        row += aaaa[y*n + i];
        column += aaaa[i*n + x];
    }

    let diag1 = 0;
    let diag2 = 0;

    if (x === y || n-1-x === y) {
        for (let i = 0; i < n; i++) {
            diag1 += aaaa[i*n + i];
            diag2 += aaaa[(n-1-i)*n + i];
        }
    }

    if (Math.max(row, column, diag1, diag2) === n)
        console.log('bingo!');
}

document.querySelector('input').addEventListener('click', () => gen(4, grids[selected]));
gen(1, ['mdrs'])
