/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Jackpot, JackpotInterface } from "../Jackpot";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ticketId",
        type: "uint256",
      },
    ],
    name: "AddTicket",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "round",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "ClaimReward",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "round",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ref",
        type: "uint256",
      },
    ],
    name: "ClosePool",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "round",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "random",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "winner",
        type: "address",
      },
    ],
    name: "GenerateRandom",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "GACHAPONG_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "WORKER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "addOnPoolReward",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_betAmount",
        type: "uint256",
      },
    ],
    name: "addTicket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "calculateAddOnReward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_round",
        type: "uint256",
      },
    ],
    name: "claimReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_ref",
        type: "uint256",
      },
    ],
    name: "closePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "currentJackpotRound",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_round",
        type: "uint256",
      },
    ],
    name: "generateRandom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_round",
        type: "uint256",
      },
    ],
    name: "getTickets",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_ticketPrice",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "_addOnRewardPool",
        type: "uint16",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rounds",
    outputs: [
      {
        internalType: "uint256",
        name: "jackpotId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ref",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "winnerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isClaimable",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_addOnPoolReward",
        type: "uint16",
      },
    ],
    name: "setAddOnPoolReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_round",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "_number",
        type: "uint16",
      },
    ],
    name: "setRandom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "setToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
    ],
    name: "setWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "ticketOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ticketPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20Upgradeable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "userTickets",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_round",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "viewReward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wallet",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506123a0806100206000396000f3fe6080604052600436106102085760003560e01c80638456cb5911610118578063b858bb65116100a0578063e0db33e21161006f578063e0db33e214610730578063f2fde38b14610772578063fc0c546a14610792578063fc78728d146107b2578063fe071e02146107d25761025a565b8063b858bb651461069c578063d547741f146106bc578063deaa59df146106dc578063e0a601ea146106fc5761025a565b806391d14854116100e757806391d14854146105d35780639cd235b714610619578063a217fddf14610647578063a4dd83591461065c578063ae169a501461067c5761025a565b80638456cb59146105085780638493b9411461051d5780638c65c81f1461053d5780638da5cb5b146105b55761025a565b80633de4a4ea1161019b5780635c975abb1161016a5780635c975abb1461045a578063634252dc14610472578063651c45d2146104a6578063715018a6146104c65780637f6ba93f146104db5761025a565b80633de4a4ea146103cd5780633f4ba83a146103ed578063521eb27314610402578063530104081461043a5761025a565b806329a216a8116101d757806329a216a81461034d5780632f2ff15d1461036d57806336568abe1461038d57806337de615f146103ad5761025a565b806301ffc9a7146102a25780631209b1f6146102d7578063144fa6d7146102fb578063248a9ca31461031d5761025a565b3661025a5760405162461bcd60e51b815260206004820152601760248201527f4761636861706f6e672e736f6c3a20496e76616c69642e00000000000000000060448201526064015b60405180910390fd5b60405162461bcd60e51b815260206004820152601760248201527f4761636861706f6e672e736f6c3a20496e76616c69642e0000000000000000006044820152606401610251565b3480156102ae57600080fd5b506102c26102bd366004612017565b6107e8565b60405190151581526020015b60405180910390f35b3480156102e357600080fd5b506102ed60fd5481565b6040519081526020016102ce565b34801561030757600080fd5b5061031b610316366004611f1e565b61081f565b005b34801561032957600080fd5b506102ed610338366004611fd2565b60009081526065602052604090206001015490565b34801561035957600080fd5b5061031b610368366004612041565b610928565b34801561037957600080fd5b5061031b610388366004611feb565b610a22565b34801561039957600080fd5b5061031b6103a8366004611feb565b610a4d565b3480156103b957600080fd5b5061031b6103c8366004611fd2565b610ad9565b3480156103d957600080fd5b506102ed6103e8366004611fd2565b610bc1565b3480156103f957600080fd5b5061031b610be2565b34801561040e57600080fd5b5060fe54610422906001600160a01b031681565b6040516001600160a01b0390911681526020016102ce565b34801561044657600080fd5b5061031b610455366004611fd2565b610c34565b34801561046657600080fd5b5060c95460ff166102c2565b34801561047e57600080fd5b506102ed7ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc781565b3480156104b257600080fd5b5061031b6104c1366004611f86565b610e13565b3480156104d257600080fd5b5061031b610fb1565b3480156104e757600080fd5b506104fb6104f6366004611f86565b611003565b6040516102ce9190612173565b34801561051457600080fd5b5061031b611078565b34801561052957600080fd5b5061031b610538366004612091565b6110c8565b34801561054957600080fd5b5061058b610558366004611fd2565b61010060205260009081526040902080546001820154600283015460038401546004909401549293919290919060ff1685565b6040805195865260208601949094529284019190915260608301521515608082015260a0016102ce565b3480156105c157600080fd5b506097546001600160a01b0316610422565b3480156105df57600080fd5b506102c26105ee366004611feb565b60009182526065602090815260408084206001600160a01b0393909316845291905290205460ff1690565b34801561062557600080fd5b5060fb546106349061ffff1681565b60405161ffff90911681526020016102ce565b34801561065357600080fd5b506102ed600081565b34801561066857600080fd5b5061031b610677366004611f39565b61112e565b34801561068857600080fd5b5061031b610697366004611fd2565b611265565b3480156106a857600080fd5b506102ed6106b736600461205c565b611380565b3480156106c857600080fd5b5061031b6106d7366004611feb565b6113bf565b3480156106e857600080fd5b5061031b6106f7366004611f1e565b6113e5565b34801561070857600080fd5b506102ed7fe4565867dd1e20f34ea9b921039638aea0cafa3220989f09d781dbf3085e30da81565b34801561073c57600080fd5b5061042261074b3660046120b4565b6101016020908152600092835260408084209091529082529020546001600160a01b031681565b34801561077e57600080fd5b5061031b61078d366004611f1e565b6114ee565b34801561079e57600080fd5b5060ff54610422906001600160a01b031681565b3480156107be57600080fd5b506102ed6107cd366004611feb565b6115a7565b3480156107de57600080fd5b506102ed60fc5481565b60006001600160e01b03198216637965db0b60e01b148061081957506301ffc9a760e01b6001600160e01b03198316145b92915050565b6097546001600160a01b031633146108675760405162461bcd60e51b8152602060048201819052602482015260008051602061234b8339815191526044820152606401610251565b60c95460ff166108b05760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610251565b6001600160a01b0381166109065760405162461bcd60e51b815260206004820152601d60248201527f4a61636b706f742e736f6c3a204d75737420626520616464726573732e0000006044820152606401610251565b60ff80546001600160a01b0319166001600160a01b0392909216919091179055565b6097546001600160a01b031633146109705760405162461bcd60e51b8152602060048201819052602482015260008051602061234b8339815191526044820152606401610251565b60c95460ff166109b95760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610251565b61ffff8116610a0a5760405162461bcd60e51b815260206004820152601960248201527f4a61636b706f742e736f6c3a204d757374206265203e20302e000000000000006044820152606401610251565b60fb805461ffff191661ffff92909216919091179055565b600082815260656020526040902060010154610a3e81336115da565b610a48838361165a565b505050565b6001600160a01b0381163314610acb5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c6600000000000000000000000000000000006064820152608401610251565b610ad582826116fc565b5050565b7ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc7610b0481336115da565b438211610b535760405162461bcd60e51b815260206004820152601960248201527f4a61636b706f742e736f6c3a20496e76616c6964207265662e000000000000006044820152606401610251565b60fc805460009182610b64836122c3565b9091555060008181526101006020526040908190206001018590555190915081907f5634ff43044581c3f349069b8c52f6784a8a3c2e5e1bfc72191f1546cf376be990610bb49086815260200190565b60405180910390a2505050565b60fb54600090606490610bd89061ffff1684612261565b610819919061224d565b6097546001600160a01b03163314610c2a5760405162461bcd60e51b8152602060048201819052602482015260008051602061234b8339815191526044820152606401610251565b610c3261177f565b565b7ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc7610c5f81336115da565b6000828152610100602052604090206001810154610cbf5760405162461bcd60e51b815260206004820152601660248201527f4a61636b706f742e736f6c3a204e656564207265662e000000000000000000006044820152606401610251565b43816001015410610d125760405162461bcd60e51b815260206004820152601c60248201527f4a61636b706f742e736f6c3a204e656564206d6f72652074696d652e000000006044820152606401610251565b600481015460ff1615610d675760405162461bcd60e51b815260206004820152601960248201527f4a61636b706f742e736f6c3a20416c72656164792067656e2e000000000000006044820152606401610251565b8054600090610d77576000610d89565b610d8982600101548360000154611812565b6002830181905560048301805460ff191660011790556003830154600086815261010160209081526040808320858452825291829020548251858152918201939093526001600160a01b039092169082015290915084907f8b19761c2884c0dca481363a8d6549df3cda3c0450300f3ecb65d835dc575f6d9060600160405180910390a250505050565b7fe4565867dd1e20f34ea9b921039638aea0cafa3220989f09d781dbf3085e30da610e3e81336115da565b60c95460ff1615610e845760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610251565b600060fd5483610e94919061224d565b90508015610f785760005b81811015610f765760fc5460009081526101006020526040812080549082610ec6836122c3565b9091555060fc8054600090815261010160209081526040808320858452825280832080546001600160a01b0319166001600160a01b038d169081179091559354835261010282528083208484528252808320805460018101825590845292829020909201849055815192835282018390529192507fe4224fac76e68ee2fe2a87cc73a563626ea919ce93b7f5963a8057baf441abb0910160405180910390a150610f6f816122c3565b9050610e9f565b505b610f8183610bc1565b60fc546000908152610100602052604081206003018054909190610fa6908490612235565b909155505050505050565b6097546001600160a01b03163314610ff95760405162461bcd60e51b8152602060048201819052602482015260008051602061234b8339815191526044820152606401610251565b610c32600061181f565b6000818152610102602090815260408083206001600160a01b038616845282529182902080548351818402810184019094528084526060939283018282801561106b57602002820191906000526020600020905b815481526020019060010190808311611057575b5050505050905092915050565b6097546001600160a01b031633146110c05760405162461bcd60e51b8152602060048201819052602482015260008051602061234b8339815191526044820152606401610251565b610c32611871565b6097546001600160a01b031633146111105760405162461bcd60e51b8152602060048201819052602482015260008051602061234b8339815191526044820152606401610251565b6000918252610100602052604090912061ffff909116600290910155565b600054610100900460ff166111495760005460ff161561114d565b303b155b6111bf5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610251565b600054610100900460ff161580156111e1576000805461ffff19166101011790555b6111e96118ec565b6111f1611923565b6111f9611962565b611204600033611999565b60ff80546001600160a01b038087166001600160a01b03199283161790925560fe80549288169290911691909117905560fd83905560fb805461ffff841661ffff19909116179055801561125e576000805461ff00191690555b5050505050565b600081815261010060205260409020600481015460ff166112c85760405162461bcd60e51b815260206004820152601b60248201527f4a61636b706f742e736f6c3a204e6f7420636c61696d61626c652e00000000006044820152606401610251565b60006112d483336119a3565b9050806113235760405162461bcd60e51b815260206004820152601660248201527f4a61636b706f742e736f6c3a204e6f207072697a652e000000000000000000006044820152606401610251565b6000600383015560fe5460ff54611348916001600160a01b03918216911633846119fe565b604080513381526020810183905284917fa756e4d8f7509f4ea7c440cd474be2db34f2c8e4a142b5bfbee53cb92124c6df9101610bb4565b61010260205282600052604060002060205281600052604060002081815481106113a957600080fd5b9060005260206000200160009250925050505481565b6000828152606560205260409020600101546113db81336115da565b610a4883836116fc565b6097546001600160a01b0316331461142d5760405162461bcd60e51b8152602060048201819052602482015260008051602061234b8339815191526044820152606401610251565b60c95460ff166114765760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610251565b6001600160a01b0381166114cc5760405162461bcd60e51b815260206004820152601d60248201527f4a61636b706f742e736f6c3a204d75737420626520616464726573732e0000006044820152606401610251565b60fe80546001600160a01b0319166001600160a01b0392909216919091179055565b6097546001600160a01b031633146115365760405162461bcd60e51b8152602060048201819052602482015260008051602061234b8339815191526044820152606401610251565b6001600160a01b03811661159b5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610251565b6115a48161181f565b50565b6000828152610100602052604081206004015460ff166115c957506000610819565b6115d383836119a3565b9392505050565b60008281526065602090815260408083206001600160a01b038516845290915290205460ff16610ad557611618816001600160a01b03166014611a73565b611623836020611a73565b6040516020016116349291906120f2565b60408051601f198184030181529082905262461bcd60e51b8252610251916004016121b7565b60008281526065602090815260408083206001600160a01b038516845290915290205460ff16610ad55760008281526065602090815260408083206001600160a01b03851684529091529020805460ff191660011790556116b83390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60008281526065602090815260408083206001600160a01b038516845290915290205460ff1615610ad55760008281526065602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60c95460ff166117c85760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610251565b60c9805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b60006115d38284406122de565b609780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60c95460ff16156118b75760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610251565b60c9805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586117f53390565b600054610100900460ff166119135760405162461bcd60e51b8152600401610251906121ea565b61191b611c1c565b610c32611c43565b600054610100900460ff1661194a5760405162461bcd60e51b8152600401610251906121ea565b611952611c1c565b61195a611c1c565b610c32611c1c565b600054610100900460ff166119895760405162461bcd60e51b8152600401610251906121ea565b611991611c1c565b610c32611c73565b610ad5828261165a565b60008281526101016020908152604080832061010083528184206002015484529091528120546001600160a01b03838116911614156119f5575060008281526101006020526040902060030154610819565b50600092915050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166323b872dd60e01b179052611a6d908590611ca6565b50505050565b60606000611a82836002612261565b611a8d906002612235565b67ffffffffffffffff811115611aa557611aa5612334565b6040519080825280601f01601f191660200182016040528015611acf576020820181803683370190505b509050600360fc1b81600081518110611aea57611aea61231e565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110611b1957611b1961231e565b60200101906001600160f81b031916908160001a9053506000611b3d846002612261565b611b48906001612235565b90505b6001811115611bcd577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110611b8957611b8961231e565b1a60f81b828281518110611b9f57611b9f61231e565b60200101906001600160f81b031916908160001a90535060049490941c93611bc6816122ac565b9050611b4b565b5083156115d35760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610251565b600054610100900460ff16610c325760405162461bcd60e51b8152600401610251906121ea565b600054610100900460ff16611c6a5760405162461bcd60e51b8152600401610251906121ea565b610c323361181f565b600054610100900460ff16611c9a5760405162461bcd60e51b8152600401610251906121ea565b60c9805460ff19169055565b6000611cfb826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611d789092919063ffffffff16565b805190915015610a485780806020019051810190611d199190611fb0565b610a485760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610251565b6060611d878484600085611d8f565b949350505050565b606082471015611df05760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610251565b843b611e3e5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610251565b600080866001600160a01b03168587604051611e5a91906120d6565b60006040518083038185875af1925050503d8060008114611e97576040519150601f19603f3d011682016040523d82523d6000602084013e611e9c565b606091505b5091509150611eac828286611eb7565b979650505050505050565b60608315611ec65750816115d3565b825115611ed65782518084602001fd5b8160405162461bcd60e51b815260040161025191906121b7565b80356001600160a01b0381168114611f0757600080fd5b919050565b803561ffff81168114611f0757600080fd5b600060208284031215611f3057600080fd5b6115d382611ef0565b60008060008060808587031215611f4f57600080fd5b611f5885611ef0565b9350611f6660208601611ef0565b925060408501359150611f7b60608601611f0c565b905092959194509250565b60008060408385031215611f9957600080fd5b611fa283611ef0565b946020939093013593505050565b600060208284031215611fc257600080fd5b815180151581146115d357600080fd5b600060208284031215611fe457600080fd5b5035919050565b60008060408385031215611ffe57600080fd5b8235915061200e60208401611ef0565b90509250929050565b60006020828403121561202957600080fd5b81356001600160e01b0319811681146115d357600080fd5b60006020828403121561205357600080fd5b6115d382611f0c565b60008060006060848603121561207157600080fd5b8335925061208160208501611ef0565b9150604084013590509250925092565b600080604083850312156120a457600080fd5b8235915061200e60208401611f0c565b600080604083850312156120c757600080fd5b50508035926020909101359150565b600082516120e8818460208701612280565b9190910192915050565b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081526000835161212a816017850160208801612280565b7f206973206d697373696e6720726f6c65200000000000000000000000000000006017918401918201528351612167816028840160208801612280565b01602801949350505050565b6020808252825182820181905260009190848201906040850190845b818110156121ab5783518352928401929184019160010161218f565b50909695505050505050565b60208152600082518060208401526121d6816040850160208701612280565b601f01601f19169190910160400192915050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60008219821115612248576122486122f2565b500190565b60008261225c5761225c612308565b500490565b600081600019048311821515161561227b5761227b6122f2565b500290565b60005b8381101561229b578181015183820152602001612283565b83811115611a6d5750506000910152565b6000816122bb576122bb6122f2565b506000190190565b60006000198214156122d7576122d76122f2565b5060010190565b6000826122ed576122ed612308565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfe4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a2646970667358221220ccc76bd59c0aa25acf0c5484fb5de07caf460525447ab2b81af2a2faee54432564736f6c63430008070033";

export class Jackpot__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Jackpot> {
    return super.deploy(overrides || {}) as Promise<Jackpot>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Jackpot {
    return super.attach(address) as Jackpot;
  }
  connect(signer: Signer): Jackpot__factory {
    return super.connect(signer) as Jackpot__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): JackpotInterface {
    return new utils.Interface(_abi) as JackpotInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Jackpot {
    return new Contract(address, _abi, signerOrProvider) as Jackpot;
  }
}
