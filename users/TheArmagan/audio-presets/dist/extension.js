(function(p,o,c){"use strict";function r(a){return a&&typeof a=="object"&&"default"in a?a:{default:a}}var u=r(o),h=r(c);class d{constructor(){this.patches=[]}add(...e){this.patches.push(...e)}remove(e){let[t]=this.patches.splice(this.patches.indexOf(i=>i==e),1);t()}removeAll(){let e=this.patches.splice(0,this.patches.length);for(let t=0;t<e.length;t++)e[t]()}}var n=new d,f={load(){const a=h.default.find(e=>e?.prototype?._ensureAudio,!0);n.add(u.default.instead("_ensureAudio",a.prototype,async function(e,t){let i=Object.fromEntries(p.persist.ghost.settings.preset.split(";").map(s=>s.split("=")));if(i[this.name]){let s=i[this.name];if(s.startsWith("https://")){let l=await t.apply(this,e);return l.src=s,l}else return this.name=s,t.apply(this,e)}else return t.apply(this,e)}))},unload(){n.removeAll()},settings:{data:[{type:"input",altType:"text",property:"preset",value:"message1=message2;call_ringing=call_ringing_beat",placeholder:"message1=message2;call_ringing=call_ringing_beat",name:"Audio Preset",description:"Your audio preset configuration..",size:"large"}]}};return f})(acord.extension,acord.patcher,acord.modules.webpack);
