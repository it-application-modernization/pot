"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[3732,7766,4423,2579],{6236:function(e,t,a){a.d(t,{A:function(){return N}});var l=a(6540),r=a(5474),n=a.n(r),s=a(1015),i=a(4698),c=a(5411),m=a(9634),o=a.n(m);var d=e=>{let{title:t,theme:a,tabs:r=[]}=e;return l.createElement("div",{className:o()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":r.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},l.createElement("div",{className:"bx--grid"},l.createElement("div",{className:"bx--row"},l.createElement("div",{className:"bx--col-lg-12"},l.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var u=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:r}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:n,subDirectory:i,branch:c}=a||r,m=n+"/edit/"+c+i+"/src/pages"+t;return n?l.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},l.createElement("div",{className:"bx--col"},l.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},p=a(6526),g=a(5540);let b=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.A)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,r=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((e=>{const t=n()(e,{lower:!0,strict:!0}),i=t===r,c=new RegExp(r+"/?(#.*)?$"),m=a.replace(c,t);return l.createElement("li",{key:e,className:o()({"PageTabs-module--selected-item--aBB0K":i},"PageTabs-module--list-item--024o6")},l.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:""+m},e))}));return l.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},l.createElement("div",{className:"bx--grid"},l.createElement("div",{className:"bx--row"},l.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},l.createElement("nav",{"aria-label":e},l.createElement("ul",{className:"PageTabs-module--list--xLqxG"},i))))))},t}(l.Component);var E=b,h=a(7012),v=a(919),P=a(185);var x=e=>{let{date:t}=e;const a=new Date(t);return t?l.createElement(P.fI,{className:"last-modified-date-module--row--XJoYQ"},l.createElement(P.VP,null,l.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var N=e=>{let{pageContext:t,children:a,location:r,Title:m}=e;const{frontmatter:o={},relativePagePath:g,titleType:b}=t,{tabs:P,title:N,theme:f,description:w,keywords:y,date:k}=o,{interiorTheme:T}=(0,v.A)(),{site:{pathPrefix:A}}=(0,s.useStaticQuery)("2456312558"),C=A?r.pathname.replace(A,""):r.pathname,B=P?C.split("/").filter(Boolean).slice(-1)[0]||n()(P[0],{lower:!0}):"",H=f||T;return l.createElement(c.A,{tabs:P,homepage:!1,theme:H,pageTitle:N,pageDescription:w,pageKeywords:y,titleType:b},l.createElement(d,{title:m?l.createElement(m,null):N,label:"label",tabs:P,theme:H}),P&&l.createElement(E,{title:N,slug:C,tabs:P,currentTab:B}),l.createElement(h.A,{padded:!0},a,l.createElement(u,{relativePagePath:g}),l.createElement(x,{date:k})),l.createElement(p.A,{pageContext:t,location:r,slug:C,tabs:P,currentTab:B}),l.createElement(i.A,null))}}}]);
//# sourceMappingURL=component---src-pages-api-connect-graph-ql-index-mdx-bcf2e7b3e5a0eb9350f6.js.map