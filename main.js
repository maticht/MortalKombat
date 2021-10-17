const player1 = {
    player: 1,
    name: 'SCORPION',
    hp: 100,
    img:'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['sword', 'ninjato'],
    attack: function() {
        console.log(player1.name + 'Fight...')
    }
};
player1.attack();

const player2 = {
    player: 2,
    name: 'SUBZERO',
    hp: 100,
    img:'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['ice sword', 'ice scepter'],
    attack: function() {
        console.log(player2.name + 'Fight...')
    }
};
player2.attack();

const aren = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className)
    }
    return $tag;
}
function createPlayer(object) {

    const player = createElement('div', 'player'+object.player);

    const progressbar = createElement('div', 'progressbar');
        progressbar.classList.add('progressbar')
            player.appendChild(progressbar)

    const life = createElement('div', 'life');
        life.classList.add('life')
            progressbar.appendChild(life)
    life.style.width = object.hp + '%'

    const name = createElement('div', 'name');
        name.classList.add('name')
            progressbar.appendChild(name)
    name.innerText = object.name

    const character = createElement('div', 'character');
        character.classList.add('character')
            player.appendChild(character)

    const img = createElement('img');
        img.classList.add('img')
            character.appendChild(img)
    img.src = object.img
    return player;
}

function changeHP(player){
    const $playerLife = document.querySelector('.player' + player.player + ' .life');
    player.hp -= Math.ceil(Math.random() * 20);
    $playerLife.style.width = player.hp + '%';
    if (player.hp < 0){
        player.hp = 0
    }
}
function hitPlayers() {
    changeHP(player1);
    changeHP(player2);
    if (isDraw()) {
        console.log('draw');
        aren.appendChild(endBattle('DRAW'));
    } else {
        let winner = hasWinner();
        console.log('winner is ' + winner);
        if (winner) aren.appendChild(endBattle(winner + ' WINS'));
    }
}
       function hasWinner() {
           if (player1.hp <= 0) return player2.name;
           if (player2.hp <= 0) return player1.name;
       }
            function isDraw() {
                return (player1.hp<=0) && (player2.hp<=0);
            }
                function endBattle(text) {
                    const $title = createElement('div','loseTitle');
                    $title.innerText = text;
                    $randomButton.disabled = true;
                    return $title;
                }

$randomButton.addEventListener('click', function () {
    hitPlayers()
});

aren.appendChild(createPlayer(player1));
aren.appendChild(createPlayer(player2));




