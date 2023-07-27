// import the font loader from '@next/font/google'
import "@fontsource/sora"

// font settings
const fontSettings = ({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

// components
import Nav from '../components/Nav';
import Header from '../components/Header';
import TopLeftImg from '../components/TopLeftImg'

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${fontSettings.variable}font-sora relative`}
    >
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div >
  );
};

export default Layout;
