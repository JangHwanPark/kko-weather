import React from 'react';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center my-10'>
      <div>
        <button>오늘의 날씨</button>
      </div>
      <div>
        <button>내일 날씨</button>
      </div>
      <div>
        <button>주간 날씨</button>
      </div>
    </div>
  );
};

export default Navbar;
