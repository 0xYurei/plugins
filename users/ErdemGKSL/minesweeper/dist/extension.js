(function(l,s,d){"use strict";let c=(t=4)=>{const o="\u{1F4A3}",r="\u2764\uFE0F",u=[],F=["0\uFE0F\u20E3","1\uFE0F\u20E3","2\uFE0F\u20E3","3\uFE0F\u20E3","4\uFE0F\u20E3","5\uFE0F\u20E3","6\uFE0F\u20E3","7\uFE0F\u20E3","8\uFE0F\u20E3","9\uFE0F\u20E3","\u{1F51F}"];for(let e=0;e<t;e++){u[e]=[];for(let n=0;n<t;n++)u[e][n]=Math.random()<.18?o:"-"}for(let e=0;e<t;e++){e:for(let n=0;n<t;n++)if(u[e][n]==="-"){if(Math.random()<.08){u[e][n]=r;continue e}let i=0;e>0&&n>0&&u[e-1][n-1]===o&&i++,e>0&&u[e-1][n]===o&&i++,e>0&&n<t-1&&u[e-1][n+1]===o&&i++,n>0&&u[e][n-1]===o&&i++,n<t-1&&u[e][n+1]===o&&i++,e<t-1&&n>0&&u[e+1][n-1]===o&&i++,e<t-1&&u[e+1][n]===o&&i++,e<t-1&&n<t-1&&u[e+1][n+1]===o&&i++,u[e][n]=F[i]}}const f=u.map(e=>e.map(n=>`|| ${n} ||`).join(" ")).join(`
`);return f.includes(F[0])||!f.includes(r)?c(t):f},a=null;var m={load(){a=l.patcher.before("sendMessage",s.common.MessageActions,t=>{const[o,r,u]=t;return r?.content?.startsWith?.("!!minesweeper")&&d.getCurrentlySelectedChannelId()===o&&c&&(t[1].content=c(Math.min(Math.max(Number(r.content.match(/\d+/)?.[0]),2),8)||4)),t})},unload(){c=null,a?.()}};return m})(acord,acord.modules,acord.modules.common.SelectedChannelStore);
