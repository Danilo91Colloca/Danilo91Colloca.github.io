(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{"2OfA":function(e,t,n){"use strict";n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("E5k/"),n("sPse");var i=n("q1tI"),a=n.n(i),o=n("YwZP"),r=n("/MKj"),s=n("ECId"),c=n("HoNQ"),l=n("bU75"),u=n("6Cxt"),m=n("5SHK");t.a=function(e){var t,n=e.children,i=e.isMobile,b=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["children","isMobile"]),p=Object(r.d)((function(e){return e.site.ctaUrls})),d=Object(o.useLocation)().search;return a.a.createElement(m.c,Object.assign({href:null!==(t=p.signUp)&&void 0!==t?t:s.a+"/signup"+(d||""),isSmall:!0,isMobile:i,onClick:function(){Object(l.c)({businessEventName:l.a.GO_TO_SIGNUP_CLICK}),Object(u.a)(c.c.CLICK_CTA_SIGNUP_HEADER)}},b),n)}},"5SHK":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return c}));var i=n("vOnD"),a=n("YEJx"),o=n("ww3E"),r=i.e.div.withConfig({displayName:"styles__ButtonsWrapper",componentId:"sc-1kjmbkw-0"})(["display:flex;flex-direction:row;align-items:center;flex-shrink:0;flex-wrap:nowrap;margin-left:2rem;& > a,& > button{margin-right:1rem;margin-bottom:0;white-space:nowrap;&:last-child{margin-right:0;}}& > button{margin-left:0;}",";",";"],Object(a.b)("isMobile",Object(i.d)(["position:fixed;z-index:110;bottom:0;right:0;min-height:4.5rem;width:100vw;background:",";box-shadow:0 -4px 8px rgba(25,28,31,0.04),0px -1px 0px rgba(25,28,31,0.04);justify-content:center;& > a,& > button{display:block;margin:0.5rem;&:last-child{margin-right:0.5rem;}}"],Object(a.e)("menu.buttons.background"))),Object(a.a)("isVisible",Object(i.d)(["display:none;"]))),s=Object(i.e)(o.a.Primary).withConfig({displayName:"styles__StyledSignUpButton",componentId:"sc-1kjmbkw-1"})(["margin-right:0;",";"],Object(a.b)("isMobile",Object(i.d)(["max-width:20rem;text-align:center;"]))),c=Object(i.e)(o.a).withConfig({displayName:"styles__StyledSecondaryButton",componentId:"sc-1kjmbkw-2"})(["& + button{margin-left:0;}"])},FHNO:function(e,t,n){"use strict";var i=n("q1tI"),a=n.n(i),o=n("/MKj"),r=n("62bK"),s=n("XFqt"),c=n("cKU0"),l=n("orZN"),u=n("X2HK"),m=n("r/qb"),b=n("W102"),p=n.n(b),d=n("6Cxt"),g=n("ww3E"),h=function(e){var t=e.text,n=e.isSmall,i=e.mode,o=e.hasAppLink,r=e.actions.setPopup,b=e.isInWaitingList,h=e.pageName,f=e.GALabel,k=e.onButtonClick,y=e.className,v=e.color,C=e.background,O=e.hover,j=function(){b?r({getEarlyAccess:{active:!0,mode:i,pageName:h}}):(Object(d.b)({event:"getTheAppStarted",productName:i,pageName:h}),r({getTheApp:{active:!0,mode:i,pageName:h,GALabel:f}}),Object(m.e)({action:c.a.OPENED,pageName:h,label:f+"Form"}))},w=!!Object(l.B)("p")||Object(u.c)("promo"),E=o&&!w&&Object(l.E)();return a.a.createElement(g.a.Primary,{onClick:function(){k&&k(),E&&!b?E&&!b&&(Object(d.b)({event:"getTheAppMobile",productName:i,pageName:h,eventCallback:function(){p.a.location.href=s.b[E]}}),Object(m.e)({action:c.a.SUCCEEDED,pageName:h,label:f+"Button"})):j()},isSmall:n,"data-testid":e["data-testid"],className:y,color:v,background:C,hoverBg:O},t)};h.defaultProps={mode:"standard",GALabel:"HeroWidget",hasAppLink:!0};var f=Object(l.Q)(r.a.site);t.a=Object(o.b)(null,f)(h)},mT35:function(e,t,n){"use strict";n.r(t);n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("E5k/");var i=n("q1tI"),a=n.n(i),o=n("hVNd"),r=n("Pmm0"),s=n("vN+2"),c=n.n(s),l=n("Wbzz"),u=n("W102"),m=n.n(u),b=n("L1jG"),p=n("8Pga"),d=n("9kay"),g=n("FHNO"),h=n("3YLV"),f=n("ww3E"),k=n("6Cxt"),y=n("r/qb"),v=n("cKU0"),C=(n("sPse"),n("YwZP")),O=n("/MKj"),j=n("ECId"),w=n("rylg"),E=n("HoNQ");var S=function(e){var t=e.children,n=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["children"]);return a.a.createElement(f.a.Primary,Object.assign({href:j.b,isSmall:!0,target:"_blank",rel:"noopener noreferrer"},n),t)},I=n("2OfA"),L=function(e){var t=Object(d.c)("pages.siteApp").t;return e.isInBusinessWaitingList?a.a.createElement(w.a,{isSmall:!0}):a.a.createElement(I.a,{target:"_blank"},t("cta.signUp"))},N=n("5SHK"),x=function(){return Object(k.a)(E.c.CLICK_CTA_LOGIN_HEADER)},M=function(){return Object(k.a)(E.c.CLICK_CTA_PARTNER_HEADER)},_=function(e){var t,n=e.isStickyButton,i=e.renderFlags,o=e.isMobile,r=Object(d.c)("pages.siteApp").t,s=Object(C.useLocation)().search,c=Object(O.d)((function(e){return e.site.ctaUrls}));return n?a.a.createElement(L,e):a.a.createElement(a.a.Fragment,null,a.a.createElement(N.b,{href:null!==(t=c.signIn)&&void 0!==t?t:j.a+"/signin"+(s||""),hasBorder:!1,onClick:x},r("cta.logIn")),i.showJoinWaitList&&a.a.createElement(w.a,{isSmall:!0}),i.showBecomePartner&&a.a.createElement(S,{isSmall:!o,isMobile:o,onClick:M},r("cta.becomePartnerAccountant")),i.showSignUp&&a.a.createElement(I.a,{isSmall:!o,isMobile:o},r("cta.signUp")))},B=function(e,t){var n=e.pageName;return e.isInWaitingList?{text:t("pages.siteApp:cta.getEarlyAccess"),isInWaitingList:!0}:"Premium"===n?{text:t("pages.siteApp:cta.getPremium"),mode:"premium"}:"Metal"===n?{text:t("pages.siteApp:cta.getMetal"),mode:"metal"}:{text:t("pages.siteApp:cta.getTheApp"),hasAppLink:!0}},A=function(e){var t=Object(d.c)(["pages.siteApp"]).t,n=e.isMobile,o=e.pageName,r=e.isStickyButton,s=e.isDarkBg,c=e.isVisible,l=e.GALabel,u=e.chapter,m=Object(i.useContext)(h.b).countryId,p=function(e){var t=e.chapter,n=e.pageName;e.countryId;return{showBusiness:t===b.a.BUSINESS,showBecomePartner:"BusinessAccountants"===n,showSignUp:"BusinessAccountants"!==n,showRetailSignIn:t!==b.a.BUSINESS}}({chapter:u,pageName:o,countryId:m}),C=Object.assign({},e,{renderFlags:p}),O=p.showBusiness&&!r?{isBusiness:!0}:{},j=s?{color:"buttons.darkMode.color",background:"buttons.darkMode.background",hover:"buttons.darkMode.hoverBg"}:{},w=s?{color:"buttons.darkModeSecondary.color",background:"buttons.darkModeSecondary.background",hoverBg:"buttons.darkModeSecondary.hoverBg"}:{color:"buttons.grey.color",background:"buttons.grey.background",hoverBg:"buttons.grey.hoverBg"};switch(!0){case p.showBusiness:return a.a.createElement(N.a,Object.assign({isMobile:n},O,{isVisible:c}),a.a.createElement(_,C));case p.showRetailSignIn:return a.a.createElement(N.a,{isMobile:n,isVisible:c},a.a.createElement(f.a,Object.assign({isSmall:!0,href:"https://app.revolut.com/start",onClick:function(){Object(k.b)({event:"retailSignIn",pageName:o}),Object(y.e)({action:v.a.CLICKED,pageName:o,label:"retailSignIn"})}},w),t("cta.retailSignIn")),a.a.createElement(g.a,Object.assign({pageName:o,GALabel:l},j,B(e,t),{isSmall:!0})));default:return a.a.createElement(N.a,{isMobile:n,isVisible:c},a.a.createElement(g.a,Object.assign({pageName:o,GALabel:l},j,B(e,t))))}};A.defaultProps={isMobile:!1,isVisible:!1,GALabel:"HeaderWidget"};var P=A,T=n("baLE"),V=n("Aom+"),D={height:"100%"},W={height:"100%"},U={height:"100%",flexDirection:"column"},G=n("vOnD"),H=n("YEJx"),K=n("UTPQ"),z=n("LGMC"),R=n("C8nm");function q(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  body {\n    height: 100%;\n    overflow: hidden;\n  }\n"]);return q=function(){return e},e}var Y=Object(G.c)(q()),Z=G.e.div.withConfig({displayName:"styles__StyledMobileMenu",componentId:"sc-1kxpt99-0"})(["","{height:6rem;}"],R.b),F=Object(G.e)(K.a).withConfig({displayName:"styles__StyledChapterLinks",componentId:"sc-1kxpt99-1"})(["position:fixed;top:0;right:0;left:0;visibility:hidden;opacity:0;","{margin-right:1.5rem;}",";"],z.a,(function(e){return e.isVisible&&Object(G.d)(["visibility:visible;opacity:1;transition:opacity 0.2s ease-in-out 0.05s;"])})),J=G.e.div.withConfig({displayName:"styles__StyledMenuIcon",componentId:"sc-1kxpt99-2"})(["position:absolute;top:2rem;right:2rem;width:1.75rem;height:1.75rem;cursor:pointer;margin-left:auto;z-index:101;&::before,&::after{content:'';position:absolute;width:1.125rem;height:0.125rem;left:0.3rem;border-radius:0.125rem;",";",";transition:background-color 0.2s ease,transform 0.3s cubic-bezier(0.4,0.01,0.165,0.99);}&::before{top:0.5rem;}&::after{top:1.125rem;}",";"],Object(H.b)("menuIconColor",Object(G.d)(["background-color:",";"],Object(H.c)("menuIconColor"))),Object(H.a)("menuIconColor",Object(G.d)(["background-color:",";"],Object(H.e)("menu.icon"))),(function(e){return e.isOpen&&Object(G.d)(["position:fixed;&::before{transform:translateY(0.3125rem) rotate(-45deg);background-color:",";}&::after{transform:translateY(-0.3125rem) rotate(45deg);background-color:",";}"],Object(H.e)("menu.icon"),Object(H.e)("menu.icon"))})),Q=G.e.div.withConfig({displayName:"styles__StyledPopover",componentId:"sc-1kxpt99-3"})(["position:fixed;display:block;top:6rem;right:0;bottom:4.5rem;left:0;overflow:auto;-webkit-overflow-scrolling:touch;pointer-events:auto;background-color:",";color:",";opacity:0;visibility:hidden;z-index:100;transform:translate3d(0,0,0);transition:visibility 0s ease 0.5s,opacity 0.2s ease-in-out;",";"],Object(H.e)("menu.mobile.background"),Object(H.e)("menu.mobile.color"),(function(e){return e.isVisible&&Object(G.d)(["visibility:visible;opacity:1;transition:opacity 0.2s ease-in-out 0.05s;"])})),X=G.e.div.withConfig({displayName:"styles__PopoverLinks",componentId:"sc-1kxpt99-4"})(["display:flex;flex-direction:column;height:100%;padding-top:1rem;padding-bottom:3rem;","{display:block;padding:0.75rem 0;margin:0;}& > ","{font-size:1.125rem;}"],z.a,z.a);var $=function(e){var t,n;function i(t){var n;return(n=e.call(this,t)||this).onClose=function(){m.a.scrollTo(0,0),n.setState({isVisible:!1})},n.onIconClick=function(){var e=n.state.isVisible;e||m.a.scrollTo(0,0);var t=!e;n.props.onToggle(t),n.setState({isVisible:t})},n.state={isVisible:!1},n}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=i.prototype;return o.componentDidUpdate=function(e){this.props.isActive!==e.isActive&&this.state.isVisible&&this.onClose()},o.render=function(){var e=this.props,t=e.urls,n=e.rootLink,i=e.linkComponent,o=e.menuTranslations,r=e.location,s=e.currentChapter,c=e.chapters,u=e.pageName,m=e.isInBusinessWaitingList,d=e.isInWaitingList,g=e.menuStructure,h=e.onChapterClick,f=e.onLinkClick,k=e.onOptionLinkClick,y=e.hasStickyMobileCta,v=e.menuIconColor,C=s===b.a.BUSINESS?b.a.BUSINESS:b.a.PERSONAL;return a.a.createElement(Z,null,a.a.createElement(F,{chapters:c,linkComponent:l.Link,urls:t,rootLink:n,currentChapter:s,menuTranslations:o,onClick:h,hasWrapper:!0,isVisible:this.state.isVisible}),a.a.createElement(Q,{isVisible:this.state.isVisible},a.a.createElement(p.a,D,a.a.createElement(p.a.Col,W,a.a.createElement(p.a.Row,U,a.a.createElement(X,null,a.a.createElement(T.a,{view:V.c,urls:t,menuTranslations:o,linkComponent:i,location:r,rootLink:n,menuStructure:g[C],onClick:f,onOptionClick:k})))))),a.a.createElement(P,{isMobile:!0,chapter:s,route:r.pathname,pageName:u,isInBusinessWaitingList:m,isInWaitingList:d,isVisible:y||this.state.isVisible,GALabel:this.state.isVisible?"MenuMobileCTA":"BottomMobileCTA"}),a.a.createElement(J,{onClick:this.onIconClick,isOpen:this.state.isVisible,"data-testid":"mobile-menu-icon",menuIconColor:v}),this.state.isVisible&&a.a.createElement(Y,null))},i}(i.Component);$.defaultProps={onToggle:c.a,rootLink:"/",hasStickyMobileCta:!1};var ee=$,te=n("uZbd");function ne(){var e=ae(["\n      padding: 0 1.2rem;\n    "]);return ne=function(){return e},e}function ie(){var e=ae(["\n      padding: 0 1.2rem;\n    "]);return ie=function(){return e},e}function ae(e,t){return t||(t=e.slice(0)),e.raw=t,e}var oe=G.e.div.withConfig({displayName:"styles__StyledDesktopMenu",componentId:"sc-14uznle-0"})(["position:relative;display:flex;align-items:center;justify-content:space-between;color:",";","{display:inline-block;margin-right:1.7rem;&:last-child{margin-right:0;}}"],(function(e){return e.isDarkBg?Object(H.e)("white"):Object(H.e)("menu.a.color.main")}),z.a),re=G.e.div.withConfig({displayName:"styles__StyledLeftPart",componentId:"sc-14uznle-1"})(["margin-left:2rem;","{white-space:nowrap;padding:0 1rem;margin-right:0;line-height:3rem;",";}"],z.a,te.b.notebook(ie())),se=G.e.div.withConfig({displayName:"styles__StyledRightPart",componentId:"sc-14uznle-2"})(["display:flex;color:",";","{white-space:nowrap;padding:0 1rem;margin-right:0;line-height:3rem;",";}"],(function(e){return e.isDarkBg?Object(H.e)("white"):"inherit"}),z.a,te.b.notebook(ne())),ce=function(e){var t=e.urls,n=e.rootLink,i=e.linkComponent,o=e.menuTranslations,r=e.isInBusinessWaitingList,s=e.isInWaitingList,c=e.location,l=e.currentChapter,u=e.pageName,m=e.menuStructure,b=e.isDarkBg,p=e.isDarkBgRight,d=e.onLinkClick,g=e.onOptionLinkClick,h=e.onChapterClick,f=e.chapters;return a.a.createElement(oe,{"data-testid":"desktop-menu",isDarkBg:b},a.a.createElement(re,null,a.a.createElement(K.a,{chapters:f,linkComponent:i,urls:t,rootLink:n,currentChapter:l,menuTranslations:o,onClick:h})),a.a.createElement(se,{isDarkBg:p},a.a.createElement(T.a,{urls:t,menuTranslations:o,linkComponent:i,location:c,rootLink:n,menuStructure:m[l],onClick:d,onOptionClick:g}),a.a.createElement(P,{chapter:l,route:c.pathname,pageName:u,isInBusinessWaitingList:r,isInWaitingList:s,search:c.search,isDarkBg:p,isVisible:!0})))};ce.defaultProps={rootLink:"/"};var le=ce;var ue=function(e){var t=e.onToggleMobile,n=e.hasStickyMobileCta,i=e.customHeaderMenuText,s=e.menuStructure,c=e.mobileMenuStructure,l=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["onToggleMobile","hasStickyMobileCta","customHeaderMenuText","menuStructure","mobileMenuStructure"]),u=Object.assign({customMenuText:i},l);return a.a.createElement(r.b,null,a.a.createElement(o.a,{media:"wide"},a.a.createElement(le,Object.assign({},u,{menuStructure:s}))),a.a.createElement(o.a,{media:"narrow"},a.a.createElement(ee,Object.assign({},u,{onToggle:t,hasStickyMobileCta:n,menuStructure:c}))))};ue.defaultProps={onToggleMobile:void 0,rootLink:"/"};t.default=ue},rylg:function(e,t,n){"use strict";n("E5k/"),n("sPse");var i=n("q1tI"),a=n.n(i),o=n("9kay"),r=n("YwZP"),s=n("ww3E"),c=n("L6zy"),l=n("ECId"),u=n("1l0P"),m=n("8u5r"),b=n("vOnD"),p=n("uZbd");function d(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n    justify-content: flex-start;\n  "]);return d=function(){return e},e}var g=b.e.div.withConfig({displayName:"styles__StyledButtonWrapper",componentId:"sc-11kwovs-0"})(["margin-top:2rem;display:flex;justify-content:center;white-space:nowrap;",";"],p.b.notebook(d())),h=b.e.button.withConfig({displayName:"styles__StyledButton",componentId:"sc-11kwovs-1"})(["font-size:1.125rem;"]);t.a=function(e){var t=e.isSmall,n=e.onClick,b=Object(m.a)("joinWaitList")[1],p=Object(o.c)("components.JoinWaitList").t,d=Object(i.useContext)(c.a).countryId,f=Object(r.useLocation)().search,k=d===u.a.US.id,y=Object(i.useCallback)((function(e){n&&n(e),!k&&b({active:!0})}),[k,b,n]),v=a.a.createElement(h,Object.assign({as:s.a.Primary},k?{href:l.a+"/signup"+(f||"")}:{},{onClick:y,isSmall:t}),p("buttonText"));return t?v:a.a.createElement(g,null,v)}}}]);