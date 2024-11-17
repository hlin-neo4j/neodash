import React from 'react';
import { connect } from 'react-redux';

import {
  DASHBOARD_HEADER_BRAND_LOGO,
  DASHBOARD_HEADER_BRAND_LOGO_DARK,
  IS_CUSTOM_LOGO,
} from '../../config/ApplicationConfig';
import StyleConfig from '../../config/StyleConfig';
import { Typography } from '@neo4j-ndl/react';
import { getDashboardTheme } from '../DashboardSelectors';

await StyleConfig.getInstance();

export const NeoDashboardHeaderLogo = ({ resetApplication, themeMode }) => {
  const content = (
    <div className='n-items-center sm:n-flex md:n-flex-1 n-justify-start'>
      <a className='n-cursor-pointer'>
        <img
          onClick={resetApplication}
          className='n-h-6 n-w-auto n-m-2'
          src={themeMode === 'light' ? DASHBOARD_HEADER_BRAND_LOGO : DASHBOARD_HEADER_BRAND_LOGO_DARK}
          alt='Logo'
        />
      </a>
      {IS_CUSTOM_LOGO ? <></> : <Typography variant='h6'>Labs</Typography>}
    </div>
  );

  return content;
};

const mapStateToProps = (state) => ({
  themeMode: getDashboardTheme(state),
});

export default connect(mapStateToProps)(NeoDashboardHeaderLogo);
