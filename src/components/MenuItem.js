import React from 'react';

function MenuItem({image, name, price }) {

  return(
     <div className='menuItem'>
      <div style={{backgroundImage: `url(${image})`}}></div>
      <div>{name}</div>
      <div>${price}</div>
     </div>
  );

}

export default MenuItem;