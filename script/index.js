var myRequest = new XMLHttpRequest();
myRequest.open('GET', 'https://codepen.io/eclairereese/pen/BzQBzR.html');
myRequest.onreadystatechange = function () { 
    // 4. check if the request has a readyState of 4, which indicates the server has responded (complete)
    if (myRequest.readyState === 4) {
        // 5. insert the text sent by the server into the HTML of the 'ajax-content'
        document.getElementById('ajax-content').innerHTML = myRequest.responseText;
    }
};

function sendTheAJAX() {
    myRequest.send();
    document.getElementById('reveal').style.display = 'none';
}

//Idea for my ajax was gotten here: https://www.w3schools.com/jquery/ajax_ajax.asp