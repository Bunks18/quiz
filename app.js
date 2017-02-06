// $( document ).ready(function() {
//     alert( "Amelia's got awesome tits" );
// });

// function to check if answer is correct

// function to count how many answers are correct

// function to show the next question

// on click

//check to see what has been selected

// if statement to say wrong or not

// hide/show the next div

$('input[type="button"]').click(function(){
    var fname = $('#fname').val();
    var lname = $('#lname').val();
    var message = $('#message').val();
    alert(fname + ' ' + lname + ' '+ message );
    $('#fname').val("new value");
    $('#lname').val("new value");
    $('#message').val("new value");


});


$(document).ready(function(){  $('.bar').show();
  var overviewNonHigh = $('.bar1-non-high');
  var stakeholderNonHigh = $('.bar2-non-high');
  var milestoneNonHigh = $('.bar3-non-high');
  var budgetNonHigh = $('.bar4-non-high');
  var reviewNonHigh = $('.bar5-non-high');

  var overviewHigh = $('.bar1-high');
  var stakeholderHigh = $('.bar2-high');
  var milestoneHigh = $('.bar3-high');
  var budgetHigh = $('.bar4-high');
  var reviewHigh = $('.bar5-high');

  var overview = $('.panel-1');
  var stakeholder = $('.panel-2');
  var milestones = $('.panel-3');
  var budget = $('.panel-4');
  var review = $('.panel-5');
  var modal =$('.panel-6')
  var modalBox = $('.modal-box')

  var displayPanel = $('.display-panel')

  var step_count = 0;

  displayPanel.show();

    var checkStep = function(step){
    if(step === 0){
       overview.show();
       stakeholder.hide();
       milestones.hide();
       budget.hide();
       review.hide();
       modal.hide();
       modalBox.hide();

       overviewHigh.show();
       stakeholderHigh.hide();
       milestoneHigh.hide();
       budgetHigh.hide();
       reviewHigh.hide();

       overviewNonHigh.hide();
       stakeholderNonHigh.show();
       milestoneNonHigh.show();
       budgetNonHigh.show();
       reviewNonHigh.show();
    };

    if(step === 1){
       overview.hide();
       stakeholder.show();
       milestones.hide();
       budget.hide();
       review.hide();
       modal.hide();
       modalBox.hide();

       overviewHigh.hide();
       stakeholderHigh.show();
       milestoneHigh.hide();
       budgetHigh.hide();
       reviewHigh.hide();

       overviewNonHigh.show();
       stakeholderNonHigh.hide();
       milestoneNonHigh.show();
       budgetNonHigh.show();
       reviewNonHigh.show();
    };

    if(step === 2){
       overview.hide();
       stakeholder.hide();
       milestones.show();
       budget.hide();
       review.hide();
       modal.hide();
       modalBox.hide();

       overviewHigh.hide();
       stakeholderHigh.hide();
       milestoneHigh.show();
       budgetHigh.hide();
       reviewHigh.hide();

       overviewNonHigh.show();
       stakeholderNonHigh.show();
       milestoneNonHigh.hide();
       budgetNonHigh.show();
       reviewNonHigh.show();
    };

    if(step === 3){
       overview.hide();
       stakeholder.hide();
       milestones.hide();
       budget.show();
       review.hide();
       modal.hide();
       modalBox.hide();

       overviewHigh.hide();
       stakeholderHigh.hide();
       milestoneHigh.hide();
       budgetHigh.show();
       reviewHigh.hide();

       overviewNonHigh.show();
       stakeholderNonHigh.show();
       milestoneNonHigh.show();
       budgetNonHigh.hide();
       reviewNonHigh.show();
    };

    if(step === 4){
       overview.hide();
       stakeholder.hide();
       milestones.hide();
       budget.hide();
       review.show();
       modal.hide();
       modalBox.hide();

       overviewHigh.hide();
       stakeholderHigh.hide();
       milestoneHigh.hide();
       budgetHigh.hide();
       reviewHigh.show();

       overviewNonHigh.show();
       stakeholderNonHigh.show();
       milestoneNonHigh.show();
       budgetNonHigh.show();
       reviewNonHigh.hide();
    };

    if(step === 5){
       overview.hide();
       stakeholder.hide();
       milestones.hide();
       budget.hide();
       review.show();
       modal.show();
       modalBox.show();

       overviewHigh.hide();
       stakeholderHigh.hide();
       milestoneHigh.hide();
       budgetHigh.hide();
       reviewHigh.show();

       overviewNonHigh.show();
       stakeholderNonHigh.show();
       milestoneNonHigh.show();
       budgetNonHigh.show();
       reviewNonHigh.hide();
    };

  };

$(".btn-next").click(function(){
    step_count = step_count + 1;
    checkStep(step_count);
});

$(".btn-previous").click(function(){
    step_count = step_count - 1;
    checkStep(step_count);
});

checkStep(0);

$( function() {
    var availableTags = [
      "John Smith",
      "John Doe",
      "Sheryl Smith",
      "Michelle Doe"
    ];
    $( "#" + tags ).autocomplete({
      source: availableTags
    });
  } );


 });




