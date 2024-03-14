"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[9331,7766,3732,4423,2579],{639:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return d}});var n=a(45),l=(a(6540),a(8619)),r=a(6236);const i=["components"],s={},o=(c="PageDescription",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.yg)("div",e)});var c;const m={_frontmatter:s},u=r.A;function d(e){let{components:t}=e,a=(0,n.A)(e,i);return(0,l.yg)(u,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)(o,{mdxType:"PageDescription"},(0,l.yg)("p",null,"Sites built with the Carbon Gatsby theme starter come ready to go with some\nhelpful npm scripts. You can run these commands by typing ",(0,l.yg)("inlineCode",{parentName:"p"},"yarn [command]")," or\n",(0,l.yg)("inlineCode",{parentName:"p"},"npm run [command]"))),(0,l.yg)("h2",null,"Clean"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"clean")," - this is used to clean gatsby’s cache and public directory. It\nshould be used sparingly, only when you’re experiencing weird errors or\ncaching issues.")),(0,l.yg)("h2",null,"Develop"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"dev")," - this is your primary for starting up your gatsby site for\ndevelopment"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"dev:clean")," - this is provided as a convenience; it first runs ",(0,l.yg)("inlineCode",{parentName:"li"},"clean"),"\nthen ",(0,l.yg)("inlineCode",{parentName:"li"},"dev"))),(0,l.yg)("h2",null,"Build"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"build")," - this is what you’ll use to bundle your site. Gatsby will minimize\nyour images and create a static, blazing fast site in your ",(0,l.yg)("inlineCode",{parentName:"li"},"public")," directory"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"serve")," - this can be run to serve the bundle locally after running ",(0,l.yg)("inlineCode",{parentName:"li"},"build"),".\nIt can be used to debug locally if any issues are encountered durring build."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"build:clean")," - this is a provided as a convenience, it first runs ",(0,l.yg)("inlineCode",{parentName:"li"},"clean"),"\nthen ",(0,l.yg)("inlineCode",{parentName:"li"},"build"))))}d.isMDXComponent=!0},6236:function(e,t,a){a.d(t,{A:function(){return f}});var n=a(6540),l=a(5474),r=a.n(l),i=a(1015),s=a(4698),o=a(5411),c=a(9634),m=a.n(c);var u=e=>{let{title:t,theme:a,tabs:l=[]}=e;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":l.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var d=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:l}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:s,branch:o}=a||l,c=r+"/edit/"+o+s+"/src/pages"+t;return r?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},g=a(6526),p=a(5540);let y=function(e){function t(){return e.apply(this,arguments)||this}return(0,p.A)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,l=a.split("/").filter(Boolean).slice(-1)[0],s=t.map((e=>{const t=r()(e,{lower:!0,strict:!0}),s=t===l,o=new RegExp(l+"/?(#.*)?$"),c=a.replace(o,t);return n.createElement("li",{key:e,className:m()({"PageTabs-module--selected-item--aBB0K":s},"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+c},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component);var b=y,h=a(7012),v=a(919),N=a(185);var E=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(N.fI,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(N.VP,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var f=e=>{let{pageContext:t,children:a,location:l,Title:c}=e;const{frontmatter:m={},relativePagePath:p,titleType:y}=t,{tabs:N,title:f,theme:w,description:x,keywords:P,date:C}=m,{interiorTheme:T}=(0,v.A)(),{site:{pathPrefix:k}}=(0,i.useStaticQuery)("2456312558"),D=k?l.pathname.replace(k,""):l.pathname,A=N?D.split("/").filter(Boolean).slice(-1)[0]||r()(N[0],{lower:!0}):"",B=w||T;return n.createElement(o.A,{tabs:N,homepage:!1,theme:B,pageTitle:f,pageDescription:x,pageKeywords:P,titleType:y},n.createElement(u,{title:c?n.createElement(c,null):f,label:"label",tabs:N,theme:B}),N&&n.createElement(b,{title:f,slug:D,tabs:N,currentTab:A}),n.createElement(h.A,{padded:!0},a,n.createElement(d,{relativePagePath:p}),n.createElement(E,{date:C})),n.createElement(g.A,{pageContext:t,location:l,slug:D,tabs:N,currentTab:A}),n.createElement(s.A,null))}}}]);
//# sourceMappingURL=component---src-pages-guides-npm-scripts-mdx-4d18b9b348720a90d3a3.js.map