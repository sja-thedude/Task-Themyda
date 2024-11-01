import styles from './EventHeader.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function PaymentHeader() {
  return (
      <section className={styles.header}>
          <Link href="/">
              <Image
        src="/Images/arrow-left.svg" 
        alt="Go Back"
        width={50} 
        height={50} 
      />
          </Link>
          
          <p>Payment</p>
          <Image
        src="/Images/bell.svg" 
        alt="notifications"
        width={50} 
        height={50} 
      />
    </section>
  );
}