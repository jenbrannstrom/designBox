// EmployeeSection.js
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, TextField, RadioGroup, FormControlLabel, Radio, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const EmployeeSection = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: '', position: '', ageBracket: 'adult' },
    { id: 2, name: '', position: '', ageBracket: 'adult' },
    { id: 3, name: '', position: '', ageBracket: 'adult' },
    { id: 4, name: '', position: '', ageBracket: 'adult' }
  ]);
  const { t } = useTranslation();

  const handleInputChange = (event, personId, field) => {
    const newValue = event.target.value;
    setEmployees(prevEmployees =>
      prevEmployees.map(
        person => person.id === personId ? { ...person, [field]: newValue } : person
      )
    );
  };

  const handleAddEmployee = () => {
    setEmployees(prevEmployees => [
      ...prevEmployees,
      { id: Date.now(), name: '', position: '', ageBracket: 'adult' }
    ]);
  };

  const handleRemoveEmployee = id => {
    setEmployees(prevEmployees =>
      prevEmployees.filter(person => person.id !== id)
    );
  };

  return (
    <div className="employee-section">
      <h2>{t('emp1')}</h2>
      {employees.map((person, index) => (
        <div key={person.id} className="employee-row">
          <TextField
            type="text"
            className="employee-input"
            value={person.name}
            onChange={e => handleInputChange(e, person.id, 'name')}
            placeholder={t('emp_name')}
          />

          <TextField
            type="text"
            className="employee-input"
            value={person.position}
            onChange={e => handleInputChange(e, person.id, 'position')}
            placeholder={t('emp_position')}
          />

          <RadioGroup
            className="employee-age-bracket"
            value={person.ageBracket}
            onChange={e => handleInputChange(e, person.id, 'ageBracket')}
          >
            <FormControlLabel value="teen" control={<Radio />} label={t('ageBracket_teen')} />
            <FormControlLabel value="adult" control={<Radio />} label={t('ageBracket_adult')} />
            <FormControlLabel value="senior" control={<Radio />} label={t('ageBracket_senior')} />
          </RadioGroup>

          <IconButton className="remove-button" onClick={() => handleRemoveEmployee(person.id)}>
            <DeleteIcon />
          </IconButton>

        </div>
      ))}

      <Button onClick={handleAddEmployee} className="add-employee-button">{t('emp_add')}</Button>
    </div>
  );
};

export default EmployeeSection;
