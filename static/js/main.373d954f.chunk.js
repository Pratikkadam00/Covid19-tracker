(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{58:function(e,t,a){e.exports=a(73)},63:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),o=a.n(r),s=(a(63),a(31)),l=a.n(s),i=a(43),u=a(18),m=(a(65),a(105)),f=a(106),d=a(107),v=a(99),h=a(103),p=a(51),E=a(104);a(66);var b=function(e){var t=e.title,a=e.cases,n=e.total,r=e.active,o=e.isRed,s=Object(p.a)(e,["title","cases","total","active","isRed"]);return console.log(t,r),c.a.createElement(v.a,{onClick:s.onClick,className:"infoBox ".concat(r&&"infoBox--selected"," ").concat(o&&"infoBox--red")},c.a.createElement(h.a,null,c.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},t),c.a.createElement("h2",{className:"infoBox__cases ".concat(!o&&"infoBox__cases--green")},a),c.a.createElement(E.a,{className:"infoBox__total",color:"textSecondary"},n," Total")))},g=(a(70),a(15)),y=a.n(g);var j=function(e){var t=e.countries;return c.a.createElement("div",{className:"table"},t.map((function(e){return c.a.createElement("tr",null,c.a.createElement("td",null,e.country),c.a.createElement("td",null,c.a.createElement("strong",null,y()(e.cases).format("0,0"))))})))},O=a(50),_=a(108),w=a(109),x={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",half_op:"rgba(204, 16, 52, 0.5)",multiplier:800},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgba(125, 215, 29, 0.5)",multiplier:1200},deaths:{hex:"#fb4443",rgb:"rgb(251, 68, 67)",half_op:"rgba(251, 68, 67, 0.5)",multiplier:2e3}},N=function(e){var t=Object(O.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},C=function(e){return e?"+".concat(y()(e).format("0.0a")):"+0"},k=a(110),S=a(111);a(71);var B=function(e){var t=e.countries,a=e.casesType,n=e.center,r=e.zoom;return c.a.createElement("div",{className:"map"},c.a.createElement(k.a,{center:n,zoom:r},c.a.createElement(S.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return c.a.createElement(_.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:x[t].hex,fillColor:x[t].hex,fillOpacity:.4,radius:Math.sqrt(e[t])*x[t].multiplier},c.a.createElement(w.a,null,c.a.createElement("div",{className:"info-container"},c.a.createElement("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),c.a.createElement("div",{className:"info-name"},e.country),c.a.createElement("div",{className:"info-confirmed"},"Cases: ",y()(e.cases).format("0,0")),c.a.createElement("div",{className:"info-recovered"},"Recovered: ",y()(e.recovered).format("0,0")),c.a.createElement("div",{className:"info-deaths"},"Deaths: ",y()(e.deaths).format("0,0")))))}))}(t,a)))},I=(a(72),function(){var e=Object(n.useState)("worldwide"),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)({}),s=Object(u.a)(o,2),p=s[0],E=s[1],g=Object(n.useState)([]),O=Object(u.a)(g,2),_=O[0],w=O[1],x=Object(n.useState)([]),k=Object(u.a)(x,2),S=k[0],I=k[1],R=Object(n.useState)([]),z=Object(u.a)(R,2),D=z[0],T=z[1],M=Object(n.useState)("cases"),W=Object(u.a)(M,2),J=W[0],q=W[1],L=Object(n.useState)({lat:34.80746,lng:-40.4796}),V=Object(u.a)(L,2),$=V[0],A=V[1],F=Object(n.useState)(3),G=Object(u.a)(F,2),H=G[0],K=G[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){E(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),a=N(e);w(t),I(e),T(a)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log(J);var P=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,n="worldwide"===a?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(a),e.next=4,fetch(n).then((function(e){return e.json()})).then((function(e){r(a),E(e),A([e.countryInfo.lat,e.countryInfo.long]),K(4)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"app__left"},c.a.createElement("div",{className:"app__header"},c.a.createElement("h1",null,"COVID-19 Tracker"),c.a.createElement(m.a,{className:"app__dropdown"},c.a.createElement(f.a,{variant:"outlined",value:a,onChange:P},c.a.createElement(d.a,{value:"worldwide"},"Worldwide"),_.map((function(e){return c.a.createElement(d.a,{value:e.value},e.name)}))))),c.a.createElement("div",{className:"app__stats"},c.a.createElement(b,{onClick:function(e){return q("cases")},title:"Coronavirus Cases",isRed:!0,active:"cases"===J,cases:C(p.todayCases),total:y()(p.cases).format("0.0a")}),c.a.createElement(b,{onClick:function(e){return q("recovered")},title:"Recovered",active:"recovered"===J,cases:C(p.todayRecovered),total:y()(p.recovered).format("0.0a")}),c.a.createElement(b,{onClick:function(e){return q("deaths")},title:"Deaths",isRed:!0,active:"deaths"===J,cases:C(p.todayDeaths),total:y()(p.deaths).format("0.0a")})),c.a.createElement(B,{countries:S,casesType:J,center:$,zoom:H})),c.a.createElement(v.a,{className:"app__right"},c.a.createElement(h.a,null,c.a.createElement("div",{className:"app__information"},c.a.createElement("h3",null,"Live Cases by Country"),c.a.createElement(j,{countries:D})))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.373d954f.chunk.js.map