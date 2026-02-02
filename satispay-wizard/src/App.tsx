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

import { Navbar } from './components/ui/Navbar';

function App() {
  return (
    <WizardProvider>
      <Navbar />
      <div className="pt-16"> {/* Add padding for fixed navbar */}
        <WizardManager />
      </div>
    </WizardProvider>
  );
}

export default App;
