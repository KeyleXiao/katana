define(["jquery","realtimePages","helpers","dataTables","handlebars","extend-moment","libs/jquery.form","text!templates/builderdetail.handlebars","timeElements","rtGenericTable","popup"],function(e,t,n,r,i,s,o,u,a,f,l){var c,h,p,d,v,m=Handlebars.compile(u);return c={init:function(){h=c.currentBuildsTableInit(e("#rtCurrentBuildsTable")),p=c.pendingBuildsTableInit(e("#rtPendingBuildsTable")),d=f.table.buildTableInit(e("#rtBuildsTable")),v=c.slavesTableInit(e("#rtSlavesTable"));var r=t.defaultRealtimeFunctions();r.project=c.rtfProcessCurrentBuilds,r.pending_builds=c.rtfProcessPendingBuilds,r.builds=c.rtfProcessBuilds,r.slaves=c.rtfProcessSlaves,l.registerJSONPopup(v),t.initRealtime(r),window.location.search!==""&&n.codeBaseBranchOverview(e("#brancOverViewCont"))},rtfProcessCurrentBuilds:function(e){a.clearTimeObjects(h),h.fnClearTable();try{e.currentBuilds!==undefined&&(h.fnAddData(e.currentBuilds),a.updateTimeObjects()),a.updateTimeObjects()}catch(t){}},rtfProcessPendingBuilds:function(e){f.table.rtfGenericTableProcess(p,e)},rtfProcessSlaves:function(e){e=n.objectPropertiesToArray(e),f.table.rtfGenericTableProcess(v,e)},rtfProcessBuilds:function(e){f.table.rtfGenericTableProcess(d,e)},currentBuildsTableInit:function(t){var i={};return i.oLanguage={sEmptyTable:"No current builds"},i.aoColumns=[{mData:null,sTitle:"#"},{mData:null,sTitle:"Current build",sWidth:"200px"},{mData:null,sTitle:"Revision"},{mData:null,sTitle:"Author"}],i.aoColumnDefs=[f.cell.buildID(0),{aTargets:[1],sClass:"txt-align-left",mRender:function(t,n,r){var i={showRunningBuilds:!0},s=e.extend(i,r);return m(s)},fnCreatedCell:function(t){n.delegateToProgressBar(e(t).find(".percent-outer-js"))}},f.cell.revision(2),{aTargets:[3],sClass:"txt-align-left",mRender:function(t,n,r){var i="N/A";return e.each(r.properties,function(e,t){t[0]==="owner"&&(i=t[1])}),i}}],r.initTable(t,i)},pendingBuildsTableInit:function(t){var n={};return n.oLanguage={sEmptyTable:"No pending builds"},n.aoColumns=[{mData:null},{mData:null},{mData:null,sWidth:"80px"}],n.aoColumnDefs=[{aTargets:[0],sClass:"txt-align-left",mRender:function(e,t,n){return s.getDateFormatted(n.submittedAt)}},{aTargets:[1],sClass:"txt-align-left",mRender:function(){return m({pendingBuildWait:!0})},fnCreatedCell:function(t,n,r){a.addElapsedElem(e(t).find(".waiting-time-js"),r.submittedAt)}},{aTargets:[2],sClass:"txt-align-right",mRender:function(e,t,n){return m({removeBuildSelector:!0,data:n})}}],r.initTable(t,n)},slavesTableInit:function(e){var t={};return t.oLanguage={sEmptyTable:"No slaves attached"},t.aoColumns=[{mData:null},{mData:null}],t.aoColumnDefs=[f.cell.slaveName(0,"friendly_name","url"),f.cell.slaveStatus(1)],r.initTable(e,t)}},c});