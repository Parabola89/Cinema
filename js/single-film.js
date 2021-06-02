const likes = document.getElementById('sf-likes');
const id = new URLSearchParams(location.search);
const stars = document.querySelectorAll('.rating-start');

const filmId = id.get('id');


const  fetchkinopoiskFilmData = async () =>{
    const answer = await filmDetailsRequest(filmId);
    const { data: filmData } = await answer.json();

 const header = document.getElementById('sf-header');
 const description = document.querySelector('#sf-descritpion');
 const posterImage = document.querySelector('#sf-poster');
 const premiere = document.getElementById('sf-premierre');

 header.textContent = filmData.nameRu;
 description.textContent = filmData.description;
 posterImage.src = filmData.posterUrl;
 premiere.textContent = filmData.premiereRu;
}

const fetchFilmMeta = async () => {
    const answer = await fetch(`http://inno-ijl.ru/multystub/stc-21-03/film/${filmId}`);
    const { body } = await answer.json();

    const views = document.getElementById('sf-views');
    
    const ratingNumber = document.getElementById('sf-rating-number');


    
    views.textContent = `${body.views} Views`;
    likes.textContent = `${body.likes} Likes`;
    const rating = body.ratings.reduce((a, b) => a + b, 0) / body.ratings.lenght;
    const intRating = Math.round(rating);
    ratingNumber.textContent = Math.floor(rating * 10) / 10;

    for (let i = 0; i < stars.length; i++){
        if (i >= intRating) break;

        const star = stars[i]
        star.classList.add('star-selected')
    }

}

const likeIcon = document.getElementById('like-icon');
const FILM_KEY = `film-${filmId}`;
const liked =  localStorage.get(FILM_KEY);
if (liked !== null) {
    likeIcon.classList.add('like-icon-liked');
}
likeIcon.addEventListener('click', async () =>{
    if (!likeIcon.classList.contains('like-icon-liked')){
    localStorage.setItem(`film-${filmId}`, true);
    const likesCount = parseInt(likes.textContent, 10) + 1;

    likes.innerText = `${likesCount} Likes`;
    likeIcon.classList.add('like-icon-liked');
    likes.classList.add('like-icon-liked');

   fetch(
       `http://inno-ijl.ru/multystub/stc-21-03/film/${filmId}/like`,
       {
           method: 'POST', 
           headers:{
               'Content-Type': 'application/json'
           },
       }
       )}
});

//for (const star of stars){
  //  star.addEventListener('click', () => {
    //console.log(star.dataset.value);

    //fetch(`http://inno-ijl.ru/multystub/stc-21-03/film/${filmId}/rating`, {
      //  method: 'POST', 
        //headers:{
          //  'Content-Type': 'application/json'
        //},
        //body: JSON.stringify({ rating: +star.dataset.value })
    //});
    //})
 //}
$('.star').on('click', '.rating-start', function(){
    star.addEventListener('click', () => {
        console.log(star.dataset.value);
    
        fetch(`http://inno-ijl.ru/multystub/stc-21-03/film/${filmId}/rating`, {
            method: 'POST', 
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ rating: +star.dataset.value })
        });
        })

})


//fetchkinopoiskFilmData();
//fetchFilmMeta();