////


$(document).ready(function(){  $('.bar').show();
  var overviewNonHigh = $('.bar1-non-high');
  var stakeholderNonHigh = $('.bar2-non-high');
  var milestoneNonHigh = $('.bar3-non-high');
  var budgetNonHigh = $('.bar4-non-high');
  var reviewNonHigh = $('.bar5-non-high');

  var overviewHigh = $('.bar1-high');
  var stakeholderHigh = $('.bar2-high');
  var milestoneHigh = $('.bar3-high');
  var budgetHigh = $('.bar4-high');
  var reviewHigh = $('.bar5-high');

  var overview = $('.panel-1');
  var stakeholder = $('.panel-2');
  var milestones = $('.panel-3');
  var budget = $('.panel-4');
  var review = $('.panel-5');
  var modal =$('.panel-6')
  var modalBox = $('.modal-box')

  var displayPanel = $('.display-panel')

  var step_count = 0;

  displayPanel.show();

    var checkStep = function(step){
    if(step === 0){
       overview.show();
       stakeholder.hide();
       milestones.hide();
       budget.hide();
       review.hide();
       modal.hide();
       modalBox.hide();

       overviewHigh.show();
       stakeholderHigh.hide();
       milestoneHigh.hide();
       budgetHigh.hide();
       reviewHigh.hide();

       overviewNonHigh.hide();
       stakeholderNonHigh.show();
       milestoneNonHigh.show();
       budgetNonHigh.show();
       reviewNonHigh.show();
    };

    if(step === 1){
       overview.hide();
       stakeholder.show();
       milestones.hide();
       budget.hide();
       review.hide();
       modal.hide();
       modalBox.hide();

       overviewHigh.hide();
       stakeholderHigh.show();
       milestoneHigh.hide();
       budgetHigh.hide();
       reviewHigh.hide();

       overviewNonHigh.show();
       stakeholderNonHigh.hide();
       milestoneNonHigh.show();
       budgetNonHigh.show();
       reviewNonHigh.show();
    };

    if(step === 2){
       overview.hide();
       stakeholder.hide();
       milestones.show();
       budget.hide();
       review.hide();
       modal.hide();
       modalBox.hide();

       overviewHigh.hide();
       stakeholderHigh.hide();
       milestoneHigh.show();
       budgetHigh.hide();
       reviewHigh.hide();

       overviewNonHigh.show();
       stakeholderNonHigh.show();
       milestoneNonHigh.hide();
       budgetNonHigh.show();
       reviewNonHigh.show();
    };

    if(step === 3){
       overview.hide();
       stakeholder.hide();
       milestones.show();
       budget.show();
       review.hide();
       modal.show();
       modalBox.show();

       overviewHigh.hide();
       stakeholderHigh.hide();
       milestoneHigh.hide();
       budgetHigh.show();
       reviewHigh.hide();

       overviewNonHigh.show();
       stakeholderNonHigh.show();
       milestoneNonHigh.show();
       budgetNonHigh.hide();
       reviewNonHigh.show();
    };



  };

$(".btn-next").click(function(){
    step_count = step_count + 1;
    checkStep(step_count);
});

$(".btn-previous").click(function(){
    step_count = step_count - 1;
    checkStep(step_count);
});

checkStep(0);

$( function() {
    var availableTags = [
      "John Smith",
      "John Doe",
      "Sheryl Smith",
      "Michelle Doe"
    ];
    $( "#" + tags ).autocomplete({
      source: availableTags
    });
  } );


 });
