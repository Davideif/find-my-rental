import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar.jsx'

export const metadata = {
  title: 'Property pulse',
  description: 'Property pulse',
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar/> 
        <div className="main-layout">
          {children}
        </div>
      </body>
    </html>
  );
};

export default MainLayout;
