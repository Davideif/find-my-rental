<<<<<<< HEAD
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';
import { ToastContainer } from 'react-toastify';
import { GlobalProvider } from '@/context/GlobalContext';
import '@/assets/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import 'photoswipe/dist/photoswipe.css';

export const metadata = {
  title: 'FindMyRental | Find The Perfect Rental',
  description: 'Find your dream rental property',
  keywords: 'rental, find rentals, find properties',
=======
import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar.jsx';
import Footer from '@/components/Footer.jsx';

export const metadata = {
  title: 'Property pulse',
  description: 'Property pulse',
>>>>>>> bfe0e83f1561b81225d55ae02ea5e3f2466cd29e
};

const MainLayout = ({ children }) => {
  return (
<<<<<<< HEAD
    <GlobalProvider>
      <AuthProvider>
        <html lang='en'>
          <body>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </AuthProvider>
    </GlobalProvider>
  );
};
=======
    <html lang="en">
      <body>
        <Navbar/> 
        <div className="main-layout">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
};

>>>>>>> bfe0e83f1561b81225d55ae02ea5e3f2466cd29e
export default MainLayout;
