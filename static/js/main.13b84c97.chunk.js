(this.webpackJsonphangman=this.webpackJsonphangman||[]).push([[0],{11:function(n,e,t){"use strict";t.r(e);var s=t(1),c=t(4),a=t.n(c),r=t(2),i=(t(9),t(0));var o=function(n){return Object(i.jsx)("div",{className:"hangman",children:["hangman_bar_bottom","hangman_bar_vertical","hangman_bar_top","hangman_rope","hangman_head","hangman_body","hangman_hand_1","hangman_hand_2","hangman_leg_1","hangman_leg_2"].map((function(e,t){return n.count>t?Object(i.jsx)("div",{className:e},t):null}))})},u=function(n){var e=function(n){n=n.split("");var e=[];return n.forEach((function(n){e.includes(n)?console.log(""):e.push(n)})),e.length}(n.words.missing);return Object(i.jsxs)(i.Fragment,{children:[e===n.words.guessed.length?Object(i.jsx)(d,{win:!0,word:n.words.missing}):null,10===n.failed?Object(i.jsx)(d,{win:!1,word:n.words.missing}):null]})},d=function(n){var e="Your missing word was: ".concat(n.word),t="Your missing word was: ".concat(n.word);return Object(i.jsxs)("div",{className:"gameEnding",value:n.win,children:[n.win?"Congrats! You win.":"You lose :+(. ",Object(i.jsx)("br",{}),n.win?e:t]})};function j(n){return Object(i.jsx)("div",{children:n.missed.map((function(n,e){return Object(i.jsx)("p",{children:n},e)}))})}function l(n){return Object(i.jsx)("div",{className:"hidden",children:n.content.split("").map((function(e,t){return Object(i.jsx)("p",{children:n.guessed.includes(e)?e:null},t.toString())}))})}var b=function(){var n=Object(s.useState)(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","v","w","x","y","z"]),e=Object(r.a)(n,2),t=e[0],c=e[1],a=Object(s.useState)([]),d=Object(r.a)(a,2),b=d[0],h=d[1],m=Object(s.useState)(""),g=Object(r.a)(m,2),O=g[0],f=g[1],w=Object(s.useState)([]),x=Object(r.a)(w,2),p=x[0],v=x[1],_=Object(s.useState)(0),k=Object(r.a)(_,2),N=k[0],S=k[1],y=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","v","w","x","y","z"],Y=new Request("https://random-word-api.herokuapp.com/word?number=1"),C=function(n){c(n)},E=function(){fetch(Y).then((function(n){return n.json()})).then((function(n){return f(n[0])}))};window.onload=function(){E()};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(u,{failed:N,words:{missing:O,guessed:p}}),Object(i.jsxs)("div",{className:"app",children:[Object(i.jsx)(l,{content:O,guessed:p}),Object(i.jsx)(o,{count:N}),Object(i.jsx)("div",{className:"keyboard",children:t.map((function(n,e){return Object(i.jsx)("button",{onClick:function(){if(O.includes(n)){var e=p;e[e.length]=n,v(e)}else{var s=b;s[s.length]=n,S(N+1),function(n){h(n)}(s)}var c=t.filter((function(e){return e!==n}));C(c)},children:n},e)}))}),Object(i.jsx)("div",{className:"missedLetters",children:Object(i.jsx)(j,{missed:b})}),Object(i.jsx)("button",{className:"newWord",onClick:function(){E(),C(y),h([]),S(0),v([])},children:"Roll new Word"})]})]})};a.a.render(Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(b,{})}),document.getElementById("root"))},9:function(n,e,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.13b84c97.chunk.js.map