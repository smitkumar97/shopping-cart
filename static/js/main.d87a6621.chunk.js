(this["webpackJsonpcounter-app"]=this["webpackJsonpcounter-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n.n(r),s=n(7),u=n.n(s);n(13),n.p,n(14);var i=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},o=(n(15),n(2)),l=n(3),d=n(5),v=n(4),b=function(e){Object(d.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={value:e.props.value},e.handeIncreament=function(){e.setState({value:e.state.value+1})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:this.getBadgeClasses(),children:this.formatCount()}),Object(a.jsx)("button",{onClick:this.handeIncreament,className:"btn btn-secondary btn-sm m-2",children:"Increament"}),Object(a.jsx)("button",{onClick:function(){return e.props.onDelete(e.props.id)},className:"btn btn-danger btn-sm m-2",children:"Delete"}),Object(a.jsx)("br",{})]})}},{key:"getBadgeClasses",value:function(){var e="badge m-2 badge-";return e+=0===this.state.value?"warning":"primary"}},{key:"formatCount",value:function(){var e=this.state.value;return 0===e?"Zero":e}}]),n}(r.Component),h=function(e){Object(d.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={counters:[{id:1,value:4},{id:2,value:0},{id:3,value:0},{id:4,value:0},{id:5,value:5}]},e.handleDelete=function(e){console.log("event called",e)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{children:this.state.counters.map((function(t){return Object(a.jsx)(b,{onDelete:e.handleDelete,value:t.value},t.id)}))})}}]),n}(r.Component);u.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root")),i()}},[[16,1,2]]]);
//# sourceMappingURL=main.d87a6621.chunk.js.map