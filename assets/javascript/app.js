var answered = 0;
var incorrect = 0;
var timer = 15;
var interval;
var delay;

function game(){
	interval = setInterval(countdown, 1000);
};

function countdown (){
	timer--;
	$("#time").html(timer);
	if (timer === 0) {
		conditions();
		store();
		delay = setTimeout(newPage, 5000);
	}	
};

function newPage(){
	window.location.href = "index3.html";
}

function store(){
	sessionStorage.setItem("answered", answered);
	sessionStorage.setItem("incorrect", incorrect);

};

function display(){
	var answeredStr = sessionStorage.getItem("answered");
	var answeredDisplay = JSON.parse(answeredStr);
	$("#correctCount").html(answeredDisplay);
	var incorrectStr = sessionStorage.getItem("incorrect");
	var incorrectDisplay = JSON.parse(incorrectStr);
	$("#incorrectCount").html(incorrectStr);
};

function conditions(){

	if ($("#Q1A3").is(':checked')){
		answered++;
	} else {
		incorrect++;
	}

	if ($("#Q2A3").is(':checked')){
		answered++;
	} else {
		incorrect++;
	}

	if ($("#Q3A1").is(':checked')){
		answered++;
	} else {
		incorrect++;
	}

	if ($("#Q4A3").is(':checked')){
		answered++;
	} else {
		incorrect++;
	}

	if ($("#Q5A3").is(':checked')){
		answered++;
	} else {
		incorrect++;
	}

	if ($("#Q6A1").is(':checked')){
		answered++;
	} else {
		incorrect++;
	}

	if ($("#Q7A2").is(':checked')){
		answered++;
	} else {
		incorrect++;
	}

	if (timer == 0){
		window.location.href = "index3.html";
	}

}

function clicked(){
	conditions();
	store();
	display();
	newPage();
	console.log(answered);
};
