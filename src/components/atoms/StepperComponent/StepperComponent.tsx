import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { StepProps } from "@dto/StepperComponent/StepProps";

import Icon from "../Icons";

interface StepperComponentProps {
  steps: Step[];
}

interface Step {
  element: (stepProps: StepProps) => JSX.Element;
}

const StepperComponent = ({ steps }: StepperComponentProps) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isFirst, setIsFirst] = useState<boolean>(true);
  const [, setIsLast] = useState<boolean>(false);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      // moveStepper();
      checkPosition();
    }

    return () => {
      mounted = false;
    };
  }, [currentStep]);

  const goNextStep = () => {
    const nextStep = currentStep + 1;

    if (nextStep <= steps.length) {
      setCurrentStep(nextStep);
    }
  };

  const goPreviousStep = () => {
    const previousStep = currentStep - 1;

    if (previousStep >= 1) {
      setCurrentStep(previousStep);
    }
  };

  const checkPosition = () => {
    const first = currentStep === 1;
    const last = currentStep === steps.length;
    setIsFirst(first);
    setIsLast(last);
  };

  return (
    <div className="bg-white w-[90%] tablet:w-4/5 smallLaptop:w-3/5 smallLaptop:min-w-[531px] desktop:w-1/3  mx-auto relative shadow-lg rounded-lg">
      <div className="px-8 pt-8 pb-6 mb-4 flex items-center justify-between border-b border-b-citiGray-250">
        {isFirst ? <Icon className="cursor-pointer" name="caretLeft" /> : <Icon className="cursor-pointer" name="caretLeftFilled" onClick={goPreviousStep} />}
        <div className="absolute left-[50%] flex items-center -translate-x-[50%]">
          {steps.map((step, index) => (
            <div key={uuidv4()}>{currentStep >= index + 1 ? <Icon className="mr-2" name="circleFilled" /> : <Icon className="mr-2" name="circle" />}</div>
          ))}
        </div>
      </div>
      <div>
        {steps.map((step, index) => (
          <div key={uuidv4()}>
            {currentStep === index + 1 && (
              <step.element
                currentStep={currentStep}
                goNextStep={goNextStep}
                goPreviousStep={goPreviousStep}
                isFirst={index === 0}
                isLast={index === steps.length - 1}
                step={index + 1}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepperComponent;
