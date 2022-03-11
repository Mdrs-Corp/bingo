const grille = document.querySelector('#grille');
const cases = 'abcdefghijklmnopqrstuvwxyz0123456789µ'.split('');

function gen(n) {
	grille.innerHTML = '';
	
	const c = [...cases];
	for (let i = 0; i < n*n; i++) {
		const index = Math.floor(Math.random() * cases.length - i);
		const texte = c[index];
		c.splice(index, 1);
		
		const div = document.createElement('div');
		div.className = 'case';
		div.style = `width: calc(min(${50/n}vw, ${70/n}vh) - 4px); height: calc(min(${50/n}vw, ${70/n}vh) - 4px);`;
		div.textContent = texte;
		
		grille.appendChild(div);
	}
}

document.querySelector('input').addEventListener('click', () => gen(2))