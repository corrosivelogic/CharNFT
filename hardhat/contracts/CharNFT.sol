// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TelevisionCharacters is ERC721, Ownable {
    uint256 public constant maxSupply = 3000;

    constructor() ERC721("TelevisionCharacters", "TVCHAR") {}

    function mint(string memory tokenURI) external onlyOwner {
        require(totalSupply() < maxSupply, "Exceeded maximum supply");
        uint256 tokenId = totalSupply() + 1;
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, tokenURI);
    }

    function changeTokenImage(uint256 tokenId, string memory newTokenURI) external onlyOwnerOf(tokenId) {
        _setTokenURI(tokenId, newTokenURI);
    }
}
