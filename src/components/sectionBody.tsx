import React from 'react';

type Props = {
  currentClass: string;
  children: any;
  id?: string;
};

const SectionBody: React.FC<Props> = ({ currentClass, children, id }) => {
  const bodyClass: string = currentClass + '__body';

  return (
    <section id={id} className={currentClass}>
      <div className={bodyClass}>{children}</div>
    </section>
  );
};

export default SectionBody;
