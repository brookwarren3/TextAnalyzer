

/*function doTextAnalyze(string){
  var words = $('#user-text').val().split(" ");
  var text = [];
  for (var i=0; i < words.length; i++) {
  // only push this line if it contains a non whitespace character.
    if (/\S/.test(words[i])) {
      text.push($.trim(words[i]));
    }
  }
  console.log(text.length);
}*/

function tokenizeText(text) {
  var final = text.toLowerCase().match(/\b[^\s]+\b/g).sort();
  return final;
}

function uniqueWordCount(tokens){
  var distinctWords = [];
  for (var i=0; i<tokens.length; i++) {
    if (distinctWords.indexOf(tokens[i]) === -1) {
      distinctWords.push(tokens[i]);
    }
  }
  return distinctWords.length;
}

function averageWordLength(tokens){

}

function averageSentenceLength(tokens) {

}

function doTextAnalyze(text) {
  var words = tokenizeText(text);
  var numWords = words.length;
  var uniqueWords = uniqueWordCount(words);
  var avgWordLength = averageWordLength(words);
  var avgSentenceLength = averageSentenceLength(words);

  var textReport = $('.js-text-report');
  textReport.find('.js-word-count').text(numWords);
  textReport.find('.js-unique-word-count').text(uniqueWords);

  $(textReport).removeClass('hidden');
}

function finalRun(){
  $("form").submit(function( event ) {
    event.preventDefault();
    var value = $('#user-text').val();
    doTextAnalyze(value);
  });
}

$(document).ready(function() {
  finalRun(); 
});