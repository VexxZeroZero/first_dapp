async function main() {
  // We get the contract to deploy
  const BGColor_contract = await ethers.getContractFactory("BGColor");
  const deploy_res = await BGColor_contract.deploy();

  await deploy_res.deployed();

  console.log("BGColor deployed to:", deploy_res.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });