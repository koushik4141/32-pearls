'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, LogOut, Search, Filter, Phone, Calendar, Clock, 
  CheckCircle2, Trash2, Mail, ExternalLink, Menu, X, 
  LayoutDashboard, Users, MessageSquare, CalendarDays, 
  TrendingUp, Activity, Bell, UserPlus, FileText, Send, 
  Check, MoreHorizontal, Smile, MapPin
} from 'lucide-react';
import Image from 'next/image';

// --- MOCK DATA ---
const mockPatients = [
  { _id: '1', name: 'Arun Kumar', phone: '+91 98450 12345', service: 'Dental Implant', date: '2026-03-20', time: '10:00 AM', status: 'Pending', type: 'Clinic' },
  { _id: '2', name: 'Sumi Das', phone: '+91 99001 88776', service: 'Root Canal', date: '2026-03-21', time: '02:00 PM', status: 'Contacted', type: 'Home' },
  { _id: '3', name: 'Vikram Singh', phone: '+91 88776 55443', service: 'Teeth Whitening', date: '2026-03-19', time: '04:00 PM', status: 'Completed', type: 'Clinic' },
  { _id: '4', name: 'Meera Nair', phone: '+91 91223 34455', service: 'Full Checkup', date: '2026-03-22', time: '11:00 AM', status: 'Pending', type: 'Clinic' },
  { _id: '5', name: 'Rahul R.', phone: '+91 95544 33221', service: 'Emergency Pain', date: '2026-03-18', time: '06:00 PM', status: 'Contacted', type: 'Home' },
];

const mockMessages = [
  { id: 1, sender: 'Vikram Singh', text: 'Hi, I need to reschedule my implant surgery.', time: '10:30 AM', unread: true },
  { id: 2, sender: 'Sumi Das', text: 'Thank you for the at-home checkup today!', time: 'Yesterday', unread: false },
  { id: 3, sender: 'System', text: 'New booking request from Arun Kumar.', time: '09:15 AM', unread: true },
];

const scheduleSlots = [
  { time: '09:00 AM', patient: 'Available', status: 'free' },
  { time: '10:00 AM', patient: 'Arun Kumar', status: 'busy', service: 'Implant' },
  { time: '11:00 AM', patient: 'Meera Nair', status: 'busy', service: 'Checkup' },
  { time: '12:00 PM', patient: 'Lunch Break', status: 'break' },
  { time: '01:00 PM', patient: 'Available', status: 'free' },
  { time: '02:00 PM', patient: 'Sumi Das', status: 'busy', service: 'Root Canal' },
];

// --- COMPONENTS ---

