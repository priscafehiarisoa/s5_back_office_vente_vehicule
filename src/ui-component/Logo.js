// material-ui
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  const theme = useTheme();
    const logo=require("assets/images/Car_Sell-3-removebg-preview.png")
  return (
    <>
      <img src={logo} alt="Berry" width="100" style={{ marginLeft: '20px' }} />
    </>
  );
};

export default Logo;
