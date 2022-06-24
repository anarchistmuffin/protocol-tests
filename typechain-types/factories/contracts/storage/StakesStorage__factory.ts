/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  StakesStorage,
  StakesStorageInterface,
} from "../../../contracts/storage/StakesStorage";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "canWithdraw",
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
    name: "getWithdrawableAmount",
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
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "expirationInDays",
        type: "uint256",
      },
    ],
    name: "newStake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalStakesValue",
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
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "withdrawRewards",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604080516020810190915260009081905260068190556007556107bf806100396000396000f3fe60806040526004361061004a5760003560e01c806342d866931461004f5780636c1a669d1461006457806390be10cc1461008d578063b0b600fb146100a2578063b51459fe146100b5575b600080fd5b61006261005d366004610688565b6100da565b005b34801561007057600080fd5b5061007a60075481565b6040519081526020015b60405180910390f35b34801561009957600080fd5b5061007a61014e565b6100626100b03660046106aa565b61015e565b3480156100c157600080fd5b506100ca610275565b6040519015158152602001610084565b60006100e533610287565b50506040516340c10f1960e01b8152336004820152600060248201819052906001600160a01b038316906340c10f1990604401600060405180830381600087803b15801561013257600080fd5b505af1158015610146573d6000803e3d6000fd5b505050505050565b600061015933610346565b905090565b3361019f5760405162461bcd60e51b815260206004820152600c60248201526b63616e6e6f74207374616b6560a01b60448201526064015b60405180910390fd5b68056bc75e2d6310000034116102055760405162461bcd60e51b815260206004820152602560248201527f796f75206e65656420746f207374616b65206174206c656173742031303020746044820152646f6b656e7360d81b6064820152608401610196565b601e8110156102655760405162461bcd60e51b815260206004820152602660248201527f796f75206e65656420746f207374616b6520666f72206174206c65617374203360448201526530206461797360d01b6064820152608401610196565b61027133833484610430565b5050565b60008061028133610346565b11905090565b600080805b6001600160a01b038416600090815260036020526040902054811015610319576001600160a01b03841660009081526002602090815260408083208484529091529020600381015442101561030657612710816001015460196102ef91906106ea565b6102f99190610709565b610303908461072b565b92505b508061031181610743565b91505061028c565b506001600160a01b03831660009081526005602052604081205461033e90839061075c565b949350505050565b60008080805b6001600160a01b0385166000908152600360205260409020548110156103f6576001600160a01b03851660009081526002602090815260408083208484529091529020600381015442106103ac5760018101546103a9908561072b565b93505b80600301544210156103e357612710816001015460196103cc91906106ea565b6103d69190610709565b6103e0908461072b565b92505b50806103ee81610743565b91505061034c565b506001600160a01b03841660009081526005602052604081205461041b90839061075c565b9050610427818461072b565b95945050505050565b604051632770a7eb60e21b8152336004820152602481018390526001600160a01b03841690639dc29fac90604401600060405180830381600087803b15801561047857600080fd5b505af115801561048c573d6000803e3d6000fd5b5050506001600160a01b03851660009081526004602052604090205460ff161515600114905061054757604080516020808201835260008083526001600160a01b038816815260039091529182209051905584906104e960065490565b815481106104f9576104f9610773565b600091825260208083209190910180546001600160a01b0319166001600160a01b039485161790559186168152600180835260408083208390556004909352919020805460ff191690911790555b60006040518060800160405280856001600160a01b03168152602001848152602001428152602001836201518061057e91906106ea565b610588904261072b565b90526001600160a01b0386166000908152600160205260408120805492935085929091906105b790849061072b565b90915550506001600160a01b038581166000908152600260208181526040808420600380845282862054865290835293819020865181546001600160a01b031916961695909517855590850151600185015584015190830155606083015191015561062061063e565b8260076000828254610632919061072b565b90915550505050505050565b600061064960065490565b90506040518060200160405280826001610663919061072b565b90525160065550565b80356001600160a01b038116811461068357600080fd5b919050565b60006020828403121561069a57600080fd5b6106a38261066c565b9392505050565b600080604083850312156106bd57600080fd5b6106c68361066c565b946020939093013593505050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615610704576107046106d4565b500290565b60008261072657634e487b7160e01b600052601260045260246000fd5b500490565b6000821982111561073e5761073e6106d4565b500190565b600060018201610755576107556106d4565b5060010190565b60008282101561076e5761076e6106d4565b500390565b634e487b7160e01b600052603260045260246000fdfea2646970667358221220e5b4f163111a1f489b75fcfbfa33fa9109e852e0245f1fccb40ea2be1476ec2e64736f6c634300080e0033";

type StakesStorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StakesStorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StakesStorage__factory extends ContractFactory {
  constructor(...args: StakesStorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<StakesStorage> {
    return super.deploy(overrides || {}) as Promise<StakesStorage>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): StakesStorage {
    return super.attach(address) as StakesStorage;
  }
  override connect(signer: Signer): StakesStorage__factory {
    return super.connect(signer) as StakesStorage__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakesStorageInterface {
    return new utils.Interface(_abi) as StakesStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StakesStorage {
    return new Contract(address, _abi, signerOrProvider) as StakesStorage;
  }
}
