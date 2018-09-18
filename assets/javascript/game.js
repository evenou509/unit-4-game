

$(document).ready(function() {
    //crysta var
    var crystal ={
        image1: 0,
        image2: 0,
        image3: 0,
        image4: 0, 
    }

    // for (var i = 0; i < 4; i++) {
    //     var crystal = Math.floor(Math.random() * 12)
    //     console.log(crystal);
    // }

    // score (target, your, win and lost)
    var targetScore = 0;
    var yourScore = 0;
    var winScore = 0;
    var lostScore = 0;

    var newGame = function() {
        yourScore = 0;
        // targetScore = 0;
        // target random number
        targetScore = Math.floor(Math.random() * 120) + 19;
        console.log(targetScore)
        // crytal random number for all 4 
        crystal.image1 = Math.floor(Math.random() * 12) + 1;
        console.log(crystal.image1)

        crystal.image2 = Math.floor(Math.random() * 12) + 1;
        console.log(crystal.image2)

        crystal.image3 = Math.floor(Math.random() * 12) + 1;
        console.log(crystal.image3)

        crystal.image4 = Math.floor(Math.random() * 12) + 1;
        console.log(crystal.image4)

        $('#youScore').html(yourScore)
        $('#targetScore').html(targetScore)
    }

    // when click the crystal to add all the score
    var addScore = function(crystal) {
        yourScore = yourScore + crystal;
        // to add all the score
        $('#yourScore').html(yourScore)

        console.log(yourScore)

        checkLostWin();
    }

    // check for win and lost
    var checkLostWin = function() {
        // var lostScore = 0;
        // var winScore = 0;
        if(yourScore > targetScore) {
            alert("sorry, you lost")
            console.log("you lost")

            lostScore++;

            $('#lostScore').html(lostScore)

            newGame();

        } else if(yourScore == targetScore) {
            alert("You Won")
            // consolo.log("You Won")

            winScore++;

            $('#winScore').html(winScore)

            newGame();

        }
    }


    newGame();


    //click event
    $('#image1').on("click", function(){
        addScore(crystal.image1)
    })

    $('#image2').on("click", function(){
        addScore(crystal.image2)
    })

    $('#image3').on("click", function(){
        addScore(crystal.image3)
    })

    $('#image4').on("click", function(){
        addScore(crystal.image4)
    })

})
