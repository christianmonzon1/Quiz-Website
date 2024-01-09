$(document).ready(function() {
  let quizCount = 0;

  $('#submitBtn').click(function() {
    const answer1 = $('#answer1').val();
    const answer2 = $('#answer2').val();


    
    if (answer1 === 'I' && answer2 >= 8) {
      showResult("Gus","https://upload.wikimedia.org/wikipedia/en/6/69/Gustavo_Fring_BCS_S3E10.png");
    } else if (answer1 === 'E' && answer2 >= 5) {
      showResult("Saul","https://photos.prnewswire.com/prnfull/20131216/SF33651");
    } else if (answer1 === 'I' && answer2 < 8) {
      showResult("Walter","https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png");
    } else {
      showResult("Jesse","https://upload.wikimedia.org/wikipedia/en/c/c6/Jesse_Pinkman_S5B.png");
    }
      
    quizCount++;
    updateQuizCount();
  });

  function showResult(character,imagePath) {
    const resultText = `Your character result is: ${character}.`;
    const imageElement = `<img src="${imagePath}" alt="${character}" class="result-image">`;
    $('#result').empty().append(resultText).append(imageElement);
  }

  function updateQuizCount() {
    const quizCountText = `Quiz has been taken ${quizCount} times.`;
    $('#result').append(`<p>${quizCountText}</p>`);
  }
});
$('#restartBtn').click(function() {
    $(location).attr('href',);
    $('#answer1').val('');
    $('#answer2').val('');
    $('#result').empty();
});