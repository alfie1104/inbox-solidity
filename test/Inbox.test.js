// contract test code will go here
const assert = require("assert"); //used to make assertion. it is standard library
const ganache = require("ganache-cli");
const Web3 = require("web3"); //Constructor of Web3

//Web3 is always expecting the provider is provided
//provider : communication layer. By change provider, we can choice which blockchain network will be used
const web3 = new Web3(ganache.provider()); //instance of web3
