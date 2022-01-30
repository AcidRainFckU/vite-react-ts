import Skills from '../sections/Skills';
import Work from '../sections/Work';
import Meet from '../sections/Meet';
import MainForm from '../sections/MainForm';
import Hello from '../sections/Hello';

export default function HomePage() {
  return (
    <div className="home">
      <Hello />
      <Skills />
      <Work />
      <Meet />
      <MainForm />
    </div>
  );
}
