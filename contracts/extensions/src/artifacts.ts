import { ContractArtifact } from 'ethereum-types';

import * as BalanceThresholdFilter from '../generated-artifacts/BalanceThresholdFilter.json';
import * as DummyERC20Token from '../generated-artifacts/DummyERC20Token.json';
import * as DummyERC721Token from '../generated-artifacts/DummyERC721Token.json';
import * as DutchAuction from '../generated-artifacts/DutchAuction.json';
import * as ERC20Proxy from '../generated-artifacts/ERC20Proxy.json';
import * as ERC721Proxy from '../generated-artifacts/ERC721Proxy.json';
import * as Exchange from '../generated-artifacts/Exchange.json';
import * as ExchangeWrapper from '../generated-artifacts/ExchangeWrapper.json';
import * as OrderMatcher from '../generated-artifacts/OrderMatcher.json';
import * as OrderValidator from '../generated-artifacts/OrderValidator.json';
import * as WETH9 from '../generated-artifacts/WETH9.json';
export const artifacts = {
    ERC20Proxy: ERC20Proxy as ContractArtifact,
    ERC721Proxy: ERC721Proxy as ContractArtifact,
    WETH9: WETH9 as ContractArtifact,
    DummyERC20Token: DummyERC20Token as ContractArtifact,
    DummyERC721Token: DummyERC721Token as ContractArtifact,
    ExchangeWrapper: ExchangeWrapper as ContractArtifact,
    Exchange: Exchange as ContractArtifact,
    BalanceThresholdFilter: BalanceThresholdFilter as ContractArtifact,
    DutchAuction: DutchAuction as ContractArtifact,
    OrderMatcher: OrderMatcher as ContractArtifact,
    OrderValidator: OrderValidator as ContractArtifact,
};
