function checkout(){
    let sum= 450*(document.getElementById("mob1").value)+450*document.getElementById("mob2").value;
    document.getElementById('sum').value=sum;
    console.log(sum);
}