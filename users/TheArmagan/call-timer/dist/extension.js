(function(f,h,p,T,m,v){"use strict";function c(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var C=c(f),s=c(h),E=c(p),S=c(m);class N{constructor(){this.patches=[]}add(...n){this.patches.push(...n)}remove(n){let[e]=this.patches.splice(this.patches.indexOf(a=>a==n),1);e()}removeAll(){let n=this.patches.splice(0,this.patches.length);for(let e=0;e<n.length;e++)n[e]()}}var o=new N;const{FluxDispatcher:l}=S.default;function _(t){isNaN(parseInt(t))&&(t=0),t=Math.floor(t);let n=Math.floor(t/60/60);return`${n>0?`${n.toString().padStart(2,"0")}:`:""}${Math.floor(t/60%60).toString().padStart(2,"0")}:${(t%60).toString().padStart(2,"0")}`}const i=acord.modules.webpack.findByProps("channel","voiceUsers","inner","beta"),d=acord.modules.webpack.find(t=>t?.subtext&&Object.keys(t).length==1);function b(){let t={startTime:Date.now(),render:!0};o.add((()=>{function e(a){a?.state==="RTC_CONNECTED"&&a?.context==="default"?(t.startTime=Date.now(),t.render=!0):a?.state=="RTC_DISCONNECTED"&&a?.context==="default"&&(t.startTime=Date.now(),t.render=!1)}return l.subscribe("RTC_CONNECTION_STATE",e),()=>l.unsubscribe("RTC_CONNECTION_STATE",e)})());function n(e){if(e.querySelector("ct--patched"))return;e.classList.add("ct--patched");let a=s.default.parents(e,'[class*="inner-"] > div')?.[0],r=s.default.parseHTML(`<div class="${d.subtext} ct--container"></div>`);t.startTime=Date.now(),t.render=!0,r.render=()=>{if(!t.render){r.innerHTML="";return}r.innerHTML=T.i18n.format("TIME_ELAPSED",_((Date.now()-t.startTime)/1e3))};let O=E.default.interval(r.render,1e3);r.render();let u=()=>r.unmount();r.unmount=()=>{o.remove(u),r.remove(),O()},o.add(u),a.appendChild(r)}document.querySelectorAll(`.${i.channel}.${d.subtext}`).forEach(e=>{n(e)}),o.add(C.default.on("domMutation",e=>{e.addedNodes.forEach(a=>{a.nodeType!=Node.TEXT_NODE&&a.querySelectorAll(`.${i.channel}.${d.subtext}`).forEach(r=>{n(r)})}),e.removedNodes.forEach(a=>{a.nodeType!=Node.TEXT_NODE&&a.querySelectorAll(".ct--patched").forEach(r=>{r?.unmount?.()})})}))}var x=()=>v.injectCSS(".ct--container{margin-top:8px;font-weight:400;font-size:12px}");function D(){o.add(x())}var y={load(){D(),b()},unload(){o.removeAll()}};return y})(acord.events,acord.dom,acord.utils,acord.extension,acord.modules.common,acord.patcher);
