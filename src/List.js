import React from 'react';

const List = ({people}) => {
  return (
    <>
      {people.map((x)=>{
        const {id,name,age,image}=x;
        return (
          <article key={id} className="person">
            <img src={image} alt={name}/>
            <div>
              <h4>{name}</h4>
              <p>{age} year</p>
            </div>
          </article>
        )
      })}
    </>
  );
};

export default List;
