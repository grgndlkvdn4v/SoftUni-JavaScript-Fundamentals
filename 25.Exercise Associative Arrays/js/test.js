function test() {

  let obj = {};

  obj.Ivan = ["2C, 4H, 9H"];

  let newDraw = ["JD, JD"];

  for (const iterator of newDraw) {
    console.log(iterator);
  }
  obj["Ivan"].push += [...newDraw]

  console.log(obj.Ivan);

}
test();