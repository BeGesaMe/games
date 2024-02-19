let API_KEY = '5ab96142ac1f43cc9fd0f196aa03d7a7';

let GENRES_API = `https://api.rawg.io/api/genres?key=`
let PLATFORMS_URL = `https://api.rawg.io/api/platforms?key=`
let GAMES_API = `https://api.rawg.io/api/games?key=`
let CREATORS = `https://api.rawg.io/api/creators/`


fetch(GENRES_API + API_KEY)
    .then(res => res.json())
        .then(data =>{
            data.results.forEach( (el)=>{
                let nodeCLoneTemplate = templateRek.cloneNode(true);
                let genresText = nodeCLoneTemplate.querySelector('h2')
                let genresImg = nodeCLoneTemplate.querySelector('#rasm')
                genresText.innerHTML = el.name
                genresImg.src = el.image_background
                genres1.appendChild(nodeCLoneTemplate)
            })
})

fetch(PLATFORMS_URL + API_KEY)
    .then(res => res.json())
        .then(data =>{

            data.results.forEach( (el)=>{

                let nodeCLoneTemplate2 = templateGenres2.cloneNode(true)

                let info = nodeCLoneTemplate2.querySelector('option')

                info.innerHTML = el.name 

                GenresBox.appendChild(nodeCLoneTemplate2)

            })
})

let salom = fetch(GAMES_API + API_KEY)
    .then(res => res.json())
        .then(data =>{
            console.log(data.results);

            data.results.forEach( (el)=>{
                let nodeCLoneTemplateCards = templateCard.cloneNode(true)

                let cardImg = nodeCLoneTemplateCards.querySelector('img')
                let cardTitle = nodeCLoneTemplateCards.querySelector('.game-card-title')
                let cardCount = nodeCLoneTemplateCards.querySelector('.game-card-games-count')

                cardTitle.innerHTML = el.name 
                cardImg.src = el.background_image
                cardCount.innerHTML = el.metacritic

                    cardTitle.addEventListener('click',()=>{
                        
                        // location.href = "part.html"

                        console.log(el.slug);

                        salom = GAMES_API + API_KEY + `//${el.slug}`

                        console.log(salom);

                        fetch('https://api.rawg.io/api/games?key=5ab96142ac1f43cc9fd0f196aa03d7a7//the-witcher-3-wild-hunt')
                            .then(res => res.json())
                                .then(data =>{
                                    console.log(data);
                                })
                        
                    })


                gamesCards.appendChild(nodeCLoneTemplateCards)
            })
})


