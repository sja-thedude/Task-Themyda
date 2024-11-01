// pages/next-page.js (or pages/get-tickets.js)
import Image from 'next/image';
import styles from './PaymentMain.module.css';


export default function PaymentMain() {
    const handleButtonClick = () => {
    window.location.href = '/tickets'; // Redirect to the Payment page
    };
    

    return (
      <section className={styles.main}>
            <div>

          <div className={styles.paymenttick}>
              <div>
                 <Image
                src="/Images/first.jpeg"
                alt="Description of the image"
        width={300}
        height={300}
              />  
              </div>
            
              <div className={styles.info}>
                 <h5>RATU ILMU HITAM</h5>
              <p>XXI Ambarukmo Plaza, Studio 1</p>
              <p>24 Oct at 18:30 CEST</p> 
              </div>
              
          </div>
      
      
      <h1>Ticket Details</h1>
          <p>This page displays more details about the event and ticket purchasing options.</p>
                <button className={styles.cardpay} type="button">
              Pay with Card
          </button>
            <button className={styles.applepay} type='button' onClick={handleButtonClick}>
            <Image
                src="/Images/applepay.svg"
                alt="Description of the image"
                width={55}
                height={55}
                    />  
             </button>

    </div>
      </section>
    
    
  );
}
