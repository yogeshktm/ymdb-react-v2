(this["webpackJsonpymdb-movie-app"]=this["webpackJsonpymdb-movie-app"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),s=n.n(i),c=n(9),o=n.n(c),l=(n(15),n(16),n(2)),r=n(3),h=n(6),d=n(5),u=n(4),j=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.fullData,t=e.imdbID,n=e.imdbRating,i=e.Title,s=e.Poster,c=e.Year,o=e.Actors,l=e.Plot,r=e.Language,h=e.Genre,d=e.Director,u=e.Runtime,j=e.Country,b="https://imdb.com/title/"+t;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{class:"card",children:[Object(a.jsxs)("div",{class:!0===this.props.notFound?"hidden":"movie-info",children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{className:"release-year",children:c})," -"," ",Object(a.jsx)("span",{className:"country",children:j})]}),Object(a.jsx)("h2",{className:"movie-title",children:i}),Object(a.jsxs)("p",{class:"lang",children:["Language: ",r]}),Object(a.jsxs)("p",{children:["Runtime: ",u]}),Object(a.jsxs)("p",{children:["Genre: ",h]}),Object(a.jsxs)("p",{children:["Director : ",d]}),Object(a.jsxs)("p",{children:["Cast: ",o]}),Object(a.jsx)("p",{children:"Plot:"}),Object(a.jsx)("p",{children:l}),Object(a.jsxs)("p",{children:["IMDB Rating : ",n," / 10"]}),Object(a.jsx)("a",{href:b,children:"IMDB Link"})]}),Object(a.jsx)("img",{class:"poster-img",src:"N/A"===s?"https://dummyimage.com/390x610/c89f9b/fff.png&text=Poster+not+found":s,alt:i})]})})}}]),n}(s.a.Component),b=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{class:"card",children:[Object(a.jsxs)("div",{class:"movie-info placeholder",children:[Object(a.jsx)("h3",{class:"title-ph","aria-hidden":"true"}),Object(a.jsx)("p",{}),Object(a.jsx)("p",{}),Object(a.jsx)("p",{}),Object(a.jsx)("p",{}),Object(a.jsx)("p",{}),Object(a.jsx)("p",{}),Object(a.jsx)("p",{})]}),Object(a.jsx)("img",{class:"poster-img",src:"https://dummyimage.com/390x610/c89f9b/fff.png&text=Loading...",alt:"loading..."})]})})}}]),n}(s.a.Component),p=n(7),g=n.n(p),m=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.handleChange,n=e.handleMovieTypeChange,i=e.handleSubmit,s=e.fullData,c=e.handleLinkClick,o=g.a.values(s.Search).sort().map((function(e,t){return Object(a.jsx)("li",{children:Object(a.jsx)("a",{onClick:c,id:e.imdbID,children:e.Title})})}));return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("form",{onSubmit:i,className:"search-box",children:[Object(a.jsx)("input",{autoFocus:!0,className:"search",type:"search",id:"search",autoComplete:"off",onInput:t,placeholder:"Search"}),Object(a.jsxs)("select",{onChange:n,children:[Object(a.jsx)("option",{children:"movie"}),Object(a.jsx)("option",{children:"series"}),Object(a.jsx)("option",{children:"episodes"})]}),Object(a.jsx)("button",{className:"btn",type:"submit",children:"SEARCH"}),Object(a.jsx)("div",{class:"search-autocomplete",children:Object(a.jsx)("ul",{children:o})})]})})}}]),n}(s.a.Component),v=(s.a.Component,function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={movieData:"",searchKeyword:"",notFound:!1,searchType:"movie",isLoading:!1,movieDetailData:""},a.getMovieDetails=a.getMovieDetails.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleResponse=a.handleResponse.bind(Object(h.a)(a)),a.handleMovieTypeChange=a.handleMovieTypeChange.bind(Object(h.a)(a)),a.linkClick=a.linkClick.bind(Object(h.a)(a)),a}return Object(r.a)(n,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"getMoviebyID",value:function(e){var t=this,n="https://www.omdbapi.com/?apiKey=7c5d79b&i="+e+"&type="+this.state.searchType+"&page=1&plot=full";this.setState({isLoading:!0},(function(){fetch(n).then((function(e){return e.json()})).then(t.handleResponse).then((function(e){return t.setState({isLoading:!1,movieDetailData:e})})).catch((function(e){return console.log(e)}))}))}},{key:"getMovieDetails",value:function(e,t){var n=this,a="https://www.omdbapi.com/?apiKey=7c5d79b"+(t?"&s=":"&t=")+e+"&type="+this.state.searchType+"&page=1&plot=full";this.setState({isLoading:!0},(function(){fetch(a).then((function(e){return e.json()})).then(n.handleResponse).then((function(e){return n.setState({isLoading:!1,movieData:e})})).catch((function(e){return console.log(e)}))}))}},{key:"handleResponse",value:function(e){return"False"===e.Response?(console.log("inside"),this.setState({notFound:!0})):this.setState({notFound:!1}),e}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.searchKeyword;console.log(t.length),t.length>0&&this.getMovieDetails(this.state.searchKeyword,!0)}},{key:"handleChange",value:function(e){console.log(e.target.value);var t=e.target.value;this.setState((function(e){return{searchKeyword:t}})),console.log("test1",e.target.value.length),console.log("test2",this.state.searchKeyword.length),e.target.value.length>=3&&this.getMovieDetails(e.target.value,!0)}},{key:"handleMovieTypeChange",value:function(e){console.log(e.target.value),this.setState({searchType:e.target.value})}},{key:"linkClick",value:function(e){var t=e.target.id;this.getMoviebyID(t),this.setState({movieData:""})}},{key:"render",value:function(){return Object(a.jsxs)("div",{class:"container",children:[Object(a.jsx)(m,{handleChange:this.handleChange,handleMovieTypeChange:this.handleMovieTypeChange,handleSubmit:this.handleSubmit,fullData:this.state.movieData,handleLinkClick:this.linkClick}),this.state.isLoading?Object(a.jsx)(b,{}):""!==this.state.movieDetailData?Object(a.jsx)(j,{fullData:this.state.movieDetailData}):null]})}}]),n}(s.a.Component));var O=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{className:"logo",children:Object(a.jsx)("h1",{children:"\ud83c\udfac YMDB"})}),Object(a.jsx)(v,{})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),s(e),c(e)}))};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),f()}},[[19,1,2]]]);
//# sourceMappingURL=main.09e6111f.chunk.js.map