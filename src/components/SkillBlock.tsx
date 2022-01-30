import React from 'react';

type Skill = {
  img: any;
  children: React.ReactNode;
};

export default function SkillBlock({ img, children }: Skill) {
  return (
    <div className="skills__block">
      <img src={img} />
      <p>{children}</p>
    </div>
  );
}
