import React from 'react';
import { Box } from '@mui/material';
import ImgLoader from 'assets/loader.png'


const Loader = () => {

  return (
    <div>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      backgroundColor= '#191F45'
    >
  <div

  >
        <img
          src={ImgLoader}
          alt="Loader"
          width="250"
          height="250"
        />
      </div>
    </Box>
    </div>
  );
}

export default Loader;