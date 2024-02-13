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
    placesLived: []
}

myProfile.placesLived.push(
    {
        place: 'Dover, Delaware',
        length: '11 months'

    }
);

myProfile.placesLived.push(
    {
        place: 'Fairfield, California',
        length: '10 months'

    }
);

myProfile.placesLived.push(
    {
        place: 'Minot, North Dakota',
        length: '2 years'

    }
);

myProfile.placesLived.push(
    {
        place: 'San Antonio, Texas',
        length: '4 years'

    }
);

myProfile.placesLived.push(
    {
        place: 'Mittlebrun, Germany',
        length: '4 years'

    }
);

myProfile.placesLived.push(
    {
        place: 'Tampa, Florida',
        length: '4 years'

    }
);

myProfile.placesLived.push(
    {
        place: 'Songtan, South Korea',
        length: '3 years'

    }
);

myProfile.placesLived.push(
    {
        place: 'Alice, Texas',
        length: 'Current residence'

    }
);

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
let placesLived = document.getElementById('placesLived');
for (place of placesLived) {
    placesLived.innerHTML += '<dt>' + place + '<dt>';
}
for (length of placesLived) {
    placesLived.innerHTML += '<dd>' + length + '<dd>';
}

