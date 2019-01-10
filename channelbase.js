/*
|Thanks to: Kuer, Xaekai[xaemae], ss7(supersaw7) and kenblu24
|Theme by BILL(2) , You can find me on my discord channel discord.gg/fwadWd9
|You are free to use (and edit) this theme but leave the credits in place for everyone involved.
*/

//force https for videos from googs
if (window.location.protocol != "https:")
    window.location.href = "https:" + window.location.href.substring(window.location.protocol.length);
$('head').append("<link rel='stylesheet' href='//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css' />"); 

console.log("sup yall");

	/*! nanoScrollerJS - v0.8.7 - (c) 2015 James Florentino; Licensed MIT */

	!function(a){return"function"==typeof define&&define.amd?define(["jquery"],function(b){return a(b,window,document)}):"object"==typeof exports?module.exports=a(require("jquery"),window,document):a(jQuery,window,document)}(function(a,b,c){"use strict";var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H;z={paneClass:"nano-pane",sliderClass:"nano-slider",contentClass:"nano-content",enabledClass:"has-scrollbar",flashedClass:"flashed",activeClass:"active",iOSNativeScrolling:!1,preventPageScrolling:!1,disableResize:!1,alwaysVisible:!1,flashDelay:1500,sliderMinHeight:20,sliderMaxHeight:null,documentContext:null,windowContext:null},u="scrollbar",t="scroll",l="mousedown",m="mouseenter",n="mousemove",p="mousewheel",o="mouseup",s="resize",h="drag",i="enter",w="up",r="panedown",f="DOMMouseScroll",g="down",x="wheel",j="keydown",k="keyup",v="touchmove",d="Microsoft Internet Explorer"===b.navigator.appName&&/msie 7./i.test(b.navigator.appVersion)&&b.ActiveXObject,e=null,D=b.requestAnimationFrame,y=b.cancelAnimationFrame,F=c.createElement("div").style,H=function(){var a,b,c,d,e,f;for(d=["t","webkitT","MozT","msT","OT"],a=e=0,f=d.length;f>e;a=++e)if(c=d[a],b=d[a]+"ransform",b in F)return d[a].substr(0,d[a].length-1);return!1}(),G=function(a){return H===!1?!1:""===H?a:H+a.charAt(0).toUpperCase()+a.substr(1)},E=G("transform"),B=E!==!1,A=function(){var a,b,d;return a=c.createElement("div"),b=a.style,b.position="absolute",b.width="100px",b.height="100px",b.overflow=t,b.top="-9999px",c.body.appendChild(a),d=a.offsetWidth-a.clientWidth,c.body.removeChild(a),d},C=function(){var a,c,d;return c=b.navigator.userAgent,(a=/(?=.+Mac OS X)(?=.+Firefox)/.test(c))?(d=/Firefox\/\d{2}\./.exec(c),d&&(d=d[0].replace(/\D+/g,"")),a&&+d>23):!1},q=function(){function j(d,f){this.el=d,this.options=f,e||(e=A()),this.$el=a(this.el),this.doc=a(this.options.documentContext||c),this.win=a(this.options.windowContext||b),this.body=this.doc.find("body"),this.$content=this.$el.children("."+this.options.contentClass),this.$content.attr("tabindex",this.options.tabIndex||0),this.content=this.$content[0],this.previousPosition=0,this.options.iOSNativeScrolling&&null!=this.el.style.WebkitOverflowScrolling?this.nativeScrolling():this.generate(),this.createEvents(),this.addEvents(),this.reset()}return j.prototype.preventScrolling=function(a,b){if(this.isActive)if(a.type===f)(b===g&&a.originalEvent.detail>0||b===w&&a.originalEvent.detail<0)&&a.preventDefault();else if(a.type===p){if(!a.originalEvent||!a.originalEvent.wheelDelta)return;(b===g&&a.originalEvent.wheelDelta<0||b===w&&a.originalEvent.wheelDelta>0)&&a.preventDefault()}},j.prototype.nativeScrolling=function(){this.$content.css({WebkitOverflowScrolling:"touch"}),this.iOSNativeScrolling=!0,this.isActive=!0},j.prototype.updateScrollValues=function(){var a,b;a=this.content,this.maxScrollTop=a.scrollHeight-a.clientHeight,this.prevScrollTop=this.contentScrollTop||0,this.contentScrollTop=a.scrollTop,b=this.contentScrollTop>this.previousPosition?"down":this.contentScrollTop<this.previousPosition?"up":"same",this.previousPosition=this.contentScrollTop,"same"!==b&&this.$el.trigger("update",{position:this.contentScrollTop,maximum:this.maxScrollTop,direction:b}),this.iOSNativeScrolling||(this.maxSliderTop=this.paneHeight-this.sliderHeight,this.sliderTop=0===this.maxScrollTop?0:this.contentScrollTop*this.maxSliderTop/this.maxScrollTop)},j.prototype.setOnScrollStyles=function(){var a;B?(a={},a[E]="translate(0, "+this.sliderTop+"px)"):a={top:this.sliderTop},D?(y&&this.scrollRAF&&y(this.scrollRAF),this.scrollRAF=D(function(b){return function(){return b.scrollRAF=null,b.slider.css(a)}}(this))):this.slider.css(a)},j.prototype.createEvents=function(){this.events={down:function(a){return function(b){return a.isBeingDragged=!0,a.offsetY=b.pageY-a.slider.offset().top,a.slider.is(b.target)||(a.offsetY=0),a.pane.addClass(a.options.activeClass),a.doc.bind(n,a.events[h]).bind(o,a.events[w]),a.body.bind(m,a.events[i]),!1}}(this),drag:function(a){return function(b){return a.sliderY=b.pageY-a.$el.offset().top-a.paneTop-(a.offsetY||.5*a.sliderHeight),a.scroll(),a.contentScrollTop>=a.maxScrollTop&&a.prevScrollTop!==a.maxScrollTop?a.$el.trigger("scrollend"):0===a.contentScrollTop&&0!==a.prevScrollTop&&a.$el.trigger("scrolltop"),!1}}(this),up:function(a){return function(b){return a.isBeingDragged=!1,a.pane.removeClass(a.options.activeClass),a.doc.unbind(n,a.events[h]).unbind(o,a.events[w]),a.body.unbind(m,a.events[i]),!1}}(this),resize:function(a){return function(b){a.reset()}}(this),panedown:function(a){return function(b){return a.sliderY=(b.offsetY||b.originalEvent.layerY)-.5*a.sliderHeight,a.scroll(),a.events.down(b),!1}}(this),scroll:function(a){return function(b){a.updateScrollValues(),a.isBeingDragged||(a.iOSNativeScrolling||(a.sliderY=a.sliderTop,a.setOnScrollStyles()),null!=b&&(a.contentScrollTop>=a.maxScrollTop?(a.options.preventPageScrolling&&a.preventScrolling(b,g),a.prevScrollTop!==a.maxScrollTop&&a.$el.trigger("scrollend")):0===a.contentScrollTop&&(a.options.preventPageScrolling&&a.preventScrolling(b,w),0!==a.prevScrollTop&&a.$el.trigger("scrolltop"))))}}(this),wheel:function(a){return function(b){var c;if(null!=b)return c=b.delta||b.wheelDelta||b.originalEvent&&b.originalEvent.wheelDelta||-b.detail||b.originalEvent&&-b.originalEvent.detail,c&&(a.sliderY+=-c/3),a.scroll(),!1}}(this),enter:function(a){return function(b){var c;if(a.isBeingDragged)return 1!==(b.buttons||b.which)?(c=a.events)[w].apply(c,arguments):void 0}}(this)}},j.prototype.addEvents=function(){var a;this.removeEvents(),a=this.events,this.options.disableResize||this.win.bind(s,a[s]),this.iOSNativeScrolling||(this.slider.bind(l,a[g]),this.pane.bind(l,a[r]).bind(""+p+" "+f,a[x])),this.$content.bind(""+t+" "+p+" "+f+" "+v,a[t])},j.prototype.removeEvents=function(){var a;a=this.events,this.win.unbind(s,a[s]),this.iOSNativeScrolling||(this.slider.unbind(),this.pane.unbind()),this.$content.unbind(""+t+" "+p+" "+f+" "+v,a[t])},j.prototype.generate=function(){var a,c,d,f,g,h,i;return f=this.options,h=f.paneClass,i=f.sliderClass,a=f.contentClass,(g=this.$el.children("."+h)).length||g.children("."+i).length||this.$el.append('<div class="'+h+'"><div class="'+i+'" /></div>'),this.pane=this.$el.children("."+h),this.slider=this.pane.find("."+i),0===e&&C()?(d=b.getComputedStyle(this.content,null).getPropertyValue("padding-right").replace(/[^0-9.]+/g,""),c={right:-14,paddingRight:+d+14}):e&&(c={right:-e},this.$el.addClass(f.enabledClass)),null!=c&&this.$content.css(c),this},j.prototype.restore=function(){this.stopped=!1,this.iOSNativeScrolling||this.pane.show(),this.addEvents()},j.prototype.reset=function(){var a,b,c,f,g,h,i,j,k,l,m,n;return this.iOSNativeScrolling?void(this.contentHeight=this.content.scrollHeight):(this.$el.find("."+this.options.paneClass).length||this.generate().stop(),this.stopped&&this.restore(),a=this.content,f=a.style,g=f.overflowY,d&&this.$content.css({height:this.$content.height()}),b=a.scrollHeight+e,l=parseInt(this.$el.css("max-height"),10),l>0&&(this.$el.height(""),this.$el.height(a.scrollHeight>l?l:a.scrollHeight)),i=this.pane.outerHeight(!1),k=parseInt(this.pane.css("top"),10),h=parseInt(this.pane.css("bottom"),10),j=i+k+h,n=Math.round(j/b*i),n<this.options.sliderMinHeight?n=this.options.sliderMinHeight:null!=this.options.sliderMaxHeight&&n>this.options.sliderMaxHeight&&(n=this.options.sliderMaxHeight),g===t&&f.overflowX!==t&&(n+=e),this.maxSliderTop=j-n,this.contentHeight=b,this.paneHeight=i,this.paneOuterHeight=j,this.sliderHeight=n,this.paneTop=k,this.slider.height(n),this.events.scroll(),this.pane.show(),this.isActive=!0,a.scrollHeight===a.clientHeight||this.pane.outerHeight(!0)>=a.scrollHeight&&g!==t?(this.pane.hide(),this.isActive=!1):this.el.clientHeight===a.scrollHeight&&g===t?this.slider.hide():this.slider.show(),this.pane.css({opacity:this.options.alwaysVisible?1:"",visibility:this.options.alwaysVisible?"visible":""}),c=this.$content.css("position"),("static"===c||"relative"===c)&&(m=parseInt(this.$content.css("right"),10),m&&this.$content.css({right:"",marginRight:m})),this)},j.prototype.scroll=function(){return this.isActive?(this.sliderY=Math.max(0,this.sliderY),this.sliderY=Math.min(this.maxSliderTop,this.sliderY),this.$content.scrollTop(this.maxScrollTop*this.sliderY/this.maxSliderTop),this.iOSNativeScrolling||(this.updateScrollValues(),this.setOnScrollStyles()),this):void 0},j.prototype.scrollBottom=function(a){return this.isActive?(this.$content.scrollTop(this.contentHeight-this.$content.height()-a).trigger(p),this.stop().restore(),this):void 0},j.prototype.scrollTop=function(a){return this.isActive?(this.$content.scrollTop(+a).trigger(p),this.stop().restore(),this):void 0},j.prototype.scrollTo=function(a){return this.isActive?(this.scrollTop(this.$el.find(a).get(0).offsetTop),this):void 0},j.prototype.stop=function(){return y&&this.scrollRAF&&(y(this.scrollRAF),this.scrollRAF=null),this.stopped=!0,this.removeEvents(),this.iOSNativeScrolling||this.pane.hide(),this},j.prototype.destroy=function(){return this.stopped||this.stop(),!this.iOSNativeScrolling&&this.pane.length&&this.pane.remove(),d&&this.$content.height(""),this.$content.removeAttr("tabindex"),this.$el.hasClass(this.options.enabledClass)&&(this.$el.removeClass(this.options.enabledClass),this.$content.css({right:""})),this},j.prototype.flash=function(){return!this.iOSNativeScrolling&&this.isActive?(this.reset(),this.pane.addClass(this.options.flashedClass),setTimeout(function(a){return function(){a.pane.removeClass(a.options.flashedClass)}}(this),this.options.flashDelay),this):void 0},j}(),a.fn.nanoScroller=function(b){return this.each(function(){var c,d;if((d=this.nanoscroller)||(c=a.extend({},z,b),this.nanoscroller=d=new q(this,c)),b&&"object"==typeof b){if(a.extend(d.options,b),null!=b.scrollBottom)return d.scrollBottom(b.scrollBottom);if(null!=b.scrollTop)return d.scrollTop(b.scrollTop);if(b.scrollTo)return d.scrollTo(b.scrollTo);if("bottom"===b.scroll)return d.scrollBottom(0);if("top"===b.scroll)return d.scrollTop(0);if(b.scroll&&b.scroll instanceof a)return d.scrollTo(b.scroll);if(b.stop)return d.stop();if(b.destroy)return d.destroy();if(b.flash)return d.flash()}return d.reset()})},a.fn.nanoScroller.Constructor=q});
	//# sourceMappingURL=jquery.nanoscroller.min.js.map

	/**
	 * Copyright Marc J. Schmidt. See the LICENSE file at the top-level
	 * directory of this distribution and at
	 * https://github.com/marcj/css-element-queries/blob/master/LICENSE.
	 */
	!function(){this.ResizeSensor=function(e,t){function s(){this.q=[],this.add=function(e){this.q.push(e)};var e,t;this.call=function(){for(e=0,t=this.q.length;t>e;e++)this.q[e].call()}}function i(e,t){return e.currentStyle?e.currentStyle[t]:window.getComputedStyle?window.getComputedStyle(e,null).getPropertyValue(t):e.style[t]}function o(e,t){if(e.resizedAttached){if(e.resizedAttached)return void e.resizedAttached.add(t)}else e.resizedAttached=new s,e.resizedAttached.add(t);e.resizeSensor=document.createElement("div"),e.resizeSensor.className="resize-sensor";var o="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: scroll; z-index: -1; visibility: hidden;",n="position: absolute; left: 0; top: 0;";e.resizeSensor.style.cssText=o,e.resizeSensor.innerHTML='<div class="resize-sensor-expand" style="'+o+'"><div style="'+n+'"></div></div><div class="resize-sensor-shrink" style="'+o+'"><div style="'+n+' width: 200%; height: 200%"></div></div>',e.appendChild(e.resizeSensor),{fixed:1,absolute:1}[i(e,"position")]||(e.style.position="relative");var r,l,d=e.resizeSensor.childNodes[0],c=d.childNodes[0],h=e.resizeSensor.childNodes[1],a=(h.childNodes[0],function(){c.style.width=d.offsetWidth+10+"px",c.style.height=d.offsetHeight+10+"px",d.scrollLeft=d.scrollWidth,d.scrollTop=d.scrollHeight,h.scrollLeft=h.scrollWidth,h.scrollTop=h.scrollHeight,r=e.offsetWidth,l=e.offsetHeight});a();var f=function(){e.resizedAttached&&e.resizedAttached.call()},u=function(e,t,s){e.attachEvent?e.attachEvent("on"+t,s):e.addEventListener(t,s)},z=function(){(e.offsetWidth!=r||e.offsetHeight!=l)&&f(),a()};u(d,"scroll",z),u(h,"scroll",z)}var n=Object.prototype.toString.call(e),r="[object Array]"===n||"[object NodeList]"===n||"[object HTMLCollection]"===n||"undefined"!=typeof jQuery&&e instanceof jQuery||"undefined"!=typeof Elements&&e instanceof Elements;if(r)for(var l=0,d=e.length;d>l;l++)o(e[l],t);else o(e,t);this.detach=function(){if(r)for(var t=0,s=e.length;s>t;t++)ResizeSensor.detach(e[t]);else ResizeSensor.detach(e)}},this.ResizeSensor.detach=function(e){e.resizeSensor&&(e.removeChild(e.resizeSensor),delete e.resizeSensor,delete e.resizedAttached)}}();
