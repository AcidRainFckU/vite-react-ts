import meet from '../img/Meet.jpg';
import SectionBody from '~/components/sectionBody';

export default function Meet() {
  return (
    <SectionBody currentClass={'meet'}>
      <div className="meet__header flex">
        <h2 className="meet__subtitle">
          It's time to <span>meet!</span> <br /> We are ready to itroduce ourselves and what we can do
        </h2>
        <a href="/" className="mainButton">
          Button
        </a>
      </div>
      <div className="meet__image">
        <img src={meet} />
      </div>
    </SectionBody>
  );
}
