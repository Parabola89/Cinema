function getRandomToMax(max) {
    return Math.ceil(Math.random() * (max + 1)) - 1
    }
    
    function toHour (num) {
    return `${num}`.padStart(2, '0')
    }
    
    function toMinuts (num) {
        return String(num).padEnd(2, '0')
    }

    const kinopoiskapiunofficialRequest = (url) => {
        return fetch(url, {
            headers: {
                'accept': 'application/json',
                'X-API-KEY': 'd343d420-fa5f-40d5-9924-36a89cd3d612',
            },
            cors: 'no-cors'
        })
    }


    const topFilmsRequest = () => {
        return kinopoiskapiunofficialRequest('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1`');
    }
  
    const filmDetailsRequest = (id) => {
        return kinopoiskapiunofficialRequest(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${film.filmId}`);
    }
    