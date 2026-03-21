'use client';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Doctors from '@/components/Doctors';
import Testimonials from '@/components/Testimonials';
import Location from '@/components/Location';
import AppointmentForm from '@/components/AppointmentForm';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import LeadPopup from '@/components/LeadPopup';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050807]">
      <Navbar />
      <Hero />
      <div className="relative z-10 w-full">
        <Services />
      </div>
      <Doctors />
      <Testimonials />
      <Location />
      <div id="appointment">
        <AppointmentForm />
      </div>
      <Footer />
      <FloatingActions />
      <LeadPopup />
    </main>
  );
}
