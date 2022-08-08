/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { HotWallet, HotWalletInterface } from "../HotWallet";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_coldWallet",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "WithdrawNativeTokenFail",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
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
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "WithdrawERC20",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "WithdrawNativeToken",
    type: "event",
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
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "approveToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "coldWallet",
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
    inputs: [
      {
        internalType: "address",
        name: "_coldWallet",
        type: "address",
      },
    ],
    name: "updateColdWallet",
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
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdrawERC20",
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
    name: "withdrawNativeToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200146338038062001463833981016040819052620000349162000156565b6200003f336200006e565b600280546001600160a01b0319166001600160a01b03831617905562000067600033620000be565b5062000188565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b620000ca8282620000ce565b5050565b60008281526001602090815260408083206001600160a01b038516845290915290205460ff16620000ca5760008281526001602081815260408084206001600160a01b0386168086529252808420805460ff19169093179092559051339285917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9190a45050565b6000602082840312156200016957600080fd5b81516001600160a01b03811681146200018157600080fd5b9392505050565b6112cb80620001986000396000f3fe6080604052600436106100f75760003560e01c8063715018a61161008a578063a1db978211610059578063a1db978214610336578063a217fddf14610356578063d547741f1461036b578063f2fde38b1461038b57600080fd5b8063715018a61461029d5780638da5cb5b146102b257806391d14854146102d0578063978338761461031657600080fd5b80632f2ff15d116100c65780632f2ff15d146101f157806336568abe14610211578063634252dc146102315780636be13c921461026557600080fd5b806301ffc9a71461013b57806303105b041461017057806317e0f25214610192578063248a9ca3146101b257600080fd5b3661013657604080513381523460208201527fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c910160405180910390a1005b600080fd5b34801561014757600080fd5b5061015b6101563660046110c2565b6103ab565b60405190151581526020015b60405180910390f35b34801561017c57600080fd5b5061019061018b366004611007565b6103e2565b005b34801561019e57600080fd5b506101906101ad366004611086565b61045b565b3480156101be57600080fd5b506101e36101cd366004611086565b6000908152600160208190526040909120015490565b604051908152602001610167565b3480156101fd57600080fd5b5061019061020c36600461109f565b610533565b34801561021d57600080fd5b5061019061022c36600461109f565b61055f565b34801561023d57600080fd5b506101e37ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc781565b34801561027157600080fd5b50600254610285906001600160a01b031681565b6040516001600160a01b039091168152602001610167565b3480156102a957600080fd5b506101906105e7565b3480156102be57600080fd5b506000546001600160a01b0316610285565b3480156102dc57600080fd5b5061015b6102eb36600461109f565b60009182526001602090815260408084206001600160a01b0393909316845291905290205460ff1690565b34801561032257600080fd5b50610190610331366004610fec565b61064d565b34801561034257600080fd5b5061019061035136600461103a565b6106d6565b34801561036257600080fd5b506101e3600081565b34801561037757600080fd5b5061019061038636600461109f565b61075a565b34801561039757600080fd5b506101906103a6366004610fec565b610781565b60006001600160e01b03198216637965db0b60e01b14806103dc57506301ffc9a760e01b6001600160e01b03198316145b92915050565b6000546001600160a01b031633146104415760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6104576001600160a01b0383168260001961084c565b5050565b7ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc761048681336109bf565b6002546040516000916001600160a01b03169084908381818185875af1925050503d80600081146104d3576040519150601f19603f3d011682016040523d82523d6000602084013e6104d8565b606091505b50509050806104fa57604051630b636eff60e01b815260040160405180910390fd5b6040518381527f5d09dab036c85945f6730f04f3fd205881acb9ff3fce12def1f53d4acf403935906020015b60405180910390a1505050565b6000828152600160208190526040909120015461055081336109bf565b61055a8383610a3f565b505050565b6001600160a01b03811633146105dd5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c6600000000000000000000000000000000006064820152608401610438565b6104578282610ac6565b6000546001600160a01b031633146106415760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610438565b61064b6000610b49565b565b6000546001600160a01b031633146106a75760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610438565b6002805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b7ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc761070181336109bf565b60025461071b906001600160a01b03858116911684610ba6565b604080516001600160a01b0385168152602081018490527fbe7426aee8a34d0263892b55ce65ce81d8f4c806eb4719e59015ea49feb92d229101610526565b6000828152600160208190526040909120015461077781336109bf565b61055a8383610ac6565b6000546001600160a01b031633146107db5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610438565b6001600160a01b0381166108405760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610438565b61084981610b49565b50565b8015806108d55750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b15801561089b57600080fd5b505afa1580156108af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108d391906110ec565b155b6109475760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610438565b6040516001600160a01b03831660248201526044810182905261055a90849063095ea7b360e01b906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166001600160e01b031990931692909217909152610bd6565b60008281526001602090815260408083206001600160a01b038516845290915290205460ff16610457576109fd816001600160a01b03166014610ca8565b610a08836020610ca8565b604051602001610a19929190611121565b60408051601f198184030181529082905262461bcd60e51b8252610438916004016111a2565b60008281526001602090815260408083206001600160a01b038516845290915290205460ff166104575760008281526001602081815260408084206001600160a01b0386168086529252808420805460ff19169093179092559051339285917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9190a45050565b60008281526001602090815260408083206001600160a01b038516845290915290205460ff16156104575760008281526001602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040516001600160a01b03831660248201526044810182905261055a90849063a9059cbb60e01b90606401610973565b6000610c2b826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610e589092919063ffffffff16565b80519091501561055a5780806020019051810190610c499190611064565b61055a5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610438565b60606000610cb78360026111ed565b610cc29060026111d5565b67ffffffffffffffff811115610cda57610cda61127f565b6040519080825280601f01601f191660200182016040528015610d04576020820181803683370190505b509050600360fc1b81600081518110610d1f57610d1f611269565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610d4e57610d4e611269565b60200101906001600160f81b031916908160001a9053506000610d728460026111ed565b610d7d9060016111d5565b90505b6001811115610e02577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110610dbe57610dbe611269565b1a60f81b828281518110610dd457610dd4611269565b60200101906001600160f81b031916908160001a90535060049490941c93610dfb8161123c565b9050610d80565b508315610e515760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610438565b9392505050565b6060610e678484600085610e6f565b949350505050565b606082471015610ed05760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610438565b843b610f1e5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610438565b600080866001600160a01b03168587604051610f3a9190611105565b60006040518083038185875af1925050503d8060008114610f77576040519150601f19603f3d011682016040523d82523d6000602084013e610f7c565b606091505b5091509150610f8c828286610f97565b979650505050505050565b60608315610fa6575081610e51565b825115610fb65782518084602001fd5b8160405162461bcd60e51b815260040161043891906111a2565b80356001600160a01b0381168114610fe757600080fd5b919050565b600060208284031215610ffe57600080fd5b610e5182610fd0565b6000806040838503121561101a57600080fd5b61102383610fd0565b915061103160208401610fd0565b90509250929050565b6000806040838503121561104d57600080fd5b61105683610fd0565b946020939093013593505050565b60006020828403121561107657600080fd5b81518015158114610e5157600080fd5b60006020828403121561109857600080fd5b5035919050565b600080604083850312156110b257600080fd5b8235915061103160208401610fd0565b6000602082840312156110d457600080fd5b81356001600160e01b031981168114610e5157600080fd5b6000602082840312156110fe57600080fd5b5051919050565b6000825161111781846020870161120c565b9190910192915050565b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081526000835161115981601785016020880161120c565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000601791840191820152835161119681602884016020880161120c565b01602801949350505050565b60208152600082518060208401526111c181604085016020870161120c565b601f01601f19169190910160400192915050565b600082198211156111e8576111e8611253565b500190565b600081600019048311821515161561120757611207611253565b500290565b60005b8381101561122757818101518382015260200161120f565b83811115611236576000848401525b50505050565b60008161124b5761124b611253565b506000190190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220b78c5611c85b8c89d3bdf712342de70c6522f5021d251da65c4f8c7a1533481d64736f6c63430008070033";

export class HotWallet__factory extends ContractFactory {
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
    _coldWallet: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<HotWallet> {
    return super.deploy(_coldWallet, overrides || {}) as Promise<HotWallet>;
  }
  getDeployTransaction(
    _coldWallet: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_coldWallet, overrides || {});
  }
  attach(address: string): HotWallet {
    return super.attach(address) as HotWallet;
  }
  connect(signer: Signer): HotWallet__factory {
    return super.connect(signer) as HotWallet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HotWalletInterface {
    return new utils.Interface(_abi) as HotWalletInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HotWallet {
    return new Contract(address, _abi, signerOrProvider) as HotWallet;
  }
}
