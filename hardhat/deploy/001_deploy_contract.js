module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy} = deployments;
    const {deployer} = await getNamedAccounts();
    await deploy('BGColor', {
      from: deployer,
      args: ["#000000"],
      log: true,
    });
  };
  module.exports.tags = ['BGColor'];