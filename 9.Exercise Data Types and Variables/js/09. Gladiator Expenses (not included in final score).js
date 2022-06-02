function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
  
  let helmetCost = parseInt(lostFights / 2) * helmetPrice;
  let swordCost = parseInt(lostFights / 3) * swordPrice;
  let shieldCost = parseInt(lostFights / 6) * shieldPrice;
  let armorCost = parseInt(lostFights / 12) * armorPrice;

  let totalCost = helmetCost + swordCost + shieldCost + armorCost;

  console.log(`Gladiator expenses: ${totalCost.toFixed(2)} aureus`);

}
gladiatorExpenses(7, 2, 3, 4, 5);
// gladiatorExpenses(23, 12.5, 21.5, 40, 200);