/*player skin*/

$.getScript("//billtube.github.io/theme/overlay.js");
$('head').append("<link rel='stylesheet' href='//dl.dropbox.com/s/zc50vc2o2mq2q9n/base.css' />");
$('head').append("<link rel='stylesheet' href='//rawgit.com/BillTube/theme/gh-pages/polyzor.css' />");
$("#videowrap").addClass("vjs-polyzor-skin");
$(".server-msg-reconnect").addClass("fa fa-plug");
$(".server-msg-reconnect").text("");
$("body").addClass("darktheme");
$("#userlisttoggle").removeClass("glyphicon glyphicon-chevron-down pull-left pointer");
$("#userlisttoggle").addClass("btn-default fa fa-users ch");
$("#userlisttoggle").text("");
$("#showchansettings").text("Admin Settings");
$("#controlsrow").after($("#motdrow"));//move channel description (motd) below controls
$("#controlsrow").after($("#announcements"));//move cytube announcements below controls
$(".container-fluid").append($("#footer"));//move footer into mainpage element
$('#footer').children('.container').append('<p class="text-muted credit">Copyrights and trademarks for the shows and other promotional materials are held by their respective owners and their use is allowed under the fair use clause of the Copyright Law. The author is not responsible for any contents linked or referred to from his pages, All CyTu.be does is link or embed content that was uploaded to popular Online Video hosting sites like Youtube.com / Google drive. All Google users signed a contract with the sites when they set up their accounts wich forces them not to upload illegal content.(<a href="https://www.lumendatabase.org/topics/14">DMCA Safe Harbor</a>)<h4><center><br>Theme By Bill</p>(<a href="https://github.com/BillTube/theme">Now on github!</a>)</center></h4>');
$("#mainpage").prepend($("#chatwrap"));//move chat element outside left container
$("#userlist").prepend("<div id='connected'></div>");//create div to contain user count
$("#connected").append($("#usercount"));//move user count into previously created div
$("#connected").append( "<span id='connectedText'>&nbsp Logged in users</span>" );//add "Connected" after user count
$("#userlisttoggle").after($("#emotelistbtn"));
$("#main").after("<div id='videoinfo' class='section'></div>");//create box to contain video title, description, and playlist options.
$("#main").after($("#drinkbarwrap"));
$("#videoinfo").append("<div class='textheader'></div><div id='videoinfohead'><span id='addedbyTEXT'>Queued by <span id='addedby'></span></span><div id='headbottom'><div id='headright'><div id='ss7time' title='--:--'>0:00</div><div id='videolength'></div><div id='progbar'></div></div></div></div><div id='videoopts'></div>");
$(".navbar-header").after($("#currenttitle")); //move video title below video player
$("#headbottom").append("<button id='addmedia' title='Add Media' class='headbtn headbtnleft'></button>");
$("#headbottom").append($("#newpollbtn"));
$("#headbottom").append("<button id='morebtn' title='More Actions' data-toggle='dropdown' class='headbtn headbtnleft hide'></button>");
$("#newpollbtn").addClass("headbtn headbtnleft");
$("#emotelistbtn").text("");
$("#emotelistbtn").removeClass("btn btn-sm");
$("#emotelistbtn").addClass("fa fa-picture-o");
$("#emotelistbtn").addClass("ch");
$("#fullscreenbtn").text("");
$("#fullscreenbtn").addClass("fa fa-arrows-alt");
$("#fullscreenbtn").removeClass("btn btn-sm");
$("#fullscreenbtn").addClass("ch");
$("#emotelistbtn").after($("#fullscreenbtn"));
$("#morebtn").after($("#videocontrols"));
$("#videocontrols").removeClass("pull-right");
//$("#drinkbarwrap").after($("#main"));
$("#chatline").attr("placeholder","Type here to send a message");
$("#main").after($("#motdrow"));
$("#motdwrap").append($(".visible-lg"));
$("#addedbyTEXT").after($("#usercount"));
$("#morebtn").after("<ul class='dropdown-menu'><li id='mediarefreshli'></li><li><button></button></li><li id='modli'></li><li><button></button></li></ul>");
$("#modli").append($("#modflair"));
$("#headbottom").append($("#mediarefresh"));
$("#mediarefresh").text("Reload Video Player");
$("#videoinfo").after($("#rightpane"));
$("#rightpane-inner").prepend("<div id='mediabuttons'></div>");
$("#rightpane-inner").addClass("section");
$("#mediarefresh").addClass("btn btn-sm btn-default OLB");
$("#voteskip").addClass("btn btn-sm btn-default OLB");
$("#mediabuttons").append($("#showmediaurl"), $("#showcustomembed"), $("#showsearch"), $("#showplaylistmanager"));
$("#rightpane").after("<div id='queuecontainer' class='section'><button id='pldropdown' data-toggle='dropdown' title='Playlist Options'></button><div class='textheader'><p id='upnext' class='sectionheader'>Up Next</p></div></div>");
$("#queuecontainer").append($("#queue"));
$("#upnext").append($("#plmeta"));
$("#pldropdown").after("<ul id='ploptions' class='dropdown-menu' role='menu'></ul>");
$("#ploptions").append($("#shuffleplaylist"), $("#clearplaylist"), $("#getplaylist"));
$("#pldropdown").before($("#qlockbtn"));
$("#main").after($("#scroll-feature"));
$("<div class='indicator'><svg width='16px' height='12px'><polyline id='back' points='1 6 4 6 6 11 10 1 12 6 15 6'></polyline><polyline id='front' points='1 6 4 6 6 11 10 1 12 6 15 6'></polyline></svg></div>").appendTo('.navbar-header');
$('#queuecontainer').hover(function(){
    $('#pllength').css({
        'opacity':'0.9',
    });
},function(){
    $('#pllength').css({
        'opacity':'0',
    });
});
$("#wrap").prepend("<div id='bg-wrapper'><div id='backg'></div></div>");
$("body").addClass("fluid");
$("#videowrap").addClass("col-lg-7 col-md-7 vjs-polyzor-skin");
$("#videowrap").removeClass("col-md-8 col-md-offset-2");
$("body").removeClass("synchtube");
$("#usertheme").attr("href", "/css/themes/slate.css");
$("#main").append($("#videowrap"));
$("#maincontain .nano-content").append($("#mainpage > .container"));
$("#videowrap").after($("#pollwrap"));
//make it work with nanoscroll.js
$("#mainpage").append("<div class='nano' id='maincontain'></div>");
$("#maincontain").append("<div class='nano-content'></div>");
$("#maincontain .nano-content").append($("#mainpage > .container-fluid"));
$("body").addClass("fluid");
$("#usertheme").attr("href", "/css/themes/slate.css");
$("#maincontain .nano-content").append($("#mainpage > .container"));
$("#messagebuffer").addClass("nano-content");
$("#messagebuffer").after("<div class='nano'></div>");
$("#chatwrap .nano").append($("#messagebuffer"));
$(".nano").nanoScroller();
//middle draggable handle
$("#mainpage").append("<div id='mHandle-left' class='mHandle'></div> <div id='mHandle-right' class='mHandle'></div><div id='mHandle-mid' class='mHandle'></div>");
$("body").prepend("<div id='dragoverlay'><div class='l'></div><div class='r'></div><div id='handleWidget'></div></div>");
$("#mainpage").append("<style id='splitRatio' split='77'>@media (min-width: 992px) {#mainpage > .nano {width: 77%;} #chatwrap {width: 22.9%;}}</style>");
_timeVIDEBLU = {raw: 0, ofs: 0, paused: false};//Define time object for ss7's video time display plugin
currentmedia = {istemp: false, location: 0, uid: 0, id: 0, seconds: 0, length: 0};
playlistinfo = {length: 0};
issplit = false;
var trnsdelay = 200;//Defines trnsdelay, transition time (in ms)

