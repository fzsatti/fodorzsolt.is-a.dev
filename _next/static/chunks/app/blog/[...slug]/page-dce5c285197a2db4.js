(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[797],{8388:(e,t,r)=>{Promise.resolve().then(r.bind(r,9629)),Promise.resolve().then(r.bind(r,4347)),Promise.resolve().then(r.t.bind(r,5014,23)),Promise.resolve().then(r.t.bind(r,958,23)),Promise.resolve().then(r.t.bind(r,8173,23)),Promise.resolve().then(r.t.bind(r,231,23)),Promise.resolve().then(r.bind(r,6e3)),Promise.resolve().then(r.bind(r,408))},9629:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>g});var n=r(7437),a=r(473),o=r(2265),s=e=>{let{shortname:t,slug:r}=e,{theme:s}=(0,a.F)(),i=(0,o.useCallback)(()=>{window.disqus_config=function(){this.page.url=window.location.href,this.page.identifier=r};let e=document.createElement("script");e.src="https://"+t+".disqus.com/embed.js",e.setAttribute("data-timestamp",Date.now().toString()),e.async=!0,document.body.appendChild(e)},[t,r,s]);return(0,o.useEffect)(()=>{i()},[i]),(0,n.jsx)("div",{className:"disqus-frame",id:"disqus_thread"})};function i({id:e,host:t,repo:a,repoId:s,category:i,categoryId:l,mapping:c,term:d,strict:u,reactionsEnabled:m,emitMetadata:h,inputPosition:g,theme:f,lang:v,loading:p}){let[b,y]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{b||(r.e(894).then(r.bind(r,3894)),y(!0))},[]),b?(0,n.jsx)("giscus-widget",{id:e,host:t,repo:a,repoid:s,category:i,categoryid:l,mapping:c,term:d,strict:u,reactionsenabled:m,emitmetadata:h,inputposition:g,theme:f,lang:v,loading:p}):null}var l=e=>{let{themeURL:t,theme:r,darkTheme:o,repo:s,repositoryId:l,category:c,categoryId:d,reactions:u,metadata:m,inputPosition:h,lang:g,mapping:f}=e,{theme:v,resolvedTheme:p}=(0,a.F)();return(0,n.jsx)(i,{id:"comments-container",repo:s,repoId:l,category:c,categoryId:d,mapping:f,reactionsEnabled:u,emitMetadata:m,inputPosition:h,theme:""===t?"dark"===v||"dark"===p?o:r:t,lang:g,loading:"lazy"})},c=e=>{let{theme:t,darkTheme:r,repo:s,label:i,issueTerm:l}=e,{theme:c,resolvedTheme:d}=(0,a.F)(),u="dark"===c||"dark"===d?r:t,m="comments-container",h=(0,o.useCallback)(()=>{let e=document.createElement("script");e.src="https://utteranc.es/client.js",e.setAttribute("repo",s),e.setAttribute("issue-term",l),e.setAttribute("label",i),e.setAttribute("theme",u),e.setAttribute("crossorigin","anonymous"),e.async=!0;let t=document.getElementById(m);return t&&t.appendChild(e),()=>{let e=document.getElementById(m);e&&(e.innerHTML="")}},[u,l,i,s]);return(0,o.useEffect)(()=>{h()},[h]),(0,n.jsx)("div",{className:"utterances-frame relative",id:m})},d=r(6338),u=({commentsConfig:e,slug:t})=>{switch(e.provider){case"giscus":return(0,n.jsx)(l,(0,d.ih)({},e.giscusConfig));case"utterances":return(0,n.jsx)(c,(0,d.ih)({},e.utterancesConfig));case"disqus":return(0,n.jsx)(s,(0,d.ih)({slug:t},e.disqusConfig))}},m=r(4450),h=r.n(m);function g(e){var t;let{slug:r}=e,[a,s]=(0,o.useState)(!1);return(null===(t=h().comments)||void 0===t?void 0:t.provider)?(0,n.jsx)(n.Fragment,{children:a?(0,n.jsx)(u,{commentsConfig:h().comments,slug:r}):(0,n.jsx)("button",{onClick:()=>s(!0),children:"Load Comments"})}):null}},4347:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(7437),a=r(4450),o=r.n(a),s=r(2265);let i=()=>{var e;let[t,r]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let e=()=>{window.scrollY>50?r(!0):r(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,n.jsxs)("div",{className:"fixed bottom-8 right-8 hidden flex-col gap-3 ".concat(t?"md:flex":"md:hidden"),children:[(null===(e=o().comments)||void 0===e?void 0:e.provider)&&(0,n.jsx)("button",{"aria-label":"Scroll To Comment",onClick:()=>{var e;null===(e=document.getElementById("comment"))||void 0===e||e.scrollIntoView()},className:"rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",children:(0,n.jsx)("svg",{className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",clipRule:"evenodd"})})}),(0,n.jsx)("button",{"aria-label":"Scroll To Top",onClick:()=>{window.scrollTo({top:0})},className:"rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",children:(0,n.jsx)("svg",{className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})})})]})}},4450:(e,t,r)=>{"use strict";var n=r(357);let a={title:"My Personal Webstie",author:"Fodor Zsolt",headerTitle:"Fodor Zsolt",description:"A blog about my journeys",language:"en-us",theme:"system",siteUrl:"https://fodorzsolt.is-a.dev",siteRepo:"https://github.com/timlrx/tailwind-nextjs-starter-blog",siteLogo:"".concat(n.env.BASE_PATH||"","/static/images/logo.png"),socialBanner:"".concat(n.env.BASE_PATH||"","/static/images/twitter-card.png"),email:"fodorzsolt92@gmail.ocm",github:"https://github.com/fzsatti",linkedin:"https://www.linkedin.com/in/fodor-zsolt-5a1a89a4/",locale:"en-US",stickyNav:!1,newsletter:{},analytics:{},search:{provider:"kbar",kbarConfig:{searchDocumentsPath:"".concat(n.env.BASE_PATH||"","/search.json")}}};e.exports=a},473:(e,t,r)=>{"use strict";r.d(t,{F:()=>c,f:()=>d});var n=r(2265),a=["light","dark"],o="(prefers-color-scheme: dark)",s="undefined"==typeof window,i=n.createContext(void 0),l={setTheme:e=>{},themes:[]},c=()=>{var e;return null!=(e=n.useContext(i))?e:l},d=e=>n.useContext(i)?e.children:n.createElement(m,{...e}),u=["light","dark"],m=e=>{let{forcedTheme:t,disableTransitionOnChange:r=!1,enableSystem:s=!0,enableColorScheme:l=!0,storageKey:c="theme",themes:d=u,defaultTheme:m=s?"system":"light",attribute:p="data-theme",value:b,children:y,nonce:x}=e,[w,j]=n.useState(()=>g(c,m)),[k,S]=n.useState(()=>g(c)),C=b?Object.values(b):d,E=n.useCallback(e=>{let t=e;if(!t)return;"system"===e&&s&&(t=v());let n=b?b[t]:t,o=r?f():null,i=document.documentElement;if("class"===p?(i.classList.remove(...C),n&&i.classList.add(n)):n?i.setAttribute(p,n):i.removeAttribute(p),l){let e=a.includes(m)?m:null,r=a.includes(t)?t:e;i.style.colorScheme=r}null==o||o()},[]),T=n.useCallback(e=>{let t="function"==typeof e?e(e):e;j(t);try{localStorage.setItem(c,t)}catch(e){}},[t]),N=n.useCallback(e=>{S(v(e)),"system"===w&&s&&!t&&E("system")},[w,t]);n.useEffect(()=>{let e=window.matchMedia(o);return e.addListener(N),N(e),()=>e.removeListener(N)},[N]),n.useEffect(()=>{let e=e=>{e.key===c&&T(e.newValue||m)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[T]),n.useEffect(()=>{E(null!=t?t:w)},[t,w]);let P=n.useMemo(()=>({theme:w,setTheme:T,forcedTheme:t,resolvedTheme:"system"===w?k:w,themes:s?[...d,"system"]:d,systemTheme:s?k:void 0}),[w,T,t,k,s,d]);return n.createElement(i.Provider,{value:P},n.createElement(h,{forcedTheme:t,disableTransitionOnChange:r,enableSystem:s,enableColorScheme:l,storageKey:c,themes:d,defaultTheme:m,attribute:p,value:b,children:y,attrs:C,nonce:x}),y)},h=n.memo(e=>{let{forcedTheme:t,storageKey:r,attribute:s,enableSystem:i,enableColorScheme:l,defaultTheme:c,value:d,attrs:u,nonce:m}=e,h="system"===c,g="class"===s?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(u.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(s,"',s='setAttribute';"),f=l?(a.includes(c)?c:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(c,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=!(arguments.length>2)||void 0===arguments[2]||arguments[2],n=d?d[e]:e,o=t?e+"|| ''":"'".concat(n,"'"),i="";return l&&r&&!t&&a.includes(e)&&(i+="d.style.colorScheme = '".concat(e,"';")),"class"===s?t||n?i+="c.add(".concat(o,")"):i+="null":n&&(i+="d[s](n,".concat(o,")")),i},p=t?"!function(){".concat(g).concat(v(t),"}()"):i?"!function(){try{".concat(g,"var e=localStorage.getItem('").concat(r,"');if('system'===e||(!e&&").concat(h,")){var t='").concat(o,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(v("dark"),"}else{").concat(v("light"),"}}else if(e){").concat(d?"var x=".concat(JSON.stringify(d),";"):"").concat(v(d?"x[e]":"e",!0),"}").concat(h?"":"else{"+v(c,!1,!1)+"}").concat(f,"}catch(e){}}()"):"!function(){try{".concat(g,"var e=localStorage.getItem('").concat(r,"');if(e){").concat(d?"var x=".concat(JSON.stringify(d),";"):"").concat(v(d?"x[e]":"e",!0),"}else{").concat(v(c,!1,!1),";}").concat(f,"}catch(t){}}();");return n.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:p}})}),g=(e,t)=>{let r;if(!s){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},f=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light")},6338:(e,t,r)=>{"use strict";r.d(t,{Cr:()=>h,EZ:()=>u,S0:()=>m,ih:()=>d});var n=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&c(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>a(e,o(t)),m=(e,t)=>{var r={};for(var n in e)i.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))0>t.indexOf(n)&&l.call(e,n)&&(r[n]=e[n]);return r},h=(e,t,r)=>new Promise((n,a)=>{var o=e=>{try{i(r.next(e))}catch(e){a(e)}},s=e=>{try{i(r.throw(e))}catch(e){a(e)}},i=e=>e.done?n(e.value):Promise.resolve(e.value).then(o,s);i((r=r.apply(e,t)).next())})},6e3:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var n=r(2265),a=r(7437),o=(e,t,r)=>new Promise((n,a)=>{var o=e=>{try{i(r.next(e))}catch(e){a(e)}},s=e=>{try{i(r.throw(e))}catch(e){a(e)}},i=e=>e.done?n(e.value):Promise.resolve(e.value).then(o,s);i((r=r.apply(e,t)).next())}),s=e=>{let{title:t="Subscribe to the newsletter",apiUrl:r="/api/newsletter"}=e,s=(0,n.useRef)(null),[i,l]=(0,n.useState)(!1),[c,d]=(0,n.useState)(""),[u,m]=(0,n.useState)(!1);return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100",children:t}),(0,a.jsxs)("form",{className:"flex flex-col sm:flex-row",onSubmit:e=>o(void 0,null,function*(){e.preventDefault();let t=yield fetch(r,{body:JSON.stringify({email:s.current.value}),headers:{"Content-Type":"application/json"},method:"POST"}),{error:n}=yield t.json();if(n){l(!0),d("Your e-mail address is invalid or you are already subscribed!");return}s.current.value="",l(!1),m(!0)}),children:[(0,a.jsx)("div",{children:(0,a.jsxs)("label",{htmlFor:"email-input",children:[(0,a.jsx)("span",{className:"sr-only",children:"Email address"}),(0,a.jsx)("input",{autoComplete:"email",className:"focus:ring-primary-600 w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 dark:bg-black",id:"email-input",name:"email",placeholder:u?"You're subscribed !  \uD83C\uDF89":"Enter your email",ref:s,required:!0,type:"email",disabled:u})]})}),(0,a.jsx)("div",{className:"mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3",children:(0,a.jsx)("button",{className:"bg-primary-500 w-full rounded-md py-2 px-4 font-medium text-white sm:py-0 ".concat(u?"cursor-default":"hover:bg-primary-700 dark:hover:bg-primary-400"," focus:ring-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-black"),type:"submit",disabled:u,children:u?"Thank you!":"Sign up"})})]}),i&&(0,a.jsx)("div",{className:"w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96",children:c})]})},i=e=>{let{title:t,apiUrl:r}=e;return(0,a.jsx)("div",{className:"flex items-center justify-center",children:(0,a.jsx)("div",{className:"bg-gray-100 p-6 dark:bg-gray-800 sm:px-14 sm:py-8",children:(0,a.jsx)(s,{title:t,apiUrl:r})})})}},408:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var n=r(2265),a=r(7437),o=e=>{let{children:t}=e,r=(0,n.useRef)(null),[o,s]=(0,n.useState)(!1),[i,l]=(0,n.useState)(!1);return(0,a.jsxs)("div",{ref:r,onMouseEnter:()=>{s(!0)},onMouseLeave:()=>{s(!1),l(!1)},className:"relative",children:[o&&(0,a.jsx)("button",{"aria-label":"Copy code",className:"absolute right-2 top-2 h-8 w-8 rounded border-2 bg-gray-700 p-1 dark:bg-gray-800 ".concat(i?"border-green-400 focus:border-green-400 focus:outline-none":"border-gray-300"),onClick:()=>{l(!0),navigator.clipboard.writeText(r.current.textContent),setTimeout(()=>{l(!1)},2e3)},children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"currentColor",fill:"none",className:i?"text-green-400":"text-gray-300",children:i?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"})}):(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})})})}),(0,a.jsx)("pre",{children:t})]})}},5014:()=>{},958:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[685,231,173,130,215,744],()=>t(8388)),_N_E=e.O()}]);