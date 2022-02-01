/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Gachapong, GachapongInterface } from "../Gachapong";

const _abi = [
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
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum Gachapong.LotteryType",
        name: "lotteryType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "number",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BuyLottery",
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
        indexed: true,
        internalType: "uint256",
        name: "id",
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
        name: "twoDigitRef",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "threeDigitRef",
        type: "uint256",
      },
    ],
    name: "CloseRound",
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
        internalType: "uint16",
        name: "twoDigitRandom",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "threeDigitRandom",
        type: "uint16",
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
        internalType: "enum Gachapong.LotteryType",
        name: "_type",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_number",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "buyLottery",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_lotteryId",
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
        name: "_twoDigitRef",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_threeDigitRef",
        type: "uint256",
      },
    ],
    name: "closeRound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "currentLotteryId",
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
    name: "currentLotteryRound",
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
        internalType: "uint16",
        name: "_twoDigitReward",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "_threeDigitReward",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "_addOnPoolReward",
        type: "uint16",
      },
    ],
    name: "initialize",
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
    name: "lotteries",
    outputs: [
      {
        internalType: "uint256",
        name: "lotteryRound",
        type: "uint256",
      },
      {
        internalType: "enum Gachapong.LotteryType",
        name: "lotteryType",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "lotteryNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "view",
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
        name: "twoDigitRef",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "threeDigitRef",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "twoDigitNumber",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "threeDigitNumber",
        type: "uint16",
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
        internalType: "uint16",
        name: "_twoDigitReward",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "_threeDigitReward",
        type: "uint16",
      },
    ],
    name: "setMultiplyReward",
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
    inputs: [],
    name: "threeDigitReward",
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
    name: "twoDigitReward",
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
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "userLotteries",
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
        name: "_lotteryId",
        type: "uint256",
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
  "0x608060405234801561001057600080fd5b506125c1806100206000396000f3fe6080604052600436106101e75760003560e01c8063715018a611610102578063ae169a5011610095578063f27c12c511610064578063f27c12c51461070d578063f2fde38b14610729578063fad6babf14610749578063fc0c546a1461076957610239565b8063ae169a501461068d578063c2552604146106ad578063d547741f146106cd578063de5a6b8e146106ed57610239565b806391d14854116100d157806391d14854146105ee5780639cd235b714610634578063a08c8b5e14610658578063a217fddf1461067857610239565b8063715018a61461051c5780638456cb59146105315780638c65c81f146105465780638da5cb5b146105d057610239565b806336568abe1161017a578063530104081161014957806353010408146104995780635c975abb146104b9578063634252dc146104d15780636be4097c1461050557610239565b806336568abe146103f65780633f4ba83a14610416578063409e81081461042b578063521eb2731461046057610239565b8063248a9ca3116101b6578063248a9ca314610364578063295b0f241461039457806329a216a8146103b65780632f2ff15d146103d657610239565b806301ffc9a7146102815780631398e076146102b657806314b218141461031f5780631a0020f51461034457610239565b366102395760405162461bcd60e51b815260206004820152601760248201527f4761636861706f6e672e736f6c3a20496e76616c69642e00000000000000000060448201526064015b60405180910390fd5b60405162461bcd60e51b815260206004820152601760248201527f4761636861706f6e672e736f6c3a20496e76616c69642e0000000000000000006044820152606401610230565b34801561028d57600080fd5b506102a161029c366004612206565b61078a565b60405190151581526020015b60405180910390f35b3480156102c257600080fd5b5061030e6102d13660046121ca565b6101326020526000908152604090208054600182015460028301546003840154600490940154929360ff909216929091906001600160a01b031685565b6040516102ad959493929190612427565b34801561032b57600080fd5b5061033661012e5481565b6040519081526020016102ad565b34801561035057600080fd5b5061033661035f366004612175565b6107c1565b34801561037057600080fd5b5061033661037f3660046121ca565b60009081526065602052604090206001015490565b3480156103a057600080fd5b506103b46103af366004612110565b610800565b005b3480156103c257600080fd5b506103b46103d1366004612254565b610964565b3480156103e257600080fd5b506103b46103f13660046121e3565b610a7d565b34801561040257600080fd5b506103b46104113660046121e3565b610aa8565b34801561042257600080fd5b506103b4610b34565b34801561043757600080fd5b5061012d5461044d9062010000900461ffff1681565b60405161ffff90911681526020016102ad565b34801561046c57600080fd5b5061013054610481906001600160a01b031681565b6040516001600160a01b0390911681526020016102ad565b3480156104a557600080fd5b506103b46104b43660046121ca565b610b98565b3480156104c557600080fd5b5060fb5460ff166102a1565b3480156104dd57600080fd5b506103367ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc781565b34801561051157600080fd5b5061033661012f5481565b34801561052857600080fd5b506103b4610d8b565b34801561053d57600080fd5b506103b4610def565b34801561055257600080fd5b5061059f6105613660046121ca565b6101336020526000908152604090208054600182015460029092015490919061ffff8082169162010000810490911690640100000000900460ff1685565b60408051958652602086019490945261ffff928316938501939093521660608301521515608082015260a0016102ad565b3480156105dc57600080fd5b506097546001600160a01b0316610481565b3480156105fa57600080fd5b506102a16106093660046121e3565b60009182526065602090815260408084206001600160a01b0393909316845291905290205460ff1690565b34801561064057600080fd5b5061012d5461044d90640100000000900461ffff1681565b34801561066457600080fd5b506103b461067336600461226f565b610e51565b34801561068457600080fd5b50610336600081565b34801561069957600080fd5b506103b46106a83660046121ca565b610f7f565b3480156106b957600080fd5b506103366106c83660046121ca565b61119a565b3480156106d957600080fd5b506103b46106e83660046121e3565b6111e4565b3480156106f957600080fd5b506103b4610708366004612230565b61120a565b34801561071957600080fd5b5061012d5461044d9061ffff1681565b34801561073557600080fd5b506103b46107443660046120f5565b6114b4565b34801561075557600080fd5b506103b4610764366004612299565b61157f565b34801561077557600080fd5b5061013154610481906001600160a01b031681565b60006001600160e01b03198216637965db0b60e01b14806107bb57506301ffc9a760e01b6001600160e01b03198316145b92915050565b61013460205282600052604060002060205281600052604060002081815481106107ea57600080fd5b9060005260206000200160009250925050505481565b600054610100900460ff1661081b5760005460ff161561081f565b303b155b6108915760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610230565b600054610100900460ff161580156108b3576000805461ffff19166101011790555b6108bb611683565b6108c36116ba565b6108cb6116f9565b6108d3611728565b6108de60003361175f565b61013180546001600160a01b038088166001600160a01b03199283161790925561013080549289169290911691909117905561012d805461ffff8481166401000000000265ffff0000000019878316620100000263ffffffff19909416928916929092179290921716179055801561095c576000805461ff00191690555b505050505050565b6097546001600160a01b031633146109be5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610230565b60fb5460ff16610a075760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610230565b61ffff8116610a585760405162461bcd60e51b815260206004820152601b60248201527f4761636861706f6e672e736f6c3a204d757374206265203e20302e00000000006044820152606401610230565b61012d805461ffff9092166401000000000265ffff0000000019909216919091179055565b600082815260656020526040902060010154610a998133611769565b610aa383836117e9565b505050565b6001600160a01b0381163314610b265760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c6600000000000000000000000000000000006064820152608401610230565b610b30828261188b565b5050565b6097546001600160a01b03163314610b8e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610230565b610b9661190e565b565b7ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc7610bc38133611769565b600082815261013360205260409020805415801590610be55750600181015415155b610c315760405162461bcd60e51b815260206004820152601860248201527f4761636861706f6e672e736f6c3a204e656564207265662e00000000000000006044820152606401610230565b805443118015610c445750438160010154105b610c905760405162461bcd60e51b815260206004820152601e60248201527f4761636861706f6e672e736f6c3a204e656564206d6f72652074696d652e00006044820152606401610230565b6002810154640100000000900460ff1615610ced5760405162461bcd60e51b815260206004820152601b60248201527f4761636861706f6e672e736f6c3a20416c72656164792067656e2e00000000006044820152606401610230565b600080610d02836000015484600101546119a1565b60028501805464ff000000001961ffff8481166201000090810263ffffffff199094168783161793909317918216640100000000179384905560408051928216835292909304909216602083015292945090925086917f85407ad4ad6a815f7b401e7642009df8a877e57b873990c2bd4b67caf4ec747a91015b60405180910390a25050505050565b6097546001600160a01b03163314610de55760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610230565b610b9660006119c8565b6097546001600160a01b03163314610e495760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610230565b610b96611a1a565b6097546001600160a01b03163314610eab5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610230565b60fb5460ff16610ef45760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610230565b61ffff821615801590610f0a575061ffff811615155b610f565760405162461bcd60e51b815260206004820152601b60248201527f4761636861706f6e672e736f6c3a204d757374206265203e20302e00000000006044820152606401610230565b61012d805461ffff928316620100000263ffffffff199091169290931691909117919091179055565b600260c9541415610fd25760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610230565b600260c98190556000828152610133602052604090200154640100000000900460ff166110415760405162461bcd60e51b815260206004820152601d60248201527f4761636861706f6e672e736f6c3a204e6f7420636c61696d61626c652e0000006044820152606401610230565b600081815261013260205260409020600401546001600160a01b031633146110ab5760405162461bcd60e51b815260206004820152601960248201527f4761636861706f6e672e736f6c3a204e6f74206f776e65722e000000000000006044820152606401610230565b60008181526101326020526040812060040180546001600160a01b03191690556110d482611a95565b9050806111235760405162461bcd60e51b815260206004820152601860248201527f4761636861706f6e672e736f6c3a204e6f207072697a652e00000000000000006044820152606401610230565b6101305461013154611143916001600160a01b0391821691163384611c14565b60008281526101326020908152604091829020548251338152918201849052849290917f694aa398c6171844f2664fdd94918843ab8cda489bed76d19ccf227d3835b421910160405180910390a35050600160c955565b60008181526101326020908152604080832054808452610133909252822060020154640100000000900460ff166111d45750600092915050565b6111dd83611a95565b9392505050565b6000828152606560205260409020600101546112008133611769565b610aa3838361188b565b600260c954141561125d5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610230565b600260c95560fb5460ff16156112a85760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610230565b806112f55760405162461bcd60e51b815260206004820152601b60248201527f4761636861706f6e672e736f6c3a204d696e696d756d206265742e00000000006044820152606401610230565b600083600181111561130957611309612549565b14156113655760638211156113605760405162461bcd60e51b815260206004820152601c60248201527f4761636861706f6e672e736f6c3a204f7574206f662072616e67652e000000006044820152606401610230565b6113b7565b6103e78211156113b75760405162461bcd60e51b815260206004820152601c60248201527f4761636861706f6e672e736f6c3a204f7574206f662072616e67652e000000006044820152606401610230565b61013054610131546113d8916001600160a01b039182169133911684611c14565b61012f5460008181526101326020526040902061012e54815560018082018054879260ff1990911690838181111561141257611412612549565b021790555060028101849055600381018390556004810180546001600160a01b0319163317905561012f805490600061144a836124ee565b909155505080546004820154600283015460038401546040518694937f89d288ace11cce5fb0d0bcf312ed61a2c43fd8cdc1562a1554c6460de6e3f4ab936114a0936001600160a01b03909216928c929061237a565b60405180910390a35050600160c955505050565b6097546001600160a01b0316331461150e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610230565b6001600160a01b0381166115735760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610230565b61157c816119c8565b50565b7ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc76115aa8133611769565b43831180156115b857504382115b80156115c45750818314155b6116105760405162461bcd60e51b815260206004820152601b60248201527f4761636861706f6e672e736f6c3a20496e76616c6964207265662e00000000006044820152606401610230565b61012e8054600081815261013360205260408120868155600181018690558354929390929161163e836124ee565b90915550508054600182015460405184927fe2086cdc46d5137731127430ab658a0e8a24a2170d840d1dd8bee05a514bb41792610d7c92918252602082015260400190565b600054610100900460ff166116aa5760405162461bcd60e51b8152600401610230906123dc565b6116b2611c89565b610b96611cb0565b600054610100900460ff166116e15760405162461bcd60e51b8152600401610230906123dc565b6116e9611c89565b6116f1611c89565b610b96611c89565b600054610100900460ff166117205760405162461bcd60e51b8152600401610230906123dc565b610b96611ce0565b600054610100900460ff1661174f5760405162461bcd60e51b8152600401610230906123dc565b611757611c89565b610b96611d0e565b610b3082826117e9565b60008281526065602090815260408083206001600160a01b038516845290915290205460ff16610b30576117a7816001600160a01b03166014611d41565b6117b2836020611d41565b6040516020016117c39291906122f9565b60408051601f198184030181529082905262461bcd60e51b8252610230916004016123a9565b60008281526065602090815260408083206001600160a01b038516845290915290205460ff16610b305760008281526065602090815260408083206001600160a01b03851684529091529020805460ff191660011790556118473390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60008281526065602090815260408083206001600160a01b038516845290915290205460ff1615610b305760008281526065602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60fb5460ff166119575760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610230565b60fb805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6000806119b060648540612509565b91506119bf6103e88440612509565b90509250929050565b609780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60fb5460ff1615611a605760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610230565b60fb805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586119843390565b600081815261013260209081526040808320815160a0810190925280548252600180820154859484019160ff90911690811115611ad457611ad4612549565b6001811115611ae557611ae5612549565b815260028281015460208084019190915260038401546040808501919091526004909401546001600160a01b0316606093840152845160009081526101338252848120855160a081018752815481526001820154938101939093529092015461ffff808216958301959095526201000081049094169281019290925264010000000090920460ff161515608082015291925082602001516001811115611b8d57611b8d612549565b1415611bdf578160400151816040015161ffff161415611bd55761012d546060830151606491611bc39161ffff9091169061248c565b611bcd9190612478565b949350505050565b5060009392505050565b8160400151816060015161ffff161415611bd55761012d546060830151606491611bc3916201000090910461ffff169061248c565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166323b872dd60e01b179052611c83908590611eea565b50505050565b600054610100900460ff16610b965760405162461bcd60e51b8152600401610230906123dc565b600054610100900460ff16611cd75760405162461bcd60e51b8152600401610230906123dc565b610b96336119c8565b600054610100900460ff16611d075760405162461bcd60e51b8152600401610230906123dc565b600160c955565b600054610100900460ff16611d355760405162461bcd60e51b8152600401610230906123dc565b60fb805460ff19169055565b60606000611d5083600261248c565b611d5b906002612460565b67ffffffffffffffff811115611d7357611d73612575565b6040519080825280601f01601f191660200182016040528015611d9d576020820181803683370190505b509050600360fc1b81600081518110611db857611db861255f565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110611de757611de761255f565b60200101906001600160f81b031916908160001a9053506000611e0b84600261248c565b611e16906001612460565b90505b6001811115611e9b577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110611e5757611e5761255f565b1a60f81b828281518110611e6d57611e6d61255f565b60200101906001600160f81b031916908160001a90535060049490941c93611e94816124d7565b9050611e19565b5083156111dd5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610230565b6000611f3f826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611fbc9092919063ffffffff16565b805190915015610aa35780806020019051810190611f5d91906121a8565b610aa35760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610230565b6060611bcd848460008585843b6120155760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610230565b600080866001600160a01b0316858760405161203191906122dd565b60006040518083038185875af1925050503d806000811461206e576040519150601f19603f3d011682016040523d82523d6000602084013e612073565b606091505b509150915061208382828661208e565b979650505050505050565b6060831561209d5750816111dd565b8251156120ad5782518084602001fd5b8160405162461bcd60e51b815260040161023091906123a9565b80356001600160a01b03811681146120de57600080fd5b919050565b803561ffff811681146120de57600080fd5b60006020828403121561210757600080fd5b6111dd826120c7565b600080600080600060a0868803121561212857600080fd5b612131866120c7565b945061213f602087016120c7565b935061214d604087016120e3565b925061215b606087016120e3565b9150612169608087016120e3565b90509295509295909350565b60008060006060848603121561218a57600080fd5b612193846120c7565b95602085013595506040909401359392505050565b6000602082840312156121ba57600080fd5b815180151581146111dd57600080fd5b6000602082840312156121dc57600080fd5b5035919050565b600080604083850312156121f657600080fd5b823591506119bf602084016120c7565b60006020828403121561221857600080fd5b81356001600160e01b0319811681146111dd57600080fd5b60008060006060848603121561224557600080fd5b83356002811061219357600080fd5b60006020828403121561226657600080fd5b6111dd826120e3565b6000806040838503121561228257600080fd5b61228b836120e3565b91506119bf602084016120e3565b600080604083850312156122ac57600080fd5b50508035926020909101359150565b600281106122d957634e487b7160e01b600052602160045260246000fd5b9052565b600082516122ef8184602087016124ab565b9190910192915050565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516123318160178501602088016124ab565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000601791840191820152835161236e8160288401602088016124ab565b01602801949350505050565b6001600160a01b03851681526080810161239760208301866122bb565b60408201939093526060015292915050565b60208152600082518060208401526123c88160408501602087016124ab565b601f01601f19169190910160400192915050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b85815260a0810161243b60208301876122bb565b8460408301528360608301526001600160a01b03831660808301529695505050505050565b600082198211156124735761247361251d565b500190565b60008261248757612487612533565b500490565b60008160001904831182151516156124a6576124a661251d565b500290565b60005b838110156124c65781810151838201526020016124ae565b83811115611c835750506000910152565b6000816124e6576124e661251d565b506000190190565b60006000198214156125025761250261251d565b5060010190565b60008261251857612518612533565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212202a198040ad38f246ba83032c7d6f6af809c8f1a5d881ade2876abe01805681f864736f6c63430008070033";

export class Gachapong__factory extends ContractFactory {
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
  ): Promise<Gachapong> {
    return super.deploy(overrides || {}) as Promise<Gachapong>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Gachapong {
    return super.attach(address) as Gachapong;
  }
  connect(signer: Signer): Gachapong__factory {
    return super.connect(signer) as Gachapong__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GachapongInterface {
    return new utils.Interface(_abi) as GachapongInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Gachapong {
    return new Contract(address, _abi, signerOrProvider) as Gachapong;
  }
}
