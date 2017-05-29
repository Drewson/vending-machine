const VendingMachine = require('../src/vending-machine');

describe('VendingMachine', () => {

  beforeEach(() => {
    machine = new VendingMachine()
  })

  describe('printInventory', () => {
    describe('When you print the inventory', () => {
      it('Should return all items in the inventory', () => {
        expect(machine.printInventory()).toEqual({})
      });
    })
  })

  describe('refillInventory', () => {
    describe('When the inventory is refilled', () => {

      beforeEach(() => {
        machine.refill = () => machine.refillInventory();
      })

      it('Should say the inventory is now full', () => {
        expect(machine.refill).toThrow('The inventory is now full');
      })
    })
  })

  describe('resupplyChange', () => {
    describe('When one item is changed for another', () => {
      beforeEach(() => {
        machine.resupply = machine.resupplyChange('sprite', 'pepsi')
      })

      it('Should return the new Inventory', () => {
        expect(machine.resupply).toEqual({});
      })
    })
  })

  describe('paidDispense', () => {
    describe('When a specific amount is entered', () => {

      beforeEach(() => {
        machine.paid = machine.paidDispense(1.25);
      })

      it('Should return the corresponding item', () => {
        expect(machine.paid).toEqual('lays')
      })
    })

    describe('When two items have the same price', () => {
      it('Should return the item that comes first alphabetically...?lol', () => {
        expect(machine.paid).toEqual('lays')
      })
    })
  })

  describe('returnChange', () => {
      describe('When a change in exact amount is entered', () => {
        beforeEach(() => {
          machine.change = machine.returnChange(1.25);
        })

        it('Should return amount in coins', () => {
          expect(machine.change).toEqual('1 dollar 2 dimes and 5 cents')
        })
      })

      describe('When too much change is given', () => {
        it('Should say too much change', () => {
          expect(machine.returnChange(100)).toEqual('Too Much Money')
        })
      })

      describe('When the amount is less than a dollar', () => {
        it('Should say not enough money', () => {
          expect(machine.returnChange(.50)).toEqual('Not enough money');
        })
      })
  })
})