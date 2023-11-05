


function VerificacaoDePeso(){
    let texto = document.querySelector("h2")
    let peso = document.querySelector("#peso").value



    if(peso >= 121){
        texto.innerHTML ="Infelizmente você não se enquadra em nenhuma categoria do UFC"
    }else if(peso == 120){
        texto.innerHTML = "Parabéns você é peso pesado"
    } else if(peso == 92){
        texto.innerHTML = "Parabéns você é peso meio pesado"
    } else if(peso == 83){
        texto.innerHTML = "Parabéns você é peso médio"
    } else if(peso == 77){
        texto.innerHTML = "Parabéns você é peso meio-médio"
    } else if(peso == 70){
        texto.innerHTML = "Parabéns você é peso leve"
    } else if(peso == 65){
        texto.innerHTML = "Parabéns você é peso leve"
    } else if(peso == 61){
        texto.innerHTML = "Parabéns você é peso pena"
    } else if(peso == 56){
        texto.innerHTML = "Parabéns você é peso galo"
    } else if(peso == 52){
        texto.innerHTML = "Parabéns você é peso mosca"
    } else{
        texto.innerHTML = "Infelizmente você não se enquadra em nenhuma categoria do UFC"
    }
    

   









}
   