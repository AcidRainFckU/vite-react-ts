import { useForm, SubmitHandler } from 'react-hook-form';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

type Form = {
  fullname: string;
  email: string;
  phone: string;
};

type Props = {
  setCurrentForm: any;
  setFormData: any;
  formData: any;
};

const GeneralForm: React.FC<Props> = ({ setCurrentForm, setFormData, formData }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Form>();

  const onSumbit: SubmitHandler<Form> = (data) => {
    setFormData(data);
    setCurrentForm('secondaryForm');
  };

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
      <label>
        <PersonIcon sx={IconsStyle} />
        <input type="text" required className="form__field" {...register('fullname')} />
        <span>Full Name</span>
      </label>
      <label style={{ margin: '32px 0' }}>
        <EmailIcon sx={IconsStyle} />
        <input type="text" required className="form__field" {...register('email')} />
        <span>Email Adress</span>
      </label>
      <label>
        <PhoneEnabledIcon sx={IconsStyle} />
        <input type="text" required className="form__field" {...register('phone')} />
        <span>Phone Number</span>
      </label>
      <div className="form__buttons">
        <input type="submit" className="mainButton form__submit" value="Next step" />
      </div>
    </form>
  );
};

export default GeneralForm;
