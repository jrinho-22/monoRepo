import React, { useEffect, useState } from "react";
import { Checkmark, Xmark } from "./Checkmark";

export const Requirement = ({ value, requirement, onValidChange }) => {
  const [isValid, setIsValid] = useState();

  useEffect(() => {
    setIsValid(requirement.validator(value));
  }, [value, requirement]);

  return (
    <div className='requirement'>
      {isValid ? <Checkmark/> : <Xmark/>}
      
      <p className={isValid ? 'valid' : 'invalid'}>
        {requirement.text}
      </p>
    </div>
  );
};