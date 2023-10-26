import { useState } from "react";

const useCourseDifficulty = (minValue:string, maxValue:string) => {
  const [courseDifficulty, setCourseDifficulty] = useState("");

  const handleInputChange = (value:string) => {
    if (value >= minValue && value <= maxValue) {
      setCourseDifficulty(value);
    }
  };

  return [courseDifficulty, handleInputChange];
};

export default useCourseDifficulty;
