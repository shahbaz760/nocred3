import { FC, ReactNode } from 'react';

interface IProps {
  heading: string | ReactNode;
  subHeading?: string | ReactNode;
  noCenter?: boolean;
}

const SectionHeading: FC<IProps> = ({ heading, subHeading, noCenter }) => {
  return (
    <div className={`section_heading ${noCenter ? 'noCenter' : ''}`}>
      {typeof heading === 'string' ? <h2>{heading}</h2> : heading}
      {typeof subHeading === 'string' ? <h5>{subHeading}</h5> : subHeading}
    </div>
  );
};

export default SectionHeading;
