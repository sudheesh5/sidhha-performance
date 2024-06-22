import React from 'react'
import img1 from './components/images/usp-Secrets-To-The-Perfect-Life.jpg'
import img2 from './components/images/USP-The-Secret-To-Getting-Everything-Without-Trying.jpg'
import img3 from './components/images/USP-Becoming-The-Man-Who-Cannot-Lose-1536x1536.jpg'
const Untoldpodcast = () => {
  return (
    <div>
        <h1 className="heading">UNTOLD SECRETS PODCAST</h1>
        <p id="description">
        The Untold Secrets podcast reveals in-depth secrets that allow a human being to attain the rarefied elixirs in Life, Business, and Craft. <br />
        <br />Secrets that society, experts, spiritualists, monks and the world have never Realized, and can never Reveal. <br /> <br />
        This is the only work of its kind, anywhere in the world today. <br /><br />
        (Save perhaps for somewhere at 19,000 feet, deep in the Himalayan snows). <br /><br /><br />
        These are reserved for the truly Sincere and Serious human. <br /><br />
        Who is finished with all the chases. <br /><br />
        Who is fed up with all the games. <br /><br />
        Who now is ready for The Truth. <br /><br /> <br />
        If one is Accepted, they will receive an invoice, following which the podcast will be sent via electronic mail. <br />
        </p>
        <h4>To Apply</h4>
        <p id='description'>
        An email to Kapil@KapilGuptaMD.com, stating one’s monetary pledge, followed by a few words as to why they desire these Secrets. <br /><br />
        Once Accepted, one need not provide an explanation for future purchases. <br /> <br />
        Only Serious pledges will be considered. <br /><br />
        Namaste. <br /> <br /> <br />  </p>

        <h3 className='secret-podcast'>Secrets To The Perfect Life</h3>
        <img className="images" src={img1} /> <br /><br />
        <p><i>Nature is perfect. All that it creates is perfect. <br /> <br />
        The seas, the sun, the stars, and the creatures in the animal kingdom remain perfect, throughout their entire lives.

 <br /><br /> Nature created man Perfectly. <br /><br />
 Man was created to have a Perfect Life. <br /> <br />
 Secrets to returning Home. Secrets to returning to Nature. <br /> <br />
 Secrets To The Perfect Life. <br /><br /></i>(Approx length: <b>30 min</b>).
</p>
<br /><br /><br />
       
<h3>The Secret To Getting Everything . . . Without Trying</h3>
<img className="images" src={img2} /> <br /><br />
<p>(Approx length: <b>30 min</b>)</p> <br /><br />

<h3>Becoming The Man Who Cannot Lose</h3>
<img className="images" src={img3} /> <br /><br />
<p>(Approx length: <b>20 min).</b></p>
    </div>
  )
}

export default Untoldpodcast