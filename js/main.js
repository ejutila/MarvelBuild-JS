let heroButtons = document.querySelectorAll('.characters a'),
    lightBox = document.querySelector('#lightbox');

function loadHeroData() {
    // debugger;
    lightBox.querySelector('h3').textContent = heroes[this.dataset.member].headline;
    lightBox.querySelector('p').textContent = heroes[this.dataset.member].bio;

    // heroes[this.dataset.member].headline
}

heroButtons.forEach(hero => hero.addEventListener('click', loadHeroData));