(this["webpackJsonpweather-forecast"]=this["webpackJsonpweather-forecast"]||[]).push([[0],{108:function(e,t,a){e.exports=a(190)},189:function(e,t,a){},190:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),i=(a(113),a(56)),o=a(195),l=a(194),s=a(193),m=["current","hourly","daily"],u=[{name:"Nicosia",lat:33.37,lon:35.17},{name:"Larnaca",lat:33.63,lon:34.92},{name:"Limassol",lat:33.07,lon:34.67},{name:"Dubai",lat:25.26,lon:55.3},{name:"Tbilisi",lat:44.83,lon:41.69}],d=a(66),h=a(54),p=Object(n.memo)((function(e){var t=e.cityData,a=m.map((function(e){return{title:e.charAt(0).toUpperCase()+e.slice(1),key:e,children:[]}}));return m.forEach((function(e,n){("current"===e?[t[e]]:t[e]).forEach((function(t,r){var i=new Date;i.setTime(1e3*t.dt),a[n].children.push({title:"".concat("daily"===e?i.toLocaleDateString():i.toLocaleString()),key:"date".concat(n,"-").concat(r),children:[]}),[{title:c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{className:h.weatherIcon}),((t.temp.day||t.temp)-273.15).toFixed(2),"\xb0C"),key:"temp".concat(n,"-").concat(r)},{title:c.a.createElement(c.a.Fragment,null,c.a.createElement(d.b,{className:h.weatherIcon}),t.humidity,"%"),key:"humid".concat(n,"-").concat(r)},{title:c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{src:"https://openweathermap.org/img/wn/".concat(t.weather[0].icon,"@2x.png"),alt:"Icon"}),t.weather[0].description.charAt(0).toUpperCase()+t.weather[0].description.slice(1)),key:"weather".concat(n,"-").concat(r)}].forEach((function(e){return a[n].children[r].children.push(e)}))}))})),c.a.createElement(s.a,{className:h.tree,treeData:a,defaultExpandedKeys:["date0-0"],"data-testid":"city-tree"})})),f=a(191),y=a(99),E=function(e){var t=e.city,a=e.onChangedCity;return c.a.createElement("div",{"data-testid":"city-select"},c.a.createElement(f.a,{className:y.tabs,value:t.name,onChange:function(e){return a(e)},centered:!0},u.map((function(e){var t=e.name;return c.a.createElement(f.a.TabPane,{key:t,tab:t,"aria-label":"lol"})}))))},b=a(105),_=a.n(b),C=a(46),g=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(!1),m=Object(i.a)(s,2),d=m[0],h=m[1],f=Object(n.useState)(u[0]),y=Object(i.a)(f,2),b=y[0],g=y[1];Object(n.useEffect)((function(){h(!0),function(e){return _.a.get("".concat("https://api.openweathermap.org/data/2.5/onecall","?lat=").concat(e.lat,"&lon=").concat(e.lon,"&exclude=minutely&appid=").concat("5ef67bc28bee070fb605bb14993c4c75"))}(b).then((function(e){h(!1),r(e.data)}))}),[b]);var w=d||!a?c.a.createElement("div",{className:C.spinContainer},c.a.createElement(o.a,{tip:"Loading..."})):c.a.createElement(p,{cityData:a});return c.a.createElement(l.a,{className:C.layout,"data-testid":"main"},c.a.createElement(l.a.Header,{className:C.header},c.a.createElement(E,{city:b,onChangedCity:function(e){var t=u.find((function(t){return t.name===e}));g(t)}})),c.a.createElement(l.a.Content,{className:C.content},w))},w=function(){return c.a.createElement("span",{"data-testid":"application"},c.a.createElement(g,null))};a(189);Object(r.render)(c.a.createElement(w,null),document.getElementById("root"))},46:function(e,t,a){e.exports={spinContainer:"Main_spinContainer__3UVvM",header:"Main_header__1TqOY",content:"Main_content__3E8hC",layout:"Main_layout__1R1Ge"}},54:function(e,t,a){e.exports={weatherIcon:"CityTree_weatherIcon__28Sed",tree:"CityTree_tree__3lm8C"}},99:function(e,t,a){e.exports={tabs:"CitySelect_tabs__e0bId"}}},[[108,1,2]]]);
//# sourceMappingURL=main.5c0ea2a3.chunk.js.map