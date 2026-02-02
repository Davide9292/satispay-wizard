import React from 'react';
import { WizardProvider, useWizard } from './context/WizardContext';
import { WizardLayout } from './components/wizard/WizardLayout';
import { StepAuthentication } from './components/wizard/StepAuthentication';
import { StepRoleSelection } from './components/wizard/StepRoleSelection';
import { StepVibeCoding } from './components/wizard/StepVibeCoding';
import { StepThankYou } from './components/wizard/StepThankYou';

const WizardManager: React.FC = () => {
  const { currentStep } = useWizard();

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <StepAuthentication />;
      case 1:
        return <StepRoleSelection />;
      case 2:
        return <StepVibeCoding />;
      case 3:
        return <StepThankYou />;
      default:
        return <StepAuthentication />;
    }
  };

  return (
    <WizardLayout currentStep={currentStep}>
      {renderStep()}
    </WizardLayout>
  );
};

import { Footer } from './components/ui/Footer';

function App() {
  return (
    <WizardProvider>
      <div className="min-h-screen flex flex-col">
        <WizardManager />
        <Footer />
      </div>
    </WizardProvider>
  );
}

export default App;
