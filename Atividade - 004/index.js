function saudacao(){
    let nome = document.getElementById("nome").value;
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, '0');
 
 
   
  if(horas < 12){
   document.getElementById("saudacao").innerHTML = "Espero que sua manhã esteja sendo otima! " + "Seja bem vindo(a)";
 
  
 
  }else if(horas >= 12 && horas < 18){
    
     document.getElementById("saudacao").innerHTML = "Espero que sua tarde esteja sendo otima! " + "Seja bem vindo(a)";
 
 
  }else if(horas >= 18){
 
     document.getElementById("saudacao").innerHTML = "Espero que sua noite esteja sendo otima! " + "Seja bem vindo(a)";
 
 
  }
 
 
 }
 
 
 function calcularSoma() {
             const a = parseFloat(document.getElementById('a').value);
             const b = parseFloat(document.getElementById('b').value);
             const resultado = a + b;
             document.getElementById("resultado").innerText = "O resultado é: " + resultado;
         }
 
         function calcularSub() {
             const a = parseFloat(document.getElementById('a').value);
             const b = parseFloat(document.getElementById('b').value);
             const resultado = a - b;
             if(b = 0){
               document.getElementById("infelizmente não podemos dividir por 0");
             }
             document.getElementById("resultado").innerText = "O resultado é: " + resultado;
         }
 
         function calcularDiv() {
             const a = parseFloat(document.getElementById('a').value);
             const b = parseFloat(document.getElementById('b').value);
             const resultado = b !== 0 ? a / b : 'Erro: Divisão por zero';
             document.getElementById("resultado").innerText = "O resultado é: " + resultado;
         }
 
         function calcularMulti() {
             const a = parseFloat(document.getElementById('a').value);
             const b = parseFloat(document.getElementById('b').value);
             const resultado = a * b;
             document.getElementById("resultado").innerText = "O resultado é: " + resultado;
         }
 
   function Idade(){
      let idade = parseFloat(document.getElementById("idade").value);
      if(idade <= 12){
         document.getElementById("ResultIdade").innerHTML = "Você é uma criança";
      }else if(idade > 12 && idade < 18){
         document.getElementById("ResultIdade").innerHTML= "Você é um adolecente";
 
      }else if(idade >= 18 && idade < 60){
         document.getElementById("ResultIdade").innerHTML= "Você é um adulto";
      }else{
         document.getElementById("ResultIdade").innerHTML= "Você é um Idoso";
      }
 
     }
     
     function compararr(){
       let n1 =parseFloat(document.getElementById("n1").value);
       let n2 =parseFloat(document.getElementById("n2").value);
 
       if(n1 > n2){
          document.getElementById("comparar").innerHTML =  n1 + " é maior que "  + n2;
 
 
       }else if(n2> n1){ 
        
         document.getElementById("comparar").innerHTML =  n2 + " é maior que  "  + n1;
 
       }else{
         document.getElementById("comparar").innerHTML = "ops, esses números são iguais";
     }
 
     }