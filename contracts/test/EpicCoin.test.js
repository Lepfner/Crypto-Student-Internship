const EpicCoin = artifacts.require("EpicCoin")

contract("EpicCoin", (accounts) =>{

    before(async () =>{
        epiccoin = await EpicCoin.deployed()
    })

    it("can transfer tokens between accounts", async ()=>{
        let amount = web3.utils.toWei('1000','ether')
        await epiccoin.transfer(accounts[1], amount, {from: accounts[0]})

        let balance = await epiccoin.balanceOf(accounts[1])
        balance = web3.utils.fromWei(balance,'ether')
        assert.equal(balance, '1000', "Balance should be 1k tokens for contract creator")
    })

})