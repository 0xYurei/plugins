(function(r,p,m,S){"use strict";function g(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var E=g(p),h=g(m);class H{constructor(){this.patches=[]}add(...i){this.patches.push(...i)}remove(i){let[n]=this.patches.splice(this.patches.indexOf(c=>c==i),1);n()}removeAll(){let i=this.patches.splice(0,this.patches.length);for(let n=0;n<i.length;n++)i[n]()}}var o=new H,M=()=>S.injectCSS(".amd--edited-message{background-color:#1efa1a1a}.amd--deleted-message{background-color:#f047471a}"),D={load(){o.add(M());let d=[];function i(t,s){return r.MessageStore.__getLocalVars().rawMessages?.[t]?.[s]}function n(t,s=!0){let a=d.find(e=>e.messageId==t);return a||(a={deleted:!1,messageId:t,edits:[]},s&&d.push(a)),a}function c(t){if(!t?.id?.startsWith("chat-messages-")||t.antiMessageDeletionUpdate)return;let s=t.id.split("-").pop();t.antiMessageDeletionUpdate=()=>{let a=n(s,!1);a.deleted&&t.classList.add("amd--deleted-message"),a.content&&(t.classList.add("amd--edited-message"),h.default.ifExists(t.querySelector(`#message-content-${s}`),e=>{e.innerHTML=`${a.edits.map(l=>r.SimpleMarkdown.markdownToHtml(`${l} *(edited)*`)).join("")}${r.SimpleMarkdown.markdownToHtml(`${a.content} *(original)*`)}`}))},t.antiMessageDeletionUpdate()}o.add(E.default.patch('[id*="chat-messages-"]',c)),o.add((()=>{let t=r.FluxDispatcher._actionHandlers._orderedActionHandlers.MESSAGE_DELETE.find(e=>e.name=="MessageStore"),s=t.actionHandler,a=t.storeDidChange;return t.actionHandler=e=>{!e?.id||e.author.bot||(n(e.id,!0).deleted=!0,h.default.ifExists(document.querySelector(`#chat-messages-${e?.id}`),c))},t.storeDidChange=()=>{},()=>{d=[];let e=r.FluxDispatcher._actionHandlers._orderedActionHandlers.MESSAGE_DELETE.find(l=>l.name=="MessageStore");e.actionHandler=s,e.storeDidChange=a}})()),o.add((()=>{let t=r.FluxDispatcher._actionHandlers._orderedActionHandlers.MESSAGE_UPDATE.find(e=>e.name=="MessageStore"),s=t.actionHandler,a=t.storeDidChange;return t.actionHandler=function(e){if(!e?.message?.id||e?.message?.author?.bot)return;if(e.message.content){let f=i(e.message.channel_id,e.message.id);if(f){let u=n(f.id,!0);u.edits.length||(u.content=f.content),u.content!=e.message.content&&u.edits.push(e.message.content)}}let l=s.call(this,e);return h.default.ifExists(document.querySelector(`#chat-messages-${e.message.id}`),c),l},()=>{let e=r.FluxDispatcher._actionHandlers._orderedActionHandlers.MESSAGE_DELETE.find(l=>l.name=="MessageStore");e.actionHandler=s,e.storeDidChange=a}})())},unload(){o.removeAll()}};return D})(acord.modules.common,acord.dom,acord.utils,acord.patcher);
