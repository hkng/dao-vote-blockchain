require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require('dotenv').config({path: '.env'})


const NUMBAI_API_URL = process.env.POLYGON_MUMBAI;
const NUMBAI_PRIVATE_KEY = process.env.PRIVATE_KEY
const POLYGONSCAN_API_KEY = process.env.API_KEY

module.exports = {
  solidity: "0.8.7",
  networks: {
    mumbai: {
      url: NUMBAI_API_URL,
      accounts: [NUMBAI_PRIVATE_KEY]
    }
  },
    etherscan: {
      apiKey: POLYGONSCAN_API_KEY,
    }
};

