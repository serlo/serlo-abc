export const lessons = [
  {
    title:"A",
    exercises: [
      {template: "TextTutorial", id: "T1", text: "Tutorial"},
      {template: "Text", id:"A1", text: "Exercise A 1", tutorial: "T1"},
      {template: "Text", id:"A2", text: "Exercise A 2", tutorial: "T1"},
      {template: "Text", id:"A3", text: "Exercise A 3"}
    ]
  },
  {
    title: "B",
    exercises: [
      {template: "Text", id: "B1", text: "Exercise B 1"},
      {template: "Text", id: "B2", text: "Excercise B 2"}
    ]
  },
  {
    title: "C",
    exercises: [
      {template: "Text", id: "C1", text: "Exercise C 1"},
      {template: "Text", id: "C2", text: "Excercise C 2"}
    ]
  }
]

const idToNextExercise = new Map();
const idToExercise = new Map();

lessons.forEach( function (lesson) {
  last_id = undefined;
  lesson.exercises.forEach( function (exercise) {
    idToExercise.set(exercise.id, exercise);
    if(last_id != undefined) {
      idToNextExercise.set(last_id, exercise);
    }
    last_id = exercise.id;
  });
});

export const selectFirstExercise = (lessonIndex) => {
  return lessons[lessonIndex].exercises[0];
}

export const selectNextExercise = (exerciseId) => {
  return idToNextExercise.get(exerciseId);
}

export const selectExercise = (exerciseId) => {
  return idToExercise.get(exerciseId);
}

export const selectTutorial = (exerciseId) => {
  let tutorialId = idToExercise.get(exerciseId).tutorial;
  return idToExercise.get(tutorialId);
}
