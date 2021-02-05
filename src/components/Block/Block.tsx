import React from 'react';
import style from './Block.module.scss';

// @ts-ignore
import Fade from 'react-reveal/Fade';

const Block: React.FC = ({ children }) => {
  return (
    <Fade bottom>
      <div className={style.Block}>{children}</div>
    </Fade>
  );
};

export { Block };
