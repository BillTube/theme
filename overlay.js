$("#videowrap").append("<div id='VideoOverlay' class='fadein'><button class='btn btn-sm btn-default OLB' id='fs-vid-button'>Fullscreen</button></div>");
$('#videowrap').hover(function(){
    $('#VideoOverlay').css({
        'opacity':'1',
        'display':'block',
    });
},function(){
    $('#VideoOverlay').css({
        'opacity':'0',
        'display':'none',
    });
});

$("#VideoOverlay").append($("#voteskip"));
$("#VideoOverlay").append($("#mediarefresh"));
$("#VideoOverlay").append("<button id='hidechat' title='Hide Chat' class='btn btn-sm btn-default OLB'>Theater Mode</button>");
$("#VideoOverlay").append("<button id='showchat' title='show Chat' class='btn btn-sm btn-default OLB'>Regular Mode</button>");
$(document).ready(function(){
	$('#hidechat').on('click', function(){nochat();});
	$('#showchat').on('click', function(){maxchat();});
});

function nochat(){
	$('#chatwrap').addClass('hidden');
	$('#maincontain').addClass('fullvideo');
	$('#hidechat,#scroll-feature,#motdrow,#videoinfo,#queuecontainer,#footer,.navbar,#bg-wrapper').addClass('hidden');
	$('#showchat').addClass('showchat');
	    $('#mainpage').css({
        'padding-top':'0px',
    });
	    $('#videowrap').css({
        'position':'fixed',
        'height':'100%!important',
    });

}

function maxchat(){
	$('#chatwrap').removeClass('hidden');
	$('#maincontain').removeClass('fullvideo');
        $('#hidechat,#scroll-feature,#motdrow,#videoinfo,#queuecontainer,#footer,.navbar,#bg-wrapper').removeClass('hidden');
	$('#showchat').removeClass('showchat');
	    $('#mainpage').css({
        'padding-top':'50px',
    });
	    $('#videowrap').css({
        'position':'inherit',
        'height':'inherit',
    });

}
var requestFullscreen = function (ele) {
	if (ele.requestFullscreen) {
		ele.requestFullscreen();
	} else if (ele.webkitRequestFullscreen) {
		ele.webkitRequestFullscreen();
	} else if (ele.mozRequestFullScreen) {
		ele.mozRequestFullScreen();
	} else if (ele.msRequestFullscreen) {
		ele.msRequestFullscreen();
	} else {
		console.log('Fullscreen API is not supported.');
	}
};
var exitFullscreen = function () {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.webkitExitFullscreen) {
		document.webkitExitFullscreen();
	} else if (document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
	} else if (document.msExitFullscreen) {
		document.msExitFullscreen();
	} else {
		console.log('Fullscreen API is not supported.');
	}
};
var fsVidButton = document.getElementById('fs-vid-button');
var video = document.getElementById('videowrap');

fsVidButton.addEventListener('click', function(e) {
	e.preventDefault();
	requestFullscreen(videowrap);
});
