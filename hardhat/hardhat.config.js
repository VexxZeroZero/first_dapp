require("@nomiclabs/hardhat-ethers");
require('hardhat-deploy');

module.exports = {
  solidity: "0.8.9",
  paths: {
    artifacts: "../frontend/artifacts"
  },
  namedAccounts: {
    deployer: 0,
  },
};
