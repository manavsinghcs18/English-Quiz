function check(){
	var c=0;
	var q1=document.quiz.question1.value;
	var q2=document.quiz.question2.value;
	var q3=document.quiz.question3.value;
	var q4=document.quiz.question4.value;
	var q5=document.quiz.question5.value;
	var q6=document.quiz.question6.value;
	var q7=document.quiz.question7.value;
	var q8=document.quiz.question8.value;
	var q9=document.quiz.question9.value;
	var q10=document.quiz.question10.value;
	var result = document.getElementById('result');
	var quiz = document.getElementById("quiz");

	if (q1=="waited"){c++}
	if (q2=="has written"){c++}
	if (q3=="returned"){c++}
	if (q4=="cause"){c++}
	if (q5=="had"){c++}
	if (q6=="succeed"){c++}
	if (q7=="had died"){c++}
	if (q8=="have been waiting"){c++}
	if (q9=="had begun"){c++}
	if (q10=="leaves"){c++}
	quiz.style.display="none";
	if(c<=5){
		result.textContent='Your result is ' + c + "." + ' It is not so good please try to work on yourself.'
	}
	else{
		result.textContent='Your result is ' + c + "." + ' It is awesome keep it up.'
	}
}


	