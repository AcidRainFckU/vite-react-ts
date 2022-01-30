import WorkBlock from '~/components/WorkBlock';
import workImg from '../img/work.jpg';
import SectionBody from '~/components/sectionBody';

export default function Work() {
  return (
    <SectionBody currentClass={'work'}>
      <div className="work__header flex w-full justify-between">
        <h2 className="work__title">
          The more we <span>work</span>, the more we <span>improve.</span>{' '}
        </h2>
        <a href="/" className="mainButton">
          Button
        </a>
      </div>
      <div className="works">
        <div className="works__row flex">
          <WorkBlock img={workImg} url="https://sochi-cabriolet.ru/" />
          <WorkBlock img={workImg} url="https://sochi-cabriolet.ru/" />
        </div>
        <div className="works__row flex">
          <WorkBlock img={workImg} url="https://sochi-cabriolet.ru/" />
          <WorkBlock img={workImg} url="https://sochi-cabriolet.ru/" />
        </div>
      </div>
    </SectionBody>
  );
}
