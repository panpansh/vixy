const hre = require('hardhat');

async function main() {
  await hre.run('compile');
  const accounts = await ethers.provider.listAccounts();
  console.log('accounts: ', accounts);
  // NOT NEEDED
  //   const vixyaddr = '0xf72FCd9DCF0190923Fadd44811E240Ef4533fc86';
  //   const ustaddr = '0xa47c8bf37f92aBed4A126BDA807A7b7498661acD';
  //   const unifactory = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f';
  //   const unirouter = '';
  // NOT NEEDED

  const unipair = '0x6094367ea57ff4f545e2672e024393d82a1d3f28';
  const lppool = '0xBC07342D01fF5D72021Bb4cb95F07C252e575309';

  const contractVixyUST = await hre.ethers.getContractAt('LPPool', lppool);
  const contractUniPair = await hre.ethers.getContractAt('UniswapV2Pair', unipair);

  // READ ONLY - SAFE
  console.log('========== UNISWAP INFO ==========');
  const uniTotalSupply = await contractUniPair.totalSupply();
  console.log('uniTotalSupply: ', ethers.utils.formatEther(uniTotalSupply));
  const uniBalance = await contractUniPair.balanceOf(accounts[0]);
  console.log('uniBalanceBig: ', uniBalance);
  console.log('uniBalance: ', ethers.utils.formatEther(uniBalance));
  console.log('========== LPPool INFO ==========');
  const totalSupply = await contractVixyUST.totalSupply();
  console.log('totalSupply: ', ethers.utils.formatEther(totalSupply));
  const lppoolBalance = await contractVixyUST.balanceOf(accounts[0]);
  console.log('lppoolBalance: ', ethers.utils.formatEther(lppoolBalance));
  const totalReward = await contractVixyUST.totalReward();
  console.log('totalReward: ', ethers.utils.formatEther(totalReward));
  const earned = await contractVixyUST.earned(accounts[0]);
  console.log('earned: ', ethers.utils.formatEther(earned));
  // READ ONLY - SAFE

  // USE THIS WHEN NEEDED ONLY ! IMPORTANT

  // APPROVE LPPOOL to spend UNI PAIR LP !!! ONE TIME
  //   const isApproved = await contractUniPair.approve(lppool, 99999000000000000000000n); // == 99999LP
  //   console.log('isApproved: ', isApproved);
  // APPROVE LPPOOL to spend UNI PAIR LP !!! ONE TIME

  // STAKE YOUR UNISWAP LP BALANCE - var: uniBalance
  //   const stakeTx = await contractVixyUST.stake(uniBalance);
  //   console.log(stakeTx);
  // STAKE YOUR UNISWAP LP BALANCE - var: uniBalance

  // GET REWARDS ONLY
  //   const getRewardTx = await contractVixyUST.getReward();
  //   console.log(getRewardTx);
  // GET REWARDS ONLY

  // WITHDRAW LP ONLY
  //   const withdrawTx = await contractVixyUST.withdraw(value); // where value is a bigintish
  //   console.log(withdrawTx);
  // WITHDRAW LP ONLY

  // EXIT == GET REWARDS + WITHDRAW LP
  //   const exitTx = await contractVixyUST.exit(); // EXIT HERE
  //   console.log(exitTx);
  // EXIT == GET REWARDS + WITHDRAW LP

  // USE THIS WHEN NEEDED ONLY ! IMPORTANT
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
