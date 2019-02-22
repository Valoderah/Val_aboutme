
 //   const ans = document.getElementById("answerSqr");

function myfunction() {
    let side = document.getElementById("calculate").value;
    let area = parseInt(side) * parseInt(side);
    document.getElementById("answerSqr").innerHTML = 'Answer: ' + area;
}

function myrectangle() {
    let hnum = document.getElementById("height").value;
    let wnum = document.getElementById("weight").value;
    let arearec = parseInt(hnum) * parseInt(wnum);
    document.getElementById("answerrec").innerHTML = 'Answer: ' + arearec;
}