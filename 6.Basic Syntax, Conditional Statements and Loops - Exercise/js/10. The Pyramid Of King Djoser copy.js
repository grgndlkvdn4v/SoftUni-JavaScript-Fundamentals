function solve(base, height) {

  let step = 0;
  let stone = 0;
  let marble = 0;
  let lapis  = 0;
  let gold  = 0;


  for (let size = base; size >= 1; size-=2) {
    step++;
    // console.log(size);
    let currBase = Math.pow(size, 2)
    let inner = Math.pow(size - 2, 2);
    let outter = currBase - inner;

    // console.log(currBase, outter, inner);

    if (size <= 2) {
    gold += Math.pow(size, 2);
    } else if (step % 5 === 0) {
      stone += inner;
      lapis += outter;
    } else  if (step % 5 !== 0 || size !== 2){
      stone += inner;
      marble += outter;
    }
    // console.log(step, stone, marble, lapis, gold);
  }

  let stoneReq = stone * height;
  let marbleReq = marble * height;
  let lapisReq = lapis * height;
  let goldReq = gold * height;
  let totalHeight = step * height;

  console.log(`Stone required: ${Math.ceil(stoneReq)}`);
  console.log(`Marble required: ${Math.ceil(marbleReq)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisReq)}`);
  console.log(`Gold required: ${Math.ceil(goldReq)}`);
  console.log(`Final pyramid height: ${Math.floor(totalHeight)}`);

}
// solve(11, 1);
solve(11, 0.75);
// solve(12, 1);
// solve(23, 0.5);