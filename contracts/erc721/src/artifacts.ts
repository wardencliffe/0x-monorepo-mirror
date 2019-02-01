import { ContractArtifact } from 'ethereum-types';

import * as DummyERC721Receiver from '../generated-artifacts/DummyERC721Receiver.json';
import * as DummyERC721Token from '../generated-artifacts/DummyERC721Token.json';
import * as ERC721Token from '../generated-artifacts/ERC721Token.json';
import * as IERC721Receiver from '../generated-artifacts/IERC721Receiver.json';
import * as IERC721Token from '../generated-artifacts/IERC721Token.json';
import * as InvalidERC721Receiver from '../generated-artifacts/InvalidERC721Receiver.json';
import * as MintableERC721Token from '../generated-artifacts/MintableERC721Token.json';
export const artifacts = {
    DummyERC721Receiver: DummyERC721Receiver as ContractArtifact,
    InvalidERC721Receiver: InvalidERC721Receiver as ContractArtifact,
    DummyERC721Token: DummyERC721Token as ContractArtifact,
    ERC721Token: ERC721Token as ContractArtifact,
    IERC721Receiver: IERC721Receiver as ContractArtifact,
    IERC721Token: IERC721Token as ContractArtifact,
    MintableERC721Token: MintableERC721Token as ContractArtifact,
};
