import styles from './EventHeader.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function TicketsHeader1() {
  return (
      <section className={styles.header}>
          <Link href="/payment">
          <Image
        src="/Images/arrow-left.svg" 
        alt="Go Back"
        width={50} 
        height={50} 
              />
        </Link>

          <h1>Tickets</h1>
          <Image
        src="/Images/bell.svg" 
        alt="notifications"
        width={50} 
        height={50} 
      />
    </section>
  );
}