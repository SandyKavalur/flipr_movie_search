(this.webpackJsonpflipr_movie_search=this.webpackJsonpflipr_movie_search||[]).push([[0],{27:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(1),i=c.n(a),n=c(19),r=c.n(n),l=(c(27),c(8)),j=c(2),d=function(){return Object(s.jsx)("header",{children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"inner-content",children:[Object(s.jsx)("div",{className:"brand",children:Object(s.jsx)(l.b,{to:"/",children:"Movie Wishlist"})}),Object(s.jsxs)("ul",{className:"nav-links",children:[Object(s.jsx)("li",{children:Object(s.jsx)(l.b,{to:"/fav",children:" Favourites "})}),Object(s.jsx)("li",{children:Object(s.jsx)(l.b,{to:"/",className:"btn",children:" Search"})})]})]})})})},o=c(11),b=c(21),v=c(12),h=function(e,t){switch(t.type){case"ADD_MOVIE_TO_favlist":return Object(v.a)(Object(v.a)({},e),{},{favlist:[t.payload].concat(Object(b.a)(e.favlist))});case"REMOVE_MOVIE_FROM_favlist":return Object(v.a)(Object(v.a)({},e),{},{favlist:e.favlist.filter((function(e){return e.id!==t.payload}))});default:return e}},O={favlist:[]},u=Object(a.createContext)(O),f=function(e){var t=Object(a.useReducer)(h,O),c=Object(o.a)(t,2),i=c[0],n=c[1];return Object(s.jsx)(u.Provider,{value:{favlist:i.favlist,watched:i.watched,addMovieTofavlist:function(e){n({type:"ADD_MOVIE_TO_favlist",payload:e})},removeMovieFromfavlist:function(e){n({type:"REMOVE_MOVIE_FROM_favlist",payload:e})}},children:e.children})},m=function(e){var t=e.movie,c=e.type,i=Object(a.useContext)(u).removeMovieFromfavlist;return Object(s.jsx)("div",{className:"inner-card-controls",children:"favlist"===c&&Object(s.jsx)("button",{className:"ctrl-btn",onClick:function(){return i(t.id)},children:"X"})})},x=function(e){var t=e.movie,c=e.type;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"movie-card",children:[Object(s.jsx)("div",{className:"overlay"}),t.poster_path?Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),alt:"".concat(t.title," Poster")})}):Object(s.jsx)("div",{className:"filler-poster"}),Object(s.jsx)(m,{type:c,movie:t})]}),Object(s.jsx)("div",{className:"movie-card desc",children:"".concat(t.overview)})]})},p=function(){var e=Object(a.useContext)(u).favlist;return Object(s.jsx)("div",{className:"mavie-page",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{className:"header",children:Object(s.jsx)("h1",{className:"heading",children:Object(s.jsx)("u",{children:"My favlist"})})}),e.length>0?Object(s.jsx)("div",{className:"movie-grid",children:e.map((function(e){return Object(s.jsx)(x,{movie:e,type:"favlist"},e.id)}))}):Object(s.jsx)("h2",{className:"no-movies",children:"No movies"})]})})},N=function(e){var t=e.movie,c=Object(a.useContext)(u),i=c.favlist,n=c.addMovieTofavlist,r=!!i.find((function(e){return e.id===t.id}));return Object(s.jsxs)("div",{className:"result-card",children:[Object(s.jsx)("div",{className:"poster-wrapper",children:t.poster_path?Object(s.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),alt:"".concat(t.title," Poster")}):Object(s.jsx)("div",{className:"filler-poster"})}),Object(s.jsxs)("div",{className:"info",children:[Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("h3",{className:"title",children:t.title}),Object(s.jsx)("h4",{className:"release-date",children:t.release_date?t.release_date.substring(0,4):"-"})]}),Object(s.jsx)("div",{className:"controls",children:Object(s.jsx)("button",{className:"btn",disabled:r,onClick:function(){return n(t)},children:"Add to favourites"})})]})]})},g=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),c=t[0],i=t[1],n=Object(a.useState)([]),r=Object(o.a)(n,2),l=r[0],j=r[1];return Object(s.jsx)("div",{className:"add-page",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"add-content",children:[Object(s.jsx)("div",{className:"input-wrapper",children:Object(s.jsx)("input",{type:"text",placeholder:"Search for Movies:",value:c,onChange:function(e){e.preventDefault(),i(e.target.value),setTimeout((function(){return fetch("https://api.themoviedb.org/3/search/multi?api_key=32319e73af6b201b54f1f7fa47dcece6&language=en-US&page=1&include_adult=false&query=".concat(e.target.value)).then((function(e){return e.json()})).then((function(e){e.errors?j([]):j(e.results)}))}),2e3)}})}),l.length>0&&Object(s.jsx)("ul",{className:"results",children:l.map((function(e){return Object(s.jsx)("li",{children:Object(s.jsx)(N,{movie:e})},e.id)}))})]})})})};var _=function(){return Object(s.jsx)(f,{children:Object(s.jsxs)(l.a,{children:[Object(s.jsx)(d,{}),Object(s.jsxs)(j.c,{children:[Object(s.jsx)(j.a,{exact:!0,path:"/",children:Object(s.jsx)(g,{})}),Object(s.jsx)(j.a,{path:"/fav",children:Object(s.jsx)(p,{})})]})]})})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,34)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;c(e),s(e),a(e),i(e),n(e)}))};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(_,{})}),document.getElementById("root")),y()}},[[33,1,2]]]);
//# sourceMappingURL=main.efcb7f16.chunk.js.map