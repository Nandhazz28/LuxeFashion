import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { ShoppingBag, User, Menu, X, Sparkles } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { toast } from "react-hot-toast";

const NavBar = () => {
  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    toast.success("Session Ended", {
      style: {
        borderRadius: '1rem',
        background: '#111',
        color: '#fff',
        fontSize: '12px',
        fontWeight: 'bold',
        textTransform: 'uppercase'
      }
    });
    navigate("/");
  };

  const navLinkClass = ({ isActive }) =>
    `relative text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
      isActive ? "text-pink-600" : "text-gray-900 hover:text-pink-500"
    }`;

  const cartCount = cartItems?.reduce((acc, item) => acc + item.quantity, 0) || 0;

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-xl py-4 shadow-2xl shadow-pink-100/20" 
          : "bg-white py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-pink-600 p-1.5 rounded-xl group-hover:rotate-12 transition-transform">
             <Sparkles size={16} className="text-white" />
          </div>
          <span className="text-2xl font-black text-gray-900 tracking-[ -0.05em] uppercase">
            Luxe<span className="text-pink-600 italic">Fashion</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <NavLink to="/" end className={navLinkClass}>
            {({ isActive }) => (
              <>
                Home
                {isActive && <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-pink-600 rounded-full" />}
              </>
            )}
          </NavLink>

          <NavLink to="/men" className={navLinkClass}>
            {({ isActive }) => (
              <>
                Men
                {isActive && <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-pink-600 rounded-full" />}
              </>
            )}
          </NavLink>

          <NavLink to="/women" className={navLinkClass}>
            {({ isActive }) => (
              <>
                Women
                {isActive && <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-pink-600 rounded-full" />}
              </>
            )}
          </NavLink>

          <NavLink to="/kids" className={navLinkClass}>
            {({ isActive }) => (
              <>
                Kids
                {isActive && <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-pink-600 rounded-full" />}
              </>
            )}
          </NavLink>
        </div>

        <div className="flex items-center gap-5">
          <Link to="/cart" className="relative p-2 hover:bg-pink-50 rounded-2xl transition-colors">
            <ShoppingBag size={22} className="text-gray-900" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-pink-600 text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                {cartCount}
              </span>
            )}
          </Link>

          {user ? (
            <div className="flex items-center gap-4">
              <span
                onClick={() => navigate("/profile")}
                className="cursor-pointer text-[10px] font-black uppercase tracking-widest text-gray-900 hover:text-pink-600 border-b-2 border-transparent hover:border-pink-600 pb-0.5 transition-all"
              >
                {user.name.split(" ")[0]}
              </span>
              <button
                onClick={handleLogout}
                className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-red-500 transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <div 
              onClick={() => navigate("/login")}
              className="p-2 hover:bg-pink-50 rounded-2xl transition-colors cursor-pointer"
            >
              <User size={22} className="text-gray-900" />
            </div>
          )}

          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-2xl transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 p-8 space-y-6 flex flex-col shadow-xl">
          <NavLink to="/" onClick={() => setIsOpen(false)} className="text-3xl font-black uppercase tracking-tighter">Home</NavLink>
          <NavLink to="/men" onClick={() => setIsOpen(false)} className="text-3xl font-black uppercase tracking-tighter">Men</NavLink>
          <NavLink to="/women" onClick={() => setIsOpen(false)} className="text-3xl font-black uppercase tracking-tighter">Women</NavLink>
          <NavLink to="/kids" onClick={() => setIsOpen(false)} className="text-3xl font-black uppercase tracking-tighter">Kids</NavLink>
          
          <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
             {user ? (
               <button onClick={handleLogout} className="text-red-500 font-black uppercase tracking-widest text-xs">Terminare Session</button>
             ) : (
               <button onClick={() => navigate("/login")} className="text-pink-600 font-black uppercase tracking-widest text-xs">Client Login</button>
             )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;