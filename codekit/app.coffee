typing_timeout = undefined

## スタートボタンとか
$ ->
  #$("#start").hide();
  $("#game").hide();
  $("#gameover").hide();
  $("#answer_text").bind "textchange", ->
    checkAnswer()

  $("#play_btn").click ->
    startGame()
  $("#replay_btn").click ->
    startGame()


count = undefined
question_count = undefined

startGame = () ->
  $("#start").hide();
  $("#gameover").hide();
  $("#game").show();
  count = 11
  countDown()
  $("#answer_text").removeClass("wrong")
  $("#answer_text").val("")



## カウントダウン
countDown = () ->
  if count-- <= 1
    console.info "時間切れ"
    $("#game").hide();
    $("#gameover").show();
  else
    $(".timer").text("残り" + count + "秒")
    console.info count
    clearTimeout question_timer
    question_timer = setTimeout(->
      countDown()
    , 1100)

## 答えのチェック
checkAnswer = () ->
  self = this
  clearTimeout typing_timeout
  # $("title").text "typing..."

  typing_timeout = setTimeout(->
    answer = $("#answer_text").val()
    console.info answer

    if answer.indexOf("まぼろしのぎんじ") isnt -1
      console.info "正解"
      $("#answer_text").removeClass("wrong")

    else
      console.info "不正解"
      $("#answer_text").addClass("wrong")

  , 500)


nextQuestion = () ->
