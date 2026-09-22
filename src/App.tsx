import React, { useState } from 'react';
import { 
  Download, 
  Smartphone, 
  ShieldCheck, 
  Zap, 
  Film, 
  Sparkles, 
  CheckCircle2, 
  ChevronDown, 
  Play, 
  Star, 
  Flame, 
  Tv, 
  ExternalLink, 
  Copy, 
  Check, 
  Bell, 
  HardDriveDownload, 
  Sliders, 
  Layers,
  HelpCircle,
  Clock,
  Send,
  MessageSquare
} from 'lucide-react';

// =========================================================================
// 🔗 رابط تحميل ملف الـ APK الخاص بتطبيق AnimeVIP
// رابط ملف الـ APK الحقيقي والمباشر (Google Drive):
// =========================================================================
export const GOOGLE_DRIVE_APK_URL = "https://drive.google.com/file/d/1TSZv8tSu1x8qH1uAHBt6-gzwE9IuuFPf/view?usp=drivesdk";
// =========================================================================

export default function App() {
  const apkUrl = GOOGLE_DRIVE_APK_URL;
  const [copied, setCopied] = useState<boolean>(false);
  const [downloadStarted, setDownloadStarted] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'trending' | 'popular' | 'dubbed'>('trending');
  const [showPrivacyModal, setShowPrivacyModal] = useState<boolean>(false);

  const handleDownload = () => {
    setDownloadStarted(true);
    // Open Google Drive APK link directly in new window
    window.open(GOOGLE_DRIVE_APK_URL, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setDownloadStarted(false);
    }, 4000);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(GOOGLE_DRIVE_APK_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] selection:bg-violet-600 selection:text-white relative overflow-x-hidden font-['Cairo',sans-serif]">
      {/* Background Decorative Glow Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-violet-600/15 blur-[130px]" />
        <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] rounded-full bg-fuchsia-600/10 blur-[150px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] rounded-full bg-purple-800/12 blur-[140px]" />
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `radial-gradient(#8b5cf6 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      {/* Top Notification Bar / APK Link Notice */}
      <div className="relative z-50 bg-gradient-to-r from-violet-950/80 via-purple-900/60 to-violet-950/80 border-b border-violet-500/20 px-4 py-2 text-xs md:text-sm text-violet-200">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-semibold text-white">تحديث جديد متاح:</span>
            <span>إصدار AnimeVIP v2.5.0 متوفر الآن للتحميل المباشر عبر Google Drive</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={GOOGLE_DRIVE_APK_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDownload}
              className="text-xs bg-emerald-600/30 hover:bg-emerald-600/60 border border-emerald-400/40 text-emerald-200 px-3 py-1 rounded-md transition-all flex items-center gap-1.5 cursor-pointer font-bold"
              title="تحميل مباشر عبر Google Drive"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>تحميل مباشر (Google Drive)</span>
            </a>
            <button
              onClick={handleCopyLink}
              className="text-xs text-violet-300 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'تم النسخ!' : 'نسخ الرابط'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#09090b]/80 border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 shadow-lg shadow-violet-600/30 ring-1 ring-violet-400/40 group-hover:scale-105 transition-transform">
              <i className="fa-solid fa-crown text-yellow-300 text-xl drop-shadow-md"></i>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tight text-white font-['Plus_Jakarta_Sans',sans-serif]">Anime<span className="text-violet-400">VIP</span></span>
                <span className="text-[10px] uppercase font-bold tracking-widest bg-violet-500/20 text-violet-300 border border-violet-500/30 px-1.5 py-0.5 rounded">Pro</span>
              </div>
              <span className="text-[11px] text-zinc-400 -mt-1 font-medium">عالم الأنمي بين يديك</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-zinc-300">
            <a href="#features" className="hover:text-violet-400 transition-colors">المميزات</a>
            <a href="#preview" className="hover:text-violet-400 transition-colors">واجهة التطبيق</a>
            <a href="#how-to-install" className="hover:text-violet-400 transition-colors">طريقة التثبيت</a>
            <a href="#faq" className="hover:text-violet-400 transition-colors">الأسئلة الشائعة</a>
          </nav>

          {/* Header Action Button */}
          <div className="flex items-center gap-3">
            <a
              href={apkUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDownload}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 shadow-md shadow-violet-600/30 hover:shadow-violet-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <i className="fa-brands fa-android text-base text-emerald-300"></i>
              <span>تحميل التطبيق</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content / Copy (RTL Right) */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-right">
              
              {/* Glowing Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/30 backdrop-blur-md shadow-lg shadow-violet-950/50 mb-6 animate-pulse">
                <span className="flex h-2 w-2 rounded-full bg-violet-400" />
                <span className="text-sm font-bold text-violet-200">
                  🔥 التجربة المطلقة لعشاق الأنمي
                </span>
                <span className="text-xs bg-violet-500/30 text-violet-300 px-2 py-0.5 rounded-full font-semibold">
                  v2.5.0
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.2] mb-6">
                شاهد وتصفح أروع مسلسلات الأنمي{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-fuchsia-400">
                  بدقة 4K فائقة
                </span>{' '}
                وبلا أي إعلانات
              </h1>

              {/* Persuasive Description */}
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-8 max-w-2xl font-normal">
                تطبيق <strong className="text-violet-300 font-bold">AnimeVIP</strong> يمنحك تجربة سينمائية لا مثيل لها على هاتفك الأندرويد. مكتبة عملاقة تضم آلاف مسلسلات وأفلام الأنمي المترجمة والمدبلجة، بسيرفرات سحابية فائقة السرعة، وإمكانية التحميل المباشر للمشاهدة بدون إنترنت.
              </p>

              {/* Primary Download Button & Secondary Actions */}
              <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-4 mb-8">
                {/* Huge Glowing Download Button */}
                <a
                  id="hero-download-btn"
                  href={apkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleDownload}
                  className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-4 px-8 py-4 rounded-2xl font-black text-lg text-white bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:from-violet-500 hover:via-purple-500 hover:to-fuchsia-500 shadow-xl shadow-violet-600/40 hover:shadow-2xl hover:shadow-violet-600/60 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer overflow-hidden ring-2 ring-violet-400/40"
                >
                  {/* Subtle Shimmer effect */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-black/25 backdrop-blur-sm border border-white/20 text-emerald-400 text-2xl group-hover:rotate-6 transition-transform">
                    <i className="fa-brands fa-android"></i>
                  </div>

                  <div className="flex flex-col text-right">
                    <span className="text-base sm:text-lg font-black leading-tight">
                      {downloadStarted ? 'جاري فتح رابط Google Drive...' : 'تحميل ملف APK الآن'}
                    </span>
                    <span className="text-xs text-violet-200/90 font-medium">
                      رابط مباشر • Google Drive آمن ومفحوص
                    </span>
                  </div>

                  <Download className={`w-5 h-5 text-white/90 mr-1 transition-transform ${downloadStarted ? 'animate-bounce' : 'group-hover:translate-y-1'}`} />
                </a>

                {/* Secondary Feature Button */}
                <a
                  href="#how-to-install"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold text-sm text-zinc-300 bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 hover:border-violet-500/40 backdrop-blur-md transition-all duration-200"
                >
                  <HelpCircle className="w-4 h-4 text-violet-400" />
                  <span>طريقة التثبيت السريع</span>
                </a>
              </div>

              {/* Security / Verification Micro-features */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-zinc-400">
                <div className="flex items-center gap-1.5 bg-zinc-900/60 px-3 py-1.5 rounded-lg border border-white/5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>تم الفحص بـ VirusTotal (آمن 100%)</span>
                </div>
                <div className="flex items-center gap-1.5 bg-zinc-900/60 px-3 py-1.5 rounded-lg border border-white/5">
                  <Smartphone className="w-4 h-4 text-violet-400" />
                  <span>أندرويد 7.0 فما فوق</span>
                </div>
                <div className="flex items-center gap-1.5 bg-zinc-900/60 px-3 py-1.5 rounded-lg border border-white/5">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>سيرفرات فائقة السرعة</span>
                </div>
              </div>

              {/* Download Feedback Banner */}
              {downloadStarted && (
                <div className="mt-4 p-3 bg-emerald-950/80 border border-emerald-500/40 rounded-xl text-emerald-200 text-xs flex items-center gap-2.5 animate-fadeIn">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>بدأ التحميل بنجاح! إذا لم يبدأ تلقائياً، يمكنك الضغط على رابط التحميل المباشر مرة أخرى.</span>
                </div>
              )}
            </div>

            {/* Right Content: Mobile App Realistic Mockup */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              
              {/* Outer decorative ambient glows */}
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/30 to-fuchsia-600/30 rounded-[48px] blur-2xl -z-10 opacity-70" />
              
              {/* Smartphone Frame */}
              <div className="relative w-[300px] sm:w-[330px] rounded-[44px] p-3 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 shadow-2xl shadow-violet-950/80 border border-zinc-600/40 ring-1 ring-white/10">
                
                {/* Phone Inner Screen */}
                <div className="relative rounded-[36px] overflow-hidden bg-[#0e0e12] border border-black aspect-[9/19] flex flex-col justify-between text-right">
                  
                  {/* Status Bar */}
                  <div className="px-6 pt-3 pb-1 flex justify-between items-center text-[10px] text-zinc-300 font-sans z-20">
                    <span className="font-bold">21:45</span>
                    <div className="w-20 h-4 bg-black rounded-full mx-auto" />
                    <div className="flex items-center gap-1.5">
                      <i className="fa-solid fa-wifi text-[9px]"></i>
                      <i className="fa-solid fa-battery-full text-[10px]"></i>
                    </div>
                  </div>

                  {/* App Screen Content */}
                  <div className="flex-1 overflow-hidden px-3 pt-2 pb-16 flex flex-col gap-3">
                    
                    {/* App Header Inside Mockup */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-violet-600 to-fuchsia-600 flex items-center justify-center text-white text-xs">
                          <i className="fa-solid fa-crown text-[10px] text-yellow-300"></i>
                        </div>
                        <span className="font-bold text-xs text-white">AnimeVIP</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-400 text-xs">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <i className="fa-solid fa-bell text-violet-400"></i>
                      </div>
                    </div>

                    {/* Featured Anime Banner */}
                    <div className="relative rounded-2xl overflow-hidden h-40 bg-zinc-900 group border border-violet-500/30">
                      <img 
                        src="https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80" 
                        alt="Solo Leveling Anime Banner" 
                        className="w-full h-full object-cover opacity-75"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e12] via-[#0e0e12]/40 to-transparent" />
                      
                      {/* Banner Badges & Info */}
                      <div className="absolute top-2.5 right-2.5 flex items-center gap-1 bg-violet-600/90 text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow">
                        <Flame className="w-3 h-3 text-amber-300" />
                        <span>الأكثر مشاهدة</span>
                      </div>
                      <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-xs text-emerald-400 text-[9px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                        4K UHD
                      </div>

                      <div className="absolute bottom-2.5 right-2.5 left-2.5 text-right">
                        <span className="text-[10px] text-violet-300 font-semibold">مترجم • الحلقة 12</span>
                        <h4 className="text-sm font-black text-white leading-tight">Solo Leveling: Arise</h4>
                        <div className="mt-1 flex items-center justify-between">
                          <div className="flex items-center gap-1 text-[10px] text-amber-300">
                            <Star className="w-3 h-3 fill-amber-300" />
                            <span>9.8/10</span>
                          </div>
                          <button className="flex items-center gap-1 bg-violet-600 hover:bg-violet-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg">
                            <Play className="w-2.5 h-2.5 fill-white" />
                            <span>مشاهدة الآن</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Quick Filters in Mockup */}
                    <div className="flex gap-1.5 text-[10px] overflow-hidden">
                      <span className="px-2.5 py-1 rounded-lg bg-violet-600 text-white font-bold">الكل</span>
                      <span className="px-2.5 py-1 rounded-lg bg-zinc-800 text-zinc-300 font-medium">أكشن</span>
                      <span className="px-2.5 py-1 rounded-lg bg-zinc-800 text-zinc-300 font-medium">سحر وشونين</span>
                      <span className="px-2.5 py-1 rounded-lg bg-zinc-800 text-zinc-300 font-medium">مدبلج</span>
                    </div>

                    {/* Anime Carousel List inside Mockup */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between text-[11px] font-bold">
                        <span className="text-white">أحدث الحلقات المضافة</span>
                        <span className="text-violet-400 text-[10px]">المزيد</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {/* Item 1 */}
                        <div className="bg-zinc-900/90 rounded-xl p-1.5 border border-white/5 flex flex-col gap-1">
                          <div className="relative h-20 rounded-lg overflow-hidden bg-zinc-800">
                            <img 
                              src="https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=300&q=80" 
                              alt="Anime Preview" 
                              className="w-full h-full object-cover"
                            />
                            <span className="absolute bottom-1 right-1 bg-black/70 text-violet-300 text-[8px] font-bold px-1.5 py-0.5 rounded">
                              الحلقة 24
                            </span>
                          </div>
                          <span className="text-[10px] font-bold text-white truncate">Demon Slayer</span>
                          <span className="text-[8px] text-zinc-400">سيرفر سريع • مترجم</span>
                        </div>

                        {/* Item 2 */}
                        <div className="bg-zinc-900/90 rounded-xl p-1.5 border border-white/5 flex flex-col gap-1">
                          <div className="relative h-20 rounded-lg overflow-hidden bg-zinc-800">
                            <img 
                              src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=300&q=80" 
                              alt="Anime Preview 2" 
                              className="w-full h-full object-cover"
                            />
                            <span className="absolute bottom-1 right-1 bg-black/70 text-violet-300 text-[8px] font-bold px-1.5 py-0.5 rounded">
                              الحلقة 1089
                            </span>
                          </div>
                          <span className="text-[10px] font-bold text-white truncate">One Piece Egghead</span>
                          <span className="text-[8px] text-zinc-400">بدقة 1080p FHD</span>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Mockup Bottom Navigation Bar */}
                  <div className="absolute bottom-0 inset-x-0 bg-[#0e0e12]/95 backdrop-blur-md border-t border-white/10 px-5 py-2.5 flex items-center justify-between text-zinc-400 text-xs">
                    <div className="flex flex-col items-center text-violet-400">
                      <i className="fa-solid fa-house text-sm"></i>
                      <span className="text-[8px] mt-0.5 font-bold">الرئيسية</span>
                    </div>
                    <div className="flex flex-col items-center hover:text-white">
                      <i className="fa-solid fa-compass text-sm"></i>
                      <span className="text-[8px] mt-0.5">المكتبة</span>
                    </div>
                    <div className="flex flex-col items-center hover:text-white">
                      <i className="fa-solid fa-circle-down text-sm"></i>
                      <span className="text-[8px] mt-0.5">التنزيلات</span>
                    </div>
                    <div className="flex flex-col items-center hover:text-white">
                      <i className="fa-solid fa-user text-sm"></i>
                      <span className="text-[8px] mt-0.5">حسابي</span>
                    </div>
                  </div>

                </div>

                {/* Floating Aesthetic Glass Badges Over Phone */}
                <div className="absolute -left-6 top-20 bg-zinc-900/90 backdrop-blur-xl border border-violet-500/40 px-3.5 py-2.5 rounded-2xl shadow-xl shadow-black/80 flex items-center gap-2.5 animate-bounce [animation-duration:5s]">
                  <div className="w-8 h-8 rounded-xl bg-violet-600/30 border border-violet-400/40 flex items-center justify-center text-violet-300">
                    <Zap className="w-4 h-4 text-yellow-300" />
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-white">0% تقطيع</p>
                    <p className="text-[10px] text-zinc-400">سيرفرات فائقة السرعة</p>
                  </div>
                </div>

                <div className="absolute -right-6 bottom-24 bg-zinc-900/90 backdrop-blur-xl border border-fuchsia-500/40 px-3.5 py-2.5 rounded-2xl shadow-xl shadow-black/80 flex items-center gap-2.5 animate-bounce [animation-duration:6s]">
                  <div className="w-8 h-8 rounded-xl bg-fuchsia-600/30 border border-fuchsia-400/40 flex items-center justify-center text-fuchsia-300">
                    <HardDriveDownload className="w-4 h-4 text-fuchsia-300" />
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-white">تحميل أوفلاين</p>
                    <p className="text-[10px] text-zinc-400">شاهد بدون إنترنت</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Bar (شريط الإحصائيات الفاخر) */}
      <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 backdrop-blur-xl border border-violet-500/20 rounded-3xl p-6 md:p-8 shadow-2xl shadow-black/90">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-white/10">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center pt-4 md:pt-0">
              <div className="w-12 h-12 rounded-2xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400 mb-3 shadow-inner">
                <i className="fa-solid fa-users text-xl"></i>
              </div>
              <span className="text-2xl sm:text-3xl font-black text-white font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">500,000+</span>
              <span className="text-xs sm:text-sm font-semibold text-zinc-300 mt-1">مستخدم نشط يومياً</span>
              <span className="text-[11px] text-zinc-500">في جميع الدول العربية</span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center pt-4 md:pt-0">
              <div className="w-12 h-12 rounded-2xl bg-fuchsia-600/20 border border-fuchsia-500/30 flex items-center justify-center text-fuchsia-400 mb-3 shadow-inner">
                <i className="fa-solid fa-film text-xl"></i>
              </div>
              <span className="text-2xl sm:text-3xl font-black text-white font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">18,500+</span>
              <span className="text-xs sm:text-sm font-semibold text-zinc-300 mt-1">حلقة وفيلم أنمي</span>
              <span className="text-[11px] text-zinc-500">مترجم ومدبلج بالكامل</span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center text-center pt-4 md:pt-0">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3 shadow-inner">
                <i className="fa-solid fa-shield-halved text-xl"></i>
              </div>
              <span className="text-2xl sm:text-3xl font-black text-white font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">100%</span>
              <span className="text-xs sm:text-sm font-semibold text-zinc-300 mt-1">مجاني وآمن تماماً</span>
              <span className="text-[11px] text-zinc-500">بدون أي رسوم اشتراك</span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center text-center pt-4 md:pt-0">
              <div className="w-12 h-12 rounded-2xl bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3 shadow-inner">
                <i className="fa-solid fa-star text-xl"></i>
              </div>
              <span className="text-2xl sm:text-3xl font-black text-white font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">4.9 / 5</span>
              <span className="text-xs sm:text-sm font-semibold text-zinc-300 mt-1">تقييم مجتمع الأنمي</span>
              <span className="text-[11px] text-zinc-500">بناءً على 48,000 مراجعة</span>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section (3 Glassmorphism Cards) */}
      <section id="features" className="relative pt-24 pb-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3.5 py-1.5 rounded-full">
              ميزات لا تُضاهى
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 tracking-tight">
              لماذا يختار عشاق الأنمي تطبيق{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                AnimeVIP
              </span>
              ؟
            </h2>
            <p className="text-zinc-400 mt-4 text-base sm:text-lg">
              صُمم التطبيق بالكامل من أجل محبي الأنمي في الوطن العربي لتوفير أسرع وأرقى تجربة مشاهدة وتحميل بدون قيود.
            </p>
          </div>

          {/* 3 Glassmorphic Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature Card 1 */}
            <div className="group relative rounded-3xl p-8 bg-zinc-900/60 backdrop-blur-xl border border-white/10 hover:border-violet-500/50 shadow-xl shadow-black/50 hover:shadow-violet-950/40 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-violet-600/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div>
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-violet-600/30 to-purple-600/30 border border-violet-500/40 flex items-center justify-center text-violet-400 mb-6 group-hover:scale-110 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300 shadow-lg shadow-violet-600/20">
                  <Film className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-white mb-3 tracking-tight">
                  مكتبة أنمي ضخمة بدقة 4K
                </h3>

                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-normal">
                  أكبر أرشيف عربي لمسلسلات وأفلام الأنمي الكلاسيكية والجديدة. تصدر الحلقات بدقة فائقة 4K و 1080p فور بثها في التلفزيون الياباني مع ترجمات ودبلجات حصرية متعددة.
                </p>
              </div>

              {/* Bullet Features */}
              <ul className="space-y-2.5 pt-4 border-t border-white/5 text-xs text-zinc-300 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                  <span>تحديث فوري يومي للحلقات فور صدورها</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                  <span>سيرفرات متعددة وجودات من 360p إلى 4K</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                  <span>أفلام الأنمي والأوفا (OVAs) كاملة</span>
                </li>
              </ul>
            </div>

            {/* Feature Card 2 */}
            <div className="group relative rounded-3xl p-8 bg-zinc-900/60 backdrop-blur-xl border border-violet-500/30 hover:border-violet-400 shadow-xl shadow-black/50 hover:shadow-violet-900/50 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between ring-1 ring-violet-500/20">
              <div className="absolute top-4 left-4 bg-violet-600/90 text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow-md">
                الأكثر تميزاً
              </div>
              
              <div>
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-fuchsia-600/30 to-violet-600/30 border border-fuchsia-500/40 flex items-center justify-center text-fuchsia-400 mb-6 group-hover:scale-110 group-hover:bg-fuchsia-600 group-hover:text-white transition-all duration-300 shadow-lg shadow-fuchsia-600/20">
                  <Zap className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-white mb-3 tracking-tight">
                  سريع وخفيف وبلا إعلانات
                </h3>

                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-normal">
                  تخلص نهائياً من الإعلانات المزعجة والنوافذ المنبثقة! تطبيق AnimeVIP مُبرمج بأحدث التقنيات ليعمل بسلاسة فائقة دون استهلاك بطارية الهاتف أو ملء الذاكرة العشوائية.
                </p>
              </div>

              {/* Bullet Features */}
              <ul className="space-y-2.5 pt-4 border-t border-white/5 text-xs text-zinc-300 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-fuchsia-400 shrink-0" />
                  <span>صفر إعلانات منبثقة أو مقاطعة للمشاهدة</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-fuchsia-400 shrink-0" />
                  <span>حجم التطبيق أقل من 30 ميغابايت فقط</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-fuchsia-400 shrink-0" />
                  <span>مشغل فيديو صاروخي بدون أي Buffer أو تقطيع</span>
                </li>
              </ul>
            </div>

            {/* Feature Card 3 */}
            <div className="group relative rounded-3xl p-8 bg-zinc-900/60 backdrop-blur-xl border border-white/10 hover:border-violet-500/50 shadow-xl shadow-black/50 hover:shadow-violet-950/40 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-purple-600/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div>
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600/30 to-indigo-600/30 border border-purple-500/40 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-lg shadow-purple-600/20">
                  <HardDriveDownload className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-white mb-3 tracking-tight">
                  تحميل للمشاهدة بدون إنترنت
                </h3>

                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-normal">
                  حمّل حلقات كاملة أو مواسم بضغطة زر واحدة لمشاهدتها في السفر وأوقات انقطاع الإنترنت. يتميز بمشغل مدمج ذكي يحفظ تقدم المشاهدة وتخطي شارة البداية والنهاية تلقائياً.
                </p>
              </div>

              {/* Bullet Features */}
              <ul className="space-y-2.5 pt-4 border-t border-white/5 text-xs text-zinc-300 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>تنزيل سريع بمسارات متعددة (Multi-threaded)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>تخطي شارة البداية وتخطي الملخص تلقائياً</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>نظام إشعارات فوري عند توفر حلقات مفضلتك</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* App Showcase / Interactive Anime Explorer Preview */}
      <section id="preview" className="relative py-20 bg-zinc-950/70 border-y border-white/5 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-violet-400">
                مكتبة المحتوى
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mt-1">
                استكشف أشهر الأنميات المتاحة داخل التطبيق
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 bg-zinc-900/90 p-1.5 rounded-2xl border border-white/10">
              <button
                onClick={() => setActiveTab('trending')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'trending' ? 'bg-violet-600 text-white shadow-md' : 'text-zinc-400 hover:text-white'
                }`}
              >
                الأكثر تداولاً 🔥
              </button>
              <button
                onClick={() => setActiveTab('popular')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'popular' ? 'bg-violet-600 text-white shadow-md' : 'text-zinc-400 hover:text-white'
                }`}
              >
                أعلى تقييماً ⭐
              </button>
              <button
                onClick={() => setActiveTab('dubbed')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'dubbed' ? 'bg-violet-600 text-white shadow-md' : 'text-zinc-400 hover:text-white'
                }`}
              >
                مدبلج عربي 🎙️
              </button>
            </div>
          </div>

          {/* Anime Grid Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Anime Card 1 */}
            <div className="group bg-zinc-900/80 rounded-2xl overflow-hidden border border-white/10 hover:border-violet-500/50 shadow-lg hover:shadow-violet-950/50 transition-all duration-300 flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-800">
                <img 
                  src="https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=500&q=80" 
                  alt="Solo Leveling" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-violet-600 text-white text-[10px] font-black px-2 py-0.5 rounded-md shadow">
                  4K UHD
                </div>
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-xs text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-400" />
                  <span>9.8</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 justify-center">
                  <a 
                    href={GOOGLE_DRIVE_APK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleDownload}
                    className="w-full py-2 bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-lg shadow-violet-600/40 cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>مشاهدة في التطبيق</span>
                  </a>
                </div>
              </div>
              <div className="p-3.5 flex flex-col gap-1 text-right">
                <span className="text-[10px] text-violet-400 font-semibold">موسم 2 • أكشن / خيال</span>
                <h4 className="font-bold text-white text-sm group-hover:text-violet-300 transition-colors truncate">سولو ليفلينج (Solo Leveling)</h4>
                <div className="flex items-center justify-between text-[11px] text-zinc-400 mt-1">
                  <span>مترجم ومدبلج</span>
                  <span className="text-emerald-400">حلقات كاملة</span>
                </div>
              </div>
            </div>

            {/* Anime Card 2 */}
            <div className="group bg-zinc-900/80 rounded-2xl overflow-hidden border border-white/10 hover:border-violet-500/50 shadow-lg hover:shadow-violet-950/50 transition-all duration-300 flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-800">
                <img 
                  src="https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=500&q=80" 
                  alt="Demon Slayer" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-violet-600 text-white text-[10px] font-black px-2 py-0.5 rounded-md shadow">
                  1080p FHD
                </div>
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-xs text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-400" />
                  <span>9.6</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 justify-center">
                  <a 
                    href={GOOGLE_DRIVE_APK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleDownload}
                    className="w-full py-2 bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-lg shadow-violet-600/40 cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>مشاهدة في التطبيق</span>
                  </a>
                </div>
              </div>
              <div className="p-3.5 flex flex-col gap-1 text-right">
                <span className="text-[10px] text-violet-400 font-semibold">موسم 4 • قتال شياطين</span>
                <h4 className="font-bold text-white text-sm group-hover:text-violet-300 transition-colors truncate">قاتل الشياطين (Demon Slayer)</h4>
                <div className="flex items-center justify-between text-[11px] text-zinc-400 mt-1">
                  <span>ترجمة احترافية</span>
                  <span className="text-emerald-400">مكتمل</span>
                </div>
              </div>
            </div>

            {/* Anime Card 3 */}
            <div className="group bg-zinc-900/80 rounded-2xl overflow-hidden border border-white/10 hover:border-violet-500/50 shadow-lg hover:shadow-violet-950/50 transition-all duration-300 flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-800">
                <img 
                  src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=500&q=80" 
                  alt="Attack on Titan" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-violet-600 text-white text-[10px] font-black px-2 py-0.5 rounded-md shadow">
                  4K UHD
                </div>
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-xs text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-400" />
                  <span>9.9</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 justify-center">
                  <a 
                    href={GOOGLE_DRIVE_APK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleDownload}
                    className="w-full py-2 bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-lg shadow-violet-600/40 cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>مشاهدة في التطبيق</span>
                  </a>
                </div>
              </div>
              <div className="p-3.5 flex flex-col gap-1 text-right">
                <span className="text-[10px] text-violet-400 font-semibold">ملحمي • دراما وقوة</span>
                <h4 className="font-bold text-white text-sm group-hover:text-violet-300 transition-colors truncate">هجوم العمالقة (Attack on Titan)</h4>
                <div className="flex items-center justify-between text-[11px] text-zinc-400 mt-1">
                  <span>جميع المواسم</span>
                  <span className="text-emerald-400">سيرفرات 4K</span>
                </div>
              </div>
            </div>

            {/* Anime Card 4 */}
            <div className="group bg-zinc-900/80 rounded-2xl overflow-hidden border border-white/10 hover:border-violet-500/50 shadow-lg hover:shadow-violet-950/50 transition-all duration-300 flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-800">
                <img 
                  src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=500&q=80" 
                  alt="Jujutsu Kaisen" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-violet-600 text-white text-[10px] font-black px-2 py-0.5 rounded-md shadow">
                  1080p FHD
                </div>
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-xs text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-400" />
                  <span>9.7</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 justify-center">
                  <a 
                    href={GOOGLE_DRIVE_APK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleDownload}
                    className="w-full py-2 bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-lg shadow-violet-600/40 cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>مشاهدة في التطبيق</span>
                  </a>
                </div>
              </div>
              <div className="p-3.5 flex flex-col gap-1 text-right">
                <span className="text-[10px] text-violet-400 font-semibold">موسم 2 • أرك شيبويا</span>
                <h4 className="font-bold text-white text-sm group-hover:text-violet-300 transition-colors truncate">جوجوتسو كايسن (Jujutsu Kaisen)</h4>
                <div className="flex items-center justify-between text-[11px] text-zinc-400 mt-1">
                  <span>مترجم ومدبلج</span>
                  <span className="text-emerald-400">مكتمل</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How to Install Section (خطوات التثبيت السهلة) */}
      <section id="how-to-install" className="relative py-24 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3.5 py-1.5 rounded-full">
              دليل التثبيت السريع
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4">
              كيف تقوم بتثبيت تطبيق <span className="text-violet-400">AnimeVIP</span> في دقيقة واحدة؟
            </h2>
            <p className="text-zinc-400 mt-3 text-base">
              خطوات بسيطة وسهلة لتشغيل التطبيق على أي هاتف يعمل بنظام أندرويد دون الحاجة لمتجر Google Play.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Step 1 */}
            <div className="relative rounded-3xl p-8 bg-zinc-900/60 backdrop-blur-xl border border-white/10 hover:border-violet-500/30 transition-all flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-violet-600/20 border border-violet-500/30 text-violet-400 font-black text-xl flex items-center justify-center mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-2">حمّل ملف الـ APK</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                اضغط على زر <strong className="text-violet-300">تحميل ملف APK الآن</strong> في أعلى الصفحة ليتم تنزيل ملف التثبيت المباشر بحجم 28.4 ميغابايت على هاتفك.
              </p>
              <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1 mt-auto">
                <Check className="w-3.5 h-3.5" /> تحميل آمن ومباشر
              </span>
            </div>

            {/* Step 2 */}
            <div className="relative rounded-3xl p-8 bg-zinc-900/60 backdrop-blur-xl border border-white/10 hover:border-violet-500/30 transition-all flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-purple-600/20 border border-purple-500/30 text-purple-400 font-black text-xl flex items-center justify-center mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-2">اسمح بالتثبيت</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                عند فتح الملف، إذا ظهر تنبيه، اختر "السماح بالتثبيت من هذا المصدر" من إعدادات الحماية في متصفحك أو مدير الملفات لتثبيت ملفات الـ APK الخارجية بأمان.
              </p>
              <span className="text-xs text-purple-400 font-semibold flex items-center gap-1 mt-auto">
                <ShieldCheck className="w-3.5 h-3.5" /> إجراء قياسي في الأندرويد
              </span>
            </div>

            {/* Step 3 */}
            <div className="relative rounded-3xl p-8 bg-zinc-900/60 backdrop-blur-xl border border-white/10 hover:border-violet-500/30 transition-all flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-fuchsia-600/20 border border-fuchsia-500/30 text-fuchsia-400 font-black text-xl flex items-center justify-center mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-2">استمتع بالمشاهدة!</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                افتح تطبيق <strong className="text-violet-300">AnimeVIP</strong> فور انتهاء التثبيت، وتصفح آلاف مسلسلات وأفلام الأنمي بدون تسجيل إجباري وبدون أي اشتراك.
              </p>
              <span className="text-xs text-fuchsia-400 font-semibold flex items-center gap-1 mt-auto">
                <Sparkles className="w-3.5 h-3.5" /> وصول فوري غير محدود
              </span>
            </div>

          </div>

          {/* Quick CTA Box below steps */}
          <div className="mt-12 text-center">
            <a
              href={apkUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDownload}
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-violet-600 hover:bg-violet-500 shadow-lg shadow-violet-600/30 hover:scale-105 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>جاهز للبدء؟ اضغط لتحميل ملف APK الآن</span>
            </a>
          </div>

        </div>
      </section>

      {/* FAQ Section (الأسئلة الشائعة) */}
      <section id="faq" className="relative py-20 bg-zinc-950/60 border-t border-white/5 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3.5 py-1.5 rounded-full">
              إجابات سريعة
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4">
              الأسئلة الأكثر شيوعاً حول <span className="text-violet-400">AnimeVIP</span>
            </h2>
            <p className="text-zinc-400 mt-2 text-sm">
              كل ما تحتاج لمعرفته حول الأمان، الجودة، والتحديثات.
            </p>
          </div>

          <div className="space-y-4">
            
            {/* FAQ 1 */}
            <div className="rounded-2xl bg-zinc-900/70 border border-white/10 overflow-hidden transition-all">
              <button
                onClick={() => toggleFaq(0)}
                className="w-full px-6 py-5 flex items-center justify-between text-right font-bold text-base text-white hover:text-violet-300 transition-colors cursor-pointer"
              >
                <span>هل تطبيق AnimeVIP مجاني بنسبة 100%؟</span>
                <ChevronDown className={`w-5 h-5 text-violet-400 transition-transform duration-200 ${openFaq === 0 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 0 && (
                <div className="px-6 pb-5 text-sm text-zinc-300 leading-relaxed border-t border-white/5 pt-3 animate-fadeIn">
                  نعم، تطبيق AnimeVIP مجاني بالكامل مدى الحياة. لا يتطلب أي اشتراك شهري، ولا يطلب إدخال بطاقة ائتمانية، كما أنه يتيح لك الوصول لكافة الجودات وميزة التحميل بدون قيود.
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="rounded-2xl bg-zinc-900/70 border border-white/10 overflow-hidden transition-all">
              <button
                onClick={() => toggleFaq(1)}
                className="w-full px-6 py-5 flex items-center justify-between text-right font-bold text-base text-white hover:text-violet-300 transition-colors cursor-pointer"
              >
                <span>هل ملف الـ APK آمن للتحميل والتثبيت على هاتفي؟</span>
                <ChevronDown className={`w-5 h-5 text-violet-400 transition-transform duration-200 ${openFaq === 1 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 1 && (
                <div className="px-6 pb-5 text-sm text-zinc-300 leading-relaxed border-t border-white/5 pt-3 animate-fadeIn">
                  بالتأكيد! يتم فحص كل إصدار جديد من ملف AnimeVIP.apk بواسطة أكثر من 70 محرك مكافحة فيروسات وبرمجيات ضارة عبر موقع VirusTotal العالمي قبل نشره، وهو خالٍ تماماً من أي برمجيات تجسس أو ملفات ضارة.
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="rounded-2xl bg-zinc-900/70 border border-white/10 overflow-hidden transition-all">
              <button
                onClick={() => toggleFaq(2)}
                className="w-full px-6 py-5 flex items-center justify-between text-right font-bold text-base text-white hover:text-violet-300 transition-colors cursor-pointer"
              >
                <span>هل يحتوي التطبيق على إعلانات منبثقة مزعجة؟</span>
                <ChevronDown className={`w-5 h-5 text-violet-400 transition-transform duration-200 ${openFaq === 2 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 2 && (
                <div className="px-6 pb-5 text-sm text-zinc-300 leading-relaxed border-t border-white/5 pt-3 animate-fadeIn">
                  لا! هدفنا الرئيسي في AnimeVIP هو تقديم تجربة نقية لعشاق الأنمي. لا توجد أي إعلانات منبثقة أو روابط تحويل إجباري تعكر صفو المشاهدة.
                </div>
              )}
            </div>

            {/* FAQ 4 */}
            <div className="rounded-2xl bg-zinc-900/70 border border-white/10 overflow-hidden transition-all">
              <button
                onClick={() => toggleFaq(3)}
                className="w-full px-6 py-5 flex items-center justify-between text-right font-bold text-base text-white hover:text-violet-300 transition-colors cursor-pointer"
              >
                <span>كيف أقوم بتحديث التطبيق عند صدور إصدار جديد؟</span>
                <ChevronDown className={`w-5 h-5 text-violet-400 transition-transform duration-200 ${openFaq === 3 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 3 && (
                <div className="px-6 pb-5 text-sm text-zinc-300 leading-relaxed border-t border-white/5 pt-3 animate-fadeIn">
                  يحتوي التطبيق على نظام تحديث تلقائي ينبهك فور صدور أي إصدار جديد، ويمكنك التحديث بنقرة واحدة من داخل التطبيق دون فقدان قائمة المفضلة أو سجل المشاهدة. كما يمكنك دائماً تنزيل أحدث إصدار من هذه الصفحة الرسمية.
                </div>
              )}
            </div>

            {/* FAQ 5 */}
            <div className="rounded-2xl bg-zinc-900/70 border border-white/10 overflow-hidden transition-all">
              <button
                onClick={() => toggleFaq(4)}
                className="w-full px-6 py-5 flex items-center justify-between text-right font-bold text-base text-white hover:text-violet-300 transition-colors cursor-pointer"
              >
                <span>هل يعمل التطبيق على أجهزة Android TV والتلفزيونات الذكية؟</span>
                <ChevronDown className={`w-5 h-5 text-violet-400 transition-transform duration-200 ${openFaq === 4 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 4 && (
                <div className="px-6 pb-5 text-sm text-zinc-300 leading-relaxed border-t border-white/5 pt-3 animate-fadeIn">
                  نعم، يدعم ملف الـ APK التثبيت على أجهزة Android TV و TV Box، بالإضافة إلى إمكانية بث الفيديو مباشرة من الهاتف إلى شاشة التلفاز الذكية عبر ميزة Chromecast المدمجة في المشغل.
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Final Call to Action Hero Banner */}
      <section className="relative py-20 z-10 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-violet-950 via-purple-900/70 to-violet-950 border border-violet-500/30 overflow-hidden text-center shadow-2xl shadow-violet-950/80">
            
            {/* Radial background highlight */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.2),transparent_70%)] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-violet-600/30 border border-violet-400/40 flex items-center justify-center text-yellow-300 text-2xl mb-6 shadow-lg shadow-violet-600/30">
                <i className="fa-solid fa-crown"></i>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
                انضم الآن إلى مجتمع عشاق الأنمي الأكبر
              </h2>

              <p className="text-violet-200/90 text-base sm:text-lg max-w-2xl mb-8 leading-relaxed">
                لا تفوت أي حلقة بعد اليوم! حمّل تطبيق <span className="font-bold text-white">AnimeVIP</span> الآن واستمتع بمشاهدة أحدث الحلقات بجودة سينمائية فائقة وسرعة خيالية.
              </p>

              {/* Big CTA Button */}
              <a
                href={apkUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDownload}
                className="group inline-flex items-center gap-4 px-9 py-4 rounded-2xl font-black text-lg text-white bg-gradient-to-r from-violet-500 via-purple-600 to-fuchsia-600 hover:from-violet-400 hover:via-purple-500 hover:to-fuchsia-500 shadow-xl shadow-violet-600/50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer ring-2 ring-violet-300/40"
              >
                <i className="fa-brands fa-android text-2xl text-emerald-300"></i>
                <span>تحميل AnimeVIP مجاناً (APK)</span>
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </a>

              <div className="mt-4 flex items-center gap-4 text-xs text-violet-300/80">
                <span>إصدار 2.5.0</span>
                <span>•</span>
                <span>28.4 ميغابايت</span>
                <span>•</span>
                <span>تحديث سبتمبر 2026</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer (التذييل الاحترافي) */}
      <footer className="relative bg-[#060608] border-t border-white/5 pt-16 pb-12 z-10 text-zinc-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            
            {/* Col 1: Brand & Description */}
            <div className="md:col-span-2 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-md">
                  <i className="fa-solid fa-crown text-yellow-300"></i>
                </div>
                <span className="text-2xl font-black text-white font-['Plus_Jakarta_Sans',sans-serif]">Anime<span className="text-violet-400">VIP</span></span>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
                التطبيق العربي الرائد لمشاهدة وتحميل مسلسلات وأفلام الأنمي المترجمة والمدبلجة بدقة عالية وسيرفرات فائقة السرعة.
              </p>

              {/* Social / Community Icons */}
              <div className="flex items-center gap-3 mt-2">
                <a 
                  href="https://t.me" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-zinc-900 hover:bg-violet-600 text-zinc-300 hover:text-white border border-white/10 flex items-center justify-center transition-all"
                  title="قناة تيليجرام"
                >
                  <i className="fa-brands fa-telegram text-base"></i>
                </a>
                <a 
                  href="https://discord.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-zinc-900 hover:bg-violet-600 text-zinc-300 hover:text-white border border-white/10 flex items-center justify-center transition-all"
                  title="سيرفر ديسكورد"
                >
                  <i className="fa-brands fa-discord text-base"></i>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-zinc-900 hover:bg-violet-600 text-zinc-300 hover:text-white border border-white/10 flex items-center justify-center transition-all"
                  title="تويتر / X"
                >
                  <i className="fa-brands fa-x-twitter text-base"></i>
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-zinc-900 hover:bg-violet-600 text-zinc-300 hover:text-white border border-white/10 flex items-center justify-center transition-all"
                  title="يوتيوب"
                >
                  <i className="fa-brands fa-youtube text-base"></i>
                </a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h4 className="font-bold text-white text-base mb-4">روابط سريعة</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#features" className="hover:text-violet-400 transition-colors">مزايا التطبيق</a></li>
                <li><a href="#preview" className="hover:text-violet-400 transition-colors">المكتبة ومحتوى الأنمي</a></li>
                <li><a href="#how-to-install" className="hover:text-violet-400 transition-colors">طريقة التثبيت</a></li>
                <li><a href="#faq" className="hover:text-violet-400 transition-colors">الأسئلة الشائعة</a></li>
              </ul>
            </div>

            {/* Col 3: Support & Legal */}
            <div>
              <h4 className="font-bold text-white text-base mb-4">الدعم والخصوصية</h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button 
                    onClick={() => setShowPrivacyModal(true)} 
                    className="hover:text-violet-400 transition-colors cursor-pointer text-right"
                  >
                    سياسة الخصوصية
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setShowPrivacyModal(true)} 
                    className="hover:text-violet-400 transition-colors cursor-pointer text-right"
                  >
                    شروط الاستخدام
                  </button>
                </li>
                <li>
                  <a href="#faq" className="hover:text-violet-400 transition-colors">
                    الإبلاغ عن مشكلة
                  </a>
                </li>
                <li>
                  <a
                    href={GOOGLE_DRIVE_APK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleDownload}
                    className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>تحميل ملف APK (مباشر)</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <p>© {new Date().getFullYear()} تطبيق AnimeVIP. جميع الحقوق محفوظة لعشاق الأنمي في العالم العربي.</p>
            <p className="flex items-center gap-1">
              <span>تم التطوير بحب وإتقان</span>
              <span className="text-violet-400">♥</span>
              <span>لأفضل مجتمع أنمي</span>
            </p>
          </div>

        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg rounded-3xl bg-zinc-900 border border-white/10 p-6 sm:p-8 shadow-2xl text-right max-h-[85vh] overflow-y-auto">
            
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="w-8 h-8 rounded-full bg-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center cursor-pointer"
              >
                ✕
              </button>
              <h3 className="font-bold text-lg text-white">سياسة الخصوصية وشروط الاستخدام</h3>
            </div>

            <div className="space-y-4 text-xs text-zinc-300 leading-relaxed">
              <p>
                نحن في <strong>AnimeVIP</strong> نحترم خصوصيتك لأقصى درجة. تم تصميم هذا التطبيق لتقديم خدمة ترفيهية عالية الجودة دون جمع أي بيانات شخصية حساسة.
              </p>
              <h4 className="font-bold text-white text-sm">1. جمع البيانات</h4>
              <p>
                لا يطلب التطبيق أذونات غير ضرورية مثل الكاميرا أو جهات الاتصال. الأذونات تقتصر فقط على الاتصال بالإنترنت ومساحة التخزين لحفظ الحلقات المحملة.
              </p>
              <h4 className="font-bold text-white text-sm">2. أمان التطبيق</h4>
              <p>
                الملف المنشور آمن وخالٍ من الفيروسات والبرمجيات الخبيثة، ومفحوص دورياً مع كل تحديث.
              </p>
              <h4 className="font-bold text-white text-sm">3. حقوق الملكية</h4>
              <p>
                كافة مسلسلات وأفلام الأنمي ملك لأصحابها وشركات الإنتاج المرخصة، ويعمل التطبيق كمفهرس ومشغل سحابي لمحتوى مجتمع الأنمي.
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-violet-600 hover:bg-violet-500 transition-all cursor-pointer"
              >
                فهمت وموافق
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
