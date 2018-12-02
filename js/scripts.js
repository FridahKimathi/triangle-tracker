function triangleTracker(){
    
    
    var a =parseInt(document.getElementById("one").value);
    var b =parseInt(document.getElementById("two").value);
    var c =parseInt(document.getElementById("three").value);

    var sides =[];
    
    sides.push("a");
    sides.push("b");
    sides.push("c");
  
    
    var results =document.querySelector("#results");
    
    if(isNaN(a)){
      results.innerHTML="Invalid entry!Please enter a number.";
    }
     if(isNaN(b)){
        results.innerHTML="Invalid entry!Please enter a number.";
    }
     if(isNaN(c)){
        results.innerHTML="Invalid entry!Please enter a number.";
    
    }
    else if (a+b<=c || b+c<=a || c+a<=b) {
        results.innerHTML="Not a Triangle";
    }
    else if(a==b && b==c && c==a){
            results.innerHTML="Equilateral triangle";
    }
    else if (a==b || b==c || c==a){
            results.innerHTML="Isosceles Triangle";
    }
    else if (a!==b && b!==c && c!==a){
            results.innerHTML="Scalene Triangle";
    }
    }
    function pageReload(){
            location.reload();
    }
    