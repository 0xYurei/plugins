(function(i,c){"use strict";const d="\u{E01F0}\u{E01F0}\u{E01F0}";let t={enabled:!0};var u={load(){t.enabled=!0;let n=i.common.MessageActions.sendMessage;i.common.MessageActions.sendMessage=function(...s){if(!t.enabled)return n.call(this,...s);const l=c.persist.ghost?.settings?.words?.split(`
`);if(!l?.length)return n.call(this,...s);const[h,e,g]=s;let o=e.content.split(" ");e.content&&l.forEach(a=>{e.content.length<2e3&&(o=o.map(r=>r.toLowerCase().includes(a.toLowerCase())?r.replace(a,a.split("").join(d)):r),e.content=o.join(" "))}),n.call(this,h,e,g)}},unload(){t.enabled=!1},settings:{data:[{type:"textarea",name:"Good words",rows:6,property:"words",description:"The words you want to say in chat without blocking by the bot.",placeholder:`shit
bitch`,value:""}]}};return u})(acord.modules,acord.extension);
