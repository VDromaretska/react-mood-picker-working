import { useState } from "react";

function MoodPickerDemo(): JSX.Element {
  const [moodValueFromCurrentRender, queueRerenderWithNewMoodValue] =
    useState("confused");

  const handleMoodChangeToHappy = (nextMood: string) => {
    queueRerenderWithNewMoodValue(nextMood);
  };

  function handleMoodChangeToConfused() {
    queueRerenderWithNewMoodValue("confused");
  }

  const handleMoodChangeToSad = () => {
    const nextMood = "sad";
    queueRerenderWithNewMoodValue(nextMood);
  };
  const handleMoodChangeToShocked = () =>
    queueRerenderWithNewMoodValue("Shocked");

  return (
    <>
      <h1>Mood Picker Demo</h1>
      <p>Chosen mood: {moodValueFromCurrentRender.toUpperCase()}</p>
      <button onClick={() => handleMoodChangeToHappy("happy")}>😀</button>
      <button onClick={handleMoodChangeToConfused}>🤔</button>
      <button onClick={handleMoodChangeToSad}>😢</button>
      <button onClick={handleMoodChangeToShocked}>😱</button>
      <button onClick={() => queueRerenderWithNewMoodValue("crazy")}>🤪</button>
      <button onClick={() => queueRerenderWithNewMoodValue("chilled")}>
        😌
      </button>
    </>
  );
}

export default MoodPickerDemo;
