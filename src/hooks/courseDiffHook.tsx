import { useState } from "react";

const useCourseDifficulty = (minValue, maxValue) => {
  const [courseDifficulty, setCourseDifficulty] = useState("");

  const handleInputChange = (value) => {
    if (value >= minValue && value <= maxValue) {
      setCourseDifficulty(value);
    }
  };

  return [courseDifficulty, handleInputChange];
};

export default useCourseDifficulty;
