import styles from './Footer.module.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <section className={styles.footer}>

        <div>
          <Image
                src="/Images/home.svg"
                alt="Description of the image"
        width={50}
        height={50}
      /> 
          <button className='item'>Home</button>
        </div>
        <div>
          <Image
                src="/Images/nav.svg"
                alt="Description of the image"
        width={50}
        height={50}
      /> 
          <button className='item'>Discover</button>
        </div>
        <div>
          <Image
                src="/Images/create.svg"
                alt="Description of the image"
        width={50}
        height={50}
      /> 
          <button className='create item'>Create</button>
        </div>
        <div>
          <Image
                src="/Images/discover.svg"
                alt="Description of the image"
        width={50}
        height={50}
      /> 
          <button className='item'>Discover</button>
        </div>
        <div>
          <Image
                src="/Images/profile.svg"
                alt="Description of the image"
        width={50}
        height={50}
      /> 
          <button className='item'>Profile</button>
        </div>
        
    </section>
  );
}