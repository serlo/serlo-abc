import { Audio } from 'expo-av';

import { Maybe } from '../../maybe';
import { AbstractAssetResolver, AssetTypes } from '../asset-resolver';
import { Article } from './article.interface';
import { SerializedWord } from './serialized-word.interface';

export abstract class AbstractWord {
  public constructor(
    protected word: SerializedWord,
    protected resolver: AbstractAssetResolver
  ) {}

  public abstract toString(): string;
  public abstract getArticle(): Maybe<Article>;
  public abstract getSingular(): Maybe<string>;
  public abstract getPlural(): Maybe<string>;
  public abstract getImage(): Maybe<AssetTypes.ImageAsset>;
  public abstract getSound(): Maybe<Audio.Sound>;
  public abstract getLongSound(): Maybe<Audio.Sound>;
}
