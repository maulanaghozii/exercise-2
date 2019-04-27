// Inisialisasi 
    const hasil = document.getElementById("hasil");
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const operator = document.querySelector("select");
    const btnHasil = document.querySelectorAll("button")[0];
    const btnReset = document.querySelectorAll("button")[1];
        
// Rules
    function hitung(){
        if( operator.value === "+"){
            hasil.value = parseInt(input1.value) + parseInt(input2.value);
        }else if( operator.value === "-"){
            hasil.value = parseInt(input1.value) - parseInt(input2.value);
        }else if( operator.value === "x"){
            hasil.value = parseInt(input1.value) * parseInt(input2.value);
        }else if( operator.value === "/"){
            hasil.value = parseInt(input1.value) / parseInt(input2.value);
        }
    }

    function reset(){
        hasil.value = 'HASIL';
        input1.value = 0;
        input2.value = 0;
    }
// event
    btnHasil.addEventListener("click", hitung);
    btnReset.addEventListener("click", reset);



