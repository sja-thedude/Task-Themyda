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
        width={250}
        height={250}
              />  
              </div>
            
              <div className={styles.info}>
                <h5 className={styles.bdhead}>RATU ILMU HITAM</h5>
                <div className={styles.flex}><Image
                src="/Images/location.svg"
                alt="Description of the image"
                width={30}
                height={30}
                      /> <p className={styles.parafont}>XXI Ambarukmo Plaza, Studio 1</p></div>
                <p className={styles.smfont}>24 Oct at 18:30 CEST</p> 
              </div>
              
          </div>
      
          <div>
            <h5 className={styles.tick1row}>Tickets</h5>
            <div className={styles.tick1row} ><h5>5x Standard</h5><p className={styles.smfont}>$34.00</p></div>
          </div>

          <div>
                 <Image
                src="/Images/line.svg"
                alt="Description of the image"
        width={1000}
        height={1000}
              />  
              </div>

          <div>
            <div className={styles.tick1row}><h5>Standard</h5><p className={styles.smfont}>$34.00</p></div>
            <h5 className={styles.coucher}>Add a coucher</h5> 
            <div className={styles.tick1row}><h5>Total</h5><p className={styles.fontbold}>$34.00</p></div>
          </div>


          <div className={styles.btbtn}>   
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

    </div>
      </section>
    
    
  );
}