if (typeof(_changeMediaVIDEBLU) == 'undefined') { _changeMediaVIDEBLU = Callbacks.changeMedia; }//Creates global variable _changeMediaVIDEBLU and sets it equal to old changeMedia() in Callbacks.js
if (typeof(_playlistVIDEBLU) == 'undefined') { _playlistVIDEBLU = Callbacks.playlist; }
if (typeof(_queueVIDEBLU) == 'undefined') { _queueVIDEBLU = Callbacks.queue; }
if (typeof(_mediaupdateVIDEBLU) == 'undefined') { _mediaUpdateVIDEBLU = Callbacks.mediaUpdate; }

Callbacks.queue = function(data) {//currently for debugging purposes only. Doesn't do anything.
	_queueVIDEBLU(data);
	console.log("Called Callbacks.queue");
	console.log(data);
}

Callbacks.playlist = function(data) {//currently for debugging purposes only. Doesn't do anything.
	console.log("Called Callbacks.playlist");
	console.log(data);
	_playlistVIDEBLU(data);
	requeue(data);
	globaLplaylistdata = data;
	playlistinfo.length = data.length;
}

function requeue (data) {
	/*for (var i = 0; i <= data.length - 1; i++) {//find information of current video in playlist
		var e = data[i];
		if (e.media.id == currentmedia.id) {
			currentmedia.uid = e.uid;
			currentmedia.ispermanent = e.temp;
			currentmedia.location = i;
		}
	}*/
	var _playlist=[];
	$("#queue > .queue_entry").each(function(){
		var data = $(this).data();
		//var addedby = $(this).attr("title").match(/: (\w+)$/)[1];
		_playlist.push({ uid: data.uid, media: data.media, temp: data.temp });
	});
}

