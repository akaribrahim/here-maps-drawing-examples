(this["webpackJsonphere-maps-drawing-examples"]=this["webpackJsonphere-maps-drawing-examples"]||[]).push([[0],{324:function(e,n,a){},325:function(e,n,a){"use strict";a.r(n);var t=a(32),r=a.n(t),c=a(73),o=a(8),i=a(7),l=a(18),s=a(58),j=a(17),b=a(367),p=a(378),h=a(369),d=a(380),u=a(0),x=a.n(u),m="ubKS3gO3mx_FHsleReHarxYETOnvhHiji1vqKikZ9aQ",O=a(375),g=a(377),y=a(379),f=a(368),v=a(371),w=a(374),C=a(373),K=a(365),S=a(92),k=a.n(S),M=a(93),P=a.n(M),H=a(1),D=[{name:"Here Map Container",path:"/"},{name:"Polygon Draw",path:"/polygondraw"},{name:"Point in Polygon",path:"/useMarkerInPolygon"}],I=function(e){var n=e.children;console.log("BURADAA");var a=Object(u.useState)(null),t=Object(i.a)(a,2),r=t[0],c=t[1],l=Object(o.m)(),s=function(e){l(e),c(null)};return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(O.a,{position:"static",children:Object(H.jsx)(C.a,{maxWidth:"xl",children:Object(H.jsxs)(g.a,{disableGutters:!0,children:[Object(H.jsx)(p.a,{variant:"h6",noWrap:!0,component:"a",href:"/",sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".1rem",color:"inherit",textDecoration:"none"},children:"@akaribrahim/here-maps-drawing"}),Object(H.jsxs)(K.a,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:[Object(H.jsx)(y.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){c(e.currentTarget)},color:"inherit",children:Object(H.jsx)(k.a,{})}),Object(H.jsx)(f.a,{id:"menu-appbar",anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(r),onClose:s,sx:{display:{xs:"block",md:"none"}},children:D.map((function(e){var n=e.name,a=e.path;return Object(H.jsx)(v.a,{onClick:function(){return s(a)},children:Object(H.jsx)(p.a,{textAlign:"center",children:n})},a)}))})]}),Object(H.jsx)(K.a,{sx:{flexGrow:1}}),Object(H.jsx)(K.a,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:D.map((function(e){var n=e.name,a=e.path;return Object(H.jsx)(w.a,{variant:"text",sx:{mx:1,color:"white",px:3},onClick:function(){l(a)},children:n})}))}),Object(H.jsx)(K.a,{sx:{display:{xs:"none",md:"flex"}},children:Object(H.jsx)(y.a,{size:"large","aria-label":"go to github page",color:"inherit",target:"_blank",href:"https://github.com/akaribrahim/here-maps-drawing",children:Object(H.jsx)(P.a,{})})})]})})}),Object(H.jsx)(C.a,{maxWidth:"xl",sx:{mt:3},children:n})]})},A=a(42),E=a.n(A),B=["children","value","index"],T=function(e){var n=e.children,a=e.value,t=e.index,r=Object(s.a)(e,B);return Object(H.jsx)("div",Object(l.a)(Object(l.a)({role:"tabpanel",hidden:a!==t,id:"simple-tabpanel-".concat(t),"aria-labelledby":"simple-tab-".concat(t)},r),{},{children:a===t&&Object(H.jsx)(b.a,{sx:{p:3},children:Object(H.jsx)(p.a,{children:n})})}))};function W(e){return{id:"map-tab-".concat(e),"aria-controls":"map-tabpanel-".concat(e)}}var z=function(e,n,a){return Object(H.jsxs)(b.a,{sx:{mb:2},children:[Object(H.jsx)(p.a,{sx:{mb:1},children:a}),Object(H.jsx)(E.a,{language:"javascript",children:n})]},e)},G=function(){var e=x.a.useState(0),n=Object(i.a)(e,2),a=n[0],t=n[1];return Object(H.jsx)(I,{children:Object(H.jsxs)(b.a,{sx:{width:"100%"},children:[Object(H.jsx)(b.a,{sx:{borderBottom:1,borderColor:"divider"},children:Object(H.jsxs)(h.a,{value:a,onChange:function(e,n){t(n)},"aria-label":"basic tabs example",children:[Object(H.jsx)(d.a,Object(l.a)({label:"Basic Map"},W(0))),Object(H.jsx)(d.a,Object(l.a)({label:"Container Styles"},W(1))),Object(H.jsx)(d.a,Object(l.a)({label:"Center and Zoom"},W(2))),Object(H.jsx)(d.a,Object(l.a)({label:"Events-UI Disabled"},W(3))),Object(H.jsx)(d.a,Object(l.a)({label:"Map Language"},W(4)))]})}),Object(H.jsxs)(T,{value:a,index:0,children:[z(0,"<HereMapContainer apiKey={hereApiKey} />","The only thing required for the map component to work is apiKey"),Object(H.jsx)(j.a,{apiKey:m})]}),Object(H.jsxs)(T,{value:a,index:1,children:[z(1,"<HereMapContainer apiKey={hereApiKey} containerStyles={{ height: 400, width: 350 }} />","Definitions made as containerStyles are transferred to the div surrounding the map."),Object(H.jsx)(j.a,{apiKey:m,containerStyles:{height:400,width:350}})]}),Object(H.jsxs)(T,{value:a,index:2,children:[z(2,"<HereMapContainer apiKey={hereApiKey} center={{ lat: 12, lng: 33 }} zoom={10} />","We can specify the coordinates and zoom level where the map will be loaded first."),Object(H.jsx)(j.a,{apiKey:m,center:{lat:12,lng:33},zoom:10})]}),Object(H.jsxs)(T,{value:a,index:3,children:[z(3,"<HereMapContainer apiKey={hereApiKey} useEvents={false} useUi={false} />","When you disable the events and ui props of the map you will get a static map"),Object(H.jsx)(j.a,{apiKey:m,useEvents:!1,useUi:!1})]}),Object(H.jsxs)(T,{value:a,index:4,children:[z(4,'<HereMapContainer apiKey={hereApiKey} mapLanguage="tr-TR" />',"You can change the language of the map. You can see the language change in the map settings section at the bottom right."),Object(H.jsx)(j.a,{apiKey:m,mapLanguage:"tr-TR"})]})]})})},F=a(16),R=a(3),U=function(e,n,a){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"#fff";return'\n  <svg width="30px" height="30px" viewBox="0 0 10 30" xmlns="http://www.w3.org/2000/svg">\n  <circle cx="50%" cy="50%" r="11" stroke="'.concat(t,'" fill="').concat(e,'"/>\n    <text x="50%" y="50%" text-anchor="middle" fill="').concat(t,'" dy=".3em" font-size="12" font-weight="200" font-family="Roboto, sans-serif">\n      ').concat(n,"\n    </text>\n  </svg>\n")},J=[{lat:41.12627393231038,lng:28.960042128640346},{lat:41.12255389308406,lng:29.139501912077133},{lat:41.033883242894156,lng:29.123151427705434},{lat:40.98094452293287,lng:29.206055236966375},{lat:41.058654926310936,lng:29.214396921208706},{lat:41.12739786778544,lng:29.225072710525406},{lat:41.173928406479234,lng:29.1742785111719},{lat:41.05038002980761,lng:28.755412389980354},{lat:41.09330839993421,lng:28.786582091804142},{lat:41.150707075067764,lng:28.848173485268497},{lat:41.17867426297687,lng:28.902457093382523},{lat:41.23752965364262,lng:28.963406216323047},{lat:41.22508592924848,lng:29.033323628894998},{lat:41.18197552556545,lng:29.005122470102044},{lat:41.08269406127034,lng:28.99834729933246},{lat:41.018437203779555,lng:28.946021833059348},{lat:41.01281687758614,lng:28.8861340229966},{lat:41.038512212617626,lng:28.896899886837986},{lat:41.02285452632229,lng:29.06171276930468},{lat:41.037490145198774,lng:29.076085530417043},{lat:40.98202364067613,lng:29.077487559975175},{lat:41.028911242800376,lng:29.108085484381412},{lat:41.05876418814532,lng:28.900177816279722},{lat:41.09814567897871,lng:28.812272912757066},{lat:41.013245363081666,lng:28.810804306376372}],L=window.H,Y=function(){var e=Object(u.useState)(null),n=Object(i.a)(e,2),a=n[0],t=n[1],r=Object(u.useState)([]),c=Object(i.a)(r,2),o=c[0],s=c[1],b=Object(u.useRef)(),h=function(e,n,a){return Object(H.jsxs)(K.a,{sx:{my:2},children:[Object(H.jsx)(p.a,{sx:{mb:1},children:a}),Object(H.jsx)(E.a,{language:"javascript",children:n})]},e)};return Object(u.useEffect)((function(){if(a){var e=new L.map.Group,n={};J.forEach((function(e,a){var t=new L.map.Marker(e,{icon:new L.map.Icon(U("red",(a+1).toString()).trim())});n=Object(l.a)(Object(l.a)({},n),{},Object(R.a)({},"marker-".concat(a),t))})),b.current=n,e.addObjects(Object.values(n)),a.addObject(e)}}),[a]),Object(u.useEffect)((function(){o.forEach((function(e){var n=Object(j.d)(e.getPolygon());J.forEach((function(e,a){Object(j.e)(n,[e.lat,e.lng])&&b.current["marker-".concat(a)].setIcon(new L.map.Icon(U("blue",(a+1).toString()).trim()))}))}))}),[o]),Object(H.jsx)(I,{children:Object(H.jsxs)(K.a,{sx:{width:"100%"},children:[Object(H.jsx)(j.a,{apiKey:m,containerStyles:{height:400},onSuccess:function(e){return t(e.map)},children:function(e){return Object(H.jsx)(j.b,{map:e.map,color:"#000",onSuccess:function(e){return s((function(n){return[].concat(Object(F.a)(n),[e])}))}})}}),h(1,"\nuseEffect(() => {\n   polygonObjects.forEach((polygon) => {\n      const polygonCoordinates = getCoordinates(polygon.getPolygon());\n      samplePoints.forEach((point, index) => {\n         const isInPolygon = isPointInPolygon(polygonCoordinates, [point.lat, point.lng]);\n         if (isInPolygon)\n            markerGroup.current[marker-{index}].setIcon(\n               new H.map.Icon(standartIcon('blue', (index + 1).toString()).trim())\n            );\n      });\n   });\n}, [polygonObjects]);\n               ","With saved polygon, use getCoordinates() and isPointInPolygon() functions that are exported from library to check whether if marker in drawn polygon."),h(0,'\n<HereMapContainer\n   apiKey={hereApiKey}\n   containerStyles={{ height: 400 }}\n   onSuccess={(mapObjects) => setMapObject(mapObjects.map)}\n>\n   {(mapObjects) => (\n      <PolygonDraw\n         map={mapObjects.map}\n         color="#000"\n         onSuccess={(mainGroup) => setPolygonObjects((state) => [...state, mainGroup])}\n      />\n   )}\n</HereMapContainer>\n               ',"The onSuccess method passes the polygon object each time a polygon is drawn.")]})})},q=["children","value","index"],Z=function(e){var n=e.children,a=e.value,t=e.index,r=Object(s.a)(e,q);return Object(H.jsx)("div",Object(l.a)(Object(l.a)({role:"tabpanel",hidden:a!==t,id:"simple-tabpanel-".concat(t),"aria-labelledby":"simple-tab-".concat(t)},r),{},{children:a===t&&Object(H.jsx)(b.a,{sx:{p:3},children:Object(H.jsx)(p.a,{children:n})})}))};function _(e){return{id:"map-tab-".concat(e),"aria-controls":"map-tabpanel-".concat(e)}}var Q=function(e,n,a){return Object(H.jsxs)(b.a,{sx:{mb:2},children:[Object(H.jsx)(p.a,{sx:{mb:1},children:a}),Object(H.jsx)(E.a,{language:"javascript",children:n.trim()})]},e)},N=function(){var e=x.a.useState(0),n=Object(i.a)(e,2),a=n[0],t=n[1];return Object(H.jsx)(I,{children:Object(H.jsxs)(b.a,{sx:{width:"100%"},children:[Object(H.jsx)(b.a,{sx:{borderBottom:1,borderColor:"divider"},children:Object(H.jsxs)(h.a,{value:a,onChange:function(e,n){t(n)},"aria-label":"basic tabs example",children:[Object(H.jsx)(d.a,Object(l.a)({label:"Default Polygon Draw"},_(0))),Object(H.jsx)(d.a,Object(l.a)({label:"Just Color"},_(1))),Object(H.jsx)(d.a,Object(l.a)({label:"Drawing Styles"},_(2))),Object(H.jsx)(d.a,Object(l.a)({label:"Use Shortcuts"},_(3))),Object(H.jsx)(d.a,Object(l.a)({label:"Modifying Shortcuts"},_(4)))]})}),Object(H.jsxs)(Z,{value:a,index:0,children:[Q(0,"\n<HereMapContainer apiKey={hereApiKey} >\n   {(mapObjects) => <PolygonDraw map={mapObjects.map} />}\n</HereMapContainer>\n                  ","PolygonDraw with default props. It requires map object only and the map object will be pass to childrens from HereMapContainer."),Object(H.jsx)(j.a,{apiKey:m,children:function(e){return Object(H.jsx)(j.b,{map:e.map})}})]}),Object(H.jsxs)(Z,{value:a,index:1,children:[Q(1,'\n<HereMapContainer apiKey={hereApiKey}>\n   {(mapObjects) => <PolygonDraw map={mapObjects.map} color="#000" />}\n</HereMapContainer>\n                  ',"Color prop for just changing color without messing with all the style settings."),Object(H.jsx)(j.a,{apiKey:m,children:function(e){return Object(H.jsx)(j.b,{map:e.map,color:"#000"})}})]}),Object(H.jsxs)(Z,{value:a,index:2,children:[Q(2,"\n<HereMapContainer apiKey={hereApiKey}>\n   {(mapObjects) => (\n      <PolygonDraw\n         map={mapObjects.map}\n         drawingStyles={{\n            ...defaultDrawingStyles,\n            movingPolylineStyles: {\n               lineWidth: 5,\n               strokeColor: '#47577b',\n               lineJoin: 'round',\n               lineDash: [2],\n               lineDashOffset: 1,\n            },\n         }}\n      />\n   )}\n</HereMapContainer>\n                  ","Default Drawing Styles are exported from the library. Using it you can change certain things or set a completely new style."),Object(H.jsx)(j.a,{apiKey:m,children:function(e){return Object(H.jsx)(j.b,{map:e.map,drawingStyles:Object(l.a)(Object(l.a)({},j.c),{},{movingPolylineStyles:{lineWidth:5,strokeColor:"#47577b",lineJoin:"round",lineDash:[2],lineDashOffset:1}})})}})]}),Object(H.jsxs)(Z,{value:a,index:3,children:[Q(3,"\n<HereMapContainer apiKey={hereApiKey}>\n   {(mapObjects) => <PolygonDraw map={mapObjects.map} useShortcuts={false} />}\n</HereMapContainer>\n                  ","By default, shortcuts are used. To disable, set the useShortcuts prop to false."),Object(H.jsx)(j.a,{apiKey:m,children:function(e){return Object(H.jsx)(j.b,{map:e.map,useShortcuts:!1})}})]}),Object(H.jsxs)(Z,{value:a,index:4,children:[Q(4,"\n<HereMapContainer apiKey={hereApiKey} >\n   {(mapObjects) => (\n      <PolygonDraw\n         map={mapObjects.map}\n         shortcuts={{\n            undo: { keyCode: 66, char: 'B' },\n            merge: { keyCode: 84, char: 'T' },\n            cancel: { keyCode: 67, char: 'C' },\n         }}\n         onShortcutCallback={(data) => console.log(data)}\n      />\n   )}\n</HereMapContainer>\n                  ","You can change the default shortcuts."),Object(H.jsx)(j.a,{apiKey:m,children:function(e){return Object(H.jsx)(j.b,{map:e.map,shortcuts:{undo:{keyCode:66,char:"B"},merge:{keyCode:84,char:"T"},cancel:{keyCode:67,char:"C"}},onShortcutCallback:function(e){return console.log(e)}})}})]})]})})};var V=function(){return Object(H.jsx)(c.a,{basename:"/here-maps-drawing-examples",children:Object(H.jsxs)(o.c,{children:[Object(H.jsx)(o.a,{index:!0,path:"/",element:Object(H.jsx)(G,{})}),Object(H.jsx)(o.a,{path:"polygondraw/*",element:Object(H.jsx)(N,{})}),Object(H.jsx)(o.a,{path:"/useMarkerInPolygon",element:Object(H.jsx)(Y,{})})]})})},X=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,381)).then((function(n){var a=n.getCLS,t=n.getFID,r=n.getFCP,c=n.getLCP,o=n.getTTFB;a(e),t(e),r(e),c(e),o(e)}))},$=(a(320),a(321),a(322),a(323),a(324),document.getElementById("root"));r.a.render(Object(H.jsx)(V,{}),$),X()}},[[325,1,2]]]);
//# sourceMappingURL=main.a71e0812.chunk.js.map