var obj1 = {name:"person1",age:5};
var obj2 = {age:5,name:"person1"};

var flag=true;
if(obj1.length==obj2.length){
   for(let key in obj2){
    if(obj2[key]==obj1[key]){
        continue
    }
    else{
         flag=false
         break
    }
   }
}
else{
    flag=false;
    
}


console.log("both are:"+ " "+flag)