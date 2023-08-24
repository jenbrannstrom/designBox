// PetFriendly.js
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const PetFriendly = () => {
  const [isPetFriendly, setIsPetFriendly] = useState(false);
  const [pets, setPets] = useState([]);
  const { t } = useTranslation();

  const handleInputChange = (event, petId, field) => {
    const newValue = event.target.value;
    setPets(prevPets =>
      prevPets.map(
        pet => pet.id === petId ? { ...pet, [field]: newValue } : pet
      )
    );
  };

  const handleCheckboxChange = (event, petId) => {
    const newLocation = event.target.value;
    setPets(prevPets =>
      prevPets.map(pet =>
        pet.id === petId
          ? {
            ...pet,
            location: event.target.checked
              ? [...pet.location, newLocation]
              : pet.location.filter(location => location !== newLocation)
          }
          : pet
      )
    );
  };

  const handleAddPet = () => {
    setPets(prevPets => [
      ...prevPets,
      { id: Date.now(), name: '', type: '', ageBracket: 'adult', location: [], notes: '' }
    ]);
  };

  const handleRemovePet = id => {
    setPets(prevPets => prevPets.filter(pet => pet.id !== id));
  };

  const renderPetQuestion = (pet) => {
    if (pet.name && pet.type) {
      let petType = pet.type === 'other' ? pet.typeDetails : t(`pet_type_${pet.type}`);
      return (
        <div className="pet-location">
          <label>{t('pet_location').replace('{petName}', `${pet.name}, the ${petType}`)}</label>
          <div className="checkbox-container">
            {['atOwnerFeet', 'petPlayArea', 'other'].map(value => (
              <label key={value}>
                <input
                  type="checkbox"
                  value={value}
                  checked={pet.location.includes(value)}
                  onChange={e => handleCheckboxChange(e, pet.id)}
                />
                {t(`pet_location_${value}`)}
              </label>
            ))}
          </div>
          {pet.location.includes('other') && <input type="text" value={pet.locationDetails} onChange={e => handleInputChange(e, pet.id, 'locationDetails')} placeholder={t('pet_location_other_name')} />}
        </div>
      );
    }
  };

  return (
    <div className="pet-friendly-section">
      <h2>{t('pet_friendly')}</h2>
      <div>
        <label>
          <input type="radio" value="yes" checked={isPetFriendly} onChange={() => { setIsPetFriendly(true); handleAddPet(); }} />
          {t('yes')}
        </label>
        <label>
          <input type="radio" value="no" checked={!isPetFriendly} onChange={() => setIsPetFriendly(false)} />
          {t('no')}
        </label>
      </div>
      {isPetFriendly && pets.map((pet, index) => (
        <div key={pet.id} className="pet-row">
          <input type="text" value={pet.name} className="pet-input" onChange={e => handleInputChange(e, pet.id, 'name')} placeholder={t('pet_name')} />
          <div className="pet-type">
            <label>
              <input type="radio" value="dog" checked={pet.type === 'dog'} onChange={e => handleInputChange(e, pet.id, 'type')} />
              {t('pet_type_dog')}
            </label>
            <label>
              <input type="radio" value="cat" checked={pet.type === 'cat'} onChange={e => handleInputChange(e, pet.id, 'type')} />
              {t('pet_type_cat')}
            </label>
            <label className="radio-other">
              <input type="radio" value="other" checked={pet.type === 'other'} onChange={e => handleInputChange(e, pet.id, 'type')} />
              {t('pet_type_other')}
            </label>
            {pet.type === 'other' && <input type="text" value={pet.typeDetails} onChange={e => handleInputChange(e, pet.id, 'typeDetails')} placeholder={t('pet_type_other_name')} />}
          </div>
          {renderPetQuestion(pet)}
          <button className="remove-button" onClick={() => handleRemovePet(pet.id)}>
            <img src="/path/to/your/red-x-icon.png" alt="remove" />
          </button>
        </div>
      ))}
      {isPetFriendly && <button onClick={handleAddPet} className="add-pet-button">{t('add_pet')}</button>}
    </div>
  );
};

export default PetFriendly;
