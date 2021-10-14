// const name = 'Scorpion';
//
// function getMessage(name, lastName) {
//     console.log(name + ' ' + lastName + ' - Fight...')
// }
// getMessage('Sonya', 'Blade');
// getMessage(name);

// function createFullName(name, lastName, secondName) {
//     const result = name + ' ' + lastName + ' ' + secondName;
//     console.log(1)
//     return result;
//     console.log(2)
// }
// const fullName = createFullName('Матвей','Трейвас','Андреевич');
// console.log(fullName)

// const massage = ['Hello', true, 2021,];
// console.log(massage[1])
// massage.push(' World')
// console.log(massage)
// const str = massage[0] + massage[3]
// console.log(str)

const player1 = {
    name: 'Scorpion',
    hp: 90,
    img:'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['sword', 'ninjato'],
    attack: function () {
        console.log(player1.name + 'Fight...')
    }
};
player1.attack();

const player2 = {
    name: 'Subzero',
    hp: 90,
    img:'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['ice sword', 'ice scepter'],
    attack: function () {
        console.log(player2.name + 'Fight...')
    }
};
player2.attack();

function createPlayer(playerOrder, object) {

    const player = document.createElement('div');
        player.classList.add(playerOrder)
    document.querySelector('div.arenas').appendChild(player)

    const progressbar = document.createElement('div');
        progressbar.classList.add('progressbar')
            player.appendChild(progressbar)

    const life = document.createElement('div');
        life.classList.add('life')
            progressbar.appendChild(life)
    life.style.width = object.hp + '%'

    const name = document.createElement('div');
        name.classList.add('name')
            progressbar.appendChild(name)
    name.innerText = object.name

    const character = document.createElement('div');
        character.classList.add('character')
            player.appendChild(character)

    const img = document.createElement('img');
        img.classList.add('img')
            character.appendChild(img)
    img.src = object.img
};

createPlayer('player1', player1)
createPlayer('player2', player2)
