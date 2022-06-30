function arraysDemo(){

  let arr = [1,2,312312312312,'123qa123',42321,'asd',true,[[],15,66666,7,[8,'asd',[1111,222,[333]]]]];
  let result = [];
  
  iterateArray(arr);
  console.log(result);

  function iterateArray(arr) {

    for (let el of arr) {
    
      if(typeof el === "number") {
        result.push(el);
      } else if(Array.isArray(el)) {
        iterateArray(el);
      }
    
    }
  }  

}
arraysDemo();