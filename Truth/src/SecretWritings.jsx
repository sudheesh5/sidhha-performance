import React from 'react'
import img1 from './components/images/Revealing-The-Truth-Here-And-Now-1024x680.jpg';
import img2 from './components/images/The-End-Of-Suffering-In-Human-Relations-1024x683.jpg';
import img3 from './components/images/A-Master-Of-The-Universe-1024x576.jpg';
import img4 from './components/images/A-Forever-Quiet-Mind-1024x683.jpg';
import img5 from './components/images/A-Life-Of-Uncompromised-Freedom-1024x614.jpg';
import img6 from './components/images/A-Life-On-Your-Terms-1024x470.jpg';
const SecretWritings = () => {
    console.log('SecretWritings component is rendering');
  return (
    <div>
        <h1 className="heading">SECRET WRITINGS</h1>
        <p id="description">
        Outside of The Siddha Arrivals, The Secret Writings are the most direct and revelatory writings to date.

They have until now been kept out of the public domain. As the number of humans in the world who are Ready for them is extraordinarily small.

Each reveals a particular Truth, in less than a thousand words.

They are roughly the length of The Private Discourses.

 

Each of The Secret Writings requires its own Pledge.

Pledges are in the thousands. Applications are made to Kapil@KapilGuptaMD.com

These are truly only for the human being that is Ready.
        </p>
       <i> <h4 className="title">REVEALING THE TRUTH, HERE AND NOW</h4></i>
       <img className="images" src={img1} />

       <i> <h4 className="title">THE END OF SUFFERING IN HUMAN RELATIONS</h4></i>
       <img className="images" src={img2} />

       <i> <h4 className="title">A MASTER OF THE UNIVERSE</h4></i>
       <img className="images" src={img3} />

       <i> <h4 className="title">A FOREVER QUIET MIND</h4></i>
       <img className="images" src={img4} />

       <i> <h4 className="title">A LIFE OF UNCOMPROMISED FREEDOM</h4></i>
       <img className="images" src={img5} />

       <i> <h4 className="title">A LIFE ON YOUR TERMS</h4></i>
       <img className="images" src={img6} />





        </div>
  )
}

export default SecretWritings