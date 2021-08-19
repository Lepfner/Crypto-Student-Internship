// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract EpicCoin is ERC20 {
  constructor(uint256 initialSupply) ERC20("EpicCoin", "EC") {
        _mint(msg.sender, initialSupply * (10 ** decimals()));
    }
  function mint(address account, uint256 amount) public {
        _mint(account, amount);
    }
}
