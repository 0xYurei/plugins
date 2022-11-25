(function(d,o,c,h,p,w){"use strict";let r=[],s=new Set,i,l=({message:t})=>{const e=r.find(n=>t.content.toLowerCase().includes(n.toLowerCase()));if(e){if(s.has(t.nonce||t.id))return;s.add(t.nonce||t.id);const n=t.content.indexOf(e),a=o.persist.ghost.settings.areaLength||24,u=n+e.length+a,b=((n-a>0?"\u2026":"")+d.escapeHTML(t.content.slice(Math.max(0,n-a),u))+(t.content.length>u?"\u2026":"")).replaceAll(e,`<strong>${e}</strong>`);w.notifications.show(`<strong><u>${d.escapeHTML(p.getUser(t.author.id).tag)}:</u></strong> ${b}`,{onClick:()=>{h.transitionTo(`/channels/${t.guild_id||"@me"}/${t.channel_id}/${t.id}`)}})}};var g={load(){c.FluxDispatcher.subscribe("MESSAGE_CREATE",l),r=o.persist.ghost.settings?.words.split(", "),i=setInterval(()=>{s.clear()},1e3*60*5)},unload(){c.FluxDispatcher.unsubscribe("MESSAGE_CREATE",l),i&&clearInterval(i)},settings:{data:[{type:"textarea",name:"Notify words",rows:6,property:"words",description:"The words that you want to be get notified when a message contains it.",placeholder:"hi, how are you?",value:""},{type:"input",altType:"number",name:"Area Length",property:"areaLength",description:"The number of characters to display before and after the specified words.",placeholder:"24",value:24}],update(t,e){t=="words"&&f(e)}}};const f=_.debounce(function(t){o.persist.store.settings.words=(o.persist.ghost.settings?.words||t)?.split(/,|\n/).map(e=>e.trim()).join(", "),r=o.persist.ghost.settings?.words.split(", ")},5e3);return g})(acord.dom,acord.extension,acord.modules.common,acord.modules.common.Router,acord.modules.common.UserStore,acord.ui);
