import { ContractArtifact } from 'ethereum-types';

import * as DummyERC20Token from '../generated-artifacts/DummyERC20Token.json';
import * as DummyERC721Receiver from '../generated-artifacts/DummyERC721Receiver.json';
import * as DummyERC721Token from '../generated-artifacts/DummyERC721Token.json';
import * as DummyMultipleReturnERC20Token from '../generated-artifacts/DummyMultipleReturnERC20Token.json';
import * as DummyNoReturnERC20Token from '../generated-artifacts/DummyNoReturnERC20Token.json';
import * as ERC20Proxy from '../generated-artifacts/ERC20Proxy.json';
import * as ERC721Proxy from '../generated-artifacts/ERC721Proxy.json';
import * as IAssetData from '../generated-artifacts/IAssetData.json';
import * as IAssetProxy from '../generated-artifacts/IAssetProxy.json';
import * as IAuthorizable from '../generated-artifacts/IAuthorizable.json';
import * as MixinAuthorizable from '../generated-artifacts/MixinAuthorizable.json';
import * as MultiAssetProxy from '../generated-artifacts/MultiAssetProxy.json';
export const artifacts = {
    DummyERC20Token: DummyERC20Token as ContractArtifact,
    DummyMultipleReturnERC20Token: DummyMultipleReturnERC20Token as ContractArtifact,
    DummyNoReturnERC20Token: DummyNoReturnERC20Token as ContractArtifact,
    DummyERC721Receiver: DummyERC721Receiver as ContractArtifact,
    DummyERC721Token: DummyERC721Token as ContractArtifact,
    ERC20Proxy: ERC20Proxy as ContractArtifact,
    ERC721Proxy: ERC721Proxy as ContractArtifact,
    MixinAuthorizable: MixinAuthorizable as ContractArtifact,
    MultiAssetProxy: MultiAssetProxy as ContractArtifact,
    IAssetData: IAssetData as ContractArtifact,
    IAssetProxy: IAssetProxy as ContractArtifact,
    IAuthorizable: IAuthorizable as ContractArtifact,
};
