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
  "0x608060405234801561001057600080fd5b506122a7806100206000396000f3fe6080604052600436106101f25760003560e01c8063715018a61161010d578063a4dd8359116100a0578063e0a601ea1161006f578063e0a601ea146106c6578063f2fde38b146106fa578063fc0c546a1461071a578063fc78728d1461073a578063fe071e021461075a57610244565b8063a4dd835914610646578063ae169a5014610666578063d547741f14610686578063deaa59df146106a657610244565b80638da5cb5b116100dc5780638da5cb5b1461059f57806391d14854146105bd5780639cd235b714610603578063a217fddf1461063157610244565b8063715018a6146104d05780637f6ba93f146104e55780638456cb59146105125780638c65c81f1461052757610244565b80633de4a4ea116101855780635a9d993b116101545780635a9d993b146104445780635c975abb14610464578063634252dc1461047c578063651c45d2146104b057610244565b80633de4a4ea146103b75780633f4ba83a146103d7578063521eb273146103ec578063530104081461042457610244565b806329a216a8116101c157806329a216a8146103375780632f2ff15d1461035757806336568abe1461037757806337de615f1461039757610244565b806301ffc9a71461028c5780631209b1f6146102c1578063144fa6d7146102e5578063248a9ca31461030757610244565b366102445760405162461bcd60e51b815260206004820152601760248201527f4761636861706f6e672e736f6c3a20496e76616c69642e00000000000000000060448201526064015b60405180910390fd5b60405162461bcd60e51b815260206004820152601760248201527f4761636861706f6e672e736f6c3a20496e76616c69642e000000000000000000604482015260640161023b565b34801561029857600080fd5b506102ac6102a7366004611f63565b610770565b60405190151581526020015b60405180910390f35b3480156102cd57600080fd5b506102d760fd5481565b6040519081526020016102b8565b3480156102f157600080fd5b50610305610300366004611e6a565b6107a7565b005b34801561031357600080fd5b506102d7610322366004611f1e565b60009081526065602052604090206001015490565b34801561034357600080fd5b50610305610352366004611f8d565b6108b0565b34801561036357600080fd5b50610305610372366004611f37565b6109aa565b34801561038357600080fd5b50610305610392366004611f37565b6109d5565b3480156103a357600080fd5b506103056103b2366004611f1e565b610a61565b3480156103c357600080fd5b506102d76103d2366004611f1e565b610b49565b3480156103e357600080fd5b50610305610b6a565b3480156103f857600080fd5b5060fe5461040c906001600160a01b031681565b6040516001600160a01b0390911681526020016102b8565b34801561043057600080fd5b5061030561043f366004611f1e565b610bbc565b34801561045057600080fd5b506102d761045f366004611fa8565b610d5e565b34801561047057600080fd5b5060c95460ff166102ac565b34801561048857600080fd5b506102d77ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc781565b3480156104bc57600080fd5b506103056104cb366004611ed2565b610d9d565b3480156104dc57600080fd5b50610305610f18565b3480156104f157600080fd5b50610505610500366004611ed2565b610f6a565b6040516102b8919061207a565b34801561051e57600080fd5b50610305610fdf565b34801561053357600080fd5b50610575610542366004611f1e565b61010060205260009081526040902080546001820154600283015460038401546004909401549293919290919060ff1685565b6040805195865260208601949094529284019190915260608301521515608082015260a0016102b8565b3480156105ab57600080fd5b506097546001600160a01b031661040c565b3480156105c957600080fd5b506102ac6105d8366004611f37565b60009182526065602090815260408084206001600160a01b0393909316845291905290205460ff1690565b34801561060f57600080fd5b5060fb5461061e9061ffff1681565b60405161ffff90911681526020016102b8565b34801561063d57600080fd5b506102d7600081565b34801561065257600080fd5b50610305610661366004611e85565b61102f565b34801561067257600080fd5b50610305610681366004611f1e565b611166565b34801561069257600080fd5b506103056106a1366004611f37565b611281565b3480156106b257600080fd5b506103056106c1366004611e6a565b6112a7565b3480156106d257600080fd5b506102d77fe4565867dd1e20f34ea9b921039638aea0cafa3220989f09d781dbf3085e30da81565b34801561070657600080fd5b50610305610715366004611e6a565b6113b0565b34801561072657600080fd5b5060ff5461040c906001600160a01b031681565b34801561074657600080fd5b506102d7610755366004611f37565b611469565b34801561076657600080fd5b506102d760fc5481565b60006001600160e01b03198216637965db0b60e01b14806107a157506301ffc9a760e01b6001600160e01b03198316145b92915050565b6097546001600160a01b031633146107ef5760405162461bcd60e51b81526020600482018190526024820152600080516020612252833981519152604482015260640161023b565b60c95460ff166108385760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015260640161023b565b6001600160a01b03811661088e5760405162461bcd60e51b815260206004820152601d60248201527f4a61636b706f742e736f6c3a204d75737420626520616464726573732e000000604482015260640161023b565b60ff80546001600160a01b0319166001600160a01b0392909216919091179055565b6097546001600160a01b031633146108f85760405162461bcd60e51b81526020600482018190526024820152600080516020612252833981519152604482015260640161023b565b60c95460ff166109415760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015260640161023b565b61ffff81166109925760405162461bcd60e51b815260206004820152601960248201527f4a61636b706f742e736f6c3a204d757374206265203e20302e00000000000000604482015260640161023b565b60fb805461ffff191661ffff92909216919091179055565b6000828152606560205260409020600101546109c6813361149c565b6109d0838361151c565b505050565b6001600160a01b0381163314610a535760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c660000000000000000000000000000000000606482015260840161023b565b610a5d82826115be565b5050565b7ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc7610a8c813361149c565b438211610adb5760405162461bcd60e51b815260206004820152601960248201527f4a61636b706f742e736f6c3a20496e76616c6964207265662e00000000000000604482015260640161023b565b60fc805460009182610aec836121ca565b9091555060008181526101006020526040908190206001018590555190915081907f5634ff43044581c3f349069b8c52f6784a8a3c2e5e1bfc72191f1546cf376be990610b3c9086815260200190565b60405180910390a2505050565b60fb54600090606490610b609061ffff1684612168565b6107a19190612154565b6097546001600160a01b03163314610bb25760405162461bcd60e51b81526020600482018190526024820152600080516020612252833981519152604482015260640161023b565b610bba611641565b565b7ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc7610be7813361149c565b6000828152610100602052604090206001810154610c475760405162461bcd60e51b815260206004820152601660248201527f4a61636b706f742e736f6c3a204e656564207265662e00000000000000000000604482015260640161023b565b43816001015410610c9a5760405162461bcd60e51b815260206004820152601c60248201527f4a61636b706f742e736f6c3a204e656564206d6f72652074696d652e00000000604482015260640161023b565b600481015460ff1615610cef5760405162461bcd60e51b815260206004820152601960248201527f4a61636b706f742e736f6c3a20416c72656164792067656e2e00000000000000604482015260640161023b565b6000610d03826001015483600001546116d4565b6002830181905560048301805460ff1916600117905560405190915084907f1124577e10a9938859db293866a960e232222d0f2048f8dba1f84da8f3edbeea90610d509084815260200190565b60405180910390a250505050565b6101016020528260005260406000206020528160005260406000208181548110610d8757600080fd5b9060005260206000200160009250925050505481565b7fe4565867dd1e20f34ea9b921039638aea0cafa3220989f09d781dbf3085e30da610dc8813361149c565b60c95460ff1615610e0e5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015260640161023b565b600060fd5483610e1e9190612154565b90508015610edf5760005b81811015610edd5760fc5460009081526101006020526040812080549082610e50836121ca565b9091555060fc546000908152610101602090815260408083206001600160a01b038b1680855290835281842080546001810182559085529383902090930184905580519283529082018390529192507fe4224fac76e68ee2fe2a87cc73a563626ea919ce93b7f5963a8057baf441abb0910160405180910390a15080610ed5816121ca565b915050610e29565b505b610ee883610b49565b60fc546000908152610100602052604081206003018054909190610f0d90849061213c565b909155505050505050565b6097546001600160a01b03163314610f605760405162461bcd60e51b81526020600482018190526024820152600080516020612252833981519152604482015260640161023b565b610bba60006116e1565b6000818152610101602090815260408083206001600160a01b0386168452825291829020805483518184028101840190945280845260609392830182828015610fd257602002820191906000526020600020905b815481526020019060010190808311610fbe575b5050505050905092915050565b6097546001600160a01b031633146110275760405162461bcd60e51b81526020600482018190526024820152600080516020612252833981519152604482015260640161023b565b610bba611733565b600054610100900460ff1661104a5760005460ff161561104e565b303b155b6110c05760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a6564000000000000000000000000000000000000606482015260840161023b565b600054610100900460ff161580156110e2576000805461ffff19166101011790555b6110ea6117ae565b6110f26117e5565b6110fa611824565b61110560003361185b565b60ff80546001600160a01b038087166001600160a01b03199283161790925560fe80549288169290911691909117905560fd83905560fb805461ffff841661ffff19909116179055801561115f576000805461ff00191690555b5050505050565b600081815261010060205260409020600481015460ff166111c95760405162461bcd60e51b815260206004820152601b60248201527f4a61636b706f742e736f6c3a204e6f7420636c61696d61626c652e0000000000604482015260640161023b565b60006111d58333611865565b9050806112245760405162461bcd60e51b815260206004820152601660248201527f4a61636b706f742e736f6c3a204e6f207072697a652e00000000000000000000604482015260640161023b565b6000600383015560fe5460ff54611249916001600160a01b039182169116338461194a565b604080513381526020810183905284917fa756e4d8f7509f4ea7c440cd474be2db34f2c8e4a142b5bfbee53cb92124c6df9101610b3c565b60008281526065602052604090206001015461129d813361149c565b6109d083836115be565b6097546001600160a01b031633146112ef5760405162461bcd60e51b81526020600482018190526024820152600080516020612252833981519152604482015260640161023b565b60c95460ff166113385760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015260640161023b565b6001600160a01b03811661138e5760405162461bcd60e51b815260206004820152601d60248201527f4a61636b706f742e736f6c3a204d75737420626520616464726573732e000000604482015260640161023b565b60fe80546001600160a01b0319166001600160a01b0392909216919091179055565b6097546001600160a01b031633146113f85760405162461bcd60e51b81526020600482018190526024820152600080516020612252833981519152604482015260640161023b565b6001600160a01b03811661145d5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161023b565b611466816116e1565b50565b6000828152610100602052604081206004015460ff1661148b575060006107a1565b6114958383611865565b9392505050565b60008281526065602090815260408083206001600160a01b038516845290915290205460ff16610a5d576114da816001600160a01b031660146119bf565b6114e58360206119bf565b6040516020016114f6929190611ff9565b60408051601f198184030181529082905262461bcd60e51b825261023b916004016120be565b60008281526065602090815260408083206001600160a01b038516845290915290205460ff16610a5d5760008281526065602090815260408083206001600160a01b03851684529091529020805460ff1916600117905561157a3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60008281526065602090815260408083206001600160a01b038516845290915290205460ff1615610a5d5760008281526065602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60c95460ff1661168a5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015260640161023b565b60c9805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b60006114958284406121e5565b609780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60c95460ff16156117795760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015260640161023b565b60c9805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586116b73390565b600054610100900460ff166117d55760405162461bcd60e51b815260040161023b906120f1565b6117dd611b68565b610bba611b8f565b600054610100900460ff1661180c5760405162461bcd60e51b815260040161023b906120f1565b611814611b68565b61181c611b68565b610bba611b68565b600054610100900460ff1661184b5760405162461bcd60e51b815260040161023b906120f1565b611853611b68565b610bba611bbf565b610a5d828261151c565b6000828152610101602090815260408083206001600160a01b03851684528252808320805482518185028101850190935280835284938301828280156118ca57602002820191906000526020600020905b8154815260200190600101908083116118b6575b5050505050905060005b815181101561193f5760008581526101006020526040902060020154825183908390811061190457611904612225565b6020026020010151141561192d57505050600082815261010060205260409020600301546107a1565b80611937816121ca565b9150506118d4565b506000949350505050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166323b872dd60e01b1790526119b9908590611bf2565b50505050565b606060006119ce836002612168565b6119d990600261213c565b67ffffffffffffffff8111156119f1576119f161223b565b6040519080825280601f01601f191660200182016040528015611a1b576020820181803683370190505b509050600360fc1b81600081518110611a3657611a36612225565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110611a6557611a65612225565b60200101906001600160f81b031916908160001a9053506000611a89846002612168565b611a9490600161213c565b90505b6001811115611b19577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110611ad557611ad5612225565b1a60f81b828281518110611aeb57611aeb612225565b60200101906001600160f81b031916908160001a90535060049490941c93611b12816121b3565b9050611a97565b5083156114955760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161023b565b600054610100900460ff16610bba5760405162461bcd60e51b815260040161023b906120f1565b600054610100900460ff16611bb65760405162461bcd60e51b815260040161023b906120f1565b610bba336116e1565b600054610100900460ff16611be65760405162461bcd60e51b815260040161023b906120f1565b60c9805460ff19169055565b6000611c47826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611cc49092919063ffffffff16565b8051909150156109d05780806020019051810190611c659190611efc565b6109d05760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161023b565b6060611cd38484600085611cdb565b949350505050565b606082471015611d3c5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840161023b565b843b611d8a5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161023b565b600080866001600160a01b03168587604051611da69190611fdd565b60006040518083038185875af1925050503d8060008114611de3576040519150601f19603f3d011682016040523d82523d6000602084013e611de8565b606091505b5091509150611df8828286611e03565b979650505050505050565b60608315611e12575081611495565b825115611e225782518084602001fd5b8160405162461bcd60e51b815260040161023b91906120be565b80356001600160a01b0381168114611e5357600080fd5b919050565b803561ffff81168114611e5357600080fd5b600060208284031215611e7c57600080fd5b61149582611e3c565b60008060008060808587031215611e9b57600080fd5b611ea485611e3c565b9350611eb260208601611e3c565b925060408501359150611ec760608601611e58565b905092959194509250565b60008060408385031215611ee557600080fd5b611eee83611e3c565b946020939093013593505050565b600060208284031215611f0e57600080fd5b8151801515811461149557600080fd5b600060208284031215611f3057600080fd5b5035919050565b60008060408385031215611f4a57600080fd5b82359150611f5a60208401611e3c565b90509250929050565b600060208284031215611f7557600080fd5b81356001600160e01b03198116811461149557600080fd5b600060208284031215611f9f57600080fd5b61149582611e58565b600080600060608486031215611fbd57600080fd5b83359250611fcd60208501611e3c565b9150604084013590509250925092565b60008251611fef818460208701612187565b9190910192915050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351612031816017850160208801612187565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000601791840191820152835161206e816028840160208801612187565b01602801949350505050565b6020808252825182820181905260009190848201906040850190845b818110156120b257835183529284019291840191600101612096565b50909695505050505050565b60208152600082518060208401526120dd816040850160208701612187565b601f01601f19169190910160400192915050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b6000821982111561214f5761214f6121f9565b500190565b6000826121635761216361220f565b500490565b6000816000190483118215151615612182576121826121f9565b500290565b60005b838110156121a257818101518382015260200161218a565b838111156119b95750506000910152565b6000816121c2576121c26121f9565b506000190190565b60006000198214156121de576121de6121f9565b5060010190565b6000826121f4576121f461220f565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfe4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a264697066735822122092ec8f7612ebbb50896319a99120ffb7fe95fdc305f3edee891fddc8e992105764736f6c63430008070033";

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
