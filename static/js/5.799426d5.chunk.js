(this.webpackJsonpportofolio=this.webpackJsonpportofolio||[]).push([[5],{48:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);function o(e){Object(r.useEffect)((function(){document.title="Alexandru Flicter - ".concat(e)}),[e])}},49:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(8),o=n(4),i=n(0),a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.root,o=t.rootMargin,a=t.threshold,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],s=Object(i.useRef)(null),l=Object(i.useRef)(null),d=Object(i.useCallback)((function(t){s.current&&l.current&&(l.current.unobserve(s.current),l.current.disconnect(),l.current=null),t&&(l.current=new IntersectionObserver(e,{root:n,rootMargin:o,threshold:a}),l.current.observe(t),s.current=t)}),[s,n,o,a].concat(Object(r.a)(c)));return d},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.root,n=e.rootMargin,c=e.threshold,s=e.unobserveOnEnter,l=e.target,d=e.onEnter,u=e.onLeave,h=e.defaultInView,b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],f=Object(i.useState)({inView:h||!1,entry:null,observer:null}),v=Object(o.a)(f,2),m=v[0],p=v[1],j=Object(i.useCallback)((function(e,t){var n=Object(o.a)(e,1)[0],r=t.thresholds.some((function(e){return n.intersectionRatio>=e}))&&n.isIntersecting;p({inView:r,entry:n,observer:t}),r&&s&&(t.unobserve(n.target),t.disconnect()),r?null===d||void 0===d||d(n,t):null===u||void 0===u||u(n,t)}),[d,u,s]),x=a(j,{root:t,rootMargin:n,threshold:c},[s].concat(Object(r.a)(b)));return Object(i.useEffect)((function(){(null===l||void 0===l?void 0:l.current)&&x(l.current)}),[l,x]),[x,m.inView,m.entry,m.observer]}},53:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var r=n(4),o=(n(0),n(53),n.p+"static/media/me.4d3feb2b.jpg"),i=n(21),a=n.n(i),c=n(18),s=n.n(c),l=n(19),d=n.n(l),u=n(22),h=n.n(u),b=n(49),f=n(1);function v(e){var t=e.text,n=Object(b.a)({unobserveOnEnter:!0,threshold:1}),o=Object(r.a)(n,2),i=o[0],a=o[1]?{transform:"rotateY(0deg)"}:{transform:"rotateY(-90deg)"};return Object(f.jsx)("p",{ref:i,style:a,children:t})}var m=n(48);function p(){var e=Object(b.a)({unobserveOnEnter:!0,threshold:1}),t=Object(r.a)(e,2),n=t[0],i=t[1]?{transform:"rotateY(0deg)"}:{transform:"rotateY(-90deg)"};return Object(m.a)("About"),Object(f.jsx)("div",{className:"aboutContainer",children:Object(f.jsxs)("div",{className:"aboutContentContainer",children:[Object(f.jsx)("h1",{className:"aboutMeTitle",children:"About Me"}),Object(f.jsxs)("div",{className:"aboutContentInner",children:[Object(f.jsxs)("div",{className:"aboutMeAvatar",children:[Object(f.jsx)("img",{src:o,className:"imgMe",alt:"Alexandru Flicter"}),Object(f.jsx)("h2",{children:"Alexandru Flicter"}),Object(f.jsx)("p",{className:"frontend",children:"Front-end Developer"}),Object(f.jsx)("div",{className:"socialMediaAboutPage",children:x.map((function(e){var t=e.href,n=e.icon;return Object(f.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:n},t)}))})]}),Object(f.jsxs)("div",{className:"aboutMeText",children:[g.map((function(e){return Object(f.jsx)(v,{text:e},e)})),Object(f.jsx)("div",{className:"techsAbout",ref:n,style:i,children:O.map((function(e){return Object(f.jsxs)("p",{children:["\u2b9e ",e]},e)}))})]})]})]})})}var j={width:30,height:30,color:"black",borderRadius:"10px",padding:"2px",boxShadow:"0px 0px 6px 0px var(--mainColor)","&:hover":{color:"var(--mainColor)",cursor:"pointer"}},x=[{href:"mailto:flicteralexandru@gmail.com",icon:Object(f.jsx)(d.a,{sx:j})},{href:"https://www.linkedin.com/in/alexandru-flicter-3b70ab220/",icon:Object(f.jsx)(a.a,{sx:j})},{href:"https://github.com/flicteram",icon:Object(f.jsx)(s.a,{sx:j})},{href:"https://www.facebook.com/profile.php?id=100009972224077",icon:Object(f.jsx)(h.a,{sx:j})}],g=["I am a self taught developer based in Bucharest, Romania.\n    I am a highly skilled Frontend Developer with three years of experience in the industry. \n    I've had the privilege to work for renowned companies such as Microsoft and Veelancing, \n    where I've made significant contributions to various projects, including the renowned Microsoft Teams, \n    and several medium-sized initiatives.","My journey in Frontend Development has equipped me with a deep understanding of web development technologies, frameworks, \n    and best practices. Crafting intuitive and visually appealing user interfaces has been my forte, enhancing the user experience \n    for the products and platforms I've been involved in.","One of my standout achievements was my involvement in the development of Microsoft Teams, \n    a widely used collaboration tool that has transformed the way people communicate and work together. \n    My contributions to this flagship project have likely left a lasting impact on millions of users worldwide.","My experience extends beyond tech giants like Microsoft. I've also lent my expertise to Veelancing, \n    where I played a vital role in executing and delivering various medium-sized projects. \n    My adaptability and versatility in handling different scales of projects \n    demonstrate my ability to excel in diverse work environments.","Here are a few technologies I feel most comfortable with: "],O=["HTML","CSS","JavaScript","TypeScript","GraphQl","Apollo","React","Next.js","Firebase","MaterialUI","Redux","Redux-Saga","Semantic UI","Node.js","Express.js","MongoDB","Socket.io"]}}]);
//# sourceMappingURL=5.799426d5.chunk.js.map