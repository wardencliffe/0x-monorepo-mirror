import { ContractArtifact } from 'ethereum-types';

import * as ERC20Proxy from '../../generated-artifacts/ERC20Proxy.json';
import * as ERC721Proxy from '../../generated-artifacts/ERC721Proxy.json';
import * as IAssetData from '../../generated-artifacts/IAssetData.json';
import * as IAssetProxy from '../../generated-artifacts/IAssetProxy.json';
import * as IAuthorizable from '../../generated-artifacts/IAuthorizable.json';
import * as MixinAuthorizable from '../../generated-artifacts/MixinAuthorizable.json';
import * as MultiAssetProxy from '../../generated-artifacts/MultiAssetProxy.json';
import * as RoboDexProxy from '../../generated-artifacts/RoboDexProxy.json';

export const artifacts = {
    ERC20Proxy: ERC20Proxy as ContractArtifact,
    ERC721Proxy: ERC721Proxy as ContractArtifact,
    IAssetData: IAssetData as ContractArtifact,
    IAssetProxy: IAssetProxy as ContractArtifact,
    IAuthorizable: IAuthorizable as ContractArtifact,
    MixinAuthorizable: MixinAuthorizable as ContractArtifact,
    MultiAssetProxy: MultiAssetProxy as ContractArtifact,
    RoboDexProxy: RoboDexProxy as ContractArtifact,
};
