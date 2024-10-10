import React, { useState } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { items } from './data';

const Tabs = ()=> {

    const [skillItems, setSkills] = useState(items);
    const [value, setValue] = useState(0);

    const { duties, title, id } = skillItems[value];
         
    return (
        <section className="section">

        <div className="title">
          <h2 id='skills'>skills & experience</h2>
          <div className="underline"></div>
        </div>
        <div className="jobs-center">
  
        <div className="btn-container ">
            {skillItems.map((item, index) => {
              return (
                <button
                  key={item.id}
                  onClick={()=>{
                    setValue(index)
                  }}
                  className={`job-btn ${index === value && 'active-btn'}`}
                  >
                  {item.activity}
                </button>
              )
            })}
          </div>
  
          <article className="job-info">
          <div key={id}>
            <h3>{title}</h3>
            {duties.map((duty, index) => {
              return (
                <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"/>
                <div>
                <p className="job-date">{duty.years}</p>
                <p>{duty.desc}</p>
                </div>
                </div>
              )
            })}
          </div>
          </article>
        </div>
      </section>
    )
}

export default Tabs
