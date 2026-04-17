'use client';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HomeServiceBox from '@/components/HomeServiceBox';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import VideoReviews from '@/components/VideoReviews';
import Doctors from '@/components/Doctors';
import Testimonials from '@/components/Testimonials';
import ScrollGallery from '@/components/ScrollGallery';
import Location from '@/components/Location';
import AppointmentForm from '@/components/AppointmentForm';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import LeadPopup from '@/components/LeadPopup';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HomeServiceBox />
      
      <div id="services">
        <Services />
      </div>
      
      <div id="why-us">
        <WhyChooseUs />
      </div>
      
      <ScrollGallery />
      
      <VideoReviews />
      
      <div id="doctors">
        <Doctors />
      </div>
      
      <div id="testimonials">
        <Testimonials />
      </div>
      
      <div id="location">
        <Location />
      </div>
      
      <div id="appointment">
        <AppointmentForm />
      </div>
      
      <Footer />
      <FloatingActions />
      <LeadPopup />
    </main>
  );
}
