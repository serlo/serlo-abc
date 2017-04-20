import React from 'react';

export const createWithDifficulty = generateDifficulty => C => {
  const difficulty = generateDifficulty();

  const WithDifficultyComponent = props => (
    <C {...props} difficulty={difficulty} />
  );

  return WithDifficultyComponent;
};

// TODO: fancy logic
const difficultyGenerator = () => 1/3

export default createWithDifficulty(difficultyGenerator)
