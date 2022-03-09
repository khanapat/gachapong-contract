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
    name: "userJackpot",
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
  "0x608060405234801561001057600080fd5b506121bf806100206000396000f3fe6080604052600436106101e75760003560e01c80637f6ba93f11610102578063ae169a5011610095578063f2fde38b11610064578063f2fde38b146106cf578063fc0c546a146106ef578063fc78728d1461070f578063fe071e021461072f57610239565b8063ae169a501461063b578063d547741f1461065b578063deaa59df1461067b578063e0a601ea1461069b57610239565b806391d14854116100d157806391d14854146105925780639cd235b7146105d8578063a217fddf14610606578063a4dd83591461061b57610239565b80637f6ba93f146104ba5780638456cb59146104e75780638c65c81f146104fc5780638da5cb5b1461057457610239565b80633f4ba83a1161017a5780635c975abb116101495780635c975abb14610439578063634252dc14610451578063651c45d214610485578063715018a6146104a557610239565b80633f4ba83a146103ac578063521eb273146103c157806353010408146103f95780635a9d993b1461041957610239565b80632f2ff15d116101b65780632f2ff15d1461032c57806336568abe1461034c57806337de615f1461036c5780633de4a4ea1461038c57610239565b806301ffc9a7146102815780631209b1f6146102b6578063248a9ca3146102da57806329a216a81461030a57610239565b366102395760405162461bcd60e51b815260206004820152601760248201527f4761636861706f6e672e736f6c3a20496e76616c69642e00000000000000000060448201526064015b60405180910390fd5b60405162461bcd60e51b815260206004820152601760248201527f4761636861706f6e672e736f6c3a20496e76616c69642e0000000000000000006044820152606401610230565b34801561028d57600080fd5b506102a161029c366004611e9b565b610745565b60405190151581526020015b60405180910390f35b3480156102c257600080fd5b506102cc60fd5481565b6040519081526020016102ad565b3480156102e657600080fd5b506102cc6102f5366004611e56565b60009081526065602052604090206001015490565b34801561031657600080fd5b5061032a610325366004611ec5565b61077c565b005b34801561033857600080fd5b5061032a610347366004611e6f565b610888565b34801561035857600080fd5b5061032a610367366004611e6f565b6108b3565b34801561037857600080fd5b5061032a610387366004611e56565b61093f565b34801561039857600080fd5b506102cc6103a7366004611e56565b610a27565b3480156103b857600080fd5b5061032a610a48565b3480156103cd57600080fd5b5060fe546103e1906001600160a01b031681565b6040516001600160a01b0390911681526020016102ad565b34801561040557600080fd5b5061032a610414366004611e56565b610aac565b34801561042557600080fd5b506102cc610434366004611ee0565b610c4e565b34801561044557600080fd5b5060c95460ff166102a1565b34801561045d57600080fd5b506102cc7ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc781565b34801561049157600080fd5b5061032a6104a0366004611e0a565b610c8d565b3480156104b157600080fd5b5061032a610e08565b3480156104c657600080fd5b506104da6104d5366004611e0a565b610e6c565b6040516102ad9190611fb2565b3480156104f357600080fd5b5061032a610ee1565b34801561050857600080fd5b5061054a610517366004611e56565b61010060205260009081526040902080546001820154600283015460038401546004909401549293919290919060ff1685565b6040805195865260208601949094529284019190915260608301521515608082015260a0016102ad565b34801561058057600080fd5b506097546001600160a01b03166103e1565b34801561059e57600080fd5b506102a16105ad366004611e6f565b60009182526065602090815260408084206001600160a01b0393909316845291905290205460ff1690565b3480156105e457600080fd5b5060fb546105f39061ffff1681565b60405161ffff90911681526020016102ad565b34801561061257600080fd5b506102cc600081565b34801561062757600080fd5b5061032a610636366004611dbd565b610f43565b34801561064757600080fd5b5061032a610656366004611e56565b61107a565b34801561066757600080fd5b5061032a610676366004611e6f565b611195565b34801561068757600080fd5b5061032a610696366004611da2565b6111bb565b3480156106a757600080fd5b506102cc7fe4565867dd1e20f34ea9b921039638aea0cafa3220989f09d781dbf3085e30da81565b3480156106db57600080fd5b5061032a6106ea366004611da2565b6112d6565b3480156106fb57600080fd5b5060ff546103e1906001600160a01b031681565b34801561071b57600080fd5b506102cc61072a366004611e6f565b6113a1565b34801561073b57600080fd5b506102cc60fc5481565b60006001600160e01b03198216637965db0b60e01b148061077657506301ffc9a760e01b6001600160e01b03198316145b92915050565b6097546001600160a01b031633146107d65760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610230565b60c95460ff1661081f5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610230565b61ffff81166108705760405162461bcd60e51b815260206004820152601960248201527f4a61636b706f742e736f6c3a204d757374206265203e20302e000000000000006044820152606401610230565b60fb805461ffff191661ffff92909216919091179055565b6000828152606560205260409020600101546108a481336113d4565b6108ae8383611454565b505050565b6001600160a01b03811633146109315760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c6600000000000000000000000000000000006064820152608401610230565b61093b82826114f6565b5050565b7ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc761096a81336113d4565b4382116109b95760405162461bcd60e51b815260206004820152601960248201527f4a61636b706f742e736f6c3a20496e76616c6964207265662e000000000000006044820152606401610230565b60fc8054600091826109ca83612102565b9091555060008181526101006020526040908190206001018590555190915081907f5634ff43044581c3f349069b8c52f6784a8a3c2e5e1bfc72191f1546cf376be990610a1a9086815260200190565b60405180910390a2505050565b60fb54600090606490610a3e9061ffff16846120a0565b610776919061208c565b6097546001600160a01b03163314610aa25760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610230565b610aaa611579565b565b7ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc7610ad781336113d4565b6000828152610100602052604090206001810154610b375760405162461bcd60e51b815260206004820152601660248201527f4a61636b706f742e736f6c3a204e656564207265662e000000000000000000006044820152606401610230565b43816001015410610b8a5760405162461bcd60e51b815260206004820152601c60248201527f4a61636b706f742e736f6c3a204e656564206d6f72652074696d652e000000006044820152606401610230565b600481015460ff1615610bdf5760405162461bcd60e51b815260206004820152601960248201527f4a61636b706f742e736f6c3a20416c72656164792067656e2e000000000000006044820152606401610230565b6000610bf38260010154836000015461160c565b6002830181905560048301805460ff1916600117905560405190915084907f1124577e10a9938859db293866a960e232222d0f2048f8dba1f84da8f3edbeea90610c409084815260200190565b60405180910390a250505050565b6101016020528260005260406000206020528160005260406000208181548110610c7757600080fd5b9060005260206000200160009250925050505481565b7fe4565867dd1e20f34ea9b921039638aea0cafa3220989f09d781dbf3085e30da610cb881336113d4565b60c95460ff1615610cfe5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610230565b600060fd5483610d0e919061208c565b90508015610dcf5760005b81811015610dcd5760fc5460009081526101006020526040812080549082610d4083612102565b9091555060fc546000908152610101602090815260408083206001600160a01b038b1680855290835281842080546001810182559085529383902090930184905580519283529082018390529192507fe4224fac76e68ee2fe2a87cc73a563626ea919ce93b7f5963a8057baf441abb0910160405180910390a15080610dc581612102565b915050610d19565b505b610dd883610a27565b60fc546000908152610100602052604081206003018054909190610dfd908490612074565b909155505050505050565b6097546001600160a01b03163314610e625760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610230565b610aaa6000611619565b6000818152610101602090815260408083206001600160a01b0386168452825291829020805483518184028101840190945280845260609392830182828015610ed457602002820191906000526020600020905b815481526020019060010190808311610ec0575b5050505050905092915050565b6097546001600160a01b03163314610f3b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610230565b610aaa61166b565b600054610100900460ff16610f5e5760005460ff1615610f62565b303b155b610fd45760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610230565b600054610100900460ff16158015610ff6576000805461ffff19166101011790555b610ffe6116e6565b61100661171d565b61100e61175c565b611019600033611793565b60ff80546001600160a01b038087166001600160a01b03199283161790925560fe80549288169290911691909117905560fd83905560fb805461ffff841661ffff199091161790558015611073576000805461ff00191690555b5050505050565b600081815261010060205260409020600481015460ff166110dd5760405162461bcd60e51b815260206004820152601b60248201527f4a61636b706f742e736f6c3a204e6f7420636c61696d61626c652e00000000006044820152606401610230565b60006110e9833361179d565b9050806111385760405162461bcd60e51b815260206004820152601660248201527f4a61636b706f742e736f6c3a204e6f207072697a652e000000000000000000006044820152606401610230565b6000600383015560fe5460ff5461115d916001600160a01b0391821691163384611882565b604080513381526020810183905284917fa756e4d8f7509f4ea7c440cd474be2db34f2c8e4a142b5bfbee53cb92124c6df9101610a1a565b6000828152606560205260409020600101546111b181336113d4565b6108ae83836114f6565b6097546001600160a01b031633146112155760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610230565b60c95460ff1661125e5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610230565b6001600160a01b0381166112b45760405162461bcd60e51b815260206004820152601d60248201527f4a61636b706f742e736f6c3a204d75737420626520616464726573732e0000006044820152606401610230565b60fe80546001600160a01b0319166001600160a01b0392909216919091179055565b6097546001600160a01b031633146113305760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610230565b6001600160a01b0381166113955760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610230565b61139e81611619565b50565b6000828152610100602052604081206004015460ff166113c357506000610776565b6113cd838361179d565b9392505050565b60008281526065602090815260408083206001600160a01b038516845290915290205460ff1661093b57611412816001600160a01b031660146118f7565b61141d8360206118f7565b60405160200161142e929190611f31565b60408051601f198184030181529082905262461bcd60e51b825261023091600401611ff6565b60008281526065602090815260408083206001600160a01b038516845290915290205460ff1661093b5760008281526065602090815260408083206001600160a01b03851684529091529020805460ff191660011790556114b23390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60008281526065602090815260408083206001600160a01b038516845290915290205460ff161561093b5760008281526065602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60c95460ff166115c25760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610230565b60c9805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b60006113cd82844061211d565b609780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60c95460ff16156116b15760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610230565b60c9805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586115ef3390565b600054610100900460ff1661170d5760405162461bcd60e51b815260040161023090612029565b611715611aa0565b610aaa611ac7565b600054610100900460ff166117445760405162461bcd60e51b815260040161023090612029565b61174c611aa0565b611754611aa0565b610aaa611aa0565b600054610100900460ff166117835760405162461bcd60e51b815260040161023090612029565b61178b611aa0565b610aaa611af7565b61093b8282611454565b6000828152610101602090815260408083206001600160a01b038516845282528083208054825181850281018501909352808352849383018282801561180257602002820191906000526020600020905b8154815260200190600101908083116117ee575b5050505050905060005b81518110156118775760008581526101006020526040902060020154825183908390811061183c5761183c61215d565b602002602001015114156118655750505060008281526101006020526040902060030154610776565b8061186f81612102565b91505061180c565b506000949350505050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166323b872dd60e01b1790526118f1908590611b2a565b50505050565b606060006119068360026120a0565b611911906002612074565b67ffffffffffffffff81111561192957611929612173565b6040519080825280601f01601f191660200182016040528015611953576020820181803683370190505b509050600360fc1b8160008151811061196e5761196e61215d565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061199d5761199d61215d565b60200101906001600160f81b031916908160001a90535060006119c18460026120a0565b6119cc906001612074565b90505b6001811115611a51577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110611a0d57611a0d61215d565b1a60f81b828281518110611a2357611a2361215d565b60200101906001600160f81b031916908160001a90535060049490941c93611a4a816120eb565b90506119cf565b5083156113cd5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610230565b600054610100900460ff16610aaa5760405162461bcd60e51b815260040161023090612029565b600054610100900460ff16611aee5760405162461bcd60e51b815260040161023090612029565b610aaa33611619565b600054610100900460ff16611b1e5760405162461bcd60e51b815260040161023090612029565b60c9805460ff19169055565b6000611b7f826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611bfc9092919063ffffffff16565b8051909150156108ae5780806020019051810190611b9d9190611e34565b6108ae5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610230565b6060611c0b8484600085611c13565b949350505050565b606082471015611c745760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610230565b843b611cc25760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610230565b600080866001600160a01b03168587604051611cde9190611f15565b60006040518083038185875af1925050503d8060008114611d1b576040519150601f19603f3d011682016040523d82523d6000602084013e611d20565b606091505b5091509150611d30828286611d3b565b979650505050505050565b60608315611d4a5750816113cd565b825115611d5a5782518084602001fd5b8160405162461bcd60e51b81526004016102309190611ff6565b80356001600160a01b0381168114611d8b57600080fd5b919050565b803561ffff81168114611d8b57600080fd5b600060208284031215611db457600080fd5b6113cd82611d74565b60008060008060808587031215611dd357600080fd5b611ddc85611d74565b9350611dea60208601611d74565b925060408501359150611dff60608601611d90565b905092959194509250565b60008060408385031215611e1d57600080fd5b611e2683611d74565b946020939093013593505050565b600060208284031215611e4657600080fd5b815180151581146113cd57600080fd5b600060208284031215611e6857600080fd5b5035919050565b60008060408385031215611e8257600080fd5b82359150611e9260208401611d74565b90509250929050565b600060208284031215611ead57600080fd5b81356001600160e01b0319811681146113cd57600080fd5b600060208284031215611ed757600080fd5b6113cd82611d90565b600080600060608486031215611ef557600080fd5b83359250611f0560208501611d74565b9150604084013590509250925092565b60008251611f278184602087016120bf565b9190910192915050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611f698160178501602088016120bf565b7f206973206d697373696e6720726f6c65200000000000000000000000000000006017918401918201528351611fa68160288401602088016120bf565b01602801949350505050565b6020808252825182820181905260009190848201906040850190845b81811015611fea57835183529284019291840191600101611fce565b50909695505050505050565b60208152600082518060208401526120158160408501602087016120bf565b601f01601f19169190910160400192915050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b6000821982111561208757612087612131565b500190565b60008261209b5761209b612147565b500490565b60008160001904831182151516156120ba576120ba612131565b500290565b60005b838110156120da5781810151838201526020016120c2565b838111156118f15750506000910152565b6000816120fa576120fa612131565b506000190190565b600060001982141561211657612116612131565b5060010190565b60008261212c5761212c612147565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220b333fdc5d92c4b600ae7da820bd4c96933623e8216396c16eb4b511c403111fe64736f6c63430008070033";

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
