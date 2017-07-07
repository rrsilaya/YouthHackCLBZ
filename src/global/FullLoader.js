import React from 'react';
import './loader.css';
import { YH_BLUE1 } from './constants';

import { ScaleLoader } from 'halogen';

const FullLoader = () =>
  <div className="uk-width-1-1 uk-height-1-1 uk-flex uk-flex-center uk-flex-middle">
    <div className="uk-text-center">
      <ScaleLoader color={YH_BLUE1} size="30px" />
      <br />
      Loading
    </div>
  </div>;

export default FullLoader;
