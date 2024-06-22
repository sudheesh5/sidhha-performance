import React from 'react'
import img1 from './components/images/There-Is-No-How-Kindle-3D-Photo-1219x1536.jpg'
import img2 from './components/images/3D-V4-1-1219x1536.png'
import img3 from './components/images/3D-V4-1219x1536.png'
import img4 from './components/images/40947505-723427785.jpg'
import img5 from './components/images/91jyE6G6oGL._SL1500_-3095762724.jpg'
import img6 from './components/images/41t4KOzpi5L-903920277.jpg'

const Books = () => {
  return (
    <div>
        <h1 className="heading">BOOKS</h1>
        <img className="books" src={img1} /><br />
        <img className="books" src={img2} /> <br />
        <img className="books" src={img3} /><br />
        <img className="book-cover" src={img4} /><br />
        <img className="book-cover" src={img5} /><br />
        <img className="book-cover" src={img6} /><br />
    </div>
  )
}

export default Books