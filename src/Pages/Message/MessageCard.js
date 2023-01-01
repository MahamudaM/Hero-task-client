import React from 'react';

const MessageCard = ({person}) => {
    const {img,name}= person
    return (
        <div>
              <div className="card w-96 bg-base-100 shadow-xl ">
  <div className="card-body">
    <div className="card-actions justify-between ">
    <div className="avatar online">
  <div className="w-20 rounded-full">
    <img src={img} alt='img' />
  </div>
</div>
      <p className='ml-2 mt-6'>{name} </p>
    </div>
    
  </div>
</div>
        </div>
    );
};

export default MessageCard;