$(document).ready(() => {
var badge_count = 0;

$('.clickspbl').on('click', () =>{

	$('#bludrm').toggle();
});


$('.clickspwt').on('click', () =>{

	$('#wtchbrw').toggle();
});


$('.clickspph').on('click', () =>{

	$('#pharfav').toggle();
});


$('.btnwt').click(() =>{
	$('#sec-hid-wt').show();
	$('#btn-hid-wt').hide().fadeIn(1000);

})

$('.btnbld').click(() =>{
	$('#sec-hid-bld').show();
	$('#btn-hid-bld').hide().fadeIn(1000);

})

$('.btnphr').click(() =>{
	$('#sec-hid-phr').show();
	$('#btn-hid-phr').hide().fadeIn(1000);

})

$('#btn-hid-bld').click(() =>{
	badge_count++;

	$('#bdg').text(badge_count);

})

$('#btn-hid-wt').click(() =>{
	badge_count++;

	$('#bdg').text(badge_count);

})

$('#btn-hid-phr').click(() =>{
	badge_count++;

	$('#bdg').text(badge_count);

})




})
