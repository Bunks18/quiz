$(document).ready(function(){
  var correctAnswer = 0;
  var step_count = 0;
  var open = $('.start');
  var section1 = $('.section1');
  var section2 = $('.section2');
  var section3 = $('.section3');
  var section4 = $('.section4');
  var section5 = $('.section5');
  var section6 = $('.section6');
  var modal = $('#myModal');
  var modal2 = $('#myModal2');
  var modal3 = $('#myModal3');
  var modal4 = $('#myModal4');
  var modal5 = $('#myModal5');

  //modal box
  // var name = $('#log').val();


  var checkStep = function(step){
  if (step === 0){
   open.show();
   section1.hide();
   section2.hide();
   section3.hide();
   section4.hide();
   section5.hide();
  }
  else if (step === 1){
    open.hide();
    section1.show();
    section2.hide();
    section3.hide();
    section4.hide();
    section5.hide();
  }
  else if (step === 2){
    open.hide();
    section1.hide();
    section2.show();
    section3.hide();
    section4.hide();
    section5.hide();
    modal.modal('show');
  }
  else if (step === 3){
    open.hide();
    section1.hide();
    section2.hide();
    section3.show();
    section4.hide();
    section5.hide();
    modal2.modal('show');

  }
  else if (step === 4){
    open.hide();
    section1.hide();
    section2.hide();
    section3.hide();
    section4.show();
    section5.hide();
    modal3.modal('show');
  }
  else if (step === 5){
    open.hide();
    section1.hide();
    section2.hide();
    section3.hide();
    section4.hide();
    section5.show();
    modal4.modal('show');
  }

  else if (step === 6){

    open.hide();
    section1.hide();
    section2.hide();
    section3.hide();
    section4.hide();
    section5.hide();
    section6.show();
    modal5.modal('show');
  }

  }

  //step count functions

  $(".next").click(function(){
      step_count = step_count + 1;
      checkStep(step_count);
      // console.log("booyah");
      // console.log(step_count);
      // console.log(name);
  });

  $(".back").click(function(){
      step_count = step_count - 1;
      checkStep(step_count);
  });



$('.section1 input').on('change', function(){
    var q1 = $('input[name=radioName]:checked', '.section1').val();
       if (q1 === 'Messi'){
         $('.results').html("You got the right answer!");
         correctAnswer = correctAnswer + 1;
       }
       else {
         $('.results').html("You got the wrong answer!");
         correctAnswer = correctAnswer;
       }
       console.log(correctAnswer);
});

$('.section2 input').on('change', function(){
  var q2 = $('input[name=radioName]:checked', '.section2').val();
  if (q2 === 'Cech'){
    $('.results2').html("You got the right answer!");
    correctAnswer = correctAnswer + 1;
  }
  else {
    $('.results2').html("You got the wrong answer!");
    correctAnswer = correctAnswer;
  }
  console.log(correctAnswer);
})

$('.section3 input').on('change', function(){
  var q3 = $('input[name=radioName]:checked', '.section3').val();
  if (q3 === 'Senderos'){
    $('.results3').html("You got the right answer!");
    correctAnswer = correctAnswer + 1;
  }
  else {
    $('.results3').html("You got the wrong answer!");
    correctAnswer = correctAnswer;
  }
  console.log(correctAnswer);
})

$('.section4 input').on('change', function(){
  var q4 = $('input[name=radioName]:checked', '.section4').val();
  if (q4 === 'Steven Gerard'){
    $('.results4').html("You got the right answer!");
    correctAnswer = correctAnswer + 1;
  }
  else {
    $('.results4').html("You got the wrong answer!");
    correctAnswer = correctAnswer;
  }
  console.log(correctAnswer);
})

$('.section5 input').on('change', function(){
  var q5 = $('input[name=radioName]:checked', '.section5').val();
  if (q5 === 'Messi'){
    $('.results5').html("You got the right answer!");
    correctAnswer = correctAnswer + 1;
    $('.quizResults').html("You got");
  }
  else {
    $('.results5').html("You got the wrong answer!");
    correctAnswer = correctAnswer;
    $('.quizResults').html("You got");
  }
  console.log(correctAnswer);
})



});
