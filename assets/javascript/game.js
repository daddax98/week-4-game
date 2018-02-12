$(document).ready(function() {
    
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
       
    var Jewlone, Jewltwo, Jewlthree, Jewlfour;
    
    

        var RandomComputerNumber;

    RandomComputerNumber= 19 + Math.floor(Math.random() * 102);
    $("#RandomComputerNumber").text(RandomComputerNumber);

    Jewlone=  1 + Math.floor(Math.random() * 12);
    Jewltwo=  1 + Math.floor(Math.random() * 12);
    Jewlthree=  1 + Math.floor(Math.random() * 12);
    Jewlfour=  1 + Math.floor(Math.random() * 12);
   
    // 

  $("#numberWins").text(wins);
  $("#numberLosses").text(losses);

  function reset(){
        RandomComputerNumber= 19 + Math.floor(Math.random() * 102);

        console.log(RandomComputerNumber)

        $("#RandomComputerNumber").text(RandomComputerNumber);

        Jewlone=  1 + Math.floor(Math.random() * 12);
        Jewltwo=  1 + Math.floor(Math.random() * 12);
        Jewlthree=  1 + Math.floor(Math.random() * 12);
        Jewlfour=  1 + Math.floor(Math.random() * 12);
        userTotal= 0;
        $("#userTotal").text(userTotal);
        } 
  
  function yay(){
  alert("You da rainmaker!");
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
  
    $("#Jewlone").on ("click", function(){
      userTotal = userTotal + Jewlone;
      console.log("New userTotal= " + userTotal);
      $("#finalTotal").text(userTotal); 
     
          if (userTotal === RandomComputerNumber){
            yay();
          }
          else if ( userTotal > RandomComputerNumber){
            loser();
          }   
    })  
    $("#Jewltwo").on ("click", function(){
      userTotal = userTotal + Jewltwo;
      console.log("New userTotal= " + userTotal);
      $("#finalTotal").text(userTotal); 
          if (userTotal === RandomComputerNumber){
            yay();
          }
          else if ( userTotal > RandomComputerNumber){
            loser();
          } 
    })  
    $("#Jewlthree").on ("click", function(){
      userTotal = userTotal + Jewlthree;
      console.log("New userTotal= " + userTotal);
      $("#finalTotal").text(userTotal);
 
            if (userTotal === RandomComputerNumber){
            yay();
          }
          else if ( userTotal > RandomComputerNumber){
            loser();
          } 
    })  
    $("#Jewlfour").on ("click", function(){
      userTotal = userTotal + Jewlfour;
      console.log("New userTotal= " + userTotal);
      $("#finalTotal").text(userTotal); 
        
            if (userTotal === RandomComputerNumber){
            yay();
          }
          else if ( userTotal > RandomComputerNumber){
            loser();
          }
    });   
  }); 

