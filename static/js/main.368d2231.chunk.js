(this["webpackJsonpweather-forecast"]=this["webpackJsonpweather-forecast"]||[]).push([[0],{106:function(e,t,a){e.exports={spinContainer:"Main_spinContainer__3UVvM"}},109:function(e,t,a){e.exports=a(191)},190:function(e,t,a){},191:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),o=a(195),l=(a(114),a(192)),i=a(46),u=["current","hourly","daily"],m=[{name:"Nicosia",lat:33.37,lon:35.17},{name:"Larnaca",lat:33.63,lon:34.92},{name:"Limassol",lat:33.07,lon:34.67},{name:"Dubai",lat:55.3,lon:25.26},{name:"Tbilisi",lat:44.83,lon:41.69}],s=Object(n.createContext)(),p=function(e){var t=e.children,a=Object(n.useState)(m[0]),r=Object(i.a)(a,2),o=r[0],l=r[1];return c.a.createElement(s.Provider,{value:{city:o,setCity:l}},t)},h=function(){return Object(n.useContext)(s)},d=a(90),f=function(){var e=h(),t=e.city,a=e.setCity;return c.a.createElement(l.a,{className:d.tabs,value:t.name,onChange:function(e){var t=m.find((function(t){return t.name===e}));a(t)},centered:!0},m.map((function(e){var t=e.name;return c.a.createElement(l.a.TabPane,{key:t,tab:t})})))},b=a(194),y=a(67),E=a(54),_=Object(n.memo)((function(e){var t=e.cityData,a=u.map((function(e){return{title:e.charAt(0).toUpperCase()+e.slice(1),key:e,children:[]}}));return u.forEach((function(e,n){("current"===e?[t[e]]:t[e]).forEach((function(t,r){var o=new Date;o.setTime(1e3*t.dt),a[n].children.push({title:"".concat("daily"===e?o.toLocaleDateString():o.toLocaleString()),key:"date".concat(n,"-").concat(r),children:[]}),[{title:c.a.createElement(c.a.Fragment,null,c.a.createElement(y.a,{className:E.weatherIcon}),((t.temp.day||t.temp)-273.15).toFixed(2),"\xb0C"),key:"temp".concat(n,"-").concat(r)},{title:c.a.createElement(c.a.Fragment,null,c.a.createElement(y.b,{className:E.weatherIcon}),t.humidity,"%"),key:"humid".concat(n,"-").concat(r)},{title:c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{src:"https://openweathermap.org/img/wn/".concat(t.weather[0].icon,"@2x.png"),alt:"Icon"}),t.weather[0].description.charAt(0).toUpperCase()+t.weather[0].description.slice(1)),key:"weather".concat(n,"-").concat(r)}].forEach((function(e){return a[n].children[r].children.push(e)}))}))})),c.a.createElement(b.a,{className:E.tree,treeData:a,defaultExpandedKeys:["date0-0"]})})),w=a(105),g=a.n(w),C=a(196),v=a(106),j=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),l=Object(i.a)(o,2),u=l[0],m=l[1],s=h().city;return Object(n.useEffect)((function(){m(!0),function(e){return g.a.get("".concat("https://api.openweathermap.org/data/2.5/onecall","?lat=").concat(e.lat,"&lon=").concat(e.lon,"&exclude=minutely&appid=").concat("5ef67bc28bee070fb605bb14993c4c75"))}(s).then((function(e){m(!1),r(e.data)})).catch((function(){throw m(!1),new Error("Something went wrong")}))}),[s]),u||!a?c.a.createElement("div",{className:v.spinContainer},c.a.createElement(C.a,{tip:"Loading..."})):c.a.createElement(_,{cityData:a})},x=a(56),O=function(){return c.a.createElement(p,null,c.a.createElement(o.a,{className:x.layout},c.a.createElement(o.a.Header,{className:x.header,theme:"light"},c.a.createElement(f,null)),c.a.createElement(o.a.Content,{className:x.content},c.a.createElement(j,null))))};a(190);Object(r.render)(c.a.createElement(O,null),document.getElementById("root"))},54:function(e,t,a){e.exports={weatherIcon:"CityTree_weatherIcon__28Sed",tree:"CityTree_tree__3lm8C"}},56:function(e,t,a){e.exports={header:"App_header__30XdZ",content:"App_content__2236V",layout:"App_layout__3Qt8u"}},90:function(e,t,a){e.exports={tabs:"CitySelect_tabs__e0bId"}}},[[109,1,2]]]);
//# sourceMappingURL=main.368d2231.chunk.js.map