const {deployments, ethers} = require('hardhat');

module.exports = async ({accounts, getUnnamedAccounts}) => {
  const {deploy} = deployments;
  const [deployerAddress] = await getUnnamedAccounts();
  console.log('Factory deployed at', (await deploy('RAIR_Token_Factory', {
    from: deployerAddress,
    //proxy: true,
    // THIS IS THE ERC777 ADDRESS FOR *MATIC MAINNET*, DO NOT
    //    DEPLOY CONTRACTS WITHOUT UPDATING THIS ADDRESS
    args: [
      // Price for deployment: 15 RAIR (15.000000000000000000)
      '15000000000000000000',
      // RAIR ERC777 Address
      //'0x0000000000' // ERC777 address
    ],
    //proxyContract: "OpenZeppelinTransparentProxy"
  })).receipt.contractAddress);
};

module.exports.tags = ['TokenFactory'];