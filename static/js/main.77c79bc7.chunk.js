(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){"use strict";i.r(t);var a=i(8),n=i.n(a),r=(i(15),i(10)),l=i(3),c=i(1),s=(i(16),i(2)),o=(i(17),i(18),i(0)),m=function(e){var t=e.title,i=e.description,a=e.imgUrl,n=e.imdbUrl;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("figure",{className:"image is-4by3",children:Object(o.jsx)("img",{src:a,alt:"Film logo"})})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsxs)("div",{className:"media",children:[Object(o.jsx)("div",{className:"media-left",children:Object(o.jsx)("figure",{className:"image is-48x48",children:Object(o.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(o.jsx)("div",{className:"media-content",children:Object(o.jsx)("p",{className:"title is-8",children:t})})]}),Object(o.jsxs)("div",{className:"content",children:[i,Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:n,children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(o.jsx)("div",{className:"movies",children:t.map((function(e){return Object(o.jsx)(m,Object(s.a)({},e),e.imdbId)}))})},b=i(4),j=i.n(b),u=(i(20),function(e){return/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=,\w]+@)[A-Za-z0-9.-]+)((?:\/[~%.\w-_]*)?\??(?:[-=&;%@.\w_]*)#?(?:[\w]*))?)/.test(e)});var h=function(e){var t=e.onAdd,i=Object(c.useState)(""),a=Object(l.a)(i,2),n=a[0],r=a[1],m=Object(c.useState)(""),d=Object(l.a)(m,2),b=d[0],h=d[1],p=Object(c.useState)(""),g=Object(l.a)(p,2),O=g[0],f=g[1],v=Object(c.useState)(""),w=Object(l.a)(v,2),x=w[0],M=w[1],U=Object(c.useState)(""),N=Object(l.a)(U,2),_=N[0],I=N[1],B=Object(c.useState)({title:!1,imgUrl:!1,imdbUrl:!1,imdbId:!1}),y=Object(l.a)(B,2),T=y[0],D=y[1],k=function(e,t,i,a){return{title:!e.length,imgUrl:!t.length||!u(t),imdbUrl:!i.length||!u(i),imdbId:!a.length}}(n,O,x,_),z=!Object.keys(k).some((function(e){return k[e]}));return Object(o.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault();var i={title:n,description:b,imgUrl:O,imdbUrl:x,imdbId:_};r(""),h(""),f(""),M(""),I(""),D({title:!1,imgUrl:!1,imdbUrl:!1,imdbId:!1}),t(i)},children:[Object(o.jsxs)("label",{className:"label ".concat(j()("form__input",{"form__input--error":k.title&&T.title})),htmlFor:"title",children:["Title:",Object(o.jsx)("input",{type:"text",id:"title",placeholder:"Title",required:!0,value:n,onChange:function(e){return r(e.target.value)},onBlur:function(){return D(Object(s.a)(Object(s.a)({},T),{},{title:!0}))},className:"input ".concat(j()({"is-danger":k.title&&T.title}))})]}),Object(o.jsxs)("label",{htmlFor:"description",className:"label",children:["Description:",Object(o.jsx)("input",{type:"text",id:"description",placeholder:"Description",className:"input",value:b,onChange:function(e){return h(e.target.value)}})]}),Object(o.jsxs)("label",{className:"label ".concat(j()("form__input",{"form__input--error":k.imgUrl&&T.imgUrl})),htmlFor:"imgUrl",children:["Image Url:",Object(o.jsx)("input",{type:"text",id:"imgUrl",placeholder:"Image Url",required:!0,value:O,onChange:function(e){return f(e.target.value)},onBlur:function(){return D(Object(s.a)(Object(s.a)({},T),{},{imgUrl:!0}))},className:"input ".concat(j()({"is-danger":k.imgUrl&&T.imgUrl}))})]}),Object(o.jsxs)("label",{className:"label ".concat(j()("form__input",{"form__input--error":k.imdbUrl&&T.imdbUrl})),htmlFor:"imdbUrl",children:["IMDB Url:",Object(o.jsx)("input",{type:"text",id:"imdbUrl",placeholder:"IMDB Url",required:!0,value:x,onChange:function(e){return M(e.target.value)},onBlur:function(){return D(Object(s.a)(Object(s.a)({},T),{},{imdbUrl:!0}))},className:"input ".concat(j()({"is-danger":k.imdbUrl&&T.imdbUrl}))})]}),Object(o.jsxs)("label",{className:"label ".concat(j()("form__input",{"form__input--error":k.imdbId&&T.imdbId})),htmlFor:"imdbId",children:["IMDB Id:",Object(o.jsx)("input",{type:"text",id:"imdbId",placeholder:"IMDB Id",required:!0,value:_,onChange:function(e){return I(e.target.value)},onBlur:function(){return D(Object(s.a)(Object(s.a)({},T),{},{imdbId:!0}))},className:"input ".concat(j()({"is-danger":k.imdbId&&T.imdbId}))})]}),Object(o.jsx)("button",{type:"submit",className:"button is-primary",disabled:!z,children:"Add"})]})},p=i(9),g=function(){var e=Object(c.useState)(p),t=Object(l.a)(e,2),i=t[0],a=t[1];return Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("div",{className:"page-content",children:Object(o.jsx)(d,{movies:i})}),Object(o.jsx)("div",{className:"sidebar",children:Object(o.jsx)(h,{onAdd:function(e){a([].concat(Object(r.a)(i),[e]))}})})]})};n.a.render(Object(o.jsx)(g,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.77c79bc7.chunk.js.map