function bitcoinMining(input) {

  let index = 0;
  let goldPerDay = input[index++];

  const bitcoinPrice = 11949.16;
  const oneGramGold = 67.51

  let totalMoney = 0;
  let dayOfPurchace = 0;
  let bitcoinCounter = 0;

  for (let day = 1; day <= input.length; day++) {

    let moneyForTheDay = goldPerDay * oneGramGold;

    if (day % 3 === 0) {
      moneyForTheDay -= moneyForTheDay*0.3;
    }

    totalMoney += moneyForTheDay;

    if (((totalMoney / bitcoinPrice) > 1) && dayOfPurchace === 0) {
      dayOfPurchace = day;
    }

    if ((totalMoney / bitcoinPrice) > 1) {
      bitcoinCounter += Math.floor(totalMoney / bitcoinPrice);
      totalMoney -= (Math.floor(totalMoney / bitcoinPrice)) * bitcoinPrice;
    }
    goldPerDay = input[index++];
  }

  console.log(`Bought bitcoins: ${bitcoinCounter}`);
  if (dayOfPurchace > 0) {
    console.log(`Day of the first purchased bitcoin: ${dayOfPurchace}`);
  }
  console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);

}
// bitcoinMining([900, 100, 200, 300]);
bitcoinMining([100, 200, 300]);
// bitcoinMining([50, 100]);
// bitcoinMining([3124.15, 504.212, 2511.124]);