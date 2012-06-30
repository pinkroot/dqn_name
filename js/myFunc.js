function submitFunc() {
  var input_ans = $("#input_text").val();
	
	$("#test_str").html(input_ans);

}

function push_enter(){
	if( window.event.keyCode == 13 ){
		submitFunc();
	}	
}
