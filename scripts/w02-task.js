/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Eliza "Zsa Zsa" Maleia LeBlanc'

const year = new Date();

const currentYear = year.getFullYear();

let profilePicture = ('images/shark.png')


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name')

const foodElement = document.getElementById('food')

const yearElement = document.querySelector('#year')

const imageElement = document.querySelector('img')


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.innerHTML = currentYear;

imageElement.setAttribute('src', profilePicture);

imageElement.setAttribute("alt", `Picture of me! (a.k.a ${fullName})`);


/* Step 5 - Array */

let favoriteFoods = ['Gumbo', 'orange ice cream', 'macaroni & cheese', 'bread rolls'];

let otherFood = 'hanlabong';

foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.push(otherFood);

foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.shift();

foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.pop();

foodElement.innerHTML += `<br>${favoriteFoods}`;