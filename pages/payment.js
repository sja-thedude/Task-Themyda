// pages/next-page.js (or pages/get-tickets.js)
import PaymentHeader from '../components/Header/PaymentHeader';
import Footer from '../components/Footer/Footer';
import PaymentMain from '../components/MainContent/PaymentMain';
export default function Payment() {  

  return (
    <div>
      <PaymentHeader/>
      <PaymentMain/>
      <Footer/>
    </div>
    
  );
}
