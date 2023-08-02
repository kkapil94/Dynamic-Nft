const hre = require("hardhat")

async function main(){
    const BattleContract = await hre.ethers.deployContract("ChainBattles");
    const battleChainContract = await BattleContract.deployed();
    console.log("battleChainContract deployed to:", battleChainContract.address);
  } 

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });