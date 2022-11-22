// contract test code will go here
const assert = require("assert"); //used to make assertion. It is standard library
const ganache = require("ganache-cli");
const Web3 = require("web3"); //Constructor of Web3

//Web3 is always expecting the provider is provided
//provider : communication layer. By change provider, we can choice which blockchain network will be used
const web3 = new Web3(ganache.provider()); //instance of web3
const { interface, bytecode } = require("../compile");

/*
 Mocha Functions
// it : Run a test and make an assertion
// describe : Groups together 'it' functions
// beforeEach : Execute some general setup code
*/

let accounts;
let inbox;

beforeEach(async () => {
  // Get a list of all accounts (provided by ganache)
  accounts = await web3.eth.getAccounts();

  // Use one of those accounts to deply the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ["Hi there!"],
    })
    .send({ from: accounts[0], gas: "1000000" });
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    console.log(inbox);
  });
});
