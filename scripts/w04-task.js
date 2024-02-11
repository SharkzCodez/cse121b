/* WEEK 4 - Programming Tasks */

/* Profile Object  */


/* Populate Profile Object with placesLive objects */

let myProfile = {
    name: 'Eliza "Zsa Zsa" LeBlanc',
    photo: {
        src: 'images/shark.png',
        alt: 'Picture of me with a sandbar shark'
    },
    favoriteFoods: [
        'Gumbo',
        'Orange ice cream',
        'Macaroni & cheese',
        'Bread rolls',
        'Hanlabong'
    ],
    hobbies: [
        'Voice acting',
        'Gaming',
        'Studying/researching sharks and other marine animals',
        'Playing music'
    ],
    placesLived: [
        place = 'Dover, Delaware', 'Fairfield, California', 'Minot, North Dakota', 'San Antonio, Texas', 'Mittlebrun, Germany', 'Tampa, Florida', 'Songtan, South Korea', 'Alice, Texas',
        length = '11 months', '10 months', '2 years', '4 years', '4 years', '4 years', '3 years', 'Current residence'
    ]
}




/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').innerHTML = myProfile.name;


/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo.src;
document.querySelector('#photo').alt = myProfile.photo.alt;


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let ul = document.createElement('ul');
    ul.innerHTML = hobby;
    document.querySelector('#hobbies').appendChild(ul);
});

/* Places Lived DataList */
myProfile.placesLived.place.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place;
    document.querySelector('#places-lived').appendChild(dt);
});

myProfile.placesLived.length.forEach(length => {
    let dd = document.createElement('dd');
    dd.textContent = length;
    document.querySelector('#places-lived').appendChild(dd);
});

