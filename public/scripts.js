// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

// This function shows and hides the shot selection in the interface based 
// on whether or not the #opponent checkbox is checked
function showHideShots() {
        $('.results').hide();
    // Get the info from the checkbox
        let check = document.getElementById('opponent');
    // Check if the checkbox is checked and show or hide options accordingly
        if (check.checked == true) {
    // Here, instead of just showing all of the options, use similar logic to 
    // check which of the game radio buttons is checked and show only those
    // options relevant to the game being selected (rps or rpsls). You can 
    // use similar jQuery 
            $('.shots').show()
        } else {
            $('.shots').hide()
        }

    }
    // This function clears the input form and also resets the shot selection
    // radio buttons. 
    function startOver () {
        document.getElementById('userinput').reset();
        $('.afterPlay').show()
        showHideShots();
    }
    /*
    async function playGame () {
        $('.afterPlay').hide()
        // Get which game is being played based on the value in the form
        let game = $('input[type=radio][name=game]:checked').val();
        // Get which shot is being played based on the value in the form
        let shot = $('input[type=radio][name=shot]:checked').val();
        // Identify the base URL based on browser information
        //let baseurl = document.baseURI
        let baseurl = document.baseURI;
        // Log the base URL
        console.log(baseurl)
        // This constructs a URL for the opponent option ONLY. To incorporate
        // the other option, you can use a conditional to change the URL based
        // on what is selected. You could also write separate functions, or use
        // a conditional somewhere above in this function to construct the 
        // correct URL
        let check = document.getElementById('opponent');
        let url
        if(check.checked == true){
            url = baseurl +'/app/'+ game + '/play/' + shot
        }else{
            url = baseurl +'/app/'+ game + '/play/'
        }
        
        // Log the full URL
        console.log(url)
        
        let response = await fetch(url)
        let result = await response.json()
        // Log the result
        console.log(result)
        //Try to return the result to html
        let getresult = document.getElementById('result')
        getresult.textContent = result.result

        return result
    }
    **/
    function playGame () {
        $('.afterPlay').hide()
        $('.results').show();
        // Get which game is being played based on the value in the form
        let game = $('input[type=radio][name=game]:checked').val();
        // Get which shot is being played based on the value in the form
        let shot = $('input[type=radio][name=shot]:checked').val();

        let check = document.getElementById('opponent');
        console.log(game)
        let result
        if(check.checked == true){
            if (game == "rps"){
                result = rps(shot)
            }
            else{
                result = rpsls(shot)
            }
        }else{
            if (game == "rps"){
                result = rps()
            }
            else{
                result = rpsls()
            }
        }
        console.log(result)
        document.getElementById("result").innerHTML = JSON.stringify(result);
    }

    function getItem(arr){
        const random = Math.floor(Math.random()*arr.length);
        const randomItem = arr[random];
        return randomItem;
    }
    
    
    function rps(shot){
        if(shot == undefined){
            const array = ['rock','paper','scissors'];
            const answer = {"player": getItem(array) };
            return answer;
        }
        const input = shot.toLowerCase();
        const array = ['rock','paper','scissors'];
        const opponent = getItem(array);
        let result = '';
        if  (input === "rock"){
            if (opponent === "rock"){
                result = "tie";
            }
            else if (opponent === "paper"){
                result = "lose";
            }
            else {
                result = "win";
            }
        }
        else if (input === "paper"){
            if (opponent === "rock"){
                result = "win";
            }
            else if (opponent === "paper"){
                result = "tie";
            }
            else {
                result = "lose";
            }
        }
        else if (input === "scissors"){
            if (opponent === "rock"){
                result = "lose";
            }
            else if (opponent === "paper"){
                result = "win";
            }
            else {
                result = "tie";
            }
        }
        else {
            throw new Error('Out of range');
        }
        const answer = {
            "You": input,
            "Your opponent": opponent,
            "result": "you "+result
        };
        let answerString = "";
        for (const [key, value] of Object.entries(answer)) {
            answerString += "<br>" + key + " : " + value + "<br>";
        }
        
        return answerString;
    }
    
    
    function rpsls(shot){
        if(shot == undefined){
            const array = ['rock','paper','scissors','lizard','spock'];
            const answer = {"player": getItem(array) };
            return answer;
        }
        const input = shot.toLowerCase();
        const array = ['rock','paper','scissors','lizard','spock'];
        const opponent = getItem(array);
        let result = '';
        if  (input === "rock"){
            if (opponent === "rock"){
                result = "tie";
            }
            else if (opponent === "paper"){
                result = "lose";
            }
            else if (opponent === "scissors"){
                result = "win";
            }
            else if (opponent === "spock"){
                result = "tie";
            }
            else {
                result = "win";
            }
        }
        else if (input === "paper"){
            if (opponent === "rock"){
                result = "win";
            }
            else if (opponent === "paper"){
                result = "tie";
            }
            else if (opponent === "scissors"){
                result = "lose";
            }
            else if (opponent === "spock"){
                result = "win";
            }
            else {
                result = "tie";
            }
        }
        else if (input === "scissors"){
            if (opponent === "rock"){
                result = "lose";
            }
            else if (opponent === "paper"){
                result = "win";
            }
            else if (opponent === "scissors"){
                result = "tie"
            }
            else if (opponent === "spock"){
                result = "tie";
            }
            else {
                result = "win";
            }
        }
        else if (input === "spock"){
            if (opponent === "rock"){
                result = "win";
            }
            else if (opponent === "paper"){
                result = "lose";
            }
            else if (opponent === "scissors"){
                result = "win"
            }
            else if (opponent === "spock"){
                result = "tie";
            }
            else {
                result = "lose";
            }
        }
        else if (input === "lizard"){
            if (opponent === "rock"){
                result = "lose";
            }
            else if (opponent === "paper"){
                result = "win";
            }
            else if (opponent === "scissors"){
                result = "lose"
            }
            else if (opponent === "spock"){
                result = "win";
            }
            else {
                result = "tie";
            }
        }
        else {
            throw new Error('Out of range');
        }
        const answer = {
            "You": input,
            "Your opponent": opponent,
            "result": "you "+result
        };
        let answerString = "";
        for (const [key, value] of Object.entries(answer)) {
            answerString += "<br>" + key + " : " + value + "<br>";
        }
        
        return answerString;
    }
    