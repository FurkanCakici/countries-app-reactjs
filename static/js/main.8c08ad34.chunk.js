(this["webpackJsonpcountries-app"]=this["webpackJsonpcountries-app"]||[]).push([[0],{32:function(e,a,t){e.exports=t(60)},37:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),l=t(29),r=t.n(l),s=(t(37),t(9)),i=t(10),m=t(12),o=t(11),u=t(13),h=t(5),p=function(e){var a=e.country;return n.a.createElement("div",{className:"card my-2 bg-light text-dark text-center"},n.a.createElement("div",{className:"card-body"},n.a.createElement(h.b,{to:"country".concat(a.name)},n.a.createElement("h4",{className:"card-title h2"},n.a.createElement("img",{src:a.flag,className:"img-sm"})," ",a.name)),n.a.createElement("p",{className:"h4"},a.nativeName)))},E=t(15),d=t.n(E),f=function(e){function a(){var e,t;Object(s.a)(this,a);for(var c=arguments.length,n=new Array(c),l=0;l<c;l++)n[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(n)))).state={countries:[]},t.searchHandler=function(e){d.a.get("https://restcountries.eu/rest/v2/name/".concat(e.target.value)).then((function(e){t.setState({countries:e.data})}))},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://restcountries.eu/rest/v2/all").then((function(a){e.setState({countries:a.data.slice(0,54)})}))}},{key:"render",value:function(){var e=this.state.countries.map((function(e){return n.a.createElement(p,{country:e,key:e.numericCode})}));return n.a.createElement("div",{className:"my-2"},n.a.createElement("input",{type:"text",className:"form-control bg-light text-dark",placeholder:"\xdclke ad\u0131 giriniz",onChange:this.searchHandler}),n.a.createElement("div",{className:"card-columns my-1"},e))}}]),a}(c.Component),v=function(e){function a(){var e,t;Object(s.a)(this,a);for(var c=arguments.length,n=new Array(c),l=0;l<c;l++)n[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(n)))).state={country:{}},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.name;d.a.get("https://restcountries.eu/rest/v2/name/".concat(a,"?fullText=true")).then((function(a){e.setState({country:a.data[0]})}))}},{key:"render",value:function(){var e=this.state.country;return n.a.createElement("div",{className:"container col-12 col-md-6 offset-md-3 col-md-8 offset-md-2  col-lg-10 offset-lg-1"},n.a.createElement("div",{className:"card my-2 mx-auto",style:{width:"60%",height:"50%"}},n.a.createElement("img",{src:e.flag,alt:"flags",className:"card-img-top"}),n.a.createElement("div",{className:"card-body bg-light"},n.a.createElement("ul",{className:"list-group list-group-flush bg-light"},n.a.createElement("li",{className:"list-group-item h1 text-center bg-light text-dark"},"\xdclke Ad\u0131 : ",e.name),n.a.createElement("li",{className:"list-group-item h3"},"Yerel Ad : ",e.nativeName),n.a.createElement("li",{className:"list-group-item h3"},"Ba\u015fkent : ",e.capital),n.a.createElement("li",{className:"list-group-item h3"},"N\xfcfus : ",e.population),n.a.createElement("li",{className:"list-group-item h3"},"Alan : ",e.area," m2"),n.a.createElement("li",{className:"list-group-item h3"},"Saat Dilimi : ",e.timezones)))))}}]),a}(c.Component),g=t(7);var N=function(){return n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-light bg-light h4"},n.a.createElement(h.b,{className:"navbar-brand navbar-expand-sm",to:"/home"},n.a.createElement("i",{className:"fas fa-globe-asia fa-spin display-4",style:{color:"#1B9CFC"}})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},n.a.createElement("div",{className:"navbar-nav "},n.a.createElement(h.b,{className:"nav-item nav-link",to:"/home",activeclassname:"active"},"ANASAYFA"),n.a.createElement(h.b,{className:"nav-item nav-link",to:"/about",activeclassname:"active"},"HAKKINDA"),n.a.createElement(h.b,{className:"nav-item nav-link",to:"/contact",activeclassname:"active"},"\u0130LET\u0130\u015e\u0130M")))))},b=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",{className:"display-3 text-center"},"Uygulama Hakk\u0131nda"),n.a.createElement("hr",null),n.a.createElement("p",{className:"h3 my-4 text-center"},"50 den fazla \xfclke hakk\u0131nda \xf6zet bilgiler sunan bir uygulamad\u0131r kendileri.."),n.a.createElement("ul",{className:"list-group text-center mx-auto h5 my-5",style:{width:"40%"}},n.a.createElement("li",{className:"list-group-item active"},"Neler Kulland\u0131m"),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("i",{className:"fas fa-check-circle mx-1"}),"ReactJs"),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("i",{className:"fas fa-check-circle mx-1"}),"ReactJs Router"),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("i",{className:"fas fa-check-circle mx-1"}),"Axios"),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("i",{className:"fas fa-check-circle mx-1"}),"Rest Contruies ",n.a.createElement("a",{href:"https://restcountries.eu/",target:"_blank"},"(Link)")," "),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("i",{className:"fas fa-check-circle mx-1"}),"Font Awesome"),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("i",{className:"fas fa-check-circle mx-1"}),"Bootstrap 4"),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("i",{className:"fas fa-check-circle mx-1"}),"Gh-pages deploy")))}}]),a}(c.Component);var k=function(){return n.a.createElement("div",null,n.a.createElement("h1",{className:"display-3 text-center"},"\u0130leti\u015fim"),n.a.createElement("hr",null),n.a.createElement("ul",{className:"list-group text-center mx-auto h5 my-5",style:{width:"40%"}},n.a.createElement("li",{className:"list-group-item active"},n.a.createElement("i",{className:"fas fa-check-circle mx-1"}),"Site : ",n.a.createElement("a",{href:"https://furkancakici.github.io/",target:"_blank",className:"text-light"},"furkancakici.github.io (All Contact)")," "),n.a.createElement("li",{className:"list-group-item active"},n.a.createElement("i",{className:"fas fa-check-circle mx-1"}),"Mail : furkancakici25@gmail.com")))};var y=function(){return n.a.createElement("div",null,n.a.createElement("h1",{className:"display-1 text-center my-5"},"404 FATAL ERROR"))};var x=function(){return n.a.createElement("div",null,n.a.createElement(g.d,null,n.a.createElement(g.a,{to:"/home"})))};var A=function(){return n.a.createElement("div",{className:"container col-12 col-md-10 offset-md-1  col-lg-8 offset-lg-2 "},n.a.createElement(h.a,null,n.a.createElement(N,null),n.a.createElement(g.d,null,n.a.createElement(g.b,{exact:!0,path:"/",component:x}),n.a.createElement(g.b,{exact:!0,path:"/home",component:f}),n.a.createElement(g.b,{exact:!0,path:"/about",component:b}),n.a.createElement(g.b,{exact:!0,path:"/contact",component:k}),n.a.createElement(g.b,{exact:!0,path:"/country:name",component:v}),n.a.createElement(g.b,{component:y}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.8c08ad34.chunk.js.map