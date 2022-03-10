require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  networks: {
    hardhat: {},
    maineth: {
      url: 'https://mainnet.infura.io/v3/a6a7e3934ce44d54a27a256079a3b8a2',
      accounts: {
        mnemonic: '! here you mnemonic .. !',
        count: 1,
      },
    },
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/a6a7e3934ce44d54a27a256079a3b8a2'
    },
  },
  solidity: {
    compilers: [
      {
        version: '0.7.4',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: '0.5.16',
        settings: {
          optimizer: {
            enabled: true,
            runs: 999999,
          },
        },
      },
    ],
  },
};
