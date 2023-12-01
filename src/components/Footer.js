import { LinkedIn, GitHub, Twitter } from '@mui/icons-material';

import { IconButton } from '@mui/material';
import { Fragment } from 'react';

const Footer = () => {
  return (
    <Fragment>
      <div className="flex flex-row justify-center gap-3">
        <a href="https://twitter.com/nolalemi" target="_blank">
          <IconButton>
            <Twitter fontSize="large" color="primary" />
          </IconButton>
        </a>

        <a href="https://github.com/olalemi" target="_blank">
          <IconButton>
            <GitHub fontSize="large" color="primary" />
          </IconButton>
        </a>
        <a href="https://www.linkedin.com/in/nurudeenolalemi" target="_blank">
          <IconButton>
            <LinkedIn fontSize="large" color="primary" />
          </IconButton>
        </a>
      </div>
    </Fragment>
  );
};

export default Footer;
