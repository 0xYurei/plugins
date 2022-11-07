(function(exports,extension,modules,common){"use strict";const transformatorRegex=/([GAD])\: ?["]((?:(?=(\\?))\3.)*?)["] ?\=> ?["]((?:(?=(\\?))\5.)*?)["] ?(?:\((\d+)\))?/gi,SendMessageStore=modules.webpack.findByProps("sendMessage","truncateMessages","patchMessageAttachments"),ref={responses:[]};function handleMessageCreate({message:e,channelId:t}){if(e.author.id==common.UserStore.getCurrentUser().id)return;const s=ref.responses.find(r=>(r.type=="A"||r.type=="G"&&e.guild_id||r.type=="D"&&!e.guild_id)&&r.matcher.test(e.content));s.rateLimit>Date.now()||(s.rateLimit=Date.now()+s.debounceLimit,SendMessageStore.sendMessage(t,{content:s.response}))}function loadResponses(val){const responseStr=val||extension.persist.ghost?.settings?.responses;responseStr&&(ref.responses=[...responseStr.matchAll(transformatorRegex)].map((match,type,finderRegex,_,responseStr,__,debounce)=>({type,matcher:new RegExp(finderRegex),debounceLimit:Number(debounce)||1e3,get response(){return eval(`\`${responseStr.replaceAll('\\"','"').replaceAll("`","\\`")}\``)},rateLimit:0})))}var index={load(){try{loadResponses(),common.FluxDispatcher.subscribe("MESSAGE_CREATE",handleMessageCreate)}catch(e){console.error("[AR Error]",e)}},unload(){ref.responses=[],common.FluxDispatcher.unsubscribe("MESSAGE_CREATE",handleMessageCreate)},settings:{data:[{type:"textarea",name:"Auto Responses",rows:9,property:"responses",description:'Format is: [type]: "Trigger as regex" => "Response as string" (rate limit as milliseconds), type stands for guild(G), dm(D) or all(A).',placeholder:`G: "acord" => "wow"
D: "foo" => "bar"
A: "Hello" => "world." (5000)`,value:""}],update(e,t){switch(e){case"responses":{loadResponses(t);break}}}}};return exports.default=index,exports.ref=ref,Object.defineProperty(exports,"__esModule",{value:!0}),exports})({},acord.extension,acord.modules,acord.modules.common);
