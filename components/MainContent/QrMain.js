// pages/next-page.js (or pages/get-tickets.js)
import Image from 'next/image';
import styles from './QrMain.module.css';
export default function QrMain() {
    return (
        <section className={styles.main}>
            
            <div>
                <div>
                    <div className={styles.mainimg}>
                    <Image
                        src="/Images/back.svg"
                        alt="Description of the image"
                        width={700}
                        height={500}
                        /> 
                    </div>
                    
                    <div className={styles.maincontent}>
                        <div>
                    <Image
                                src="/Images/qr.svg"
                                alt="Description of the image"
                        width={750}
                        height={300}
                            /> 
                            <p className={styles.p}>Show this code to the gatekeeper at the cinema</p>
                        </div>
                        <div className={styles.zigzag}>
                            <Image
                            src="/Images/zigzag.svg"
                            alt="Description of the image"
                            width="1000"
                            height="1000"
                                /> 
                        </div>
                        
                    
                <div className={styles.maintext}>
                            <h1 className={styles.title}>Taboo Festival</h1>
                            <p className={styles.p}>XXI Ambarukmo Plaza, Studio 1</p>
                            <div className={styles.col}>
                                <div className={styles.sp}>
                                <h6 className={styles.size15}>Date</h6>
                                <h3 className={styles.size22}>20 Nov</h3>
                                </div> 
                                <div className={styles.sp}>
                                <h6 className={styles.size15}>Hour</h6>
                                <h3 className={styles.size22}>15:00</h3>
                                </div>
                                <div className={styles.sp}>
                                <h6 className={styles.size15}>Seats</h6>
                                <h3 className={styles.size22}>G10, G11</h3>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                
            </div>

                <div className={styles.btns}>
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
