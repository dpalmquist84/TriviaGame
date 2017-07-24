$(document).ready(function(){
    console.log( "ready!" );


var right = 0;
var wrong = 0;
var unanswered = 4;
var number = 10;
var intervalId;

setTimeout(function(){
  run();
    
},5000)

function run(){
intervalId = setInterval(decrement, 1000)
}

function decrement(){
    number--;
    if (number > 0){
    $("#timer").html("time left: " + number).show();
}
    else if(number == 0){
        $("#timer").html("Here are you results!")
        
    }
}

 setTimeout(function(){
 $('.start').hide();
 }, 3000);

setTimeout(function(){
 $('.question1').show();
 $('.question2').show();
 $('.question3').show();
 $('.question4').show();
}, 5000);

setTimeout(function(){
 $('.question1').hide();
 $('.question2').hide();
 $('.question3').hide();
 $('.question4').hide();
}, 15000);

setTimeout(function(){
$('#right').html("You got " + right + " right!").show();
$('#wrong').html("You got " + wrong + " wrong :(").show();
$('#unanswered').html("You didnt answer " + unanswered).show();

  if(right == 4){
    $('#image').html("<img src='http://images.clipartpanda.com/gold-star-clipart-diraAp9i9.jpeg'>")
  } else if (unanswered == 4){
    $('#image').html("<img src='https://www.tarshacampbellempowers.com/wp-content/uploads/Try-Again-holder-1024x517.jpg'>")
  } else if ((wrong == 4) || (wrong == 3) || (wrong == 2) || (wrong == 1)){
    $("#image").html("<img src='https://www.tarshacampbellempowers.com/wp-content/uploads/Try-Again-holder-1024x517.jpg'>")
  }
}, 15000);


$(".true1").click(function(){
  unanswered--;
  window.value1 = $('input[name=true]:checked').val();
  console.log(value1);
  logicQuestion1();
})

$(".false1").click(function(){
  unanswered--;
  window.valueA = $('input[name=false]:checked').val();
  console.log(valueA);
  logicQuestion1();
  
});

$(".true2").click(function(){
  unanswered--;
  window.value2 = $('input[name=true2]:checked').val();
  console.log(value2);
  logicQuestion2();
  
})
$(".false2").click(function(){
  unanswered--;
  window.valueB = $('input[name=false2]:checked').val();
  console.log(valueB);
  logicQuestion2();
  
});

$(".true3").click(function(){
  unanswered--;
  window.value3 = $('input[name=true3]:checked').val();
  console.log(value3);
  logicQuestion3();
  
})
$(".false3").click(function(){
  unanswered--;
  window.valueC = $('input[name=false3]:checked').val();
  console.log(valueC);
  logicQuestion3();
  
});

$(".true4").click(function(){
  unanswered--;
  window.value4 = $('input[name=true4]:checked').val();
  console.log(value4);
  logicQuestion4();
  
})
$(".false4").click(function(){
  unanswered--;
  window.valueD = $('input[name=false4]:checked').val();
  console.log(valueD);
  logicQuestion4();
  
});

function logicQuestion1(){
if (this.value1 == 'true'){
    right++;
    console.log(right);
}else if  (this.valueA == 'false'){
   wrong++;
   console.log(wrong);
}
else if (valueA == null && value1 == null) {
    unanswered++;
    console.log(unanswered);
    }
}
function logicQuestion2(){
if (this.value2 == 'true'){
    right++;
    console.log(right);
}else if  (this.valueB == 'false'){
   wrong++;
   console.log(wrong);
}
else {
    unanswered++;
    }
}
function logicQuestion3(){
if (window.value3 == 'true'){
    right++;
    console.log(right);
}else if  (this.valueC == 'false'){
   wrong++;
   console.log(wrong);
}
else {
    unanswered++;
    }
}
function logicQuestion4(){
if (window.value4 == 'true'){
    right++;
    console.log(right);
}else if  (this.value == 'false'){
   wrong++;
   console.log(wrong);
}
else {
    window.unanswered++;
 }
}

$('#restart').on("click",function(){
   location.reload().show();
 });


});





