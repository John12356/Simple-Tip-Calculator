function Reset(){
    location.reload();
}

function addtip(e){
    var bill=document.getElementById("billval").value;
    var people=document.getElementById('perval').value;
    console.log(bill);
    console.log(people);
    if(e.id=="custom"){
        var tipval=(e.value)/100;
    }
    else{
        var tipval=e.value;
    }

    var amt=(bill*tipval) /people;
    var famt = amt.toFixed(2);

    var total=(bill/people)+amt;
    var ftotal=total.toFixed(2);

    document.getElementById("tamt").innerHTML=famt;
    document.getElementById("toamt").innerHTML=ftotal;
}
