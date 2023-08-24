// OfficeProject.js

import React, { useState } from 'react';
import EmployeeSection from './EmployeeSection';
import PetFriendly from './PetFriendly';
import CustomerTypeSection from './CustomerTypeSection';
import { useTranslation } from 'react-i18next';

const OfficeProject = () => {
  const { t } = useTranslation();
  const [currentSection, setCurrentSection] = useState('employee');

  const nextSection = () => {
    switch (currentSection) {
      case 'employee':
        setCurrentSection('pet');
        break;
      case 'pet':
        setCurrentSection('customer');
        break;
      // Add more cases as you have more components
      default:
        break;
    }
  }

  return (
    <div>
      {currentSection === 'employee' && <EmployeeSection />}
      {currentSection === 'pet' && <PetFriendly />}
      {currentSection === 'customer' && <CustomerTypeSection />}
      {/* Add more conditional renderings as you have more components */}

      <button onClick={nextSection}>{t('next')}</button>
    </div>
  );
};

export default OfficeProject;
