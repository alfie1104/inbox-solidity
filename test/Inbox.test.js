// contract test code will go here
const assert = require("assert"); //used to make assertion. It is standard library
const ganache = require("ganache-cli");
const Web3 = require("web3"); //Constructor of Web3

//Web3 is always expecting the provider is provided
//provider : communication layer. By change provider, we can choice which blockchain network will be used
const web3 = new Web3(ganache.provider()); //instance of web3

/*
 Mocha Functions
// it : Run a test and make an assertion
// describe : Groups together 'it' functions
// beforeEach : Execute some general setup code
*/

class Car {
  park() {
    return "stopped";
  }
  drive() {
    return "vroom";
  }
}

describe("Car Class", () => {
  it("can park", () => {
    const car = new Car();
    assert.equal(car.park(), "stopped");
  });
});
