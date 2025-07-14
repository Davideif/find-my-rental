import React from 'react'
import Hero from '@/components/Hero.jsx';
import InfoBoxes from '@/components/InfoBoxes.jsx';
import HomeProperties from '@/components/HomeProperties.jsx'

console.log(process.env.MONGODB_URI)

const HomePage = () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties/>
    </>
  );
};      

export default HomePage