(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{164:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return f});var r=a(8),i=a.n(r),n=a(0),s=a.n(n),o=a(165),l=a(172),d=a(169),c=a(170),u=a(166),A=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return s.a.createElement(d.a,{location:this.props.location,title:t},s.a.createElement(c.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),s.a.createElement(l.a,null),a.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return s.a.createElement("div",{key:t.fields.slug},s.a.createElement("h3",{style:{marginBottom:Object(u.a)(.25)}},s.a.createElement(o.a,{style:{boxShadow:"none"},to:t.fields.slug},a)),s.a.createElement("small",null,t.frontmatter.date),s.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}))},t}(s.a.Component);t.default=A;var f="1623555389"},165:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var r=a(0),i=a.n(r),n=a(5),s=a.n(n),o=a(40),l=a.n(o);a.d(t,"a",function(){return l.a});a(167);var d=i.a.createContext({});function c(e){var t=e.staticQueryData,a=e.data,r=e.query,n=e.render,s=a?a.data:t[r]&&t[r].data;return i.a.createElement(i.a.Fragment,null,s&&n(s),!s&&i.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,a=e.query,r=e.render,n=e.children;return i.a.createElement(d.Consumer,null,function(e){return i.a.createElement(c,{data:t,query:a,render:r||n,staticQueryData:e})})};u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},166:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d});var r=a(177),i=a.n(r),n=a(178),s=a.n(n);s.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete s.a.googleFonts;var o=new i.a(s.a);var l=o.rhythm,d=o.scale},167:function(e,t,a){var r;e.exports=(r=a(168))&&r.default||r},168:function(e,t,a){"use strict";a.r(t);a(41);var r=a(0),i=a.n(r),n=a(5),s=a.n(n),o=a(64),l=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},169:function(e,t,a){"use strict";a(41);var r=a(8),i=a.n(r),n=a(0),s=a.n(n),o=a(165),l=a(166),d=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,r=t.title,i=t.children;return e="/"===a.pathname?s.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},s.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)):s.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},s.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),s.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},e,i,s.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",s.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},t}(s.a.Component);t.a=d},170:function(e,t,a){"use strict";var r=a(171),i=a(0),n=a.n(i),s=a(5),o=a.n(s),l=a(179),d=a.n(l),c=a(165);function u(e){var t=e.description,a=e.lang,i=e.meta,s=e.keywords,o=e.title;return n.a.createElement(c.b,{query:A,render:function(e){var r=t||e.site.siteMetadata.description;return n.a.createElement(d.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:o},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:r}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(i)})},data:r})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u;var A="1025518380"},171:function(e){e.exports={data:{site:{siteMetadata:{title:"X@L.com",description:"A journey into all things web tech.",author:"Xavier Lozinguez"}}}}},172:function(e,t,a){"use strict";a(173);var r=a(175),i=a(0),n=a.n(i),s=a(165),o=a(176),l=a.n(o),d=a(166);var c="4007731267";t.a=function(){return n.a.createElement(s.b,{query:c,render:function(e){var t=e.site.siteMetadata,a=t.author,r=t.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(d.a)(2.5)}},n.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,"Written by ",n.a.createElement("strong",null,a)," who lives and works in New Jersey (sometimes) building useful things."," ",n.a.createElement("a",{href:"https://twitter.com/"+r.twitter},"You should follow him on Twitter")))},data:r})}},173:function(e,t,a){"use strict";a(174)("fixed",function(e){return function(){return e(this,"tt","","")}})},174:function(e,t,a){var r=a(9),i=a(12),n=a(25),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},175:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAEDBAIF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAfO0ZLpYQTL2VWD/xAAZEAADAQEBAAAAAAAAAAAAAAAAAQIRECH/2gAIAQEAAQUCKjJNHXm9bP/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABgQAAIDAAAAAAAAAAAAAAAAAAABECAx/9oACAEBAAY/AhNTtf/EABgQAQEBAQEAAAAAAAAAAAAAAAEAESEx/9oACAEBAAE/IQhYLvullycuN6V6QWFtk2//2gAMAwEAAgADAAAAEGQ/Pv/EABYRAQEBAAAAAAAAAAAAAAAAAAERIP/aAAgBAwEBPxAkcf/EABYRAQEBAAAAAAAAAAAAAAAAABEBIP/aAAgBAgEBPxCrj//EABsQAQACAwEBAAAAAAAAAAAAAAEAESExYUFR/9oACAEBAAE/ECCcoONRzjgC2WENxQjrbAb1yfd7FQDpn//Z",width:50,height:50,src:"/static/98091a853298a8e9eff3c2ed218ef89a/9b664/profile-pic.jpg",srcSet:"/static/98091a853298a8e9eff3c2ed218ef89a/9b664/profile-pic.jpg 1x,\n/static/98091a853298a8e9eff3c2ed218ef89a/06a10/profile-pic.jpg 1.5x,\n/static/98091a853298a8e9eff3c2ed218ef89a/f1b5a/profile-pic.jpg 2x"}}},site:{siteMetadata:{author:"Xavier Lozinguez",social:{twitter:"xlozinguez"}}}}}},176:function(e,t,a){"use strict";var r=a(10);t.__esModule=!0,t.default=void 0;var i,n=r(a(8)),s=r(a(42)),o=r(a(96)),l=r(a(97)),d=r(a(0)),c=r(a(5)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t},A=Object.create({}),f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return A[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,g="undefined"!=typeof window,h=g&&window.IntersectionObserver,m=new WeakMap;var y=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(m.has(e.target)){var t=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),m.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),m.set(e,t)),function(){a.unobserve(e),m.delete(e)}},b=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+r+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+o+l+a+i+t+s+n+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},E=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,A=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},A,{onLoad:s,onError:c,ref:t,loading:u,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});E.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var v=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=g&&f(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!p&&h&&!t.critical&&!a.seenBefore;var r=t.critical||g&&(p||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=y(e,function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,A[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,A=void 0===c?{}:c,f=e.placeholderClassName,p=e.fluid,g=e.fixed,h=e.backgroundColor,m=e.durationFadeIn,y=e.Tag,v=e.itemProp,w=e.loading,S=!1===this.state.fadeIn||this.state.imgLoaded,j=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,l.default)({opacity:S?1:0,transition:j?"opacity "+m+"ms":"none"},o),B="boolean"==typeof h?"lightgray":h,L={transitionDelay:m+"ms"},I=(0,l.default)({opacity:this.state.imgLoaded?0:1},j&&L,o,A),x={title:t,alt:this.state.isVisible?"":a,style:I,className:f};if(p){var Q=p;return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(Q.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/Q.aspectRatio+"%"}}),B&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:B,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},j&&L)}),Q.base64&&d.default.createElement(E,(0,l.default)({src:Q.base64},x)),Q.tracedSVG&&d.default.createElement(E,(0,l.default)({src:Q.tracedSVG},x)),this.state.isVisible&&d.default.createElement("picture",null,Q.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:Q.srcSetWebp,sizes:Q.sizes}),d.default.createElement(E,{alt:a,title:t,sizes:Q.sizes,src:Q.src,crossOrigin:this.props.crossOrigin,srcSet:Q.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,l.default)({alt:a,title:t,loading:w},Q))}}))}if(g){var O=g,C=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:O.width,height:O.height},n);return"inherit"===n.display&&delete C.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:C,ref:this.handleRef,key:"fixed-"+JSON.stringify(O.srcSet)},B&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:B,width:O.width,opacity:this.state.imgLoaded?0:1,height:O.height},j&&L)}),O.base64&&d.default.createElement(E,(0,l.default)({src:O.base64},x)),O.tracedSVG&&d.default.createElement(E,(0,l.default)({src:O.tracedSVG},x)),this.state.isVisible&&d.default.createElement("picture",null,O.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),d.default.createElement(E,{alt:a,title:t,width:O.width,height:O.height,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,l.default)({alt:a,title:t,loading:w},O))}}))}return null},t}(d.default.Component);v.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var w=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),S=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});v.propTypes={resolutions:w,sizes:S,fixed:w,fluid:S,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"])};var j=v;t.default=j}}]);
//# sourceMappingURL=component---src-pages-index-js-fd736ca8e9c2e8bee5a7.js.map