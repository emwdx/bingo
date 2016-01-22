var expressions = [
'4x-4',
'\\dfrac{3x^2(2x+1)}{(2x+1)^2}- 2 \\dfrac{x^3}{(2x+1)^2}',
'24x+30',
'- \\dfrac{4}{x^5}',
'\\dfrac{1}{2 \\sqrt{x}}',
'-4',
'0',
'-\\dfrac{2}{x^2} + \\dfrac{2}{x^3}',
'\\dfrac{1(2x-4)-2(x+5)}{(2x-4)^2}',
'2x+1',
'2x+10',
'5x^4 - 20x^3',
'3x^2 - 2',
'2x^{\\frac{1}{2}}',
'1',
'-\\dfrac{1}{2} + \\dfrac{2}{x^2}'
]



$(document).ready(function(){
shuffle(expressions);
expressions.forEach(function(e,i){

var entries = $('.bingoEntry');
entries[i].innerHTML=e;

})



$('.bingoEntry').each(function(i,e){


katex.render(e.innerHTML, e); //comment out this value to prevent all KaTEX rendering


})

//Below code is from http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}



})
