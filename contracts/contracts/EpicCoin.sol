// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

//https://www.youtube.com/watch?v=DeF55_eyGDQ&ab_channel=HanhHuynhHuu

contract EpicCoin is ERC20 {
  address public admin;
  constructor() ERC20("EpicCoin", "EC") {
        _mint(msg.sender, 10000 * 10 ** 18);
        admin = msg.sender;
  }
  function mint(address to, uint256 amount) external {
    require(msg.sender == admin, 'only admin');
    _mint(to, amount);
  }
}