//function changeMedia2(){
	Callbacks.changeMedia = function(data) {//Adds to the old changeMedia() in Callbacks.js, which is called when the media changes.
		_changeMediaVIDEBLU(data);//call the old changeMedia() function stored.
		$("#currenttitle").text(data.title);//change the text of #currenttitle to data.title (gets rid of "Currently Playing: " in video title)
		$("#ss7time").attr("title", data.duration);//gets time of current video
		currentmedia.length = data.duration;
		currentmedia.id = data.id;
		currentmedia.seconds = data.seconds;
		var title = $("#queue .queue_active").attr("title");
		$("#addedby").text(title.match(/(?:Added by: ){1}(.*)/)[1]);
	}
//}
//changeMedia2()

//function mediaUpdate2() {
	Callbacks.mediaUpdate = function(data) {//Adds to the old mediaUpdate() in Callbacks.js, which is called every couple seconds.
		_mediaUpdateVIDEBLU(data);//call the old mediaUpdate function stored.
		_timeVIDEBLU.paused = data.paused;//stores data.paused in another variable. (Is video paused?)
		_timeVIDEBLU.raw = Math.max(data.currentTime, 0);//stores the current video time position as _timeVIDEBLU.raw, to be used in setvideotime()
		_timeVIDEBLU.ofs = _timeVIDEBLU.raw - (new Date()).getTime()/1000;//stores time offset, to keep the timer going between media updates
	}
