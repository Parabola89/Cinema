const films= [
    {
        id: 21,   
        start: '01:00',
        adult: true,
        title: 'XXX',
        genre: []
      },
    {
      id: 22,   
      start: '10:00',
      title: 'Человек-паук',
      genre: [
          {
              name: 'фантастика',
          },
          {
              name: 'боевик',
          },
          {
              name: 'приключения',
          },
      ]
    }, {
      id: 23,
      start: '12:00 ',
      title: 'Собачья жизнь 2',
      genre: [
          {
              name: 'фэнтэзи',
          },
          {
              name: 'драма',
          },
          {
              name: 'комедия',
          },
      ]
    }, {

        id: 24,
        start: '14:00',
        title: 'История игрушек 4',
        genre: [
            {
                name: 'мультфильм',
            },
            {
                name: 'фэнтэзи',
            },
            {
                name: 'комедия',
            },
        ]
    }, {

        id: 25,
        start: '16:00',
        title: 'Люди в черном: Интэрнэшнл',
        genre: [
            {
                name: 'фантастика',
            },
            {
                name: 'боевик',
            },
            {
                name: 'комедия',
            },
        ]
    }
];

const filmHelper = {
    getId() {
        return this.id || this.title.replaceAll(' ', '-');
    },
    getTitle() {
        return this.title;
    },
    getStart() {
        return this.start;
    },
    getGenre() {
        return ((this.genre) .map(g=>g.name)) .join(', ');
    }
}

function renderFilmTableItem(film) {
return `
<tr>
<td>
<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.60581 8.79378L1.46056 5.93033L0.787354 6.66979L4.70255 10.2342L10.8223 2.94099L10.0562 2.2982L4.60581 8.79378Z" fill="white"/>
    </svg>
</label>    
</td><td>${filmHelper.getStart.apply(film)}</td> 
<td><a class="link-style" href="https://www.kinopoisk.ru/film/838/">
${filmHelper.getTitle.apply(film)}</a></td>
<td>${filmHelper.getGenre.apply(film)}</td> 
</tr>
`
};

const tableBody = document.getElementById('block03-table-body');

tableBody.innerHTML = '';

for (let index = 0; index < films.length; index++) {
    if (!films[index].adult)
    tableBody.innerHTML += renderFilmTableItem(films[index]);
}
    
