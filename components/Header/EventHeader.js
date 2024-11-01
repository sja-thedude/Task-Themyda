import styles from './EventHeader.module.css';
import Image from 'next/image';

export default function EventHeader() {
  return (
      <section className={styles.header}>
          <Image
        src="/Images/arrow-left.svg" 
        alt="Go Back"
        width={50} 
        height={50} 
      />
          <h1>Event Page</h1>
          <Image
        src="/Images/like.svg" 
        alt="Go Back"
        width={50} 
        height={50} 
      />
    </section>
  );
}