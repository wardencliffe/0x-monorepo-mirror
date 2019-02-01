import { ContractArtifact } from 'ethereum-types';

import * as DummyERC20Token from '../generated-artifacts/DummyERC20Token.json';
import * as DummyERC721Token from '../generated-artifacts/DummyERC721Token.json';
import * as DummyNoReturnERC20Token from '../generated-artifacts/DummyNoReturnERC20Token.json';
import * as ERC20Proxy from '../generated-artifacts/ERC20Proxy.json';
import * as ERC721Proxy from '../generated-artifacts/ERC721Proxy.json';
import * as Exchange from '../generated-artifacts/Exchange.json';
import * as ExchangeWrapper from '../generated-artifacts/ExchangeWrapper.json';
import * as IAssetProxyDispatcher from '../generated-artifacts/IAssetProxyDispatcher.json';
import * as IExchange from '../generated-artifacts/IExchange.json';
import * as IExchangeCore from '../generated-artifacts/IExchangeCore.json';
import * as IMatchOrders from '../generated-artifacts/IMatchOrders.json';
import * as ISignatureValidator from '../generated-artifacts/ISignatureValidator.json';
import * as ITransactions from '../generated-artifacts/ITransactions.json';
import * as IValidator from '../generated-artifacts/IValidator.json';
import * as IWallet from '../generated-artifacts/IWallet.json';
import * as IWrapperFunctions from '../generated-artifacts/IWrapperFunctions.json';
import * as MultiAssetProxy from '../generated-artifacts/MultiAssetProxy.json';
import * as ReentrantERC20Token from '../generated-artifacts/ReentrantERC20Token.json';
import * as TestAssetProxyDispatcher from '../generated-artifacts/TestAssetProxyDispatcher.json';
import * as TestExchangeInternals from '../generated-artifacts/TestExchangeInternals.json';
import * as TestLibs from '../generated-artifacts/TestLibs.json';
import * as TestSignatureValidator from '../generated-artifacts/TestSignatureValidator.json';
import * as TestStaticCallReceiver from '../generated-artifacts/TestStaticCallReceiver.json';
import * as Validator from '../generated-artifacts/Validator.json';
import * as Wallet from '../generated-artifacts/Wallet.json';
import * as Whitelist from '../generated-artifacts/Whitelist.json';
export const artifacts = {
    ERC20Proxy: ERC20Proxy as ContractArtifact,
    ERC721Proxy: ERC721Proxy as ContractArtifact,
    MultiAssetProxy: MultiAssetProxy as ContractArtifact,
    DummyERC20Token: DummyERC20Token as ContractArtifact,
    DummyNoReturnERC20Token: DummyNoReturnERC20Token as ContractArtifact,
    ReentrantERC20Token: ReentrantERC20Token as ContractArtifact,
    DummyERC721Token: DummyERC721Token as ContractArtifact,
    TestLibs: TestLibs as ContractArtifact,
    ExchangeWrapper: ExchangeWrapper as ContractArtifact,
    Validator: Validator as ContractArtifact,
    Wallet: Wallet as ContractArtifact,
    Whitelist: Whitelist as ContractArtifact,
    Exchange: Exchange as ContractArtifact,
    IAssetProxyDispatcher: IAssetProxyDispatcher as ContractArtifact,
    IExchange: IExchange as ContractArtifact,
    IExchangeCore: IExchangeCore as ContractArtifact,
    IMatchOrders: IMatchOrders as ContractArtifact,
    ISignatureValidator: ISignatureValidator as ContractArtifact,
    ITransactions: ITransactions as ContractArtifact,
    IValidator: IValidator as ContractArtifact,
    IWallet: IWallet as ContractArtifact,
    IWrapperFunctions: IWrapperFunctions as ContractArtifact,
    TestAssetProxyDispatcher: TestAssetProxyDispatcher as ContractArtifact,
    TestExchangeInternals: TestExchangeInternals as ContractArtifact,
    TestSignatureValidator: TestSignatureValidator as ContractArtifact,
    TestStaticCallReceiver: TestStaticCallReceiver as ContractArtifact,
};
