function submitFunc() {
  var input_ans = $("#input_text").val();
	
	if ((test_json.yomi_hiragana == input_ans) || (test_json.yomi_rome == input_ans)){
		$("#result").html("<img src='./img/ok.png'>");
		
		clear_count++;

		setTimeout(function(){
			$("#result").html("");
			$("#input_text").val("");
			quiz();
		},2000);
	}
	
	//if (test_json.yomi_hiragana != input_ans){
	else {
		$("#result").html("<img src='./img/no.png'><br><p>正解は" + test_json.yomi_hiragana + "です");
		
		setTimeout(function(){
			$(".quiz_area").hide();

			$("#clear_count").html(clear_count);

			$(".result_area").show();
		}, 2000);
	}
}


function create_result(get_clear_count){
	$("#clear_count").html(get_clear_count);
}


function push_enter(){
	if( window.event.keyCode == 13 ){
		submitFunc();
	}	
}


function quiz(){
	test_json = {
		"kanji" : "亜菜瑠",
		"yomi_hiragana" : "あなる",
		"yomi_rome" : "anaru"
	}
	
	$("#dqn_name").html(test_json.kanji);

}


function start_quiz(){
	location.href="./quiz.html";
}


$(window).load(function(){
	create_param();
	quiz();
	$(".result_area").hide();
});


function create_param(){
	clear_count = 0;
}
	
