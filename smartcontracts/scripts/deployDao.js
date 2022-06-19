require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const hre = require("hardhat");


async function main() {
  
  // We get the contract to deploy
  const DaoFactory = await hre.ethers.getContractFactory("Dao");
  const DaoContract = await DaoFactory.deploy();

  console.log('Dao CONTRACT ADDRESS: ', DaoContract.address)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
