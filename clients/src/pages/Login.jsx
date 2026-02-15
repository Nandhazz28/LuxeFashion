import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../api/authApi";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-hot-toast";
import { Mail, Lock, ArrowRight, Sparkles } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(form);
      login(data);
      toast.success("Welcome Back", {
        style: { borderRadius: '1rem', background: '#111', color: '#fff', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase' }
      });
      navigate("/profile");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50/50 relative overflow-hidden px-6">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-100/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-100/30 rounded-full blur-[120px]" />

      <div className="w-full max-w-md relative z-10">
        <div className="bg-white p-10 rounded-[3rem] shadow-2xl shadow-pink-100/40 border border-gray-100">
          
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-pink-50 rounded-2xl text-pink-500 mb-6">
              <Sparkles size={28} />
            </div>
            <h2 className="text-4xl font-black text-gray-900 tracking-tighter mb-2">Welcome</h2>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-300 group-focus-within:text-pink-500 transition-colors">
                <Mail size={18} />
              </div>
              <input
                type="email"
                required
                placeholder="Email Address"
                className="w-full pl-14 pr-6 py-4.5 bg-gray-50 border-none rounded-2xl text-sm font-bold focus:ring-2 focus:ring-pink-500 transition-all placeholder:text-gray-400 placeholder:font-medium tracking-tight h-14"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-300 group-focus-within:text-pink-500 transition-colors">
                <Lock size={18} />
              </div>
              <input
                type="password"
                required
                placeholder="Password"
                className="w-full pl-14 pr-6 py-4.5 bg-gray-50 border-none rounded-2xl text-sm font-bold focus:ring-2 focus:ring-pink-500 transition-all placeholder:text-gray-400 placeholder:font-medium tracking-tight h-14"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>

            

            <button className="group w-full bg-gray-900 text-white h-14 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] hover:bg-black transition-all shadow-xl shadow-gray-200 flex items-center justify-center gap-3 active:scale-95">
              Login <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-gray-50 text-center">
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
              New here? <Link to="/register" className="text-pink-600 font-black hover:underline underline-offset-8 ml-1 transition-all">Create Account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;