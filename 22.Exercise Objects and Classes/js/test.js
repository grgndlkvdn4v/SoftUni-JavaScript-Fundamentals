function test() {
  
  let peoplesArr=[]

  let gosho = {
    name: "Georgi",
    eyes: "blue",
    height: 182
  }
  peoplesArr.push(gosho)

  let pesho = {
    name: "Petur",
    eyes: "brown",
    height: 189
  }
  peoplesArr.push(pesho)

  let stancho = {
    name: "Stoyan",
    eyes: undefined,
    height: undefined
  }
  peoplesArr.push(stancho)

  stancho.height = 185;

  for (const iterator of peoplesArr) {
    console.log(iterator);
  }


  // console.log(peoplesArr);
}
test();