function echoType(param) {
  
  let parameter = typeof(param);
  console.log(parameter);

  console.log((parameter === "string" || parameter === "number") ? param : "Parameter is not suitable for printing");
  
  // if (parameter === "string" || parameter === "number") {
  //   console.log(param);
  // } else {
  //   console.log("Parameter is not suitable for printing");
  // }

}
echoType('Hello, JavaScript!');
echoType(18);
echoType(null);