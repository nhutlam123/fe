let pheptinh = document.getElementById("operation");
let kq = document.getElementById("result");
let expressison ="";
let button = document.getElementsByTagName("button");

for (let i =0; i<button.length; i++){
    button[i].onclick = function(){
        try {
            if(button[i].innerHTML =="C"){
                pheptinh.innerHTML = 0;
                kq.innerHTML = 0;
                expressison ="";
    
            }
            else if(button[i].innerHTML == "Enter"){
                kq.innerHTML = eval(expressison);
            }
            else{
                expressison += button[i].innerHTML;
                pheptinh.innerHTML = expressison;
            }
        } catch (error) {
            kq.innerHTML = "Nhap sai nhap lại";
        
        }
        
    }
    
}