const Overview = ({ stats, bookings }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { label: 'System Revenue', value: '₹0', icon: TrendingUp, color: 'text-[#1DE9B6]', bg: 'bg-[#1DE9B6]/10' },
        { label: 'Total Registry', value: stats.total, icon: Users, color: 'text-[#1DE9B6]', bg: 'bg-[#1DE9B6]/10' },
        { label: 'Active Deployments', value: stats.homeVisits, icon: MapPin, color: 'text-[#D4AF37]', bg: 'bg-[#D4AF37]/10' },
        { label: 'Patient Loyalty', value: '0%', icon: Smile, color: 'text-white', bg: 'bg-white/10' }
      ].map((stat, i) => (
        <div key={i} className="bg-white/[0.03] backdrop-blur-3xl p-8 rounded-[40px] border border-white/5 hover:border-white/10 transition-all group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full translate-x-12 -translate-y-12 group-hover:bg-[#1DE9B6]/5 transition-all" />
          <div className="flex items-center justify-between mb-8 relative z-10">
            <div className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
              <stat.icon size={24} />
            </div>
            <span className="text-[9px] font-black text-[#6F7674] uppercase tracking-widest">+0% VELOCITY</span>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#6F7674] mb-2 relative z-10">{stat.label}</p>
          <h2 className="text-4xl font-display font-black text-white relative z-10">{stat.value}</h2>
        </div>
      ))}
    </div>

    <div className="grid lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2 bg-white/[0.03] backdrop-blur-3xl rounded-[48px] p-10 border border-white/5">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h3 className="text-2xl font-display font-black text-white tracking-tight">Growth Intelligence</h3>
            <p className="text-[10px] font-black uppercase tracking-widest text-[#6F7674] mt-2">Analytical Insights across clinical spectrum</p>
          </div>
          <select className="bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-[#6F7674] px-6 py-3 outline-none hover:border-white/20 transition-all">
            <option>Last 7 Cycles</option>
            <option>Fiscal Quarter</option>
          </select>
        </div>
        <div className="h-72 flex items-end gap-5 px-6 overflow-hidden relative">
          <div className="absolute inset-0 flex flex-col justify-between opacity-5">
            {[...Array(5)].map((_, i) => <div key={i} className="w-full h-px bg-white" />)}
          </div>
          {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-4 group relative z-10">
              <motion.div 
                initial={{ height: 0 }} 
                animate={{ height: `${h}%` }} 
                transition={{ delay: i * 0.1, duration: 1, ease: [0.23, 1, 0.32, 1] }}
                className="w-full bg-gradient-to-t from-[#1DE9B6] to-[#00BFA5] rounded-t-2xl group-hover:from-white group-hover:to-[#1DE9B6] transition-all shadow-[0_0_20px_rgba(29,233,182,0.1)]"
              />
              <span className="text-[9px] font-black text-[#6F7674] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Phase {i + 1}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white/[0.03] backdrop-blur-3xl rounded-[48px] p-10 border border-white/5">
        <h3 className="text-2xl font-display font-black text-white tracking-tight mb-10">Neural Feed</h3>
        <div className="space-y-8">
          {bookings.slice(0, 4).map((b, i) => (
            <div key={i} className="flex gap-6 items-start pb-8 border-b border-white/5 last:border-0 last:pb-0 group">
               <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-[#1DE9B6]/40 transition-all">
                  <Activity size={20} className="text-[#1DE9B6]" />
               </div>
               <div className="flex-1">
                 <p className="text-sm font-black text-white group-hover:text-[#1DE9B6] transition-colors">{b.name}</p>
                 <p className="text-[10px] text-[#6F7674] font-black uppercase tracking-widest mt-1">Booked {b.service}</p>
                 <p className="text-[9px] text-[#8E9391] mt-2 font-medium">{b.date}</p>
               </div>
               <div className="w-2 h-2 rounded-full bg-[#1DE9B6] shadow-[0_0_10px_#1DE9B6]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const Schedule = ({ bookings }) => {
    const today = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long' });
    const todayBookings = bookings.filter(b => b.date.includes(today) || b.date === new Date().toISOString().split('T')[0]);

    const doctors = [
        { name: 'Dr. Reshma', img: '/doctors/reshma.jpg', hours: '08:00 AM - 10:00 PM' },
        { name: 'Dr. Suhail', img: '/doctors/suhail.png', hours: '10:30 AM - 01:00 PM' },
        { name: 'Dr. Shraddha', img: '/doctors/shraddha.jpg', hours: '01:00 PM - 03:00 PM' },
        { name: 'Dr. Vikas', img: '/doctors/vikas.jpg', hours: '08:00 AM - 10:00 PM' }
    ];

    const generateTimeline = () => {
        const slots = [];
        for (let i = 8; i <= 21; i++) {
            const hour = i > 12 ? i - 12 : i;
            const ampm = i >= 12 ? 'PM' : 'AM';
            const timeStr = `${hour.toString().padStart(2, '0')}:00 ${ampm}`;
            
            // Find patient for this slot
            const appointment = todayBookings.find(b => b.time?.includes(`${hour}:00`) || b.time?.includes(`${hour}:30`) || b.time?.includes(`${hour.toString().padStart(2, '0')}:00`));
            
            // Find active doctors for this slot
            const activeDoctors = doctors.filter(doc => {
                const [start, end] = doc.hours.split(' - ');
                const startHour = parseInt(start.split(':')[0]) + (start.includes('PM') && !start.startsWith('12') ? 12 : 0);
                const endHour = parseInt(end.split(':')[0]) + (end.includes('PM') && !end.startsWith('12') ? 12 : 0);
                return i >= startHour && i < endHour;
            });

            slots.push({ time: timeStr, appointment, doctors: activeDoctors });
        }
        return slots;
    };

    const timeline = generateTimeline();

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
            <div className="bg-white/[0.03] backdrop-blur-3xl rounded-[48px] p-6 md:p-10 border border-white/5 shadow-2xl overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-8 mb-12">
                    <div>
                        <h3 className="text-3xl font-display font-black text-white tracking-tighter">Clinical Timeline</h3>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#6F7674] mt-2">Active Operations for {today}</p>
                    </div>
                </div>

                <div className="space-y-6">
                    {timeline.map((slot, i) => (
                        <div key={i} className={`flex flex-col md:flex-row md:items-center gap-6 md:gap-10 p-6 md:p-8 rounded-[32px] border transition-all duration-500 ${slot.appointment ? 'bg-white/[0.05] border-[#1DE9B6]/20' : 'bg-white/[0.01] border-white/5'}`}>
                            <div className="w-24 text-xs font-black text-[#6F7674] uppercase tracking-widest">{slot.time}</div>
                            
                            <div className="flex-1">
                                {slot.appointment ? (
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 rounded-2xl bg-[#1DE9B6] text-[#050807] flex items-center justify-center font-black text-sm uppercase">{slot.appointment.name.charAt(0)}</div>
                                        <div>
                                            <h5 className="text-base font-black text-white tracking-tight">{slot.appointment.name}</h5>
                                            <p className="text-[9px] uppercase font-black text-[#1DE9B6] tracking-[0.2em]">{slot.appointment.service}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <p className="text-[10px] font-black uppercase tracking-widest text-[#6F7674] opacity-40 italic">No Active Deployments</p>
                                )}
                            </div>

                            <div className="flex -space-x-4">
                                {slot.doctors.map((doc, di) => (
                                    <div key={di} className="relative group/doc w-12 h-12 rounded-xl border-2 border-[#050807] overflow-hidden bg-white/10" title={doc.name}>
                                        <Image src={doc.img} alt={doc.name} fill className="object-cover group-hover/doc:scale-110 transition-transform" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Messages = () => (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/[0.03] backdrop-blur-3xl rounded-[32px] md:rounded-[48px] border border-white/5 shadow-2xl flex flex-col lg:flex-row h-auto lg:h-[750px] overflow-hidden">
        {/* Contact List */}
        <div className="w-full lg:w-96 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col bg-black/20 h-[300px] lg:h-full">
            <div className="p-8 border-b border-white/5 bg-black/20">
                <div className="relative group">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[#6F7674] group-focus-within:text-[#1DE9B6] transition-colors" size={18} />
                    <input type="text" placeholder="Search decrypted feed..." className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 pl-16 pr-6 text-[10px] font-black uppercase tracking-widest outline-none focus:ring-2 ring-[#1DE9B6]/20 transition-all placeholder:text-[#6F7674] text-white" />
                </div>
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar">
                {mockMessages.map(msg => (
                    <div key={msg.id} className={`p-8 hover:bg-white/[0.05] cursor-pointer transition-all border-b border-white/5 relative group ${msg.unread ? 'bg-[#1DE9B6]/5' : ''}`}>
                        {msg.unread && <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#1DE9B6] shadow-[2px_0_15px_#1DE9B6]" />}
                        <div className="flex justify-between items-start mb-3">
                            <h5 className="text-sm font-black text-white group-hover:text-[#1DE9B6] transition-colors uppercase tracking-tight">{msg.sender}</h5>
                            <span className="text-[9px] font-black text-[#6F7674] uppercase tracking-widest">{msg.time}</span>
                        </div>
                        <p className={`text-xs truncate font-medium ${msg.unread ? 'text-[#1DE9B6]' : 'text-[#8E9391]'}`}>{msg.text}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Chat Window */}
        <div className="flex-1 flex flex-col bg-black/10">
            <div className="p-8 bg-black/30 backdrop-blur-xl border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1DE9B6] to-[#00BFA5] flex items-center justify-center font-black text-[#050807] text-lg shadow-xl">VS</div>
                    <div>
                        <h4 className="text-xl font-display font-black text-white tracking-tight leading-tight">Vikram Singh</h4>
                        <div className="flex items-center gap-2 mt-1">
                            <div className="w-2 h-2 rounded-full bg-[#1DE9B6] animate-pulse shadow-[0_0_10px_#1DE9B6]" />
                            <span className="text-[9px] font-black text-[#1DE9B6] uppercase tracking-[0.2em]">Live Connection</span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button className="w-12 h-12 bg-white/5 rounded-2xl border border-white/10 text-[#6F7674] hover:text-white transition-all flex items-center justify-center"><MoreHorizontal size={22} /></button>
                </div>
            </div>

            <div className="flex-1 p-10 overflow-y-auto space-y-8 custom-scrollbar bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-90">
                <div className="flex gap-4 max-w-[70%]">
                    <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 shrink-0 flex items-center justify-center font-black text-[#6F7674] text-xs">VS</div>
                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-[32px] rounded-tl-none border border-white/10 text-sm font-medium text-white leading-relaxed shadow-xl">
                        Hi Doctor, the treatment was great. But I need to move my implant session to Friday. Is that possible?
                    </div>
                </div>
                <div className="flex gap-4 max-w-[70%] ml-auto flex-row-reverse">
                    <div className="w-10 h-10 rounded-2xl bg-[#1DE9B6] shrink-0 shadow-[0_10px_20px_rgba(29,233,182,0.2)] flex items-center justify-center font-black text-[#050807] text-xs">HQ</div>
                    <div className="bg-[#1DE9B6] p-6 rounded-[32px] rounded-tr-none text-[#050807] shadow-xl text-sm font-black leading-relaxed">
                        Hello Vikram! Glad you liked the checkup. Let me verify our tactical schedule for Friday. One moment.
                    </div>
                </div>
            </div>

            <div className="p-10 bg-black/40 border-t border-white/5">
                <div className="relative group">
                    <input type="text" placeholder="Draft clinical response..." className="w-full bg-white/5 border border-white/5 rounded-[32px] py-6 pl-10 pr-28 outline-none focus:ring-2 ring-[#1DE9B6]/20 transition-all font-black text-xs uppercase tracking-widest placeholder:text-[#6F7674] text-white" />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <button className="w-14 h-14 bg-white text-[#050807] rounded-2xl flex items-center justify-center hover:bg-[#1DE9B6] transition-all shadow-xl group-hover:scale-105 active:scale-95"><Send size={22} /></button>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
);

// --- MAIN DASHBOARD APP ---

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [bookings, setBookings] = useState([]);
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [adminName, setAdminName] = useState('Admin');
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_name');
    router.push('/admin/login');
  };

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem('admin_token');
      const resp = await fetch('/api/admin/bookings', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      
      if (resp.status === 401) {
          handleLogout();
          return;
      }

      if (!resp.ok) {
        throw new Error(`Execution error: ${resp.status}`);
      }

      const contentType = resp.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Registry format mismatch");
      }

      const data = await resp.json();
      
      if (data.success) {
        setBookings(data.data || []);
      }
    } catch (e) { 
      console.warn('Protocol sync failed.');
    }
    setLoading(false);
  };

  useEffect(() => { 
    // Secure session verification
    const token = localStorage.getItem('admin_token');
    const name = localStorage.getItem('admin_name');
    
    if (!token) {
        router.push('/admin/login');
        return;
    }
    
    if (name) setAdminName(name);
    fetchBookings(); 
    const interval = setInterval(fetchBookings, 30000);
    return () => clearInterval(interval);
  }, []);

  const stats = {
    total: bookings.length,
    homeVisits: bookings.filter(b => b.type === 'Home').length,
    pending: bookings.filter(b => b.status === 'Pending').length,
    contacted: bookings.filter(b => b.status === 'Contacted').length,
    completed: bookings.filter(b => b.status === 'Completed').length,
  };

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.name.toLowerCase().includes(search.toLowerCase()) || 
                          booking.phone.includes(search);
    const matchesFilter = filter === 'All' || booking.status === filter;
    return matchesSearch && matchesFilter;
  });

  const handleUpdateStatus = async (id, newStatus) => {
    try {
      const token = localStorage.getItem('admin_token');
      const resp = await fetch('/api/admin/bookings', {
        method: 'PATCH',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ id, status: newStatus }),
      });

      if (resp.status === 401) {
          handleLogout();
          return;
      }
      
      fetchBookings();
    } catch (e) { console.error(e); }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure?')) return;
    try {
      const token = localStorage.getItem('admin_token');
      const resp = await fetch('/api/admin/bookings', {
        method: 'DELETE',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ id }),
      });

      if (resp.status === 401) {
          handleLogout();
          return;
      }

      fetchBookings();
    } catch (e) { console.error(e); }
  };

  const navItems = [
    { name: 'Overview', icon: LayoutDashboard },
    { name: 'Patient Leads', icon: Users },
    { name: 'Schedule', icon: CalendarDays },
    { name: 'Messages', icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-[#050807] flex font-sans text-white selection:bg-[#1DE9B6] selection:text-[#050807]">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-80 bg-black/40 backdrop-blur-3xl border-r border-white/5 text-white transition-transform duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0`}>
        <div className="p-10 h-full flex flex-col">
          <div className="flex items-center gap-5 mb-20 group">
            <div className="w-14 h-14 bg-gradient-to-br from-[#1DE9B6] to-[#00BFA5] rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(29,233,182,0.2)]">
              <ShieldCheck size={32} className="text-[#050807]" />
            </div>
            <div>
              <h2 className="text-2xl font-display font-black tracking-tight leading-tight">32 Pearls</h2>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1DE9B6] opacity-80">Elite HQ Console</p>
            </div>
          </div>

          <nav className="space-y-4 flex-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`w-full flex items-center gap-5 px-8 py-5 rounded-[24px] text-xs font-black uppercase tracking-widest transition-all duration-500 border ${activeTab === item.name ? 'bg-white text-[#050807] border-white shadow-[0_20px_40px_rgba(255,255,255,0.1)]' : 'text-[#6F7674] hover:text-white hover:bg-white/5 border-transparent'}`}
              >
                 <item.icon size={18} />
                 {item.name}
              </button>
            ))}
          </nav>

          <button onClick={handleLogout} className="mt-12 flex items-center gap-4 text-[#FF4D4D] hover:text-white transition-all font-black text-[10px] uppercase tracking-[0.3em] group">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-all">
                <LogOut size={16} /> 
            </div>
            Terminate Session
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Dynamic Background Effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1DE9B6]/5 blur-[200px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none" />

        <header className="h-20 md:h-28 bg-black/20 backdrop-blur-2xl border-b border-white/5 flex items-center justify-between px-6 md:px-12 shrink-0 relative z-20">
          <div className="flex items-center gap-4 md:gap-8">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 text-white">
                {isSidebarOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
            <div>
                <h1 className="text-xl md:text-3xl font-display font-black text-white tracking-tighter">{activeTab}</h1>
                <p className="hidden md:block text-[10px] font-black uppercase tracking-[0.3em] text-[#6F7674] mt-1">Real-time Operations Control</p>
            </div>
          </div>

          <div className="flex items-center gap-6 md:gap-10">
            <div className="relative group hidden sm:block">
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 hover:border-[#1DE9B6]/40 transition-all cursor-pointer">
                    <Bell size={18} className="text-[#6F7674] group-hover:text-[#1DE9B6]" />
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full border-2 border-[#050807]" />
                </div>
            </div>
            <div className="flex items-center gap-3 md:gap-5 pl-6 md:pl-10 border-l border-white/5">
                <div className="text-right hidden sm:block">
                    <p className="text-xs md:text-sm font-black text-white">{adminName}</p>
                    <p className="text-[8px] md:text-[10px] uppercase font-black text-[#D4AF37] tracking-widest">Master Protocol</p>
                </div>
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-[1px] shadow-2xl">
                    <div className="w-full h-full rounded-[10px] md:rounded-[14px] bg-[#050807] flex items-center justify-center font-black text-white text-[10px] md:text-xs">HQ</div>
                </div>
            </div>
          </div>
        </header>

        <div className="flex-1 p-6 md:p-12 overflow-y-auto relative z-10 custom-scrollbar pb-20">
            <AnimatePresence mode="wait">
                {activeTab === 'Overview' && <Overview stats={stats} bookings={bookings} key="overview" />}
                {activeTab === 'Patient Leads' && (
                    <motion.div key="leads" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white/[0.03] backdrop-blur-3xl rounded-[32px] md:rounded-[48px] border border-white/5 overflow-hidden h-auto lg:h-[850px] flex flex-col shadow-2xl">
                        <div className="p-6 md:p-10 border-b border-white/5 flex flex-wrap items-center justify-between gap-6 md:gap-8">
                            <div className="relative w-full md:w-[450px] group">
                                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[#6F7674] group-focus-within:text-[#1DE9B6] transition-colors" size={20} />
                                <input type="text" placeholder="Scan clinical registry..." className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 pl-16 pr-6 text-sm outline-none focus:ring-2 ring-[#1DE9B6]/20 transition-all font-black uppercase tracking-widest placeholder:text-[#6F7674] text-white" value={search} onChange={(e) => setSearch(e.target.value)} />
                            </div>
                            <div className="flex gap-3 p-2 bg-white/5 rounded-2xl border border-white/5">
                                {['All', 'Pending', 'Contacted'].map(f => (
                                    <button 
                                        key={f} 
                                        onClick={() => setFilter(f)} 
                                        className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${filter === f ? 'bg-white text-[#050807] shadow-xl' : 'text-[#6F7674] hover:text-white'}`}
                                    >
                                        {f}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 overflow-y-auto custom-scrollbar">
                            {/* Desktop Table View */}
                            <table className="w-full text-left hidden md:table">
                                <thead className="bg-black/20 text-[10px] font-black uppercase tracking-[0.3em] text-[#6F7674] border-b border-white/5">
                                    <tr>
                                        <th className="px-12 py-8">Medical Profile</th>
                                        <th className="px-12 py-8">Clinical Scope</th>
                                        <th className="px-12 py-8">Deployment Slot</th>
                                        <th className="px-12 py-8">Protocol Status</th>
                                        <th className="px-12 py-8 text-right">Execution</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {filteredBookings.map((b) => (
                                        <tr key={b._id || b.id} className="hover:bg-white/[0.02] transition-colors group">
                                            <td className="px-12 py-8">
                                                <div className="flex items-center gap-6">
                                                    <div className="w-12 h-12 rounded-2xl bg-[#1DE9B6]/10 flex items-center justify-center font-black text-[#1DE9B6] border border-[#1DE9B6]/10">{b.name.charAt(0)}</div>
                                                    <div>
                                                        <p className="font-black text-white text-base tracking-tight">{b.name}</p>
                                                        <p className="text-[10px] font-black text-[#6F7674] uppercase tracking-widest mt-1">{b.phone}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-12 py-8">
                                                <div className="flex flex-col gap-2">
                                                    <span className="text-sm font-black text-white uppercase tracking-tight">{b.service}</span>
                                                    <span className={`text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full w-fit ${b.type === 'Home' ? 'bg-[#1DE9B6]/10 text-[#1DE9B6]' : 'bg-[#D4AF37]/10 text-[#D4AF37]'}`}>
                                                        {b.type === 'Home' ? 'RESIDENTIAL UNIT' : 'CLINICAL FACILITY'}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-12 py-8 text-sm font-black text-[#8E9391] uppercase tracking-widest">{b.date} · {b.time}</td>
                                            <td className="px-12 py-8">
                                                <span className={`px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.3em] ${b.status === 'Pending' ? 'bg-orange-500/10 text-orange-400' : 'bg-[#1DE9B6]/10 text-[#1DE9B6]'} border border-current/10`}>
                                                    {b.status}
                                                </span>
                                            </td>
                                            <td className="px-12 py-8 text-right">
                                                <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                                    <button onClick={() => handleUpdateStatus(b._id || b.id, 'Contacted')} className="w-12 h-12 bg-white/5 text-white rounded-2xl hover:bg-[#1DE9B6] hover:text-[#050807] transition-all border border-white/10 flex items-center justify-center shadow-lg"><Mail size={18} /></button>
                                                    <button onClick={() => handleDelete(b._id || b.id)} className="w-12 h-12 bg-red-500/10 text-red-400 rounded-2xl hover:bg-red-500 hover:text-white transition-all border border-red-500/10 flex items-center justify-center shadow-lg"><Trash2 size={18} /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {/* Mobile Card View */}
                            <div className="md:hidden p-6 space-y-6">
                                {filteredBookings.map((b) => (
                                    <div key={b._id || b.id} className="bg-white/[0.03] p-6 rounded-3xl border border-white/5 space-y-6">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-[#1DE9B6]/10 flex items-center justify-center font-black text-[#1DE9B6] border border-[#1DE9B6]/10">{b.name.charAt(0)}</div>
                                                <div>
                                                    <p className="font-black text-white text-sm tracking-tight">{b.name}</p>
                                                    <p className="text-[9px] font-black text-[#6F7674] uppercase tracking-widest">{b.phone}</p>
                                                </div>
                                            </div>
                                            <span className={`px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-[0.2em] ${b.status === 'Pending' ? 'bg-orange-500/10 text-orange-400' : 'bg-[#1DE9B6]/10 text-[#1DE9B6]'} border border-current/10`}>
                                                {b.status}
                                            </span>
                                        </div>
                                        <div className="pt-4 border-t border-white/5 grid grid-cols-2 gap-4 text-[9px] font-black uppercase tracking-widest">
                                            <div>
                                                <p className="text-[#6F7674] mb-1">Service</p>
                                                <p className="text-white">{b.service}</p>
                                            </div>
                                            <div>
                                                <p className="text-[#6F7674] mb-1">Deployment</p>
                                                <p className="text-white">{b.type}</p>
                                            </div>
                                            <div className="col-span-2">
                                                <p className="text-[#6F7674] mb-1">Slot</p>
                                                <p className="text-[#8E9391]">{b.date} · {b.time}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 pt-2">
                                            <button onClick={() => handleUpdateStatus(b._id || b.id, 'Contacted')} className="flex-1 py-4 bg-white/5 text-white rounded-2xl hover:bg-[#1DE9B6] hover:text-[#050807] transition-all border border-white/10 flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest"><Mail size={14} /> Contact</button>
                                            <button onClick={() => handleDelete(b._id || b.id)} className="w-14 py-4 bg-red-500/10 text-red-400 rounded-2xl hover:bg-red-500 hover:text-white transition-all border border-red-500/10 flex items-center justify-center"><Trash2 size={14} /></button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
                {activeTab === 'Schedule' && <Schedule bookings={bookings} key="schedule" />}
                {activeTab === 'Messages' && <Messages key="messages" />}
            </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
