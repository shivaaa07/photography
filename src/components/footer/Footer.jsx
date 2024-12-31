import React from 'react';

const fullTime = new Date();
const currentYear = fullTime.getFullYear();
// console.log(currentYear);


const Footer = () => {
  return (
    <>
    <div className="container mt-6 sm:mt-8 xl:mt-12 mb-6">
        <div>Copyright &#169; {currentYear}. All Right Reserved by Photography.</div>
    </div>
    </>
  )
}

export default Footer
