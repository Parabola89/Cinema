
function FilmProto(filmData) {
this.data = filmData;
this.start = `${toHour(getRandomToMax(14) + 9)}:${toMinuts(getRandomToMax(5))}`;
}

FilmProto.prototype.isNotForAdult = function() {
    return !this.data.adult; 
}

FilmProto.prototype.getStart = function() {
    return this.start;
}
FilmProto.prototype.getTitle = function() {
    return this.data.title;
}
FilmProto.prototype.getGenre = function() {
    return this.data.genre
   .map(g=>g.name) 
   .join(', ');
}
FilmProto.prototype.renderFilmTableItem = function() {
    return `
<tr>
<td>
<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.60581 8.79378L1.46056 5.93033L0.787354 6.66979L4.70255 10.2342L10.8223 2.94099L10.0562 2.2982L4.60581 8.79378Z" fill="white"/>
    </svg>
</label>    
</td><td>${this.getStart()}</td> 
<td><a class="link-style" href="https://www.kinopoisk.ru/film/838/">
${this.getTitle()}</a></td>
<td>${this.getGenre()}</td> 
</tr>
`
}

class Film {

    constructor(filmData){
        this.data = filmData;
        this.start = `${toHour(getRandomToMax(14) + 9)}:${toMinuts(getRandomToMax(5))}`;
    }

    getTitle() {
        return this.data.title;
    }

    isNotForAdult(){
        return !this.data.adult; 
    }

    getStart() {
        return this.start;
    }

    getGenre() {
        return this.data.genre
       .map(g=>g.name) 
       .join(', ');
    }

    renderFilmTableItem() {
        return `
    <tr>
    <td>
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.60581 8.79378L1.46056 5.93033L0.787354 6.66979L4.70255 10.2342L10.8223 2.94099L10.0562 2.2982L4.60581 8.79378Z" fill="white"/>
        </svg>
    </label>    
    </td><td>${this.getStart()}</td> 
    <td><a class="link-style" href="https://www.kinopoisk.ru/film/838/">
    ${this.getTitle()}</a></td>
    <td>${this.getGenre()}</td> 
    </tr>
    `
    }
    
}

const f = new Film();