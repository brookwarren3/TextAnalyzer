



function doTextAnalyze(string){

}

function finalRun(){
  $("form").submit(function( event ) {
    var value = $('#user-text').val();
    console.log(value);
  });
}

$(document).ready(function() {
  finalRun(); 
});