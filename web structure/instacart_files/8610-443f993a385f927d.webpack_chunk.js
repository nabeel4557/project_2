!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d7acba07-8c3d-4ba2-8e9c-59575ba06d3e",e._sentryDebugIdIdentifier="sentry-dbid-d7acba07-8c3d-4ba2-8e9c-59575ba06d3e")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"landing-client@46622c00f9a0b12d592b51a9e585d4d23b404e2c"},(self.webpackChunk=self.webpackChunk||[]).push([[8610],{74927:(e,n,i)=>{i.d(n,{tp:()=>t,nR:()=>o,Zn:()=>a});const t="FLASH_ERROR",o="FLASH_INFO",a="current_location"},80275:(e,n,i)=>{i.d(n,{Ex:()=>o});var t=i(13883);const o=(0,t.Td)({featureVariantType:t.bc.visitorMarketplaceWeb,rouletteDependency:{featureName:"activation_show_apple_sso",variants:["variant"]}});(0,t.Td)({featureVariantType:t.bc.visitorMarketplaceWeb,rouletteDependency:{featureName:"activation_accounts_auth_google_one_tap",variants:["variant"]}}),(0,t.Td)({featureVariantType:t.bc.visitorMarketplaceWeb,rouletteDependency:{featureName:"activation_help_pages_google_one_tap",variants:["variant"]}})},23708:(e,n,i)=>{i.d(n,{$6:()=>m,sG:()=>d,k7:()=>u});var t=i(7438),o=i(34436),a=i(9401);const r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"CoachmarkLoginLayout"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"viewLayout"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"coachmarkLogin"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"coachmarkWidget"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"welcomeBackString"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"signupFacebookBeforeString"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:224,source:{body:"\n  query CoachmarkLoginLayout {\n    viewLayout {\n      id\n      coachmarkLogin {\n        id\n        coachmarkWidget {\n          id\n          welcomeBackString\n          signupFacebookBeforeString\n        }\n      }\n    }\n  }\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},c={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"CoachmarkLoginVariant"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"viewLayout"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"homepage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"header"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"activationHomepageFacebookCoachmarkVisitorVariant"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:205,source:{body:"\n  query CoachmarkLoginVariant {\n    viewLayout {\n      id\n      homepage {\n        id\n        header {\n          id\n          activationHomepageFacebookCoachmarkVisitorVariant\n        }\n      }\n    }\n  }\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},s={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"CoachmarkGoogleLoginVariant"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"viewLayout"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"activationsExperiments"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"homepage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"activationHomepageKnownVisitorGoogleOnetapWebVariant"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:230,source:{body:"\n  query CoachmarkGoogleLoginVariant {\n    viewLayout {\n      id\n      activationsExperiments {\n        id\n        homepage {\n          id\n          activationHomepageKnownVisitorGoogleOnetapWebVariant\n        }\n      }\n    }\n  }\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}};i(80275),i(70203);const l=e=>{var n;return!!(0,a.i)()&&unescape(null!==(n=t.Z.getCookie("known_visitor"))&&void 0!==n?n:"").split("|")[2]===e},d=()=>{var e;const n=l("facebook_sso"),{data:i}=(0,o.aM)(c,{skip:!n,fetchPolicy:"network-only"});return"true"===(null==i||null===(e=i.viewLayout.homepage.header)||void 0===e?void 0:e.activationHomepageFacebookCoachmarkVisitorVariant)},u=()=>{const e=l("google_sso"),{data:n}=(0,o.aM)(s,{skip:!e,fetchPolicy:"network-only"});return"true"===(null==n?void 0:n.viewLayout.activationsExperiments.homepage.activationHomepageKnownVisitorGoogleOnetapWebVariant)},m=()=>{const{data:e}=(0,o.aM)(r);return null==e?void 0:e.viewLayout.coachmarkLogin.coachmarkWidget}},8610:(e,n,i)=>{i.d(n,{Z:()=>B});var t=i(83457),o=i(68972),a=i(60595),r=i(0),c=i(8277),s=i(78393),l=i(23708),d=i(74927),u=i(55645),m=i(3935),g=i(56279),k=i(2751),v=i(3901),p=i(38839);const h=function(e){let{nav:n,onSectionClick:i,openSection:t,headerRef:o,hideLinks:a,handleDepartmentClick:r}=e;const c=(0,k.Z)();if(a)return null;const s=e=>t===e?{...c.sectionHeader,...c.activeSectionHeader}:c.sectionHeader;return(0,p.tZ)("ul",{css:c.links,ref:o,children:n.nav_sections.map((e=>{let{nav_links:n,header:o}=e;return(0,p.BX)("li",{css:s(o),children:[(0,p.tZ)("button",{css:c.sectionHeaderButton,onClick:()=>i(o),children:o}),(0,p.BX)(p.HY,{children:[(0,p.tZ)("ul",{css:t===o?c.linkSection:c.linkSectionHidden,"data-testid":"desktop-nav-section",children:n.map((e=>(0,p.tZ)("li",{children:(0,p.tZ)("a",{css:c.link,href:e.url,onClick:r({name:e.text,id:(0,v.z)(e.url),section:o}),children:e.text})},e.text+e.url)))}),t===o&&(0,p.tZ)("div",{css:c.indicator})]})]},o)}))})};var b=i(51628);const _=(0,i(83162).k)((e=>({input:{height:t.spacing.s40,backgroundColor:e.colors.systemGrayscale10,textIndent:t.spacing.s12,borderRadius:t.spacing.s8,fontSize:"15px",border:"none",width:"100%","&::placeholder":{...e.typography.bodyMedium1,color:e.colors.systemGrayscale70},":focus":{backgroundColor:e.colors.systemGrayscale00,borderColor:"".concat(e.colors.systemGrayscale70),border:"2px solid ".concat(e.colors.systemGrayscale70),outline:"none"},"::-webkit-search-cancel-button":{WebkitAppearance:"none"},"::-webkit-search-decoration":{WebkitAppearance:"none"}},icon:{position:"absolute",top:"55%",right:"19px",padding:"0",transform:"translateY(-50%)",border:"none",backgroundColor:"transparent",":active":{outline:"none"}},container:{position:"relative"}})));const S=function(e){let{placeholder_text:n}=e;const i=_(),[a,c]=(0,r.useState)(""),s=()=>{c("")};return(0,p.BX)("div",{css:i.container,"data-testid":"search-bar",children:[(0,p.tZ)("form",{onSubmit:e=>{e.preventDefault(),o.Z.track("signup","taxonomy_search_bar",{source_type:"taxonomy_search",source_value:a}),window.location.href="/store/search/".concat(encodeURIComponent(a),"?guest=true")},role:"search",action:".","data-identifier":"search_input",children:(0,p.tZ)("input",{type:"search",css:i.input,autoCorrect:"off",autoCapitalize:"off",placeholder:n,value:a,onChange:e=>{const{value:n}=e.target;c(n)}})}),0===(null==a?void 0:a.length)?(0,p.tZ)("button",{"aria-label":"Search icon",css:i.icon,onTouchStart:e=>e.preventDefault(),children:(0,p.tZ)(t.SearchIcon,{size:"18",color:"systemGrayscale70"})}):(0,p.tZ)("button",{"aria-label":"Clear search bar",css:i.icon,onMouseDown:e=>{e.preventDefault()},onClick:()=>s(),onTouchStart:()=>s(),children:(0,p.tZ)(t.CloseIcon,{size:"18"})})]})};const f=function(e){let{signUpString:n,logInString:i,clickedSignup:o,clickedLogin:a,loginTextColor:r,signupBackgroundColor:c}=e;const s=(0,k.Z)(),l=(0,t.useTheme)(),d={...r&&{color:l.colors[r]}},u={...c&&{backgroundColor:l.colors[c]}};return(0,p.BX)(p.HY,{children:[(0,p.tZ)(t.ButtonBase,{styles:{...s.logInButton},style:d,onClick:a,children:i}),(0,p.tZ)(t.ButtonBase,{styles:{...s.signUpButton},style:u,onClick:o,children:n})]})};var y=i(25194),C=i(70208),L=i(91663),Z=i(72418),w=i(7335);const B=function(e){var n,i;let{instacart_logo:_,menuBarInstacartLogoImage:B,mwebMiniLogoImage:N,nav:F,button_primitive:I,back_button_primitive:M,signUpString:D,logInString:O,handleAction:x,slim_container:H,hide_auth:E,auth_modal_post_onboarding_path:T,postal_code:V,hideLinks:P,handleTrack:G,oneTap:R,show_search:W,search_placeholder:A,hamburger_menu_seo_links:U,instacart_logo_label:q,useLocalStorageAddress:z,menu_label:X,menu_open_label:K,menu_close_label:Y,change_country_label:Q,hideMenu:j=!1,postAuthPaths:$,onecartEnterpriseSimplifiedHeaderVariant:J,hamburgerIconColor:ee,headerBackgroundColor:ne,loginTextColor:ie,signupBackgroundColor:te,isMobile:oe,retailerIds:ae,showSearchBar:re,isSticky:ce,skipUpgradeModal:se,accountType:le}=e;const de=(0,t.useTheme)(),ue=(0,r.useRef)(null),me=(0,r.useRef)(null),ge=(0,r.useRef)(null),[ke,ve]=(0,r.useState)(null),{authModalProps:pe,openAuthModal:he}=(0,s.R)(),be=(0,l.sG)(),_e=(0,l.k7)(),Se=(0,v.j)(Boolean(R),be,_e),[fe,ye]=(0,r.useState)(!1),Ce=(0,u.X9F)({visible:!1}),{t:Le}=(0,w.F)(["landing/header"]),Ze=null===(n=(0,L.S_)({skip:!V||!re,variables:{postalCode:V}}).data)||void 0===n||null===(i=n.zoneV2)||void 0===i?void 0:i.id,we=(0,k.Z)(),Be={postalCode:V,useLocalStorageAddress:z},Ne=()=>{G?G("button_press",{source:"button_sign_up"}):o.Z.track("signup","button_press",{source:"button_sign_up"}),he(c.Path.Signup,Be)},Fe=()=>{G?G("button_press",{source:"button_log_in"}):o.Z.track("signup","button_press",{source:"button_log_in"}),he(c.Path.Login,Be)},Ie=e=>{var n;null!=ue&&null!==(n=ue.current)&&void 0!==n&&n.contains(e.target)||ve(null)};(0,r.useEffect)((()=>(ke?document.addEventListener("click",Ie):document.removeEventListener("click",Ie),()=>{document.removeEventListener("click",Ie)})),[ke]);const Me=e=>{ve(ke===e?null:e)},De=()=>{I&&x&&x(I.action)},Oe=e=>{let{id:n,name:i,section:t}=e;return e=>{e.stopPropagation(),o.Z.track("signup","header_click",{source:t,source_value:n,source1:i})}},xe=()=>{G?G("header_click",{source:"instacart_logo",source_value:"instacart_logo"}):o.Z.track("signup","header_click",{source:"instacart_logo",source_value:"instacart_logo"})};(0,r.useEffect)((()=>{new URLSearchParams(window.location.search).has("login")&&he(c.Path.Login,Be)}),[]);const He=W?we.searchNav:we.navContainer,Ee=U||P,Te=()=>{document.body.style.overflow="hidden",ye(!0)},Ve={login:T,signup:T},Pe=K||"Open main menu",Ge=Y||"Close main menu";return(0,p.BX)(p.HY,{children:[(0,p.tZ)(g.Z,{nav:F,webBurgerMenuOpen:fe,instacartLogo:null!=B?B:_,instacartLogoLabel:q,menuLabel:X,closeMenuLabel:Ge,handleWebHamburgerMenuClose:()=>{document.body.style.overflow="",ye(!1),ge.current&&ge.current.focus()}}),(0,p.BX)("div",{css:[ce&&we.stickyHeaderContainer,H&&we.slimContainerMargin,""],children:[(0,p.BX)("nav",{css:[He,ne&&{backgroundColor:de.colors[ne]},""],children:[M&&(0,p.tZ)("div",{css:we.menuIcon,onClick:()=>{M&&x&&x(M.action)},role:"presentation","data-testid":"back-button",children:(0,p.tZ)(t.ArrowLeftIcon,{size:24})}),!M&&!j&&(0,p.tZ)("button",{css:we.menuIcon,onClick:()=>Ce.show(),"data-testid":"menu-button","aria-label":Pe,children:(0,p.tZ)(t.MenuIcon,{size:24,color:ee})}),N&&(0,p.tZ)("div",{css:[we.miniLogo,Ee&&we.logoNoBorder,E&&!j&&we.logoCenter,""],children:(0,p.tZ)("a",{href:_.link,onClick:xe,children:(0,p.tZ)("img",{css:we.miniLogoImage,src:N.image_url,alt:N.alt})})}),(0,p.BX)("div",{css:we.nav,children:[U&&(0,p.tZ)(m.Z,{handleWebHamburgerMenuOpen:Te,handleKeyboardWebHamburgerMenuOpen:e=>{"Enter"===e.key&&Te()},hamburgerOpenRef:ge,openMenuLabel:Pe,color:ee}),(0,p.tZ)("div",{css:[we.logo,Ee&&we.logoNoBorder,E&&!j&&we.logoCenter,N&&we.logoImageNoDisplay,""],children:(0,p.tZ)("a",{href:_.link,onClick:xe,children:(0,p.tZ)("img",{css:[we.logoImage,J&&we.oneCartEnterpriseLogoImage,""],src:_.image_url,alt:_.alt})})}),(0,p.tZ)(h,{hideLinks:Ee,headerRef:ue,onSectionClick:Me,openSection:ke,nav:F,handleDepartmentClick:Oe}),W&&(0,p.tZ)("div",{css:we.desktopSearch,children:(0,p.tZ)(S,{placeholder_text:A||Le("header.search_placeholder")})}),re&&(0,p.tZ)(C.K,{isMobile:oe,children:(0,p.tZ)(y.Z,{enableCrossRetailerSearchPage:!0,zoneId:Ze,retailerIds:ae,style:we.searchBar})})]}),I&&(0,p.tZ)("div",{css:we.button,children:(0,p.tZ)(a.Z,{...I,onClick:De,color_override:we.primitiveButtonOverrides.color,text_color_override:we.primitiveButtonOverrides.textColor,hover_color_override:we.primitiveButtonOverrides.hover,active_color_override:we.primitiveButtonOverrides.active,style_overrides:we.primitiveButton})}),!I&&!E&&(0,p.BX)("div",{css:we.authButtons,children:[(0,p.tZ)(f,{logInString:O,loginTextColor:ie,signupBackgroundColor:te,signUpString:D,clickedLogin:Fe,clickedSignup:Ne}),(0,p.tZ)(s.Z,{authModalProps:pe,postAuthPaths:$||Ve,showGoogleOneTap:Se,skipUpgradeModal:se,googleOneTapProps:{style:{position:"fixed",right:"10px",top:"90px",...t.elevation.high.depth},cancelOnTapOutside:!1},showFacebookCoachmarkLogin:be,facebookCoachmarkLoginProps:{onAuthError:e=>{he({path:c.Path.Login,withErrors:e?{[d.tp]:[e]}:void 0},Be)}},postSignupExternalStateHide:Ce.hide,accountType:le})]})]}),W&&!Ce.visible&&(0,p.tZ)("div",{css:we.mobileSearch,children:(0,p.tZ)(S,{placeholder_text:A||Le("header.search_placeholder")})}),re&&oe&&(0,p.tZ)(Z.Z,{retailerIds:ae,zoneId:Ze}),!j&&(0,p.tZ)(b.Z,{onSectionClick:Me,openSection:ke,nav:F,handleDepartmentClick:Oe,hideLinks:P,countryChangeRef:me,mainMenuLabel:X,changeCountryLabel:Q,closeMenuLabel:Ge,modalState:Ce,instacartLogo:_,mwebMiniLogo:N,signUpString:D,logInString:O,onLoginClick:Fe,onSignupClick:Ne,hideAuth:E,buttonPrimitive:I,onButtonPrimitiveClick:De})]}),ce&&(0,p.tZ)("div",{css:re?we.stickyHeaderPaddingWithSearchBar:we.stickyHeaderPadding})]})}},70203:(e,n,i)=>{i.d(n,{C:()=>a});var t=i(34436);const o={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"SharedCurrentUser"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"currentUser"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"guest"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:78,source:{body:"\n  query SharedCurrentUser {\n    currentUser {\n      id\n      guest\n    }\n  }\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},a=e=>(0,t.aM)(o,e)}}]);