<<<<<<< HEAD
import PropertySearchForm from '@/components/PropertySearchForm';
import Properties from '@/components/Properties';

const PropertiesPage = async () => {
  return (
    <>
      <section className='bg-blue-700 py-4'>
        <div className='max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8'>
          <PropertySearchForm />
        </div>
      </section>
      <Properties />
    </>
  );
};
export default PropertiesPage;
=======
import React from 'react'
import properties from '@/properties.json'
import PropertyCard from '@/components/PropertyCard.jsx';

const Properties = () => {
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
      {properties.length === 0 ? (
        <p>No properties found</p>
        )
        :( <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.map((property =>(
            <PropertyCard key={property._id} property={property}/>
          )
          ))}
        </div>)}
       
      </div>
    </section>
  )
}

export default Properties
>>>>>>> bfe0e83f1561b81225d55ae02ea5e3f2466cd29e
