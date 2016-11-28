

function doTextAnalyze(string){
  var words = $('#user-text').val().split(" ");
  var text = [];
  for (var i=0; i < words.length; i++) {
  // only push this line if it contains a non whitespace character.
    if (/\S/.test(words[i])) {
      text.push($.trim(words[i]));
    }
  }
  console.log(text.length);
}


function numberOfWords(string){
  var numOfArray = doTextAnalyze(string);
  console.log(numOfArray);
}

function finalRun(){
  $("form").submit(function( event ) {
    event.preventDefault();
    var value = $('#user-text').val();
    numberOfWords(value);
  });
}

$(document).ready(function() {
  finalRun(); 
});