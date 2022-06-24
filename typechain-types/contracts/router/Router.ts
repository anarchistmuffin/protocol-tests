/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface RouterInterface extends utils.Interface {
  functions: {
    "DOMAIN_SEPARATOR()": FunctionFragment;
    "ROUTE_TYPE_ADDRESS()": FunctionFragment;
    "ROUTE_TYPE_ADDRESS_WALLET()": FunctionFragment;
    "ROUTE_TYPE_ADMIN()": FunctionFragment;
    "ROUTE_TYPE_BRIDGE()": FunctionFragment;
    "ROUTE_TYPE_EXT_CONTRACT()": FunctionFragment;
    "ROUTE_TYPE_NEED_AUTH()": FunctionFragment;
    "ROUTE_TYPE_PAYMENT()": FunctionFragment;
    "ROUTE_TYPE_POOL()": FunctionFragment;
    "ROUTE_TYPE_PROXY()": FunctionFragment;
    "ROUTE_TYPE_PUBLIC()": FunctionFragment;
    "ROUTE_TYPE_SUPERADMIN()": FunctionFragment;
    "ROUTE_TYPE_SYSTEM()": FunctionFragment;
    "ROUTE_TYPE_TOKEN()": FunctionFragment;
    "ROUTE_TYPE_TOKEN_ERC1155()": FunctionFragment;
    "ROUTE_TYPE_TOKEN_ERC20()": FunctionFragment;
    "ROUTE_TYPE_TOKEN_ERC721()": FunctionFragment;
    "delegateRouteControllerBySig(address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "delegateRouteControllerByType(address,uint8)": FunctionFragment;
    "delegateRouteControllerByTypeBySig(address,uint8,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "getRouteFromRegistry()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DOMAIN_SEPARATOR"
      | "ROUTE_TYPE_ADDRESS"
      | "ROUTE_TYPE_ADDRESS_WALLET"
      | "ROUTE_TYPE_ADMIN"
      | "ROUTE_TYPE_BRIDGE"
      | "ROUTE_TYPE_EXT_CONTRACT"
      | "ROUTE_TYPE_NEED_AUTH"
      | "ROUTE_TYPE_PAYMENT"
      | "ROUTE_TYPE_POOL"
      | "ROUTE_TYPE_PROXY"
      | "ROUTE_TYPE_PUBLIC"
      | "ROUTE_TYPE_SUPERADMIN"
      | "ROUTE_TYPE_SYSTEM"
      | "ROUTE_TYPE_TOKEN"
      | "ROUTE_TYPE_TOKEN_ERC1155"
      | "ROUTE_TYPE_TOKEN_ERC20"
      | "ROUTE_TYPE_TOKEN_ERC721"
      | "delegateRouteControllerBySig"
      | "delegateRouteControllerByType"
      | "delegateRouteControllerByTypeBySig"
      | "getRouteFromRegistry"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "DOMAIN_SEPARATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ROUTE_TYPE_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ROUTE_TYPE_ADDRESS_WALLET",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ROUTE_TYPE_ADMIN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ROUTE_TYPE_BRIDGE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ROUTE_TYPE_EXT_CONTRACT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ROUTE_TYPE_NEED_AUTH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ROUTE_TYPE_PAYMENT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ROUTE_TYPE_POOL",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ROUTE_TYPE_PROXY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ROUTE_TYPE_PUBLIC",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ROUTE_TYPE_SUPERADMIN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ROUTE_TYPE_SYSTEM",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ROUTE_TYPE_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ROUTE_TYPE_TOKEN_ERC1155",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ROUTE_TYPE_TOKEN_ERC20",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ROUTE_TYPE_TOKEN_ERC721",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "delegateRouteControllerBySig",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "delegateRouteControllerByType",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "delegateRouteControllerByTypeBySig",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getRouteFromRegistry",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "DOMAIN_SEPARATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ROUTE_TYPE_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ROUTE_TYPE_ADDRESS_WALLET",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ROUTE_TYPE_ADMIN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ROUTE_TYPE_BRIDGE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ROUTE_TYPE_EXT_CONTRACT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ROUTE_TYPE_NEED_AUTH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ROUTE_TYPE_PAYMENT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ROUTE_TYPE_POOL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ROUTE_TYPE_PROXY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ROUTE_TYPE_PUBLIC",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ROUTE_TYPE_SUPERADMIN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ROUTE_TYPE_SYSTEM",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ROUTE_TYPE_TOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ROUTE_TYPE_TOKEN_ERC1155",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ROUTE_TYPE_TOKEN_ERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ROUTE_TYPE_TOKEN_ERC721",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delegateRouteControllerBySig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delegateRouteControllerByType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delegateRouteControllerByTypeBySig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRouteFromRegistry",
    data: BytesLike
  ): Result;

  events: {
    "RouteControllerChanged(address,address,uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RouteControllerChanged"): EventFragment;
}

export interface RouteControllerChangedEventObject {
  _controllerRouter: string;
  _routeController: string;
  arg2: number;
}
export type RouteControllerChangedEvent = TypedEvent<
  [string, string, number],
  RouteControllerChangedEventObject
