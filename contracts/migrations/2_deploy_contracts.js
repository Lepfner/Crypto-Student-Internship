var EpicCoin = artifacts.require("./EpicCoin.sol");

module.exports = function (deployer) {
    deployer.deploy(EpicCoin, 1000000);
  };
  