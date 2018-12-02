function triangleTracker(){
    var sides =[];
    
    var a =parseInt(document.getElementById("one").value);
    var b =parseInt(document.getElementById("two").value);
    var c =parseInt(document.getElementById("three").value);
    
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
    else if(a+b<=c || a+c<=b || b+c<=a){
        results.innerHTML="Not a triangle";
    }
    else if(a==c || b==a || b==c){
        results.innerHTML="isosceles triangle";
    }
    else if (a==b && b==c && c==a){
            results.innerHTML="Equilateral triangle";
    }
    else if(a!==b && b!==c && a!==c) {
            results.innerHTML ="scalene  triangle";
    }
    
    }
    function pageReload(){
            location.reload();
    }
    