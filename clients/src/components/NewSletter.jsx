import { useState } from "react";
import { Mail, CheckCircle, AlertCircle, Sparkles, ArrowRight } from "lucide-react";
import { Toaster, } from "react-hot-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    setTimeout(() => {
      if (email.includes("@")) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        toast.error("Invalid Entry");
      }
    }, 1500);
  };

  return (
    <section className="bg-white py-24 px-4 md:px-10">
      <div className="max-w-[1440px] mx-auto bg-gray-50 rounded-[3.5rem] p-10 md:p-24 border border-gray-100 overflow-hidden relative">
        
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100/30 rounded-full blur-[100px] -z-0" />

        <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles size={14} className="text-pink-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">
                The Inner Circle
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter leading-none uppercase mb-6">
              Access the <br />
              <span className="text-pink-600 italic font-serif lowercase tracking-normal">
                Archive
              </span>
            </h2>

            <p className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest leading-relaxed max-w-md">
              Join our global syndicate to receive priority access to seasonal drops, 
              private manifest releases, and exclusive editorial content.
            </p>
          </div>

          <div className="lg:col-span-5 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 ml-1">
                  Registration_Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setStatus("idle");
                    }}
                    placeholder="USER@DOMAIN.COM"
                    className="w-full bg-gray-50 border-none h-16 rounded-2xl px-6 text-[11px] font-bold tracking-widest focus:ring-2 focus:ring-pink-500 transition-all uppercase placeholder:text-gray-200"
                    disabled={status === "success" || status === "loading"}
                  />
                  {status === "error" && (
                    <span className="absolute -bottom-5 left-1 text-[8px] font-black uppercase text-red-400 flex items-center gap-1 tracking-widest">
                      <AlertCircle size={10} /> Error: Invalid Format
                    </span>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className={`w-full h-16 rounded-2xl flex items-center justify-center gap-3 transition-all text-[10px] font-black uppercase tracking-[0.4em] ${
                  status === "success" 
                    ? "bg-green-50 text-green-600" 
                    : "bg-gray-900 text-white hover:bg-pink-600 shadow-xl shadow-gray-200"
                }`}
                disabled={status === "loading" || status === "success"}
              >
                {status === "loading" ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : status === "success" ? (
                  <>
                    <CheckCircle size={16} /> Verified
                  </>
                ) : (
                  <>
                    Join the Syndicate <ArrowRight size={14} />
                  </>
                )}
              </button>

              <p className="text-[8px] font-bold text-gray-300 uppercase tracking-[0.2em] text-center pt-2">
                By registering, you agree to our <u>Privacy Protocol</u>.
              </p>
            </form>
          </div>
        </div>
      </div>
      <Toaster 
        toastOptions={{
          style: {
            borderRadius: '1rem',
            background: '#111',
            color: '#fff',
            fontSize: '10px',
            fontWeight: '900',
            textTransform: 'uppercase',
            letterSpacing: '0.2em'
          }
        }}
      />
    </section>
  );
};

export default Newsletter;