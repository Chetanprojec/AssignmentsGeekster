function clicked(){

    var num = prompt("Enter the Number")
       parseInt(num)
       if(isNaN(num)){
          alert("Enter valid number")
       }
       else 
    
       for(var i=1; i<=num; i++){
          if(i%3==0 && i%5==0){
               document.write("Fizz Buzz" + "<br>")
               
           }
           else if(i%3==0){
             document.write("Fizz" + "<br>")
             
           }
           else if(i%5==0){
             document.write("buzz" + "<br>")
             
    
           }
           else if(i%3==0 || i%5==0){
             document.write("Fizz Buzz" + "<br>")
            
           }
           else{
             document.write(i + "<br>")
           
           }
    
           
       }
    }