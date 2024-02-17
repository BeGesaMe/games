let API_KEY = '5ab96142ac1f43cc9fd0f196aa03d7a7';

let API_URL = `https://api.rawg.io/api/platforms?key=${API_KEY}`

fetch(API_URL)
    .then(res => res.json())
        .then(data =>{

        //    console.log(data.results);


           data.results.forEach( (el) => {

                console.log(el);

                let cloneTemplate = templateCard.cloneNode(true)

                // cloneTemplate.querySelector('.game-img').src = el.image_background;
                cloneTemplate.querySelector('.game-card-title').innerHTML = el.name

                gamesCards.appendChild(cloneTemplate)

           });



})

// console.log(data);

