const EpicCoin = artifacts.require("EpicCoin");
const { expect } = require('chai');
const { BN, expectEvent, expectRevert, constants } = require('@openzeppelin/test-helpers');

contract("EpicCoin", (accounts) =>{

    const NAME = 'EpicCoin';
    const SYMBOL = 'EC';
    const FAKENAME = 'FakeCoin';
    const DECIMALS = 18;
    const TOTAL_SUPPLY = new BN('10000000000000000000000');

    before(async () =>{
        epiccoin = await EpicCoin.deployed();
    })

      it('retrieve returns a value previously stored', async function () {
        expect(await epiccoin.totalSupply()).to.be.bignumber.equal(TOTAL_SUPPLY);
      });
    
      it('has a name', async function () {
        expect(await epiccoin.name()).to.be.equal(NAME);
      });

      it('has fake name', async function(){
        expect(await epiccoin.name()).to.be.equal(FAKENAME);
      });
    
      it('has a symbol', async function () {
        expect(await epiccoin.symbol()).to.be.equal(SYMBOL);
      });

      it('can mint tokens', async function (){
        let balance2 = await epiccoin.balanceOf(accounts[0]);
        balance2 = web3.utils.fromWei(balance2,'ether')
        assert.equal(balance2, '10000', "Balance should be 10k tokens for contract creator")
      });

      it('assigns the initial total supply to the creator', async function () {
        expect(await epiccoin.balanceOf(accounts[0])).to.be.bignumber.equal(TOTAL_SUPPLY);
      });


    it("can transfer tokens between accounts", async ()=>{
        let amount = web3.utils.toWei('1000','ether')
        await epiccoin.transfer(accounts[1], amount, {from: accounts[0]})

        let balance = await epiccoin.balanceOf(accounts[1])
        balance = web3.utils.fromWei(balance,'ether')
        assert.equal(balance, '1000', "Balance should be 1k tokens for contract creator")
    })

})