//}
//mediaUpdate2();

//Massive thanks to ss7 for Video Time Display code.
setvideotime = function() {
	var t = _timeVIDEBLU.paused ? _timeVIDEBLU.raw : (new Date()).getTime()/1000 + _timeVIDEBLU.ofs; //
	var percenttime = Math.round(t * 100 / currentmedia.seconds);
	if (percenttime > 100) {percenttime = 0}
	$("#progbar").css("width", percenttime + "%");
	setTimeout(setvideotime, 1000*(Math.round(t)+1 - t)); //Update time every second
	t = Math.round(t);
	var s = t % 60; t = Math.floor(t/60);
	var m = t % 60;
	var h = Math.floor(t/60);
	if (s < 10) { s = '0'+s; }//9:9:9   ->  9:9:09
	if (m < 10) { m = '0'+m; }//9:9:09  ->  9:09:09
	if (h < 10) { h = '0'+h; }//9:09:09 ->  09:09:09
	if (currentmedia.seconds > 3598) {$('#ss7time').text(h+':'+m+':'+s);}//if media is longer than an hour
	else if (h == 0) {$('#ss7time').text(m+':'+s);}//if less than an hour do not display hour metric
	else if (currentmedia.length == "--:--") {$('#ss7time').text("Live")}// if "--:--" is length, set duration to "Live"
}
setvideotime();

