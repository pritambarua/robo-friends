(this["webpackJsonprobo-friends"]=this["webpackJsonprobo-friends"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(7),a=n.n(s),o=(n(12),n(2)),i=n(3),h=n(5),b=n(4),u=(n(13),n(0)),l=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.call(this)}return Object(i.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5",children:[Object(u.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(this.props.id,"?size=200x200")}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:this.props.name}),Object(u.jsx)("p",{children:this.props.email})]})]})}}]),n}(r.Component),j=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.call(this)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.robots;return Object(u.jsx)("div",{children:e.map((function(e,t){return Object(u.jsx)(l,{id:e.id,name:e.name,email:e.email},t)}))})}}]),n}(r.Component),d=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.call(this)}return Object(i.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"},children:this.props.children})}}]),n}(r.Component),p=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.call(this)}return Object(i.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"pa2",children:Object(u.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:this.props.searchChange})})}}]),n}(r.Component),O=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return Object(u.jsxs)("div",{className:"tc",children:[Object(u.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(u.jsx)(p,{searchChange:this.onSearchChange}),Object(u.jsx)(d,{children:Object(u.jsx)(j,{robots:t})})]})}}]),n}(r.Component),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};n(15);a.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.6c9aa91f.chunk.js.map