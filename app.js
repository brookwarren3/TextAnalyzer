

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

function divideText(text) {
  var final = text.toLowerCase().match(/\b[^\s]+\b/g).sort();
  return final;
}

function uniqueWordCount(words){
  var distinctWords = [];
  for (var i=0; i<words.length; i++) {
    if (distinctWords.indexOf(words[i]) === -1) {
      distinctWords.push(words[i]);
    }
  }
  return distinctWords.length;
}

function averageWordLength(words){
  var totalLength = words.join("").length;
  console.log(totalLength);
  return (totalLength/words.length).toFixed(2);
}

function averageSentenceLength(words) {
  var totalLength = words.join()
}

function doTextAnalyze(text) {
  var words = divideText(text);
  var numWords = words.length;
  var uniqueWords = uniqueWordCount(words);
  var avgWordLength = averageWordLength(words);
  var avgSentenceLength = averageSentenceLength(words);

  var textReport = $('.js-text-report');
  textReport.find('.js-word-count').text(numWords);
  textReport.find('.js-unique-word-count').text(uniqueWords);
  textReport.find('.js-average-word-length').text(avgWordLength);

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