import SkillBlock from '~/components/SkillBlock';
import { Link } from 'react-router-dom';
import skillF from 'img/svg/skill1.svg';
import skillS from 'img/svg/skill2.svg';
import SectionBody from '~/components/sectionBody';

export default function Skills() {
  return (
    <SectionBody currentClass={'skills'}>
      <div className="skills__blocks">
        <SkillBlock img={skillF}>
          <span>Web Design</span> (Websites, Webshops, Programm Interfaces)
        </SkillBlock>
        <SkillBlock img={skillS}>
          {' '}
          <span>Layout</span> (Websites, Webshops, Programm Interfaces)
        </SkillBlock>
      </div>
      <div className="skills__text">
        <h2 className="skills__title">
          Check out our <span>skills</span> to optimaze our work
        </h2>
        <a href="/" className="mainButton">
          Button
        </a>
      </div>
    </SectionBody>
  );
}
