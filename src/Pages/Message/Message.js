import React from 'react';
import per1 from '../../Assets/img/person1.jpg'
import per2 from '../../Assets/img/person2.jpg'
import per3 from '../../Assets/img/person3.jpg'
import MessageCard from './MessageCard';

const Message = () => {
    const persons =[
        {
            id:1,
            name :'Tareq jamil',
            img:per1
        },
        {
            id:2,
            name :'Junaed jamsed',
                    img:per2
        },
        {
            id:3,
            name :'Ismail ibn Musa Menk',
            img:per3
        },
        {
            id:4,
            name :'Tareq jamil',            
            img:per1
        },
        {
            id:5,
            name :'Ismail ibn Musa Menk',           
            img:per3
        },
        {
            id:6,
            name :'Junaed jamsed',            
            img:per2
        },  {
            id:7,
            name :'Tareq jamil',            
            img:per1
        },
        {
            id:8,
            name :'Ismail ibn Musa Menk',           
            img:per3
        },
        {
            id:9,
            name :'Junaed jamsed',            
            img:per2
        }
    ]
    return (
        <div className='max-w-6xl mx-auto flex  flex-col md:flex-row lg:flex-row  '>
         <div className="all messag flex-auto w-2/3  mb-4">
         <div className="card w-4/5 mx-auto bg-base-100 shadow-xl">
  <div className="card-body">
  <div className="avatar ">
  <div className="w-20 rounded-full"> 
    <img src={per1} alt='img' />
  </div>
</div>
    <h2 className="card-title">Tareq jamil</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="divider">January 2023</div>
    {/* chat section */}
    <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src={per1} alt='img'/>
    </div>
  </div>
  <div className="chat-header">
  Tareq jamil
    <time className="text-xs opacity-50">12:45</time>
  </div>
  <div className="chat-bubble">Now,I am in canada.</div>
  <div className="chat-footer opacity-50">
    Delivered
  </div>
</div>
<div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src={per1} alt='img'/>
    </div>
  </div>
  <div className="chat-header">
  Tareq jamil
    <time className="text-xs opacity-50">12:45</time>
  </div>
  <div className="chat-bubble">I always pray for you.</div>
  <div className="chat-footer opacity-50">
    Delivered
  </div>
</div>
<div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src={per2} alt='img'/>
    </div>
  </div>
  <div className="chat-header">
   Junayed jamsed
    <time className="text-xs opacity-50">12:46</time>
  </div>
  <div className="chat-bubble">are you ok !</div>
  <div className="chat-footer opacity-50">
    Seen at 12:46
  </div>
</div>
{/* 2nd chai */}
<div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src={per1} alt='img'/>
    </div>
  </div>
  <div className="chat-header">
  Tareq jamil
    <time className="text-xs opacity-50">12:45</time>
  </div>
  <div className="chat-bubble">Now,I am in canada.</div>
  <div className="chat-footer opacity-50">
    Delivered
  </div>
</div>
<div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src={per2} alt='img'/>
    </div>
  </div>
  <div className="chat-header">
   Junayed jamsed
    <time className="text-xs opacity-50">12:46</time>
  </div>
  <div className="chat-bubble">are you ok !</div>
  <div className="chat-footer opacity-50">
    Seen at 12:46
  </div>
</div>
<div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src={per2} alt='img'/>
    </div>
  </div>
  <div className="chat-header">
   Junayed jamsed
    <time className="text-xs opacity-50">12:46</time>
  </div>
  <div className="chat-bubble">I know you are a good person</div>
  <div className="chat-footer opacity-50">
    Seen at 12:46
  </div>
</div>
    {/* chate end */}
    <div className="card-actions ">
    <textarea className="textarea textarea-bordered w-4/5" placeholder="Write a message"></textarea>
    </div>
  </div>
</div>
         </div>
         {/* left card */}
        <div className="flex-auto w-1/3">
        <div className="flex flex-col gap-2">
            {
                persons.map(person=><MessageCard key={person.id} person={person}></MessageCard>)
            }
         </div>
        </div>
        </div>
    );
};

export default Message;