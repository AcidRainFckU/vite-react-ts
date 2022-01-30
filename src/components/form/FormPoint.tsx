type Point = {
  id: string;
  currentForm: string;
  text: string;
  number: number;
  active?: boolean;
};

const FormPoint: React.FC<Point> = ({ id, currentForm, text, number }) => {
  return (
    <div id={id} className={currentForm === id ? 'form__point active' : 'form__point'}>
      {currentForm === id ? text : number}
    </div>
  );
};

export default FormPoint;
