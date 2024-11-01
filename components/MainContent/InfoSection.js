import Image from 'next/image';
import styles from './InfoSection.module.css';

export default function InfoSection() {
    const handleButtonClick = () => {
    window.location.href = '/payment';
    };
    
  return (
      <section className={styles.main}>
        <div className={styles.container}>
            <Image
                src="/Images/first.jpeg"
                alt="Description of the image"
                width="1000"
                height="1000"
            /> 
        </div>

        <div className={styles.text}>
            <div>
                <h1 className={styles.h1}>SATOSHI - Sport Tour 2024 Cluj-Napoca</h1>
            </div>
              <div className={styles.profile}>
                  <div className={styles.profile1}>
                      <Image
                src="/Images/profilepic.svg"
                alt="Description of the image"
                width="50"
                height="50"
                  /> 
                  <div>
                  <h6 className={styles.name}>Satoshi</h6>
                  <p className={styles.name}>4,789 followers</p>
                  </div>
                  </div>

                  <button className={styles.followbtn} type='button'>Follow</button>
              </div>
              <div>
                  <div className={styles.align}>
                      <Image
                src="/Images/time.svg"
                alt="Description of the image"
                width="50"
                height="50"
                      /> 
                      <div className={styles.col}>
                        <h5>November 24, 2024</h5>
                      <p>19:00</p>  
                      </div>
                      
                  </div>
                  <div className={styles.align}>
                      <Image
                src="/Images/location.svg"
                alt="Description of the image"
                width="50"
                height="50"
                      /> 
                      <div className={styles.col}>
                         <h5>Bucharest, Romania</h5>
                      <p>Quantic Pub</p> 
                      </div>
                      
                      
                  </div>
                  <div className={styles.gettickets}>
                      <div className={styles.titlegettickets}>
                          <h6>Get Tickets</h6>
                      </div>
                      <div className={styles.tick}>
                          <div className={styles.infogettickets}>
                          <p>Welcome! Please choose your desired ticket type:</p>
                          </div>
                          <div className='ticket-options'>
                              <div className={styles.ticket1}>
                                  <div>
                                      <div className={styles.coltc1}><p>Early Bird</p><p className={styles.left}>4 left</p></div>
                                        <p>€55.00</p>
                                  </div>
                                  <div className={styles.incredecre}>
                                <Image
                                    src="/Images/minus.svg"
                                    alt="Description of the image"
                                    width="50"
                                    height="50"
                                    /> 
                                        <p className={styles.sp}>1</p>
                                <Image
                                    src="/Images/plus.svg"
                                    alt="Description of the image"
                                    width="50"
                                    height="50"
                                    /> 
                                  </div>
                                  
                              </div>
                              <div className={styles.ticket2}>
                                  <div>
                                      <p>Standard</p>
                                        <p>€60.00</p>
                                  </div>
                                  <div>
                                      <Image
                                    src="/Images/plus1.svg"
                                    alt="Description of the image"
                                    width="50"
                                    height="50"
                                    /> 
                                  </div>
                                  
                              </div>
                              <div className={styles.ticket3}>
                                  <div>
                                      <div className={styles.coltc3}><p>Bizum</p><p className={styles.req}>Require Approval</p></div>
                                      <p>Free</p>
                                      <p>Bizum payment</p>
                                  </div>
                                  <div>
                                      <Image
                                    src="/Images/plus1.svg"
                                    alt="Description of the image"
                                    width="50"
                                    height="50"
                                    /> 
                                  </div>
                                  
                              </div>
                              

                          </div>
                          <button className={styles.getbtn} type='button' onClick={handleButtonClick}>
            Get Ticket
          </button>
                      </div>
                  </div>

                  <div className={styles.join}>
                      <Image
                src="/Images/profilepic.svg"
                alt="Description of the image"
                width="50"
                height="50"
                  /> 
                      <h6 className={styles.sp}>1 joined</h6>
                  </div>
                  <div className={styles.desc}>
                  <h5>Description</h5>
                  <p>Satoshi, un artist emergent din Republica Moldova, a captat atenția publicului cu piesele sale vibrante, precum „Caștile Mele”, „Mama Mi-a Spus” și „N...</p>
                  <a className={styles.read}>Read More</a>    
                  </div>
                  

              </div>
              <div className={styles.btmbtns}>
                  <button className={styles.sharebtn} type='button'>Share event
                    <Image
                    src="/Images/share.svg"
                    alt="Description of the image"
                    width="40"
                    height="40"
                    />
                    </button>
                <button className={styles.getbtn1} type='button' onClick={handleButtonClick}>
                    Get Ticket
                </button>
                    </div>
        </div>
    </section>
  );
}
