"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[6119,7766,3732,4423,2579],{551:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return d}});var n=a(45),o=(a(6540),a(8619)),r=a(6236);const l=["components"],s={},i=(m="PageDescription",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",e)});var m;const p={_frontmatter:s},c=r.A;function d(e){let{components:t}=e,a=(0,n.A)(e,l);return(0,o.yg)(c,Object.assign({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(i,{mdxType:"PageDescription"},(0,o.yg)("p",null,"In the world of Gatsby themes,\n",(0,o.yg)("a",{parentName:"p",href:"https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/"},"component shadowing"),"\nis an extremely powerful way for developers to provide their ",(0,o.yg)("em",{parentName:"p"},"own")," components\nfor the theme to use over the defaults. You can shadow any file that is\nprocessed by webpack. This includes sass files, mdx files, and the react\ncomponents themselves.")),(0,o.yg)("h2",null,"Caveats"),(0,o.yg)("p",null,"If you completely shadow a file you won’t get future updates to that individual\nfile. These are some golden rules to make sure you stay as close to the theme as\npossible and not forgo future updates."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Open a\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/carbon-design-system/gatsby-theme-carbon/issues/new"},"quick issue"),"\nin the gatsby-theme-carbon repo to make sure we’re not working on your\nchange.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Shadow as few files as you can to achieve your goal. If you can shadow just a\nsingle file, that’s ideal.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"If you do end up shadowing a component, please tell us! We might use it to\ninform future development."))),(0,o.yg)("h2",null,"Shadowing basics"),(0,o.yg)("p",null,"In order to shadow a component in the theme, all you need to do is place a directory\nin the ",(0,o.yg)("inlineCode",{parentName:"p"},"src/gatsby-theme-carbon")," in your project. The directory should have the same\nname as the file you’re shadowing."),(0,o.yg)("p",null,"In order to place your own title in the Header component:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Create a directory the same name as the component you wish to shadow.\nEverything after ",(0,o.yg)("inlineCode",{parentName:"p"},"src/gatsby-theme-carbon/")," refers to the\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src"},"src directory of gatsby-theme-carbon"),".")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Create a file inside of the directory that matches the component you want to shadow. For example: ",(0,o.yg)("inlineCode",{parentName:"p"},"src/gatsby-theme-carbon/components/Header/index.js"),". ",(0,o.yg)("em",{parentName:"p"},"If shadowing Footer or Header the file must be named ",(0,o.yg)("strong",{parentName:"em"},(0,o.yg)("inlineCode",{parentName:"strong"},"index.js"))))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Import the component you wish to shadow by providing the full url pointing at\nthe component within the theme")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Your component will ",(0,o.yg)("strong",{parentName:"p"},"receive the same props")," as the one you’re shadowing.\nYou’ll can log those props to see if you’ll need any of them")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Regardless, you should ",(0,o.yg)("em",{parentName:"p"},"ALWAYS")," spread the extra props into the original\ncomponent, this allows the core component to function as needed. Even if it\ndoesn’t receive any props now, it might in the future.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Provide your new, custom component as the default export"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Header from 'gatsby-theme-carbon/src/components/Header';\n\nconst CustomHeader = (props) => (\n  <Header {...props}>\n    <span>Gatsby theme</span>&nbsp;Carbon\n  </Header>\n);\n\nexport default CustomHeader;\n")),(0,o.yg)("h2",null,"Components you’ll need to shadow"),(0,o.yg)("p",null,"We’ve already provided pre-shadowed, dummy components however these are the ones\nyou’ll definitely need to shadow."),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Component"),(0,o.yg)("th",{parentName:"tr",align:null},"Path"),(0,o.yg)("th",{parentName:"tr",align:null},"Description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"ResourceLinks"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/example/src/gatsby-theme-carbon/components/LeftNav/ResourceLinks.js"},(0,o.yg)("inlineCode",{parentName:"a"},"src/gatsby-theme-carbon/components/LeftNav/ResourceLinks.js"))),(0,o.yg)("td",{parentName:"tr",align:null},"The bottom links on the SideNav, pass ",(0,o.yg)("inlineCode",{parentName:"td"},"shouldOpenNewTabs")," to open links externally")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Footer"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/example/src/gatsby-theme-carbon/components/Footer/index.js"},(0,o.yg)("inlineCode",{parentName:"a"},"src/gatsby-theme-carbon/components/Footer/index.js"))),(0,o.yg)("td",{parentName:"tr",align:null},"The links and content at the bottom of each page")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Header"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/example/src/gatsby-theme-carbon/components/Header/index.js"},(0,o.yg)("inlineCode",{parentName:"a"},"src/gatsby-theme-carbon/components/Header/index.js"))),(0,o.yg)("td",{parentName:"tr",align:null},"The text in the top left corner of the UI Shell")))))}d.isMDXComponent=!0},6236:function(e,t,a){a.d(t,{A:function(){return v}});var n=a(6540),o=a(5474),r=a.n(o),l=a(1015),s=a(4698),i=a(5411),m=a(9634),p=a.n(m);var c=e=>{let{title:t,theme:a,tabs:o=[]}=e;return n.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":o.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var d=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:o}}}=(0,l.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:s,branch:i}=a||o,m=r+"/edit/"+i+s+"/src/pages"+t;return r?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},g=a(6526),h=a(5540);let y=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.A)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,o=a.split("/").filter(Boolean).slice(-1)[0],s=t.map((e=>{const t=r()(e,{lower:!0,strict:!0}),s=t===o,i=new RegExp(o+"/?(#.*)?$"),m=a.replace(i,t);return n.createElement("li",{key:e,className:p()({"PageTabs-module--selected-item--aBB0K":s},"PageTabs-module--list-item--024o6")},n.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:""+m},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component);var u=y,b=a(7012),N=a(919),f=a(185);var w=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(f.fI,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(f.VP,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var v=e=>{let{pageContext:t,children:a,location:o,Title:m}=e;const{frontmatter:p={},relativePagePath:h,titleType:y}=t,{tabs:f,title:v,theme:x,description:E,keywords:k,date:C}=p,{interiorTheme:P}=(0,N.A)(),{site:{pathPrefix:T}}=(0,l.useStaticQuery)("2456312558"),H=T?o.pathname.replace(T,""):o.pathname,j=f?H.split("/").filter(Boolean).slice(-1)[0]||r()(f[0],{lower:!0}):"",L=x||P;return n.createElement(i.A,{tabs:f,homepage:!1,theme:L,pageTitle:v,pageDescription:E,pageKeywords:k,titleType:y},n.createElement(c,{title:m?n.createElement(m,null):v,label:"label",tabs:f,theme:L}),f&&n.createElement(u,{title:v,slug:H,tabs:f,currentTab:j}),n.createElement(b.A,{padded:!0},a,n.createElement(d,{relativePagePath:h}),n.createElement(w,{date:C})),n.createElement(g.A,{pageContext:t,location:o,slug:H,tabs:f,currentTab:j}),n.createElement(s.A,null))}}}]);
//# sourceMappingURL=component---src-pages-guides-shadowing-mdx-a62e7852f9bec145a56e.js.map