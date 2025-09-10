
        const outputScreen =document.getElementById("output");
        function display(num){
              outputScreen.value +=num;
        }
        function del(){
            outputScreen.value=outputScreen.value.slice(0,-1)
        }
        function clearDisplay(){
            outputScreen.value=" ";
        }
        function calculate(){
           try{
             outputScreen.value=eval(outputScreen.value)
           }
           catch(error){
            outputScreen.value="error"
        }
    }
