import { useForm, SubmitHandler } from 'react-hook-form';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

type Form = {
  text: string;
};

type Props = {
  setCurrentForm: any;
  setFormData: any;
};

const SecondaryForm: React.FC<Props> = ({ setCurrentForm, setFormData }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Form>();

  const onSumbit: SubmitHandler<Form> = (data) => {
    setFormData((prev: any) => {
      return { ...prev, ...data };
    });
    setCurrentForm('thirdForm');
  };

  function handleBack() {
    setCurrentForm('generalInform');
  }
  const IconsStyle = {
    fill: '#A3A3A3',
    position: 'absolute',
    top: '50%',
    left: 19,
    fontSize: 29,
    transform: 'translateY(-50%)',
  };

  return (
    <form onSubmit={handleSubmit(onSumbit)}>
      <label className="texterea">
        <textarea required className="form__field textarea__field" {...register('text')} />
        <span>Description</span>
      </label>
      <div className="form__buttons">
        <input type="button" onClick={handleBack} className="mainButton prev-but" value="Back" />
        <input type="submit" className="mainButton form__submit" value="Send" />
      </div>
    </form>
  );
};

export default SecondaryForm;