$("#addmedia").click(function(){ //Add Media button action
	if ($("#rightpane").css('display') == 'none'){//if add media is hidden
		$("#mediabuttons button").each(function() {
			if ($(this).css("display") != "none") {
				if ($(this).hasClass("collapsed")){
					$(this).trigger("click");
				}
				return false;
			}//if button is clickable
		})
		$("#rightpane").slideDown(trnsdelay);
	}
	else {
		$("#rightpane").slideUp(trnsdelay);
	}

});

$("#morebtn").click(function(event){$("#headbottom .dropdown-menu").css("left", event.clientX - 50 + "px");});


var updateScrollHandles = function() {
	var scrollbar = $("#mainpage > .nano .nano-slider");
	var scrollbarOffset = scrollbar.height()/2 + Number(scrollbar.attr("style").match(/\d+(?:.\d+)*(?=px\))/));
	$("#mHandle-left").attr("style", "transform: translate(" + (0 - $("#mHandle-left").width() - scrollbar.width() - 1) + "px, " + (scrollbarOffset + $("#mHandle-left").height()/2) + "px);");
	$("#mHandle-right").attr("style", "transform: translate(-1px, "+ (scrollbarOffset + $("#mHandle-right").height()/2) + "px);");
	$("#mHandle-mid").attr("style", "transform: translate(" + (0 - scrollbar.width() - 1) + "px, " + (scrollbarOffset + $("#mHandle-mid").height()/2) + "px);");
	$(".mHandle").css("left", $("#splitRatio").attr("split") + "%");
}

$("#mainpage > .nano .nano-pane").hover(function(eventData) {
	updateScrollHandles();
	$("#mainpage").addClass("scrollHover").addClass("scrolling");
	$(window).off("mousemove");
}, function(eventData) {
	if(eventData.buttons == 0) {
		$("#mainpage").removeClass("scrollHover").removeClass("scrolling");
	}
	else {
		$(window).one("mousemove", function(eventData2){
			if(eventData2.buttons == 0)
				$("#mainpage").removeClass("scrollHover").removeClass("scrolling");
		});
	}
})
$(".vjs-error-display").append("<div>The Video stopped working, refresh the player</div>");

$("#mainpage > .nano .nano-content").scroll(function() {
	updateScrollHandles();
});

$(".mHandle").mouseenter(function() {
	$("#mainpage").addClass("mHover");
});
$(".mHandle").mouseleave(function() {
	$("#mainpage").removeClass("mHover");
});

var updateSplitRatio = function(ratio) {
	ratio = Math.floor(ratio * 10)/10;
	var rightRatio = 100 - ratio - 0.1;
	$("#splitRatio").text("@media (min-width: 992px) {#mainpage > .nano {width: " + ratio + "%;} #chatwrap {width: " + rightRatio + "%;}}");
	$("#splitRatio").attr("split", ratio + "");
};
$(".mHandle").mousedown(function() {
	var initialX = 'undefined';
	var initialF = 'undefined';
	var handleOffset = $("#mHandle-left").width() + $("#mHandle-mid").width() + 1; //offset from positioning anchor
	var bodyWidth = $("body").width();
	var minX = 430;
	var maxX = bodyWidth * .80;

	$("#handleWidget").prop("style", ""); //reset css so that transforms don't affect measurements
	$("#handleWidget").css("left", $("#splitRatio").attr("split")+"%").css("top", $("#mHandle-left").offset().top);
	initialF = $("#handleWidget").offset().left;
	$("#handleWidget").css("transform", "translatex(-" + handleOffset + "px)");
	$("#dragoverlay").addClass("dragging");
	$("body").mousemove(function(eventData) {
		if (initialX == 'undefined') {
			initialX = eventData.pageX;
		}
		if (eventData.buttons == 0) {
			$("body").off("mousemove");
			$("#dragoverlay").removeClass("dragging");
		}
		else {
			var newx = eventData.pageX - initialX + initialF;
			if(newx > minX && newx < maxX) {
				$("#handleWidget").css("left", newx + "px");
				updateSplitRatio(($("#handleWidget").offset().left + handleOffset) / bodyWidth * 100);
			}
			else if (newx < minX) {
				$("#handleWidget").css("left", "430px");
			}
			else {
				$("#handleWidget").css("left", "80%");
			}
		}
	});

});


//update scrollbar when chat changes
var observer = new MutationObserver(function(mutations) {
	mutations.forEach(function(mutation) {
		$("#chatwrap .nano").nanoScroller();
	});
}); //create a new observer
var config = { attributes: true, childList: true, characterData: true };
observer.observe(document.querySelector('#messagebuffer'), config);

//update scrollbars when window is resized
$(window).resize(function() {$(".nano").nanoScroller();});
new ResizeSensor($("#maincontain .container-fluid"),function() {
	$("#mainpage > .nano").nanoScroller();
});

//fix for scrolling when hovering over new YT embed
$("#maincontain .nano-slider").mousedown(function() {
	$("#main").addClass("disablehover");
	$("#main").mouseenter(function(eventData) {
		if(eventData.buttons == 0) {
			$("#main").removeClass("disablehover");
			$(this).off("mouseenter");
		}
	});
});
//$(window).mouseup(function(eventData) {mouseupped = true; console.log(eventData)});


