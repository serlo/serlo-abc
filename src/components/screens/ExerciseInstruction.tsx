import * as R from 'ramda';
import * as React from 'react';
import { Animated } from 'react-native';

import getSound from '../../assets/sounds';
import { play } from '../../helpers/audio';
import { LoadSound } from '../helpers/Audio';
import Exercise from './Exercise';

// TODO: get from props;
const animation = [0, 2, 4];

class ExerciseInstructionInner extends React.Component {
  private exercise: any;
  public state = {};

  public componentDidMount() {
    // Wait after view has rendered. Kinda hacky
    // TODO: wait until sounds have played
    setTimeout(() => {
      if (this.exercise) {
        this.exercise
          .getMeasuresAsync()
          .then((letters: Array<[number, number]>) => {
            const [firstLetter, ...rest] = animation;

            this.setState(
              {
                pointerPos: {
                  x: new Animated.Value(letters[firstLetter][0]),
                  y: new Animated.Value(letters[firstLetter][1])
                }
              },
              () => {
                this.simulateLetterPress(firstLetter).then(() => {
                  const animate = (remainingAnimations: number[], cb) => {
                    if (R.isEmpty(remainingAnimations)) {
                      cb();
                      return;
                    }

                    const [
                      nextLetter,
                      ...remainingLetters
                    ] = remainingAnimations;

                    Animated.parallel([
                      Animated.timing(this.state.pointerPos.x, {
                        toValue: letters[nextLetter][0],
                        duration: 1000
                      }),
                      Animated.timing(this.state.pointerPos.y, {
                        toValue: letters[nextLetter][1],
                        duration: 1000
                      })
                    ]).start(() => {
                      this.simulateLetterPress(nextLetter).then(() => {
                        animate(remainingLetters, cb);
                      });
                    });
                  };

                  animate(rest, () => {
                    this.exercise.submitButton.measureInWindow(
                      (x, y, width, height) => {
                        Animated.parallel([
                          Animated.timing(this.state.pointerPos.x, {
                            toValue: x + width / 2,
                            duration: 1000
                          }),
                          Animated.timing(this.state.pointerPos.y, {
                            toValue: y + height / 2,
                            duration: 1000
                          })
                        ]).start(() => {
                          this.simulateSubmitPress();
                        });
                      }
                    );
                  });
                });

                // TODO: callback
                // TODO: press submit
              }
            );
          });
      }
    }, 100 /* FIXME: magic number */);
    // console.warn(this.exercise);
  }

  public render() {
    return [
      <Exercise
        onCorrect={() => {
          console.warn('done');
        }}
        key="exercise"
        ref={ref => (this.exercise = ref)}
        {...this.props}
      />,
      this.state.pointerPos && (
        <Animated.View
          key="pointer"
          style={{
            position: 'absolute',
            width: 5,
            height: 5,
            borderRadius: 100,
            backgroundColor: 'black',
            top: this.state.pointerPos.y,
            left: this.state.pointerPos.x
          }}
        />
      )
    ];
  }

  private simulateLetterPress(index: number) {
    return play(this.props.sound).then(() => {
      this.exercise.exercise.letters[index].touchableHandlePress();
    });
  }

  private simulateSubmitPress() {
    return play(this.props.sound).then(() => {
      this.exercise.submitButton.button.touchableHandlePress();
    });
  }
}

export const ExerciseInstruction = props => (
  <LoadSound
    sound={getSound.click()}
    render={sound => <ExerciseInstructionInner sound={sound} {...props} />}
  />
);
