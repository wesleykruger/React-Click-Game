(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/HarryPotter.f60505c7.jpg"},function(e,t,a){e.exports=a.p+"static/media/Dobby.da667e19.jpg"},function(e,t,a){e.exports=a.p+"static/media/Dumbledore.069d0867.jpg"},function(e,t,a){e.exports=a.p+"static/media/FredandGeorge.87c71936.jpg"},function(e,t,a){e.exports=a.p+"static/media/Ginny.0fea9b04.jpg"},function(e,t,a){e.exports=a.p+"static/media/Hermione.69699270.jpg"},function(e,t,a){e.exports=a.p+"static/media/Lupin.667a600a.jpg"},function(e,t,a){e.exports=a.p+"static/media/Ron.0bfeb75c.jpg"},function(e,t,a){e.exports=a.p+"static/media/Sirius.c1e4dc36.jpg"},function(e,t,a){e.exports=a.p+"static/media/Snape.8848dfd7.jpg"},function(e,t,a){e.exports=a.p+"static/media/Tonks.bfa0aed3.jpg"},function(e,t,a){e.exports=a.p+"static/media/Voldemort.826de6e4.jpg"},,,function(e,t,a){e.exports=a(32)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),o=a.n(c);a(26);var s=a(3),i=a(4),l=a(18),m=a(5),u=a(19);function p(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function d(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function f(e){var t=e.size,a=e.children;return r.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}function h(e){return r.a.createElement("div",e,r.a.createElement("img",{alt:e.name,src:e.src}),e.children)}a(28);var E=a(6),v=a(7),g=a(8),b=a(9),k=a(10),y=a(11),A=a(12),j=a(13),w=a(14),C=a(15),x=a(16),S=a(17),z=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={banner:"Choose characters!",score:0,topScore:0,charArr:[{name:"Harry",src:E},{name:"Dobby",src:v},{name:"Dumbledore",src:g},{name:"FredAndGeorge",src:b},{name:"Ginny",src:k},{name:"Hermione",src:y},{name:"Lupin",src:A},{name:"Ron",src:j},{name:"Sirius",src:w},{name:"Snape",src:C},{name:"Tonks",src:x},{name:"Voldemort",src:S}],clickedArr:[]},a.handleCharClick=function(e){if(a.state.clickedArr.includes(e))a.setState({score:0,banner:"Wrong! Try again!"});else{var t=a.state.score+=1,n=[];n.push(e),a.setState({clickedArr:n,score:t,banner:"You guessed correctly!"}),a.state.score+1>a.state.topScore&&a.setState({topScore:a.state.score})}console.log("about to shuffle line 117 : "),console.dir(a.state.charArr),a.shuffleArray(a.state.charArr)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.dir(this.state.charArr),this.shuffleArray(this.state.charArr)}},{key:"shuffleArray",value:function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e}},{key:"render",value:function(){for(var e=this,t=[],a=[],n=[],c=0;c<this.state.charArr.length;c++)c<4?t.push(this.state.charArr[c]):c<8?a.push(this.state.charArr[c]):n.push(this.state.charArr[c]);return r.a.createElement("div",{className:"background"},r.a.createElement(p,{fluid:!0},r.a.createElement(d,null,r.a.createElement("span",{className:"navbar"},r.a.createElement(f,{size:"4"},r.a.createElement("div",{className:"navbar-brand"},"Harry Potter React Clicky Game")),r.a.createElement(f,{size:"4"},this.state.banner),r.a.createElement(f,{size:"4"},"Score: ",this.state.score," | Top Score: ",this.state.topScore))),r.a.createElement("span",{className:"playArea"},r.a.createElement(d,null,r.a.createElement(f,{size:"2"}),t.map(function(t){return r.a.createElement(f,{size:"2"},r.a.createElement(h,{onClick:function(){return e.handleCharClick(t.name)},key:t.name,name:t.name,src:t.src}))})),r.a.createElement(d,null,r.a.createElement(f,{size:"2"}),a.map(function(t){return r.a.createElement(f,{size:"2"},r.a.createElement(h,{onClick:function(){return e.handleCharClick(t.name)},key:t.name,name:t.name,src:t.src}))})),r.a.createElement(d,null,r.a.createElement(f,{size:"2"}),n.map(function(t){return r.a.createElement(f,{size:"2"},r.a.createElement(h,{onClick:function(){return e.handleCharClick(t.name)},key:t.name,name:t.name,src:t.src}))})))))}}]),t}(n.Component);a(30);var N=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[20,2,1]]]);
//# sourceMappingURL=main.c7dee7a3.chunk.js.map