/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IJackpot, IJackpotInterface } from "../IJackpot";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "betAmount",
        type: "uint256",
      },
    ],
    name: "addTicket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IJackpot__factory {
  static readonly abi = _abi;
  static createInterface(): IJackpotInterface {
    return new utils.Interface(_abi) as IJackpotInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IJackpot {
    return new Contract(address, _abi, signerOrProvider) as IJackpot;
  }
}
