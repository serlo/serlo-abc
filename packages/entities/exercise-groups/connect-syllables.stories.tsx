import { AppLoading } from 'expo';
// @ts-ignore TODO: add declaration file
import { storiesOf } from '@storybook/react-native';
import * as React from 'react';
import { View } from 'react-native';

import { ExerciseGroupTypes } from '.';
import { EntityFactory } from '..';
import { AssetResolver } from '../../../src/asset-resolver';
// @ts-ignore
import { ExerciseComponents } from '../../../src/components/exercises';
// @ts-ignore
import { LoadSounds } from '../../../src/components/helpers/Audio';
import { ExerciseGroup } from '../../../src/components/helpers/exercise-group';
// @ts-ignore
import { getSound, play } from '../../../src/helpers/audio';
import { PRIMARY } from '../../../src/styles/colors';

const resolver = new AssetResolver();
const entityFactory = new EntityFactory(resolver);

storiesOf('exercise-groups/ConnectSyllables', module)
  .add('Diphtongs', () =>
    createSyllableExercise(
      ['ausweis', 'hochhaus', 'papier', 'zwiebel'],
      ['a', 'e', 'i', 'ei']
    )
  )
  .add('Capitalized', () =>
    createSyllableExercise(
      ['affe', 'apfel', 'esel', 'oma', 'ausweis'],
      ['a', 'e', 'i', 'o']
    )
  )
  .add('Umlauts', () =>
    createSyllableExercise(
      ['kaefig', 'kaese', 'baecker', 'loeffel', 'muenze'],
      ['a', 'e', 'i', 'ä', 'ö']
    )
  )
  .add('Qu', () =>
    createSyllableExercise(['aquarium', 'qualle'], ['a', 'e', 'i', 'u', 'qu'])
  );

const createSyllableExercise: (
  newVocabulary: string[],
  letters: string[]
) => JSX.Element = (newVocabulary, letters) => {
  const words = [...newVocabulary];
  const letter = letters[0];
  const group = entityFactory.createExerciseGroup(
    ExerciseGroupTypes.ConnectSyllables,
    newVocabulary,
    words,
    letter,
    letters,
    []
  );
  return (
    <LoadSounds
      sounds={[getSound('correct'), getSound('wrong')]}
      // tslint:disable-next-line:no-any
      render={([correctSound, wrongSound]: any[], done: boolean) => {
        if (done) {
          return (
            <View
              style={{
                flex: 1,
                backgroundColor: PRIMARY
              }}
            >
              <ExerciseGroup
                createExerciseComponent={type => ExerciseComponents[type]}
                group={group}
                goToNav={() => {
                  /* empty */
                }}
                onCorrect={() => play(correctSound)}
                onWrong={() => play(wrongSound)}
                onDone={() => {
                  /* empty */
                }}
              />
            </View>
          );
        }

        // @ts-ignore
        return <AppLoading />;
      }}
    />
  );
};
