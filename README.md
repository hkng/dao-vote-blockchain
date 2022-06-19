
## Setup testing NFT
   https://testnets.opensea.io

   Collection -> Create Collection
   name: dao-vote
   blockchain: Mumbai

   https://mumbai.polygonscan.com/
   
## Environment variable
   create .env
      API_KEY = ''
      POLYGON_MUMBAI = ''
      PRIVATE_KEY = ''

   Get API_KEY variable
     login into https://polygonscan.com
     Go to API-KEYs and add key

   Get POLYGON_MUMBAI
     login into https://www.moralis.io
     Go to Speedy Nodes -> PolyGon Netowrk endpoint -> Mumbai

## smart-contract
   mkdir smartcontracts
   cd smartcontracts
   npm i -D hardhat

   npx hardhat

   npm install -D @nomiclabs/hardhat-etherscan
   npm install @nomiclabs/hardhat-waffle dotenv

   Deploy
   npx hardhat clean
   npx hardhat compile
   npx hardhat run scripts/deployDao.js --network mumbai

   Dao CONTRACT ADDRESS:   0xaA13351a4A42b97A32Ca9EEfECfC4eeFE0636812

   npx hardhat verify  0xaA13351a4A42b97A32Ca9EEfECfC4eeFE0636812 --network mumbai

## Moralis setup
   npm install dotenv --save
   npm install magic-sdk
   create .env
     REACT_APP_MORALIS_SERVER_URL = 
     REACT_APP_MORALIS_APP_ID = 
   
   Remark: variable with REACT_APP_ prefix is for React js

   Moralis listen to Smart-Contract Event 
     Server -> View Detail -> Sync -> Add New Sync -> Sync and Watch Contract Events 
       ChainId: Polygon (Mumbai)
       Description: New Proposal Created
       Topic: proposalCreated(uint256,string,uint256, address)
       Abi: {"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"string","name":"description","type":"string"},{"indexed":false,"internalType":"uint256","name":"maxVotes","type":"uint256"},{"indexed":false,"internalType":"address","name":"proposer","type":"address"}],"name":"proposalCreated","type":"event"}
       TableName: Proposals

       where Abi: copy from proposalCreated section on https://mumbai.polygonscan.com/address/0xaA13351a4A42b97A32Ca9EEfECfC4eeFE0636812#code
     
     Do the same on 

       Description: Vote Cast
       Topic: newVote(uint256,uint256,address,uint256,bool)
       Abi: {"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"votesUp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"votesDown","type":"uint256"},{"indexed":false,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"proposal","type":"uint256"},{"indexed":false,"internalType":"bool","name":"votedFor","type":"bool"}],"name":"newVote","type":"event"}
       TableName: Votes

       Description: Count Votes
       Topic: proposalCount(uint256, bool)
       Abi: {"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"bool","name":"passed","type":"bool"}],"name":"proposalCount","type":"event"}
       TableName: ProposalCounts
       
   ## Reference
   https://www.youtube.com/watch?v=sAcEJcwPTOk