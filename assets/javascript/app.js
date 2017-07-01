var answered = 0;
var incorrect = 0;
var unanswered = (answered + incorrect)-7;
var timer = 50;

sessionStorage.setItem("incorrect", JSON.stringify(incorrect));
var incorrectStr = sessionStorage.getItem(incorrect);
var interval;

function game(){
	interval = setInterval(countdown, 1000);
	conditions();
};

function countdown (){
	timer--;
	$("#time").html(timer);
	if (timer === 0) {
	sessionStorage.setItem("answered", answered);
	var answeredStr = sessionStorage.getItem("answered");
	var answeredDisplay = JSON.parse(answeredStr);
    window.location.href = "index3.html";
    $("#correctCount").html(answeredDisplay);
	}	
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

$("#incorrectCount").html(incorrectStr);
$("#unanswered").html(unanswered);

}