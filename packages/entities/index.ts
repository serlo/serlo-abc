import { map } from 'ramda';

import { Maybe } from '../maybe';
import { AbstractAssetResolver, AssetTypes } from './asset-resolver';
import {
  AbstractExerciseGroup,
  ExerciseGroups,
  ExerciseGroupTypes
} from './exercise-groups';
import {
  AbstractExercise,
  Exercises,
  ExerciseTypes,
  SerializedProps
} from './exercises';
import { AbstractWord, Article, SerializedWord, Word } from './word';

export class EntityFactory {
  private words: {
    [id: string]: SerializedWord;
  } = require('../assets/words.json');

  constructor(private resolver: AbstractAssetResolver) {}

  public createWord(id: string): Maybe<Word> {
    return new Word(this.words[id], this.resolver);
  }

  /* tslint:disable-next-line:no-any */
  public createExercise<E extends AbstractExercise<any, any, any>>(
    type: ExerciseTypes,
    props: SerializedProps
  ): E {
    const { sound, sounds, video, videos, word, words } = props;

    const resolvedProps: E['props'] = {
      ...props,
      sound: sound && this.resolver.getSound(sound),
      sounds: sounds && map(this.resolver.getSound.bind(this), sounds),
      video: video && this.resolver.getVideo(video),
      videos: videos && map(this.resolver.getVideo.bind(this), videos),
      word: word && this.createWord(word),
      words: words && map(this.createWord.bind(this), words)
    };

    return new Exercises[type](resolvedProps) as E;
  }

  public createExerciseGroup<E extends AbstractExerciseGroup>(
    type: ExerciseGroupTypes,
    newVocabulary: string[],
    vocabulary: string[],
    /* tslint:disable-next-line:no-any */
    props: { [key: string]: any }
  ): E {
    return new ExerciseGroups[type](
      this.createExercise.bind(this),
      newVocabulary,
      vocabulary,
      props
    ) as E;
  }
}

export {
  AbstractAssetResolver,
  AssetTypes,
  AbstractExercise,
  AbstractExerciseGroup,
  AbstractWord,
  Article,
  SerializedWord
};
