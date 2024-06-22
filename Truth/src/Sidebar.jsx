import React from 'react'

const Sidebar = () => {
  return (
    <div>
        <div className="form-container">
          <form action="">
      <h4 className="subscription">THE PRIVATE<br/> DISCOURSES  (PAID<br/> SUBSCRIPTION)</h4> <br />
      <div className="sidebar"><label htmlFor="email">Email Address*</label> <br />
      <input type="email" /> <br /> 
      <label htmlFor="name">Name</label> <br />
      <input type="text" /> <br /> 
      <label htmlFor="button" className="button">THE SERIOUS MAY APPLY</label>
      </div>
      </form>
      </div>
    </div>
  )
}

export default Sidebar