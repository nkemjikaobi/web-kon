export interface StepProps {
  goNextStep: () => void;
  goPreviousStep: () => void;
  currentStep: number;
  isLast: boolean;
  isFirst: boolean;
  step: number;
}
