function myfunction() {
    let side = document.getElementById("calculate").value;
    let area = parseInt(side) * parseInt(side);
    alert("The area of a square is: "+ area);
}

function myrectangle() {
    let hnum = document.getElementById("height").value;
    let wnum = document.getElementById("weight").value;
    let arearec = parseInt(hnum) * parseInt(wnum);
    alert("The area of the rectangle is: "+arearec);
}