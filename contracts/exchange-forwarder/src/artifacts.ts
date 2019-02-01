import { ContractArtifact } from 'ethereum-types';

import * as DummyERC20Token from '../generated-artifacts/DummyERC20Token.json';
import * as DummyERC721Token from '../generated-artifacts/DummyERC721Token.json';
import * as Exchange from '../generated-artifacts/Exchange.json';
import * as Forwarder from '../generated-artifacts/Forwarder.json';
import * as WETH9 from '../generated-artifacts/WETH9.json';
export const artifacts = {
    WETH9: WETH9 as ContractArtifact,
    DummyERC20Token: DummyERC20Token as ContractArtifact,
    DummyERC721Token: DummyERC721Token as ContractArtifact,
    Exchange: Exchange as ContractArtifact,
    Forwarder: Forwarder as ContractArtifact,
};
