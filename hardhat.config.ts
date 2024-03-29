import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@openzeppelin/hardhat-upgrades";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "hardhat-contract-sizer";
import "hardhat-deploy";
import "solidity-coverage";

import "./tasks/gachapong/buyLottery";
import "./tasks/gachapong/grantRole";
import "./tasks/gachapong/closeRound";
import "./tasks/gachapong/generateRandom";
import "./tasks/token/approveToken";
import "./tasks/currencyManager/addCurrency";
import "./tasks/jackpot/grantRole";
import "./tasks/jackpot/closePool";
import "./tasks/jackpot/generateRandom";
import "./tasks/jackpot/round";

dotenv.config();

const defaultNetwork = "hardhat";
const REPORT_GAS = process.env.REPORT_GAS !== undefined;
const POLYSCAN_API_KEY = process.env.POLYSCAN_API_KEY || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";
const BSCSCAN_API_KEY = process.env.BSCSCAN_API_KEY || "";
const MNEMONIC = process.env.MNEMONIC || "";
const INFURA_KEY = process.env.INFURA_KEY || "";
const ALCHEMY_RINKEBY_URL = process.env.ALCHEMY_RINKEBY_URL || "";

const config: HardhatUserConfig = {
  defaultNetwork,
  solidity: {
    compilers: [
      {
        version: "0.8.7",
        settings: {
          optimizer: {
            enabled: true,
            runs: 500,
          },
        },
      },
    ],
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  namedAccounts: {
    deployer: {
      default: 0,
      1: 0,
    },
    feeCollector: {
      default: 1,
    },
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
    },
    matic: {
      url: "https://polygon-rpc.com",
      chainId: 137,
      accounts: {
        mnemonic: MNEMONIC,
      },
    },
    mumbai: {
      url: "https://matic-mumbai.chainstacklabs.com",
      chainId: 80001,
      accounts: {
        mnemonic: MNEMONIC,
      },
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_KEY}`,
      chainId: 4,
      accounts: {
        mnemonic: MNEMONIC,
      },
      gasPrice: 50000000000, // 50 gwei
    },
    bsctest: {
      url: "https://data-seed-prebsc-1-s3.binance.org:8545/",
      chainId: 97,
      accounts: {
        mnemonic: MNEMONIC,
      },
    },
    hardhat: {
      chainId: 31337,
    },
  },
  gasReporter: {
    enabled: REPORT_GAS,
    currency: "USD",
  },
  etherscan: {
    // apiKey: {
    //   bscTestnet: BSCSCAN_API_KEY,
    //   rinkeby: ETHERSCAN_API_KEY,
    //   polygonMumbai: POLYSCAN_API_KEY,
    // },
    apiKey: BSCSCAN_API_KEY,
  },
};

export default config;
