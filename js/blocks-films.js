const blockFilmsWrapper = document.getElementById('class9-films-wrapper');
blockFilmsWrapper.innerHTML = '';

const apiHeaders = {
    'accept': 'application/json',
    'X-API-KEY': 'd343d420-fa5f-40d5-9924-36a89cd3d612',
}

fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1`, {
    headers: {
        ...apiHeaders
    }
})
.then(data => data.json())
.then(data => {

    const LIMIT = 8;
 
   // data.films.forEach((film) => {

   for (let i = 0; i < LIMIT-1; i++) {
       const film = data.films[i];
        const id = `class9-films-desc-${film.filmId}`;

        blockFilmsWrapper.innerHTML += `
        <div class='img-films1'>
        <img src="${film.posterUrlPreview}">
        <div class="class9-text">
        <div class="class9_films_text1">${film.nameRu}</div>    
        <div id="${id}" class="class9_films_text2">...loading</div></div>
       
        </div>
        
        `
    

    fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${film.filmId}`, {
    headers: {
      ...apiHeaders
    },
    cors: 'no-cors'
})

.then(data => data.json())
.then(({ data: { description } }) => {
const desc = document.getElementById(id); 
desc.innerText = description;

})

}
//})

})