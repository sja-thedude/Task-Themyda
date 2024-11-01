// pages/next-page.js (or pages/get-tickets.js)
import TicketsHeader1 from '../components/Header/TicketsHeader1';
import Footer from '../components/Footer/Footer';
import TicketsMain from '../components/MainContent/TicketsMain';
export default function Tickets() {

return (
    <div>
        <TicketsHeader1/>
        <TicketsMain/>
        <Footer/>
    </div>
    
);
}
