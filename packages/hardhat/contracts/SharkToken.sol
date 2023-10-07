// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract SharkToken is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    address private _admin;

    modifier onlyAdmin() {
        require(msg.sender == _admin, "SharkToken: Caller is not the admin");
        _;
    }

    constructor() ERC721("SharkToken", "SHRK") {
        _admin = msg.sender;
    }

    function mintSharkToken(address recipient) public onlyAdmin {
        _tokenIdCounter.increment();
        uint256 newTokenId = _tokenIdCounter.current();
        _safeMint(recipient, newTokenId);
    }

    function batchMintSharkTokens(address[] memory recipients) public onlyAdmin {
        for (uint256 i = 0; i < recipients.length; i++) {
            mintSharkToken(recipients[i]);
        }
    }

    function admin() public view returns (address) {
        return _admin;
    }
}
