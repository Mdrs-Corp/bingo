//const grids = fetch('grilles.json').then(response => response.json()).then(json => console.log(json));

//const gridsListDisplay = document.querySelector('#grids-list');
//
//for (const name of Object.keys(grids)) {
//    const div = document.createElement('div');
//    div.className = 'grid-name';
//    const p = document.createElement('p');
//    p.textContent = name;
//    div.appendChild(p);
//    gridsListDisplay.appendChild(div);
//}

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
