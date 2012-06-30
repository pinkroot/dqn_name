/*
* 回答がされた時の処理
*/
function submitFunc() {
  var input_ans = $("#input_text").val();
	
	// 回答が当たっていた時の処理
	if ((test_json.yomi_hiragana == input_ans) || (test_json.yomi_roma == input_ans)){
		$("#result").html("<img src='./img/ok.png'>");
		
		clear_count++;

		setTimeout(function(){
			$("#result").html("");
			$("#input_text").val("");
			quiz();
		},1500);
	}

	// 回答が間違っていた時の処理
	else {
		$("#result").html("<img src='./img/no.png'><br><p>せいかいは " + test_json.yomi_hiragana + " です");
	
		// 成績をアウトプットするための処理
		setTimeout(function(){
			$(".quiz_area").hide();

			$("#clear_count").html(clear_count + "もん です");
			$("#reach_count").html( + "にん です");
			$("#kirakira_level").html( + "です");
			
			var str = "私はキラキラネームクイズに" + clear_count + "問正解しました！ ";
			var url = "";
			
			// ツイートボタンの処理
			$("#tweet").html("<a href='https://twitter.com/intent/tweet?text=" + str + url +"' target='_blank'>" + "<img src=\"./img/tweet.gif\" alt=\"ツイートする\">" + "</a>");
			
			// 結果を表示
			$(".result_area").show();
		}, 2000);
	}
}

/*
function create_result(get_clear_count){
	$("#clear_count").html(get_clear_count);
}
*/


/*
* Enterキーで回答をsubmitするための処理
*/
function push_enter(){
	if( window.event.keyCode == 13 ){
		submitFunc();
	}	
}


/*
* JSONを元にクイズの問題を生成してページに表示する処理
*/
function quiz(){
	test_json = {
		"kanji" : "亜菜瑠",
		"yomi_hiragana" : "あなる",
		"yomi_roma" : "anaru"
	}
	
	$("#dqn_name").html(test_json.kanji);

}


/*
* index.htmlで「クイズを始める」ボタンが押されたときに呼び出される。
* クイズを行うページに遷移するだけ
*/
function start_quiz(){
	location.href="./quiz.html";
}


/*
* ページが開かれたら動作する
* clear_countを初期化して、かつクイズの生成を始める
*/
$(window).load(function(){
	create_param();
	quiz();
	
	// 一旦結果出力部は隠しておく
	$(".result_area").hide();
});


/*
* 正答数を格納する変数を生成して初期化
*/
function create_param(){
	clear_count = 0;
}

