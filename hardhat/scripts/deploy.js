const { ethers } = require("hardhat");
const fs = require("fs");



async function main() {
  const TelevisionCharacters = await ethers.getContractFactory("TelevisionCharacters");
  const tvCharacters = await TelevisionCharacters.deploy();
  await tvCharacters.deployed();

  console.log("TelevisionCharacters deployed to:", tvCharacters.address);

  // Read the image file
  const imageBuffer = fs.readFileSync("stitch.jpg");
  const dataURI = 'data:image/png;base64,${imageBuffer.toString("base64")}';
  // Mint NFT
  await tvCharacters.mint(dataURI);
  
  // Read the image file
  const imageBuffer2 = fs.readFileSync("stitch.jpg");
  const dataURI2 = 'data:image/png;base64,${imageBuffer.toString("base64")}';

  // Change NFT image by owner
  await tvCharacters.changeTokenImage(1, dataURI2);
}

main();
