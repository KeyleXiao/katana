define(["jquery","screensize"],function(e,t){var n;return n={init:function(){function r(){if(n){var t=0;e(".breadcrumbs-nav li").each(function(){t+=e(this).outerWidth()}),e(".breadcrumbs-nav").width(t+100)}else e(".breadcrumbs-nav").width("")}function i(t){e(t).parent().hover(function(){var n=e(t,this).attr("data-txt"),r=e("<div/>").addClass("tool-tip").text(n);e(this).append(e(r).css({top:e(t,this).position().top-10,left:e(t,this).position().left-20}).show())},function(){e(".tool-tip").remove()}),e(document).bind("click touchstart",function(t){e(".tool-tip").remove(),e(this).unbind(t)})}e(".builders_page").length&&window.location.search!=""&&function(e){var t=decodeURIComponent(window.location.search),n=t.split("&"),r=e('<div class="border-table-holder"><table class="codebase-branch-table"><tr class="codebase"><th>Codebase</th></tr><tr class="branch"><th>Branch</th></tr></table></div>');e(r).appendTo(e(".filter-table-input")),e(n).each(function(t){var n=this.split("_branch")[0];t==0&&(n=this.replace("?","").split("_branch")[0]);var r=this.split("=")[1];e("tr.codebase").append("<td>"+n+"</td>"),e("tr.branch").append("<td>"+r+"</td>")})}(jQuery),e("#tb-root").length!=0&&e.ajax({url:"/json?filter=0",dataType:"json",type:"GET",cache:!1,success:function(t){function s(t){var n=0;return e.each(t,function(){n+=parseFloat(this)||0}),n}var n=[],r=[],i=[];e.each(t.builders,function(e,t){n.push(e),r.push(t.pendingBuilds),t.state=="building"&&i.push(t.currentBuilds)});var o=[];e.each(t.slaves,function(e){o.push(e)});var u=[];e.each(t.project,function(e){u.push(e)}),e("#slavesNr").text(o.length),e("#pendingBuilds").text(s(r))}});var n=t.isMediumScreen();r(),e(window).resize(function(){n=t.isMediumScreen(),r()}),e(function(){e("#selectall").click(function(){e(".fi-js").prop("checked",this.checked)})}),e(".force-individual-js").click(function(t){t.preventDefault();var n=e(this).prev().prev().val(),r=e('<input checked="checked" name="cancelselected" type="hidden" value="'+n+'"  />');e(r).insertAfter(e(this)),e("#formWrapper form").submit()}),e(function(){var n=/chrome/.test(navigator.userAgent.toLowerCase()),r=navigator.platform.toUpperCase().indexOf("WIN")!==-1;n&&r&&e("body").addClass("chrome win")}),i(".ellipsis-js"),e(".codebases-list .reason-txt").each(function(){var t=e(this).text().trim();t==="A build was forced by '':"&&e(this).remove()}),e("#submitBtn").click(function(){e("#formWrapper form").submit()}),e(".run-build-js").click(function(t){e(".remove-js").remove(),t.preventDefault();var n=e(this).prev().attr("data-b"),r=e(this).prev().attr("data-indexb"),i='<div id="bowlG"><div id="bowl_ringG"><div class="ball_holderG"><div class="ballG"></div></div></div></div>';e("body").append(i).show(),e.get("",{rt_update:"extforms",datab:n,dataindexb:r}).done(function(t){e("#bowlG").remove(),e("<div/>").addClass("formCont").hide().appendTo("body"),e(t).appendTo(".formCont"),e(".formCont .command_forcebuild .grey-btn").trigger("click")})})}},n});