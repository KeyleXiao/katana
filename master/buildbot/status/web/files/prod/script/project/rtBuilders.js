define(["jquery","realtimePages","helpers","dataTables","mustache","libs/jquery.form","text!templates/builders.mustache","timeElements","rtGenericTable"],function(e,t,n,r,i,s,o,u,a){var f,l;return f={init:function(){l=f.dataTableInit(e(".builders-table"));var r=t.defaultRealtimeFunctions();r.builders=f.realtimeFunctionsProcessBuilders,t.initRealtime(r);var i=e(".dataTables_wrapper .top");window.location.search!==""&&n.codeBaseBranchOverview(i)},realtimeFunctionsProcessBuilders:function(e){u.clearTimeObjects(l),l.fnClearTable();try{l.fnAddData(e.builders),u.updateTimeObjects()}catch(t){}},dataTableInit:function(t){var s={};return s.aoColumns=[{mData:null,sWidth:"28%"},{mData:null,sWidth:"15%"},{mData:null,sWidth:"14%"},{mData:null,sWidth:"20%"},{mData:null,sWidth:"13%"},{mData:null,sWidth:"5%"},{mData:null,sWidth:"5%",bSortable:!1}],s.aoColumnDefs=[{aTargets:[0],sClass:"txt-align-left",mRender:function(e,t,n){return i.render(o,{name:n.name,friendly_name:n.friendly_name,url:n.url})}},a.cell.buildProgress(1,!1),{aTargets:[2],sClass:"txt-align-left last-build-js",mRender:function(e,t,n){return i.render(o,{showLatestBuild:!0,latestBuild:n.latestBuild})},fnCreatedCell:function(t,r,i){if(i.latestBuild!==undefined){u.addTimeAgoElem(e(t).find(".last-run"),i.latestBuild.times[1]);var s=n.getTime(i.latestBuild.times[0],i.latestBuild.times[1]).trim();e(t).find(".small-txt").html("("+s+")"),e(t).find(".hidden-date-js").html(i.latestBuild.times[1])}}},{aTargets:[3],mRender:function(e,t,n){return i.render(o,{showStatus:!0,latestBuild:n.latestBuild})},fnCreatedCell:function(t,n,r){var i=r.latestBuild===undefined?"":r.latestBuild;e(t).removeClass().addClass(i.results_text)}},a.cell.revision(4,function(e){return e.latestBuild!==undefined?e.latestBuild.sourceStamps:undefined}),a.cell.buildLength(5,function(e){return e.latestBuild!==undefined?e.latestBuild.times:undefined}),{aTargets:[6],mRender:function(e,t,n){return i.render(o,{customBuild:!0,url:n.url,builderName:n.name})}}],r.initTable(t,s)}},f});