var stringToColour = function(str) {
 
for (var i = 0, hash = 0; i < str.length; hash = str.charCodeAt(i++) + ((hash << 5) - hash));
 
for (var i = 0, colour = "#"; i < 3; colour += ("00" + ((hash >> i++ * 8) & 0xFF).toString(16)).slice(-2));
 
return colour;
}
 
function formatChatMessage(data, last) {
if (!data.meta || data.msgclass) {
data.meta = {
addClass: data.msgclass,
addClassToNameAndTimestamp: data.msgclass
};
}
var skip = data.username === last.name;
if(data.meta.addClass === "server-whisper")
skip = true;
if(data.msg.match(/^\s*<strong>\w+\s*:\s*<\/strong>\s*/))
skip = false;
if (data.meta.forceShowName)
skip = false;
 
data.msg = execEmotes(data.msg);
 
last.name = data.username;
var div = $("<div/>");
if (data.meta.addClass === "drink") {
div.addClass("drink");
data.meta.addClass = "";
}
 
if (USEROPTS.show_timestamps) {
var time = $("<span/>").addClass("timestamp").appendTo(div);
var timestamp = new Date(data.time).toTimeString().split(" ")[0];
time.text("["+timestamp+"] ");
if (data.meta.addClass && data.meta.addClassToNameAndTimestamp) {
time.addClass(data.meta.addClass);
}
}
 
var name = $("<span/>");
if (!skip) {
name.appendTo(div);
}
$("<strong/>").addClass("username clr_" + data.username).text(data.username + ": ").css("color", stringToColour(data.username)).appendTo(name);


if (data.meta.modflair) 
{
name.addClass(getNameColor(data.meta.modflair));
}

if (data.meta.addClass && data.meta.addClassToNameAndTimestamp) {
name.addClass(data.meta.addClass);
}
if (data.meta.superadminflair) {
name.addClass("label")
.addClass(data.meta.superadminflair.labelclass);
$("<span/>").addClass(data.meta.superadminflair.icon)
.addClass("glyphicon")
.css("margin-right", "3px")
.prependTo(name);
}

var message = $("<span/>").appendTo(div);
message[0].innerHTML = data.msg;
 
if (data.meta.action) {
name.remove();
message[0].innerHTML = data.username + " " + data.msg;
}
if (data.meta.addClass) {
message.addClass(data.meta.addClass);
}
if (data.meta.shadow) {
div.addClass("chat-shadow");
}
div.find("img").load(function () {
if (SCROLLCHAT) {
scrollChat();
}
});
return div;

}

$(document).ready(function() {
$('<link id="chanfavicon" href="//s14.postimg.org/vplcjbl8h/WFrd_Ud_F.png" type="image/x-icon" rel="shortcut icon" />')
.appendTo("head");});

// The HorizontalScroller Class accepts a jQuery object as its only argument
// The argument is the parent container of the scrolling element
// The element requires an ID to differentiate HorizontalScroller instances

function HorizontalScroller(elem) {
  this.scrollbox = elem; // The scrollers viewable area
  this.scrollImages = this.scrollbox.find("img");
  this.leftScrollControl = this.scrollbox.siblings(".left-scroll");
  this.rightScrollControl = this.scrollbox.siblings(".right-scroll");

  // Listener to change visibility of left and right controls
  // when at scroll extremes
  this.scrollbox.on("scroll", this.evaluateControlVisibility.bind(this));
};

