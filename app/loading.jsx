<<<<<<< HEAD
=======

>>>>>>> bfe0e83f1561b81225d55ae02ea5e3f2466cd29e
'use client';
import ClipLoader from 'react-spinners/ClipLoader';

const override = {
  display: 'block',
  margin: '100px auto',
};

<<<<<<< HEAD
const LoadingPage = ({ loading }) => {
  return (
    <ClipLoader
      color='#3b82f6'
      loading={loading}
=======
const LoadingPage = () => {
  return (
    <ClipLoader
      color='#3b82f6'
>>>>>>> bfe0e83f1561b81225d55ae02ea5e3f2466cd29e
      cssOverride={override}
      size={150}
      aria-label='Loading Spinner'
    />
  );
};
export default LoadingPage;
