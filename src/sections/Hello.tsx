import helloImage from '../img/svg/main.svg';
import SectionBody from '~/components/sectionBody';

export default function Hello() {
  return (
    <SectionBody currentClass={'hello'}>
      <div className="hello__text">
        <h1 className="hello__mainTitle">Want to create impressive design solution? We can help you.</h1>
        <p className="hello__subTitle">Or you can join our team!</p>
        <div className="hello__buttons flex justify-between">
          <a href="#mainForm" className="hello__buttons_left">
            start a project
          </a>
          <a href="#" className="hello__buttons_right">
            Learn more
          </a>
        </div>
      </div>
      <div className="hello__image">
        <img src={helloImage} />
      </div>
    </SectionBody>
  );
}
