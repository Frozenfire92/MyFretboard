(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{139:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(145);t.default=function(e){return r.a.createElement(o.b,{path:e["*"]},r.a.createElement("h2",null,"Downloads"),r.a.createElement("p",null,"Coming soon!"))}},144:function(e,t,n){"use strict";var a=n(8);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(150)),o=a(n(151)),i=a(n(7)),s=a(n(51)),u=a(n(52)),l=a(n(4)),c=a(n(0)),d=n(22),f=n(146);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/MyFretboard/"+e)}var g={activeClassName:l.default.string,activeStyle:l.default.object},h=function(e){function t(t){var n;n=e.call(this,t)||this,(0,u.default)((0,s.default)((0,s.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,s.default)((0,s.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,s=t.onClick,u=t.onMouseEnter,l=(t.activeClassName,t.activeStyle,t.innerRef,t.state),g=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]),v=p(n);return c.default.createElement(d.Link,(0,o.default)({to:v,state:l,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){u&&u(e),___loader.hovering((0,f.parsePath)(n).pathname)},onClick:function(t){return s&&s(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),m(n,{state:l,replace:g})),!0}},h))},t}(c.default.Component);h.propTypes=(0,o.default)({},g,{innerRef:l.default.func,onClick:l.default.func,to:l.default.string.isRequired,replace:l.default.bool});var v=c.default.forwardRef(function(e,t){return c.default.createElement(h,(0,o.default)({innerRef:t},e))});t.default=v;var m=function(e,t){window.___navigate(p(e),t)};t.navigate=m;var b=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=b;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),b(e)}},145:function(e,t,n){"use strict";n.d(t,"a",function(){return f}),n.d(t,"b",function(){return p});n(73),n(32);var a=n(7),r=n.n(a),o=n(149),i=n(0),s=n.n(i),u=n(146),l=(n(153),n(154),n(155),{hand:"right",stringColor:"#000000",fretColor:"#000000",fingerColor:"#000000",fingerBorderColor:"#666666",fingerTextColor:"#FFFFFF",fretMarkerColor:"#333333",fretMarkerBorderColor:"#000000",fretMarkerOpacity:.1,showFingerNumberLabel:!0,showFretMarkers:!0,showFretBarLabel:!0,chordDiagramOrientation:"vertical"}),c=s.a.createContext({settings:{},data:{},state:{},updateSetting:function(e,t){},resetSettings:function(){},updateChord:function(e){}}),d=c.Provider,f=c.Consumer,p=function(e){function t(t){var n;return(n=e.call(this,t)||this).state=Object.assign({},{currentChord:{id:"a-major",placements:[0,2,2,2,0,null],fingerings:[0,2,1,3,0,0]}},n.load()),n}r()(t,e);var n=t.prototype;return n.load=function(){console.log("loading state");try{var e=localStorage.getItem("app");return e?JSON.parse(e):{settings:l}}catch(t){return{settings:l}}},n.save=function(){console.log("saving state to local storage");try{var e=JSON.stringify(this.state);localStorage.setItem("app",e)}catch(t){console.error("couldn't save",t)}},n.updateSetting=function(e,t){var n=this;console.log("updating state { "+e+": "+t+" }"),this.setState(function(n){var a,r=Object.assign({},n.settings,((a={})[e]=t,a));return console.log("new",r),Object.assign({},n,{settings:r})},function(){n.save()})},n.updateChord=function(e,t){this.setState({currentChord:e.find(function(e){return e.id===t})})},n.resetSettings=function(){var e=this;console.log("resetting state"),this.setState({settings:l},function(){e.save()})},n.render=function(){var e=this;return s.a.createElement(u.StaticQuery,{query:"2303772613",render:function(t){return s.a.createElement(d,{value:{settings:e.state.settings,data:{chords:t.allChordsJson.edges.map(function(e){return e.node}),chordOptions:t.allChordsJson.edges.map(function(e){return e.node}).map(function(e){var t=e.id;return{label:t,value:t}})},state:{currentChord:e.state.currentChord},updateSetting:function(t,n){return e.updateSetting(t,n)},resetSettings:function(){return e.resetSettings()},updateChord:function(n){return e.updateChord(t.allChordsJson.edges.map(function(e){return e.node}),n)}}},s.a.createElement("header",null,s.a.createElement("h1",null,t.site.siteMetadata.title),s.a.createElement("nav",null,s.a.createElement(u.Link,{to:"/chords"},"Chords"),s.a.createElement(u.Link,{to:"/fretboard"},"Fretboard"),s.a.createElement(u.Link,{to:"/downloads"},"Downloads"),s.a.createElement(u.Link,{to:"/settings"},"Settings"))),s.a.createElement("main",{className:e.props.path},e.props.children))},data:o})},t}(i.Component)},146:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(144),u=n.n(s);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var l=n(147),c=n.n(l);n.d(t,"PageRenderer",function(){return c.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},147:function(e,t,n){var a;e.exports=(a=n(152))&&a.default||a},149:function(e){e.exports={data:{site:{siteMetadata:{title:"My Fretboard"}},allChordsJson:{edges:[{node:{id:"a-major",placements:[0,2,2,2,0,null],fingerings:[0,2,1,3,0,0],bar:null,variations:[{placements:[0,5,2,null,3,0],fingerings:[0,4,1,0,3,0]},{placements:[5,null,null,7,4,0],fingerings:[2,0,0,4,1,0]}]}},{node:{id:"a-sharp-major",placements:[0,3,3,3,0,null],fingerings:[0,4,3,2,0,0],bar:{start:1,end:5,fret:1},variations:null}},{node:{id:"b-major",placements:[0,4,4,4,0,null],fingerings:[0,4,3,2,0,0],bar:{start:1,end:5,fret:2},variations:null}},{node:{id:"c-major",placements:[0,1,0,2,3,null],fingerings:[0,1,0,2,3,0],bar:null,variations:[{placements:[0,5,5,5,0,0],fingerings:[0,4,3,2,0,0]}]}},{node:{id:"c-sharp-major",placements:[0,6,6,6,0,0],fingerings:[0,4,3,2,0,0],bar:{start:1,end:6,fret:4},variations:null}},{node:{id:"d-major",placements:[2,3,2,0,null,null],fingerings:[2,3,1,0,0,0],bar:null,variations:null}},{node:{id:"e-major",placements:[0,0,1,2,2,0],fingerings:[0,0,1,3,2,0],bar:null,variations:null}},{node:{id:"f-major",placements:[0,0,2,3,3,0],fingerings:[0,0,2,4,3,0],bar:{start:1,end:6,fret:1},variations:null}},{node:{id:"g-major",placements:[3,3,0,0,2,3],fingerings:[4,3,0,0,1,2],bar:null,variations:null}}]}}}},150:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},151:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},152:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(53),u=n(2),l=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},153:function(e,t,n){},154:function(e,t,n){},155:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-downloads-js-a734a47db8beb36ca3b3.js.map