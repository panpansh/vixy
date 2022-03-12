# MIRROR ETH mVIXY-UST (for big wallets with a taste for risk)

## uniswap
buy UST: 
```
https://bafybeieuvilr42qkvycmae3y6y5le4ddwwu5ohenbofavih64gpgip2tce.ipfs.dweb.link/#/swap?outputCurrency=0xa47c8bf37f92aBed4A126BDA807A7b7498661acD
```
UST to mVIXY: 
```
https://bafybeieuvilr42qkvycmae3y6y5le4ddwwu5ohenbofavih64gpgip2tce.ipfs.dweb.link/#/swap?exactField=input&inputCurrency=0xa47c8bf37f92aBed4A126BDA807A7b7498661acD&outputCurrency=0xf72FCd9DCF0190923Fadd44811E240Ef4533fc86
```
ADD LIQUIDITY: 
```
https://bafybeieuvilr42qkvycmae3y6y5le4ddwwu5ohenbofavih64gpgip2tce.ipfs.dweb.link/#/add/v2/0xf72FCd9DCF0190923Fadd44811E240Ef4533fc86/0xa47c8bf37f92aBed4A126BDA807A7b7498661acD
```
REMOVE LIQUIDITY: 
```
https://bafybeieuvilr42qkvycmae3y6y5le4ddwwu5ohenbofavih64gpgip2tce.ipfs.dweb.link/#/remove/v2/0xf72FCd9DCF0190923Fadd44811E240Ef4533fc86/0xa47c8bf37f92aBed4A126BDA807A7b7498661acD
```
mVIXY to UST: 
```
https://bafybeieuvilr42qkvycmae3y6y5le4ddwwu5ohenbofavih64gpgip2tce.ipfs.dweb.link/#/swap?exactField=input&inputCurrency=0xf72FCd9DCF0190923Fadd44811E240Ef4533fc86&outputCurrency=0xa47c8bf37f92aBed4A126BDA807A7b7498661acD
```

## nodejs
```
npm install
```
**edit hardhat.config.js to insert your mnemonic or add the field for the private key**

**read and and comment/uncomment code when it is needed**

use the approve function one time after that let it commented

- use the stake function to stake (input bigint)

- use the getReward function to get reward without withdrawal

- use the withdraw function to withdraw LP only (input bigint)

- use the exit function towithdraw LP + rewards

then on demand
```
npm run script:vixy
```

# donation : 0xCBfeAE7716B6d5Ef242A3180Cf67BB53Df34784C

contract sources :
```
Uniswap mVIXY-UST pair: https://etherscan.io/address/0x6094367ea57ff4f545e2672e024393d82a1d3f28#code
Mirror LPPool: https://etherscan.io/address/0xBC07342D01fF5D72021Bb4cb95F07C252e575309#code
```

stats (pay attention to your purchase price and your selling price of course):
```
mVIXY: https://v2.info.uniswap.org/token/0xf72fcd9dcf0190923fadd44811e240ef4533fc86
pair: https://v2.info.uniswap.org/pair/0x6094367ea57ff4f545e2672e024393d82a1d3f28
```
