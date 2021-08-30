// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract EpicCoin is ERC20 {
  address public admin;
  constructor() ERC20("EpicCoin", "EC") {
        _mint(msg.sender, 10000 * 10 ** 18);
        admin = msg.sender;
  }
  function mint(address _to, uint256 _value) public {
    _mint(_to, _value);
  }
}