>;

export type RouteControllerChangedEventFilter =
  TypedEventFilter<RouteControllerChangedEvent>;

export interface Router extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RouterInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;

    ROUTE_TYPE_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    ROUTE_TYPE_ADDRESS_WALLET(overrides?: CallOverrides): Promise<[string]>;

    ROUTE_TYPE_ADMIN(overrides?: CallOverrides): Promise<[string]>;

    ROUTE_TYPE_BRIDGE(overrides?: CallOverrides): Promise<[string]>;

    ROUTE_TYPE_EXT_CONTRACT(overrides?: CallOverrides): Promise<[string]>;

    ROUTE_TYPE_NEED_AUTH(overrides?: CallOverrides): Promise<[string]>;

    ROUTE_TYPE_PAYMENT(overrides?: CallOverrides): Promise<[string]>;

    ROUTE_TYPE_POOL(overrides?: CallOverrides): Promise<[string]>;

    ROUTE_TYPE_PROXY(overrides?: CallOverrides): Promise<[string]>;

    ROUTE_TYPE_PUBLIC(overrides?: CallOverrides): Promise<[string]>;

    ROUTE_TYPE_SUPERADMIN(overrides?: CallOverrides): Promise<[string]>;

    ROUTE_TYPE_SYSTEM(overrides?: CallOverrides): Promise<[string]>;

    ROUTE_TYPE_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    ROUTE_TYPE_TOKEN_ERC1155(overrides?: CallOverrides): Promise<[string]>;

    ROUTE_TYPE_TOKEN_ERC20(overrides?: CallOverrides): Promise<[string]>;

    ROUTE_TYPE_TOKEN_ERC721(overrides?: CallOverrides): Promise<[string]>;

    delegateRouteControllerBySig(
      routeController: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    delegateRouteControllerByType(
      routeController: PromiseOrValue<string>,
      routeType: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    delegateRouteControllerByTypeBySig(
      routeController: PromiseOrValue<string>,
      routeType: PromiseOrValue<BigNumberish>,
      nonce: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getRouteFromRegistry(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

  ROUTE_TYPE_ADDRESS(overrides?: CallOverrides): Promise<string>;

  ROUTE_TYPE_ADDRESS_WALLET(overrides?: CallOverrides): Promise<string>;

  ROUTE_TYPE_ADMIN(overrides?: CallOverrides): Promise<string>;

  ROUTE_TYPE_BRIDGE(overrides?: CallOverrides): Promise<string>;

  ROUTE_TYPE_EXT_CONTRACT(overrides?: CallOverrides): Promise<string>;

  ROUTE_TYPE_NEED_AUTH(overrides?: CallOverrides): Promise<string>;

  ROUTE_TYPE_PAYMENT(overrides?: CallOverrides): Promise<string>;

  ROUTE_TYPE_POOL(overrides?: CallOverrides): Promise<string>;

  ROUTE_TYPE_PROXY(overrides?: CallOverrides): Promise<string>;

  ROUTE_TYPE_PUBLIC(overrides?: CallOverrides): Promise<string>;

  ROUTE_TYPE_SUPERADMIN(overrides?: CallOverrides): Promise<string>;

  ROUTE_TYPE_SYSTEM(overrides?: CallOverrides): Promise<string>;

  ROUTE_TYPE_TOKEN(overrides?: CallOverrides): Promise<string>;

  ROUTE_TYPE_TOKEN_ERC1155(overrides?: CallOverrides): Promise<string>;

  ROUTE_TYPE_TOKEN_ERC20(overrides?: CallOverrides): Promise<string>;

  ROUTE_TYPE_TOKEN_ERC721(overrides?: CallOverrides): Promise<string>;

  delegateRouteControllerBySig(
    routeController: PromiseOrValue<string>,
    nonce: PromiseOrValue<BigNumberish>,
    expiry: PromiseOrValue<BigNumberish>,
    v: PromiseOrValue<BigNumberish>,
    r: PromiseOrValue<BytesLike>,
    s: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  delegateRouteControllerByType(
    routeController: PromiseOrValue<string>,
    routeType: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  delegateRouteControllerByTypeBySig(
    routeController: PromiseOrValue<string>,
    routeType: PromiseOrValue<BigNumberish>,
    nonce: PromiseOrValue<BigNumberish>,
    expiry: PromiseOrValue<BigNumberish>,
    v: PromiseOrValue<BigNumberish>,
    r: PromiseOrValue<BytesLike>,
    s: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getRouteFromRegistry(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

    ROUTE_TYPE_ADDRESS(overrides?: CallOverrides): Promise<string>;

    ROUTE_TYPE_ADDRESS_WALLET(overrides?: CallOverrides): Promise<string>;

    ROUTE_TYPE_ADMIN(overrides?: CallOverrides): Promise<string>;

    ROUTE_TYPE_BRIDGE(overrides?: CallOverrides): Promise<string>;

    ROUTE_TYPE_EXT_CONTRACT(overrides?: CallOverrides): Promise<string>;

    ROUTE_TYPE_NEED_AUTH(overrides?: CallOverrides): Promise<string>;

    ROUTE_TYPE_PAYMENT(overrides?: CallOverrides): Promise<string>;

    ROUTE_TYPE_POOL(overrides?: CallOverrides): Promise<string>;

    ROUTE_TYPE_PROXY(overrides?: CallOverrides): Promise<string>;

    ROUTE_TYPE_PUBLIC(overrides?: CallOverrides): Promise<string>;

    ROUTE_TYPE_SUPERADMIN(overrides?: CallOverrides): Promise<string>;

    ROUTE_TYPE_SYSTEM(overrides?: CallOverrides): Promise<string>;

    ROUTE_TYPE_TOKEN(overrides?: CallOverrides): Promise<string>;

    ROUTE_TYPE_TOKEN_ERC1155(overrides?: CallOverrides): Promise<string>;

    ROUTE_TYPE_TOKEN_ERC20(overrides?: CallOverrides): Promise<string>;

    ROUTE_TYPE_TOKEN_ERC721(overrides?: CallOverrides): Promise<string>;

    delegateRouteControllerBySig(
      routeController: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    delegateRouteControllerByType(
      routeController: PromiseOrValue<string>,
      routeType: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    delegateRouteControllerByTypeBySig(
      routeController: PromiseOrValue<string>,
      routeType: PromiseOrValue<BigNumberish>,
      nonce: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    getRouteFromRegistry(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "RouteControllerChanged(address,address,uint8)"(
      _controllerRouter?: PromiseOrValue<string> | null,
      _routeController?: PromiseOrValue<string> | null,
      arg2?: null
    ): RouteControllerChangedEventFilter;
    RouteControllerChanged(
      _controllerRouter?: PromiseOrValue<string> | null,
      _routeController?: PromiseOrValue<string> | null,
      arg2?: null
    ): RouteControllerChangedEventFilter;
  };

  estimateGas: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;

    ROUTE_TYPE_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    ROUTE_TYPE_ADDRESS_WALLET(overrides?: CallOverrides): Promise<BigNumber>;

    ROUTE_TYPE_ADMIN(overrides?: CallOverrides): Promise<BigNumber>;

    ROUTE_TYPE_BRIDGE(overrides?: CallOverrides): Promise<BigNumber>;

    ROUTE_TYPE_EXT_CONTRACT(overrides?: CallOverrides): Promise<BigNumber>;

    ROUTE_TYPE_NEED_AUTH(overrides?: CallOverrides): Promise<BigNumber>;

    ROUTE_TYPE_PAYMENT(overrides?: CallOverrides): Promise<BigNumber>;

    ROUTE_TYPE_POOL(overrides?: CallOverrides): Promise<BigNumber>;

    ROUTE_TYPE_PROXY(overrides?: CallOverrides): Promise<BigNumber>;

    ROUTE_TYPE_PUBLIC(overrides?: CallOverrides): Promise<BigNumber>;

    ROUTE_TYPE_SUPERADMIN(overrides?: CallOverrides): Promise<BigNumber>;

    ROUTE_TYPE_SYSTEM(overrides?: CallOverrides): Promise<BigNumber>;

    ROUTE_TYPE_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    ROUTE_TYPE_TOKEN_ERC1155(overrides?: CallOverrides): Promise<BigNumber>;

    ROUTE_TYPE_TOKEN_ERC20(overrides?: CallOverrides): Promise<BigNumber>;

    ROUTE_TYPE_TOKEN_ERC721(overrides?: CallOverrides): Promise<BigNumber>;

    delegateRouteControllerBySig(
      routeController: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    delegateRouteControllerByType(
      routeController: PromiseOrValue<string>,
      routeType: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    delegateRouteControllerByTypeBySig(
      routeController: PromiseOrValue<string>,
      routeType: PromiseOrValue<BigNumberish>,
      nonce: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getRouteFromRegistry(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ROUTE_TYPE_ADDRESS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ROUTE_TYPE_ADDRESS_WALLET(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ROUTE_TYPE_ADMIN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ROUTE_TYPE_BRIDGE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ROUTE_TYPE_EXT_CONTRACT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ROUTE_TYPE_NEED_AUTH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ROUTE_TYPE_PAYMENT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ROUTE_TYPE_POOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ROUTE_TYPE_PROXY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ROUTE_TYPE_PUBLIC(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ROUTE_TYPE_SUPERADMIN(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ROUTE_TYPE_SYSTEM(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ROUTE_TYPE_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ROUTE_TYPE_TOKEN_ERC1155(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ROUTE_TYPE_TOKEN_ERC20(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ROUTE_TYPE_TOKEN_ERC721(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    delegateRouteControllerBySig(
      routeController: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    delegateRouteControllerByType(
      routeController: PromiseOrValue<string>,
      routeType: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    delegateRouteControllerByTypeBySig(
      routeController: PromiseOrValue<string>,
      routeType: PromiseOrValue<BigNumberish>,
      nonce: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getRouteFromRegistry(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
