import { useState } from 'react';
import FormPoint from '~/components/form/FormPoint';
import SectionBody from '~/components/sectionBody';
import GeneralForm from '~/components/form/GeneralForm';
import SecondaryForm from '~/components/form/SecondaryForm';
import ThirdForm from '~/components/form/ThirdForm';

export default function MainForm() {
  const [currentForm, setCurrentForm] = useState<string>('generalInform');
  const [formData, setFormData] = useState<any>({});

  return (
    <SectionBody currentClass={'main-form'} id={'mainForm'}>
      <div className="main-form__header">
        <h2 className="main-form__title">
          Lets talk about your ideas! 3 steps to <span>success</span>{' '}
        </h2>
        <p className="main-form__subtitle">Also if you want to be part of our team, write us back!</p>
      </div>
      <div className="main-form__container">
        <div className="form ml-auto">
          <div className="form__points flex justify-between">
            <FormPoint id={'generalInform'} currentForm={currentForm} text={'General inforamtion'} number={1} />
            <FormPoint id={'secondaryForm'} currentForm={currentForm} text={'Secondary informarion'} number={2} />
            <FormPoint id={'thirdForm'} currentForm={currentForm} text={'Third information'} number={3} />
          </div>
          <div className="form__wrapper ">
            {currentForm === 'generalInform' ? (
              <GeneralForm setFormData={setFormData} setCurrentForm={setCurrentForm} formData={formData} />
            ) : currentForm === 'secondaryForm' ? (
              <SecondaryForm setFormData={setFormData} setCurrentForm={setCurrentForm} />
            ) : (
              <ThirdForm />
            )}
          </div>
        </div>
      </div>
    </SectionBody>
  );
}
