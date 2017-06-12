const inventory = {
  marsBar: { amount:5, price: 1.05 },
  snickers: { amount:3, price: 1.25 },
  lays: { amount:2, price: 1.25 },
  coke: { amount:8, price: 1.00 },
  sprite: { amount:3, price: 1.35 },
}

class VendingMachine {

  printInventory(){
    return inventory;
  }

  refillInventory(){
    Object.keys(inventory).map(key => {
      inventory[key].amount = 10;
    })
    throw 'The inventory is now full';
  }

  resupplyChange(oldItem, newItem){
    inventory[newItem] = {amount: 10, price: 1.55};
    delete inventory[oldItem];
    return inventory;
  }

  paidDispense(inputPrice){
    const correctItem =  Object.keys(inventory).filter(key => {
      if(inventory[key].price === inputPrice) return key
    })
    // if(correctItem.length > 1) return correctItem[0];
    return correctItem.join('');
  }

  returnChange(change){
    if(change > 5) return 'Too Much Money';
    if(change < 1) return 'Not enough money';
    change += '';
    let changeArr = change.split('');
    changeArr = changeArr.filter(x => {
      if(x === '.') return false;
      else return true;
    })
    const bigCoin = changeArr[0];
    const medCoin = changeArr[1];
    const littleCoin = changeArr[2];
    return `${bigCoin} dollar ${medCoin} dimes and ${littleCoin} cents`
  }

}

module.exports = VendingMachine, inventory;