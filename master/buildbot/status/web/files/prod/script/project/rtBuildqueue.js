define(["jquery","project/realtimePages","helpers"],function(e,t,n){var r;return r={init:function(){function s(e){sock&&sock.send(e)}function u(e){t.rtBuildqueue(e,o)}window.sock=null;var r,i=e("body").attr("data-realTimeServer");r=i,console.log(e("body").attr("data-realTimeServer")),"WebSocket"in window?sock=new WebSocket(r):"MozWebSocket"in window?sock=new MozWebSocket(r):(u("Browser does not support WebSocket!"),window.location="http://autobahn.ws/unsupportedbrowser"),sock&&(sock.onopen=function(){console.log(n.getJsonUrl()),s(n.getJsonUrl()),u("Connected to "+r)},sock.onclose=function(e){u("Connection closed (wasClean = "+e.wasClean+", code = "+e.code+", reason = '"+e.reason+"')"),sock=null,console.log("closed")},sock.onmessage=function(e){u(e.data)});var o=e(".tablesorter-js tbody > tr")}},r});