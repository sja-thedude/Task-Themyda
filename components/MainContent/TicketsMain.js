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
                <div className={styles.mainimg}>
                    <Image
                        src="/Images/checking.svg"
                        alt="Description of the image"
                        width={700}
                        height={500}
                        /> 
                    </div>

                <div className={styles.maincontent}>
                    <div>
                    <Image
                src="/Images/img2.svg"
                alt="Description of the image"
                width="650"
                height="550"
                    /> 
                    
                </div>
                <Image
                src="/Images/zigzag.svg"
                alt="Description of the image"
                width="1000"
                height="1000"
                    /> 
                
                <h1 className={styles.title}>Taboo Festival</h1>
                    <div className={styles.maintext}>
                        <p>Wednesday, 20 Nov 2019, 15:00</p>
                <h6 className={styles.size15}>Seat</h6>
                <h3 className={styles.size22}>G3, G4</h3>
                <p className={styles.size15}>Guest</p>
                <h5 className={styles.size22}>Conea Adrian</h5>
                <p className={styles.size15}>Tickets</p>
                <h4 className={styles.size22}>5 x Standard</h4>
                    </div>
                    
                <div className={styles.btmtext}>
                <p className={styles.actual}>Actual Pay</p>
                <h2 className={styles.h2title}>800 Lei</h2>   
                </div>

                </div>
                
                <button className={styles.qrcod} type='button' onClick={handleButtonClick}>
        Vezi QR-cod
        </button>
    </div> 
    </section>
    
    
);
}
