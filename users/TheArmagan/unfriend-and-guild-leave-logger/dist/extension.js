(function(Y,F,B,q,W,l,A,C,H){"use strict";function v(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}function J(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(r){if(r!=="default"){var a=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,a.get?a:{enumerable:!0,get:function(){return e[r]}})}}),t.default=e,Object.freeze(t)}var n=J(Y),j=v(F),O=v(B),X=v(q),K=v(W);class Q{constructor(){this.patches=[]}add(...t){this.patches.push(...t)}remove(t){let[r]=this.patches.splice(this.patches.indexOf(a=>a==t),1);r()}removeAll(){let t=this.patches.splice(0,this.patches.length);for(let r=0;r<t.length;r++)t[r]()}}var h=new Q;function V({className:e=""}={}){return`
        <svg
            viewBox="0 0 24 24" 
            width="24" 
            height="24"
            class="uagll--icon uagll--dislike-icon ${e}"
        >
            <path fill="currentColor" d="M2.808 1.393l18.384 18.385-1.414 1.414-3.747-3.747L12 21.485 3.52 12.993c-2.04-2.284-2.028-5.753.034-8.023L1.393 2.808l1.415-1.415zm17.435 3.364c2.262 2.268 2.34 5.88.236 8.236l-1.635 1.636L7.26 3.046c1.67-.207 3.408.288 4.741 1.483 2.349-2.109 5.979-2.039 8.242.228z"/>
        </svg>
    `}const{RelationshipStore:L,UserStore:Z,GuildStore:$,modals:{actions:{show:ee},ModalRoot:te},Button:d}=X.default,N={DANGER:"#eb3d47",SECONDARY:"#8a8e93",SUCCESS:"#3aa360",PRIMARY:"#5865f2"};function _(e={}){return n.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",className:"uagll--icon uagll--close-icon",style:{color:e.color}},n.createElement("path",{d:"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z",fill:"currentColor"}))}var b=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},I={},S={},x={};Object.defineProperty(x,"__esModule",{value:!0}),x.default=Object.freeze({GET:"GET",SET:"SET",DELETE:"DELETE",UPDATE:"UPDATE"});var ae=b&&b.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(S,"__esModule",{value:!0});const D=K.default,f=ae(x);function re(e,t=!1,r=()=>!0){(0,D.useRef)(e.ghost);const[,a]=(0,D.useReducer)(i=>~i,0);return(0,D.useEffect)(()=>{function i(o,s){r(o,s)&&a()}return e.on(f.default.UPDATE,i),t||(e.on(f.default.SET,i),e.on(f.default.DELETE,i)),()=>{e.off(f.default.UPDATE,i),t||(e.off(f.default.SET,i),e.off(f.default.DELETE,i))}},[]),e.ghost}S.default=re,function(e){var t=b&&b.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(e,"__esModule",{value:!0}),e.useNest=void 0;var r=S;Object.defineProperty(e,"useNest",{enumerable:!0,get:function(){return t(r).default}})}(I);const ne=O.default.findByProps("thin","scrollerBase");function ie({e}){return I.useNest(l.persist),n.createElement(te,{transitionState:e.transitionState,size:"large",className:"uagll--modal-root"},n.createElement("div",{className:"uagll--modal-header"},n.createElement("h1",{className:"uagll--modal-title"},"Unfriend And Guild Leaves"),n.createElement("div",{className:"uagll--modal-close",onClick:e.onClose},n.createElement(_,{color:N.SECONDARY}))),n.createElement("div",{className:`uagll--modal-body ${ne.thin}`},n.createElement("section",null,n.createElement("div",{className:"section-title"},n.createElement("h1",{class:"header"},"Unfriends"),n.createElement(d,{size:d.Sizes.TINY,color:d.Colors.TRANSPARENT,onClick:()=>{l.persist.store.unfriends=[]}},"Clear")),n.createElement("div",{className:"section-content"},(l.persist.ghost.unfriends||[]).map((t,r)=>n.createElement("div",{className:"item"},n.createElement("div",{className:"left",style:{backgroundImage:`url('https://cdn.discordapp.com/avatars/${t.id}/${t.avatar}.png?size=256')`}}),n.createElement("div",{className:"right"},n.createElement("div",{className:"top"},n.createElement("div",{className:"left"},n.createElement("span",null,t.tag.split("#")[0]),n.createElement("span",{className:"discriminator"},"#",t.tag.split("#")[1])),n.createElement("div",{className:"right",onClick:()=>{l.persist.store.unfriends.splice(l.persist.store.unfriends.findIndex(a=>a._id==t._id),1)}},n.createElement(_,{color:N.SECONDARY}))),n.createElement("div",{className:"bottom"},n.createElement("div",{className:"left"},t.id),n.createElement("div",{className:"right"},new Date(t.at).toLocaleDateString()," ",new Date(t.at).toLocaleTimeString()))))))),n.createElement("section",null,n.createElement("div",{className:"section-title"},n.createElement("h1",{class:"header"},"Guild Leaves"),n.createElement(d,{size:d.Sizes.TINY,color:d.Colors.TRANSPARENT,onClick:()=>{l.persist.store.leavedGuilds=[]}},"Clear")),n.createElement("div",{className:"section-content"},(l.persist.ghost.leavedGuilds||[]).map((t,r)=>n.createElement("div",{className:"item"},n.createElement("div",{className:"left",style:{backgroundImage:`url('https://cdn.discordapp.com/icons/${t.id}/${t.icon}.png?size=256')`}}),n.createElement("div",{className:"right"},n.createElement("div",{className:"top"},n.createElement("div",{className:"left"},t.name),n.createElement("div",{className:"right",onClick:()=>{l.persist.store.leavedGuilds.splice(l.persist.store.leavedGuilds.findIndex(a=>a._id==t._id),1)}},n.createElement(_,{color:N.SECONDARY}))),n.createElement("div",{className:"bottom"},n.createElement("div",{className:"left"},t.id),n.createElement("div",{className:"right"},new Date(t.at).toLocaleDateString()," ",new Date(t.at).toLocaleTimeString())))))))))}const E=O.default.findByProps("toolbar","transparent","hamburger");function le(){h.add(j.default.patch(`section .${E.toolbar}`,e=>{if(e.childElementCount!=3)return;let t=j.default.parseHTML(`
                    <div class="${E.iconWrapper} ${E.clickable}" acord--tooltip-content="Unfriends and Guild Leaves" acord--tooltip-side="left">
                        ${V({className:E.icon})}
                    </div>
                `);t.onclick=()=>{ee(r=>n.createElement(ie,{e:r}))},e.insertBefore(t,e.lastElementChild)}))}var c={},g={},y={};y.isThenable=function(t){return t!=null&&typeof t.then=="function"},y.isArrayLike=function(t){return t!=null&&typeof t.length=="number"&&t.length>=0};const{isArrayLike:oe}=y;g.forEach=function(e,t,r){let a=0,i;if(oe(e))return i=e.length,{next(){if(a>=i)return[!0,null];const s=t.call(r,e[a],a,e);return a++,[!1,s]}};const o=Object.keys(e);return i=o.length,{next(){if(a>=i)return[!0,null];const s=o[a++],k=t.call(r,e[s],s,e);return[!1,k]}}},g.repeat=function(e,t,r){let a,i,o;return e&&typeof e=="object"?(a=e.start||0,i=e.step||1,o=e.done):(a=0,i=1,o=e),{next(){const s=t.call(r,a);return a+=i,a>=o?[!0,s]:[!1,s]}}},g.until=function(e,t){return{next(){const r=e.call(t);return[!1,r]}}},g.forOf=function(e,t,r){const a=e[Symbol.iterator]();return{next(){const i=a.next();if(i.done)return[!0,null];const o=t.call(r,i.value,e);return[!1,o]}}};var G={},M=(()=>{if(typeof setImmediate=="function")return e=>{setImmediate(e)};if(typeof process=="object"&&typeof process.nextTick=="function")return e=>{process.nextTick(e)};if(typeof MessageChannel=="function"){const e=new MessageChannel;let t={},r=t;return e.port1.onmessage=()=>{t=t.next;const a=t.task;delete t.task,a()},a=>{r=r.next={task:a},e.port2.postMessage(0)}}return e=>{setTimeout(e,0)}})();const{isThenable:se}=y,z=G,R=M,P=1500;var ce=function(t,r=0){return new Promise((a,i)=>{let o=0;function s(){const k=Date.now();let w;try{for(;;){const[u,T]=t.next();if(se(T)){T.then(U=>{u?a(U):U===z?a():s()},i);return}if(u){a(T);return}if(T===z){a();return}if(r>0||(w=Date.now()-k,o+=w,o>1e3))break;if(!(w<10))break}}catch(u){i(u);return}if(r>0){const u=Math.min(P,Date.now()-k+r);setTimeout(s,u)}else{const u=Math.min(P,w/3);o=0,u>10?setTimeout(s,u):R(s)}}R(s)})},ue="chillout",de="Reduce CPU usage by non-blocking async loop and psychologically speed up in JavaScript",fe="5.0.0",me="polygon planet <polygon.planet.aqua@gmail.com>",pe={url:"https://github.com/polygonplanet/chillout/issues"},he={"@babel/core":"^7.8.3","@babel/preset-env":"^7.8.3",babelify:"^10.0.0",bannerify:"^1.0.1",browserify:"^16.5.0","es6-shim":"^0.35.5",eslint:"^6.8.0",karma:"^4.4.1","karma-browserify":"^6.1.0","karma-chrome-launcher":"^3.1.0","karma-detect-browsers":"^2.3.3","karma-es6-shim":"^1.0.0","karma-firefox-launcher":"^1.3.0","karma-ie-launcher":"^1.0.0","karma-mocha":"^1.3.0","karma-mocha-reporter":"^2.2.5","karma-safari-launcher":"^1.0.0",mocha:"^7.0.0","package-json-versionify":"^1.0.4",pidusage:"1.0.2","power-assert":"^1.6.1","uglify-js":"^3.7.5",uglifyify:"^5.0.2",watchify:"^3.11.1"},ge={node:">=8.10.0"},ye=["dist/*","src/*"],ve="https://github.com/polygonplanet/chillout",be=["acceleration","async await","asynchronous","cpu use rate","cpu utilization rate","heavy processing","iterate","iteration","lightweight","nextTick","non-blocking","optimization","optimize for loop","performance","promise","reduce cpu usage","setimmediate","waitUntil"],Ee="MIT",ke="src/index.js",we={type:"git",url:"https://github.com/polygonplanet/chillout.git"},Te={benchmark:"node benchmark/benchmark",build:"npm run compile && npm run minify",compile:"browserify src/index.js -o dist/chillout.js -s chillout -p [ bannerify --file src/banner.js ] --no-bundle-external --bare",minify:"uglifyjs dist/chillout.js -o dist/chillout.min.js --comments -c -m -b ascii_only=true,beautify=false",test:"./node_modules/.bin/eslint . && npm run build && mocha test/**/*.spec.js --timeout 10000 && karma start karma.conf.js",travis:"npm run build && mocha test/**/*.spec.js --timeout 10000 && karma start karma.conf.js --single-run",watch:"watchify src/index.js -o dist/chillout.js -s chillout -p [ bannerify --file src/banner.js ] --no-bundle-external --bare --poll=200 -v"},Ne={transform:["babelify","package-json-versionify"]},_e={name:ue,description:de,version:fe,author:me,bugs:pe,devDependencies:he,engines:ge,files:ye,homepage:ve,keywords:be,license:Ee,main:ke,repository:we,scripts:Te,browserify:Ne};const m=g,p=ce,{isThenable:Se,isArrayLike:xe}=y,De=M,Ae=G;c.version=_e.version,c.forEach=function(t,r,a){return p(m.forEach(t,r,a))},c.repeat=function(t,r,a){return p(m.repeat(t,r,a))},c.until=function(t,r){return p(m.until(t,r))};const Ce=13;c.waitUntil=function(t,r){return p(m.until(t,r),Ce)},c.forOf=function(t,r,a){return p(m.forOf(t,r,a))},c.StopIteration=Ae,c.iterate=p,c.iterator=m,c.isThenable=Se,c.isArrayLike=xe,c.nextTick=De;function je(){Array.isArray(l.persist.ghost.unfriends)||(l.persist.store.unfriends=[]),Array.isArray(l.persist.ghost.lastFriends)||(l.persist.store.lastFriends=[]),h.add((()=>{let e=0,t=new Set(l.persist.store.lastFriends.length?l.persist.store.lastFriends:L.getFriendIDs());async function r(){if(e)return;let a=new Set(L.getFriendIDs());await c.forEach([...t.values()],i=>{if(a.has(i))return;let o=Z.getUser(i);!o||(l.persist.store.unfriends.unshift({at:Date.now(),tag:o.tag,id:o.id,avatar:o.avatar,_id:Math.random().toString(36).replace(".","")}),C.toasts.show.info(`You are no longer friends with "${o.tag}"!`))}),t=a,l.persist.store.lastFriends=[...a.values()],await A.sleep(1e4),r()}return r(),()=>{e=1}})())}function Oe(){Array.isArray(l.persist.ghost.leavedGuilds)||(l.persist.store.leavedGuilds=[]),Array.isArray(l.persist.ghost.lastGuilds)||(l.persist.store.lastGuilds=[]),h.add((()=>{let e=0,t=l.persist.store.lastGuilds.length?l.persist.store.lastGuilds:$.getGuilds();async function r(){if(e)return;let a=$.getGuilds();await c.forEach(Object.keys(t),i=>{if(a[i])return;let o=t[i];l.persist.store.leavedGuilds.unshift({at:Date.now(),name:o.name,id:o.id,icon:o.icon,_id:Math.random().toString(36).replace(".","")}),C.toasts.show.info(`You are laved from "${o.name}"!`)}),t=a,l.persist.store.lastGuilds=Object.fromEntries(Object.entries(a).map(i=>[i.id,{name:i.name,id:i.id,icon:i.icon}])),await A.sleep(1e4),r()}return r(),()=>{e=1}})())}var Le=()=>H.injectCSS(".uagll--modal-root{display:flex;flex-direction:column;padding:16px}.uagll--modal-header{margin-bottom:16px;display:flex;align-items:center;justify-content:space-between}.uagll--modal-title{font-size:28px;color:#efefef;font-weight:600}.uagll--modal-close{width:24px;height:24px;cursor:pointer}.uagll--modal-close svg{width:24px;height:24px}.uagll--modal-body{display:flex;flex-direction:column;height:550px;overflow:auto;contain:content}.uagll--modal-body section{margin-top:16px;margin-bottom:8px}.uagll--modal-body .section-title{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}.uagll--modal-body .section-content .item{display:flex;gap:8px;padding:8px;background-color:#0000001a;border-radius:4px;margin-bottom:8px}.uagll--modal-body .section-content .item>.left{height:48px;width:48px;border-radius:4px;background-position:center;background-size:cover}.uagll--modal-body .section-content .item>.right{display:flex;flex-direction:column;width:100%}.uagll--modal-body .section-content .item>.right>.top{display:flex;justify-content:space-between}.uagll--modal-body .section-content .item>.right>.top>.left{display:flex;color:#fafafa;font-size:28px;font-weight:500;align-items:flex-end;user-select:text}.uagll--modal-body .section-content .item>.right>.top>.left .discriminator{font-size:20px;opacity:.5}.uagll--modal-body .section-content .item>.right>.top>.right{cursor:pointer}.uagll--modal-body .section-content .item>.right>.top>.right svg{width:16px;height:16px}.uagll--modal-body .section-content .item>.right>.bottom{display:flex;flex-direction:column;color:#efefef;opacity:.75;font-size:10px;margin-top:2px;user-select:text}.uagll--modal-body .header{font-size:22px;font-weight:600;color:#efefef}");function $e(){h.add(Le())}var Ie={load(){je(),Oe(),$e(),le()},unload(){h.removeAll()}};return Ie})(acord.modules.common.React,acord.dom,acord.modules.webpack,acord.modules.common,acord.modules.common.React,acord.extension,acord.utils,acord.ui,acord.patcher);
