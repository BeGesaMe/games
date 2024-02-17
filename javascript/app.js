let API_KEY = '5ab96142ac1f43cc9fd0f196aa03d7a7';

let API_URL = `https://api.rawg.io/api/platforms?key=${API_KEY}`

fetch(API_URL)
    .then(res => res.json())
        .then(data =>{

            console.log(data);
           data.results.forEach( (el) => {

                let cloneTemplate = templateRek.cloneNode(true)

                cloneTemplate.querySelector('img').src = el.image_background;

                 let gameTitle =  cloneTemplate.querySelector('h2');

                 gameTitle.innerHTML = el.name 

                 genres.appendChild(cloneTemplate)

           });
})


fetch(API_URL)
    .then(r => r.json())
        .then(result =>{

            result.results.forEach((el)=>{
            

                let cloneTemplate = templateCard.cloneNode(true)

                let gamesImg = cloneTemplate.querySelector('img')

                gamesImg.src = el.image_background

                let gamesTitle = cloneTemplate.querySelector('.game-card-title')
                gamesTitle.innerHTML = el.name

                gamesCards.appendChild(cloneTemplate)

})})