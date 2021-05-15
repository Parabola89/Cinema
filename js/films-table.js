const FilmsData= [
    {
        id: 21,   
        adult: true,
        title: 'XXX',
        genre: []
      },
    {
      id: 22,   
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

const tableBody = document.getElementById('block03-table-body');

tableBody.innerHTML = '';

for (let index = 0; index < FilmsData.length; index++) {
        const film = new Film(FilmsData[index]);
        if (film.isNotForAdult()) {
    tableBody.innerHTML += film.renderFilmTableItem();
        }
}
    
