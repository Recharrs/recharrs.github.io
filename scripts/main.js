function scroll_Top(){
	$('html, body').animate({scrollTop: 0}, 1000)
}

function scroll_to_Feature(){
	$('html, body').animate({scrollTop: $('#Feature-intro').offset().top}, 500);
}

function scroll_to_Download(){
	$('html, body').animate({scrollTop: $('#Downloads').offset().top}, 500);
}

function scroll_to_About(){
	$('html, body').animate({scrollTop: $('#About').offset().top}, 500);
}

function scroll_to_Contact(){
	$('html, body').animate({scrollTop: $('#footer').offset().top}, 500);
}
