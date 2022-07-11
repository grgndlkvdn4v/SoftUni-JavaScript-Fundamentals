function test() {
  let arr = [1, 2, 3, 4, 2, 3]
  let set = new Set(arr);

  set.add(5)
  set.add(2)
  set.add("hui")

  console.log(set);

}
test();
