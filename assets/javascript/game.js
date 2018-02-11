$(document).ready(function() {
var one, two, three, four;


    RandomComputerNumber= 19 + Math.floor(Math.random() * 102);

    one=  1 + Math.floor(Math.random() * 12);
    two=  1 + Math.floor(Math.random() * 12);
    three=  1 + Math.floor(Math.random() * 12);
    four=  1 + Math.floor(Math.random() * 12);
   
    // 
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;

  $("#numberWins").text(wins);
  $("#numberLosses").text(losses);

  function reset(){
        RandomComputerNumber= 19 + Math.floor(Math.random() * 102);

        console.log(RandomComputerNumber)

        $("#randomNumber").text(Random);

        num1=  1 + Math.floor(Math.random() * 12);
        num2=  1 + Math.floor(Math.random() * 12);
        num3=  1 + Math.floor(Math.random() * 12);
        num4=  1 + Math.floor(Math.random() * 12);
        userTotal= 0;
        $("#finalTotal").text(userTotal);
        } 
  l
  function yay(){
  alert("winner winner chicken dinner!");
    wins++; 
    $("#numberWins").text(wins);
    reset();
  }
  
  function loser(){
  alert ("Take the L homie!");
    losses++;
    $("#numberLosses").text(losses);
    reset()
  }
  
    $("#one").on ("click", function(){
      userTotal = userTotal + num1;
      console.log("New userTotal= " + userTotal);
      $("#finalTotal").text(userTotal); 
     
          if (userTotal == Random){
            yay();
          }
          else if ( userTotal > Random){
            loser();
          }   
    })  
    $("#two").on ("click", function(){
      userTotal = userTotal + num2;
      console.log("New userTotal= " + userTotal);
      $("#finalTotal").text(userTotal); 
          if (userTotal == Random){
            yay();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $("#three").on ("click", function(){
      userTotal = userTotal + num3;
      console.log("New userTotal= " + userTotal);
      $("#finalTotal").text(userTotal);
 
            if (userTotal == Random){
            yay();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $("#four").on ("click", function(){
      userTotal = userTotal + num4;
      console.log("New userTotal= " + userTotal);
      $("#finalTotal").text(userTotal); 
        
            if (userTotal == Random){
            yay();
          }
          else if ( userTotal > Random){
            loser();
          }
    });   
  }); 