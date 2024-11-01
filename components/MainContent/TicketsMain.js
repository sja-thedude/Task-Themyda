// pages/next-page.js (or pages/get-tickets.js)
import Image from 'next/image';
import styles from './TicketsMain.module.css';
export default function TicketsMain() {
    const handleButtonClick = () => {
    window.location.href = '/qr'; // Redirect to the QR page
    };
    
    return (
    <section className={styles.main}>
           <div>
         <Image
                src="/Images/checking.svg"
                alt="Description of the image"
        width={700}
        height={700}
                /> 

                <div>
                    <Image
                src="/Images/first.jpeg"
                alt="Description of the image"
                width="1000"
                height="1000"
                    /> 
                    
                </div>
                <Image
                src="/Images/zigzag.svg"
                alt="Description of the image"
                width="1000"
                height="1000"
                    /> 
                <div>
                <h1>Taboo Festival</h1>
                <p>Wednesday, 20 Nov 2019, 15:00</p>
                <h6>Seat</h6>
                <h3>G3, G4</h3>
                <p>Guest</p>
                <h5>Conea Adrian</h5>
                <p>Tickets</p>
                <h4>5 x Standard</h4>

                <p>Actual Pay</p>
                <h2>800 Lei</h2> 
                </div>
                
                <button className={styles.qrcod} type='button' onClick={handleButtonClick}>
        Vezi QR-cod
        </button>
    </div> 
    </section>
    
    
);
}
