function hinhchunhat() {
    let dai = parseInt(document.forms["hinhchunhatform"]["dai"].value);
    let rong = parseInt(document.forms["hinhchunhatform"]["rong"].value);
    let chuvi = (dai+rong)*2;
    alert(chuvi);
    
}
    function hinhtron() {
        let bankinh = parseInt(document.forms["hinhtronform"]["bankinh"].value);
        
        let dientichhinhtron = Math.PI * bankinh*bankinh
       // alert(dientichhinhtron);

       document.getElementById("dientich").innerHTML =" ban kinh hinh tron " + bankinh + " co dien tich la "+ dientichhinhtron;
        
    }


    