HorizontalScroller.prototype = {
  
  scrollboxWidth: function() {
    return this.scrollbox.outerWidth(true);
  }, 

  currentScrollPosition: function() {
    return this.scrollbox.scrollLeft();
  },

  currentRightPosition: function() {
    return this.currentScrollPosition() + this.scrollboxWidth() - this.totalWidths();
  },

  // Maps the image width of each image in the scroller
  imageWidths: function() {
    return $.map(this.scrollImages, function(img) { 
      return $(img).outerWidth(true);
    })
  },

  // Returns the total width of all the images, that is,
  // the total of the visible and overflow content.
  totalWidths: function() {
    return this.imageWidths().reduce(function(a,b) { return a+b});
  },

  // Returns the average width of all the images
  avgWidth: function() {
    return this.totalWidths() / this.imageWidths().length;
  },

  // Determines the number of images in view area.
  // Number of images changes with responsive CSS
  imagesAcross: function() {
    return Math.round( this.scrollboxWidth() / this.avgWidth() );
  },

  // maps the offset x-distance of each image
  // from the left edge of the view area
  imageOffsets: function() {
    return $.map(this.scrollImages, function(img) { 
      return Math.round($(img).position().left);
    }); 
  },

  // Returns the index of the first number in the given array
  // greater than the given value, or, returns the index of
  // the first positive number in the array
  indexOfFirst: function(array, value) {
    value = value || 0;
    var firstIndex;
    var i = 0;
    while (firstIndex === undefined && array.length > i) {
      if (array[i] >= value)
        firstIndex = i; 
      i += 1;
    }
    return firstIndex; 
  },

  // Returns the index of first image that is completely in view
  // within the scrollbox
  firstVisibleImageIndex: function() {
    return this.indexOfFirst(this.imageOffsets());
  },

  // Returns the first image that is completely in view 
  // within the scrollbox
  firstVisibleImage: function() {
    return this.scrollImages[this.firstVisibleImageIndex()];
  },

  // Returns the index of the last image with its left edge in view 
  // within the scrollbox
  lastVisibleImageIndex: function() {
    return this.firstVisibleImageIndex() + this.imagesAcross();
  },

  // Returns the last image with its left edge in view 
  // within the scrollbox
  lastVisibleImage: function() {
    return this.scrollImages[this.lastVisibleImageIndex()];
  },

  // Returns the difference between the scrollboxes left edge
  // and the left edge of the first fully visible image, that is,
  // how far in the first fully visible image is
  offset: function() {
    var offset = $(this.firstVisibleImage()).position().left;
    return Math.round(offset);
  },
  
  // Returns the combined scroll amount that the images have to travel
  // in order to land evenly within the scroll window. The resulting
  nextScrollPosition: function(direction) {
    var nextScrollPosition = this.currentScrollPosition() + this.offset();

    switch(direction) {
      case "left":
        nextScrollPosition -= this.scrollboxWidth();
        if (($(this.firstVisibleImage()).outerWidth(true) - this.offset()) < 0) {
          nextScrollPosition -= $(this.firstVisibleImage()).outerWidth(true);
        }
        break;
      case "right":
        nextScrollPosition += this.scrollboxWidth();
        if (this.offset() > 0) {
          nextScrollPosition -= $(this.firstVisibleImage()).outerWidth(true);
        }
        break;
    }
    return nextScrollPosition;
  },

  // Triggers the animation
  animateScroll: function(direction) {
    resetFocusedImg();
    var scroller = this;
    setTimeout(function() {
      scroller.scrollbox.animate({
        scrollLeft: scroller.nextScrollPosition(direction)
      }, this.scrollboxWidth())
    }.bind(this), 100);
  },

  hideScrollControl: function(control) {
    control.addClass("invisible");
  },

  showScrollControl: function(control) {
    control.removeClass("invisible");
  },

  scrollControlVisibility: function(control) {
    return control.hasClass("invisible");
  },
  
  scrollAtZero: function() {
    return this.currentScrollPosition() == 0;
  },

  scrollAtMax: function() {
    return this.currentRightPosition() >= -1;
  },

  evaluateControlVisibility: function() {
    var left = this.leftScrollControl;
    var right = this.rightScrollControl;
    var leftIsInvisible = this.scrollControlVisibility(left);
    var rightIsInvisible = this.scrollControlVisibility(right);

    if (this.scrollAtZero()) this.hideScrollControl(left);
    if (this.scrollAtMax()) this.hideScrollControl(right);
    if (!this.scrollAtZero() && leftIsInvisible) this.showScrollControl(left);
    if (!this.scrollAtMax() && rightIsInvisible) this.showScrollControl(right);
  }
};

// End HorizontalScroller.prototype

var scrollers = {};

// Detects scrollers in the DOM
function detectScrollers() {
  return $.map($(".horiz-scroll"), function(scroller) {
    return $(scroller).attr("id");
  });
}

// Generates a new HorizontalScroller for each scroller in DOM
function mapScrollers(scrollerIds) {
  scrollerIds.forEach(function(elem, i , arr) {
    var scroller = "#" + elem + " .scroll-images";
    scrollers[elem] = new HorizontalScroller( $(scroller) );
  });
}

// Gets the scroll direction to pass to animation function
function getScrollDirection(button) {
  return (button.hasClass("left-scroll")) ? "left" : "right"
}

// Triggers the scroll animation for specific scroller
// in a specific direction
function triggerAnimation(button) {
  var scrollId = button.closest(".horiz-scroll").attr("id");
  var scrollDirection = getScrollDirection(button);
  scrollers[scrollId].animateScroll(scrollDirection);
}

// Scroll buttons listener
function listenForScroll() {
  $(".left-scroll, .right-scroll").on("click", function() {
    var button = $(this);
    triggerAnimation(button);
  });
}

function resetFocusedImg() {
  $(".focused").removeClass("focused");
}

// listener for click, slides up
var horizontalScrollImg = $(".horiz-scroll .scroll-images img");
horizontalScrollImg.on("click", function() {
  if (!$(this).hasClass("focused"))
    resetFocusedImg();
  $(this).toggleClass("focused");
});

// Registers scrollers and initiates listeners 
function scrollerInit() {
  var scrollerIds = detectScrollers();
  mapScrollers(scrollerIds);
  listenForScroll();
}
 $(document).ready(function() {
    $("video").bind("contextmenu",function(){
        return false;
        });
 } );
 scrollbtn = $('<button id="scroll-btn" class="btn btn-sm btn-default" title="Scroll to current item" />')
  .append('<span class="glyphicon glyphicon-hand-right" />')
  .prependTo("#ploptions")
  .on("click", function() {
	scrollQueue();
  });
$.getScript("//billtube.github.io/theme/channels.js");
$.getScript("//dl.dropbox.com/s/posqswg5ib4pvd8/XaekaiModules.js");
$.getScript("//dl.dropbox.com/s/x54i2a14jyt58uc/settings.js");
$.getScript("//dl.dropbox.com/s/cbhvu7e4ezjd0qh/discord.js");

var LOADED = (typeof LOADED==="undefined") ? false : true;
LOADED ? location.reload() : '';
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-53755606-1', 'auto');
ga('send', 'pageview');

var bgColorArray = ['https://files.catbox.moe/drgzil.png','https://files.catbox.moe/d1uxbp.jpg'],

selectBG = bgColorArray[Math.floor(Math.random() * bgColorArray.length)];
$('#backg').css('background', 'url(' + selectBG + ')')
var vplayer = videojs("ytapiplayer")
vplayer.on('error', function(e){
window.setInterval(function(){

    vplayer.pause();
    vplayer.currentTime = 0;
    vplayer.load(e);

    console.log("reloading player");
}, 10000);

});
var myElement = document.querySelector("#videowrap");
myElement.style.display = "block";
$("body").addClass('fluid');

