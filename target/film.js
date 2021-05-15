"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function FilmProto(filmData) {
  this.data = filmData;
  this.start = "".concat(toHour(getRandomToMax(14) + 9), ":").concat(toMinuts(getRandomToMax(5)));
}

FilmProto.prototype.isNotForAdult = function () {
  return !this.data.adult;
};

FilmProto.prototype.getStart = function () {
  return this.start;
};

FilmProto.prototype.getTitle = function () {
  return this.data.title;
};

FilmProto.prototype.getGenre = function () {
  return this.data.genre.map(function (g) {
    return g.name;
  }).join(', ');
};

FilmProto.prototype.renderFilmTableItem = function () {
  return "\n<tr>\n<td>\n<svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.60581 8.79378L1.46056 5.93033L0.787354 6.66979L4.70255 10.2342L10.8223 2.94099L10.0562 2.2982L4.60581 8.79378Z\" fill=\"white\"/>\n    </svg>\n</label>    \n</td><td>".concat(this.getStart(), "</td> \n<td><a class=\"link-style\" href=\"https://www.kinopoisk.ru/film/838/\">\n").concat(this.getTitle(), "</a></td>\n<td>").concat(this.getGenre(), "</td> \n</tr>\n");
};

var Film = /*#__PURE__*/function () {
  function Film(filmData) {
    _classCallCheck(this, Film);

    this.data = filmData;
    this.start = "".concat(toHour(getRandomToMax(14) + 9), ":").concat(toMinuts(getRandomToMax(5)));
  }

  _createClass(Film, [{
    key: "getTitle",
    value: function getTitle() {
      return this.data.title;
    }
  }, {
    key: "isNotForAdult",
    value: function isNotForAdult() {
      return !this.data.adult;
    }
  }, {
    key: "getStart",
    value: function getStart() {
      return this.start;
    }
  }, {
    key: "getGenre",
    value: function getGenre() {
      return this.data.genre.map(function (g) {
        return g.name;
      }).join(', ');
    }
  }, {
    key: "renderFilmTableItem",
    value: function renderFilmTableItem() {
      return "\n    <tr>\n    <td>\n    <svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.60581 8.79378L1.46056 5.93033L0.787354 6.66979L4.70255 10.2342L10.8223 2.94099L10.0562 2.2982L4.60581 8.79378Z\" fill=\"white\"/>\n        </svg>\n    </label>    \n    </td><td>".concat(this.getStart(), "</td> \n    <td><a class=\"link-style\" href=\"https://www.kinopoisk.ru/film/838/\">\n    ").concat(this.getTitle(), "</a></td>\n    <td>").concat(this.getGenre(), "</td> \n    </tr>\n    ");
    }
  }]);

  return Film;
}();

var f = new Film();