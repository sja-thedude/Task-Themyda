// pages/next-page.js (or pages/get-tickets.js)
import Image from 'next/image';
import styles from './QrMain.module.css';
export default function QrMain() {
    return (
        <section className={styles.main}>
            
    <div>

      <Image
                src="/Images/qr.svg"
                alt="Description of the image"
        width={700}
        height={700}
      /> 
          
                <h1>Taboo Festival</h1>
                <div class={styles.btns}>
                    <button className={styles.sendbtn} type='button'>
                <Image
                src="/Images/forwardarrow.svg"
                alt="Description of the image"
                    width={50}
                    height={50}
                /> 
            <p className={styles.p}>Send</p>
          </button>
                <button className={styles.walletbtn} type='button'>
                    <Image
                src="/Images/wallet.svg"
                alt="Description of the image"
                    width={50}
                    height={50}
                /> 
            <p className={styles.p}>Add to Wallet</p>
      </button>
                </div>
        
                

            </div>
        </section>
    
  );
}
