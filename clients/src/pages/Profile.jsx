import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "../components/Navbar";
import axios from "axios";
import { 
  User, 
  MapPin, 
  ShoppingBag, 
  LogOut, 
  ChevronRight, 
  Mail, 
  Save, 
  X, 
  Edit3,
  Sparkles,
  PackageCheck
} from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [addressForm, setAddressForm] = useState({
    street: "",
    city: "",
    pincode: "",
  });

  const token = JSON.parse(localStorage.getItem("user"))?.token;

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchData = async () => {
      try {
        const config = { headers: { Authorization: `Bearer ${token}` } };
        const base = "http://localhost:5520/api";
        
        const [{ data: userData }, { data: orderData }] = await Promise.all([
          axios.get(`${base}/users/profile`, config),
          axios.get(`${base}/orders/my-orders`, config)
        ]);

        setUser(userData);
        setOrders(orderData);
        if (userData.address) setAddressForm(userData.address);
      } catch (err) {
        console.error("Profile sync error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token, navigate]);

  const handleChange = (e) => setAddressForm({ ...addressForm, [e.target.name]: e.target.value });

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const saveAddress = async () => {
    try {
      const { data } = await axios.put(
        "http://localhost:5520/api/users/profile",
        { address: addressForm },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setUser(data);
      setEditing(false);
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6">
        <div className="w-16 h-16 border-t-2 border-pink-500 rounded-full animate-spin" />
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">Syncing Profile</span>
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      <NavBar />

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-gray-100 pb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={14} className="text-pink-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Account Dashboard</span>
            </div>
            <h1 className="text-7xl font-black text-gray-900 tracking-tighter leading-none">
              Welcome, <span className="text-pink-600 italic font-serif uppercase">{user?.name.split(' ')[0]}</span>
            </h1>
          </div>
          <button onClick={logout} className="mt-8 md:mt-0 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-red-400 hover:text-red-600 transition-colors">
            <LogOut size={14} /> Secure Sign Out
          </button>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-4">
            <div className="bg-gray-50 rounded-[3rem] p-10 sticky top-32">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-gray-900 shadow-xl shadow-gray-200">
                  <User size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-gray-900">{user?.name}</h3>
                  <p className="text-[10px] font-bold text-gray-400">{user?.email}</p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="relative">
                  <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 mb-4 flex items-center gap-2">
                    <MapPin size={12} /> Shipping Destination
                  </h4>
                  
                  {editing ? (
                    <div className="space-y-3 bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
                      {['street', 'city', 'pincode'].map(field => (
                        <input
                          key={field}
                          name={field}
                          value={addressForm[field]}
                          onChange={handleChange}
                          placeholder={field.toUpperCase()}
                          className="w-full bg-gray-50 border-none p-4 rounded-xl text-xs font-bold focus:ring-2 focus:ring-pink-500 transition-all"
                        />
                      ))}
                      <div className="flex gap-2 pt-2">
                        <button onClick={saveAddress} className="flex-1 bg-gray-900 text-white py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-pink-600 transition-colors flex items-center justify-center gap-2">
                          <Save size={14} /> Save
                        </button>
                        <button onClick={() => setEditing(false)} className="bg-gray-100 p-3 rounded-xl text-gray-400">
                          <X size={16} />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="group">
                      {user?.address?.street ? (
                        <div className="bg-white p-6 rounded-3xl border border-gray-100 group-hover:border-pink-200 transition-all">
                          <p className="text-[11px] font-bold text-gray-600 leading-relaxed uppercase tracking-tighter">
                            {user.address.street}<br />
                            {user.address.city} — {user.address.pincode}
                          </p>
                          <button onClick={() => setEditing(true)} className="mt-4 text-[9px] font-black uppercase tracking-widest text-pink-500 flex items-center gap-2 hover:text-black">
                            <Edit3 size={12} /> Update Address
                          </button>
                        </div>
                      ) : (
                        <button onClick={() => setEditing(true)} className="w-full py-8 border-2 border-dashed border-gray-200 rounded-3xl text-[10px] font-black uppercase tracking-widest text-gray-400 hover:border-pink-300 hover:text-pink-500 transition-all">
                          + Add Primary Address
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-900 mb-10 flex items-center gap-4">
              01. Order Archives <span className="h-px flex-1 bg-gray-100"></span>
            </h3>

            {orders.length === 0 ? (
              <div className="py-24 text-center bg-gray-50 rounded-[3rem] border border-gray-100">
                <ShoppingBag size={48} className="mx-auto text-gray-200 mb-6" strokeWidth={1} />
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-6">No purchase history found</p>
                <Link to="/" className="bg-gray-900 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-pink-600 transition-colors shadow-xl">
                  Explore Collection
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {orders.map((order) => (
                  <Link
                    key={order._id}
                    to={`/order/${order._id}`}
                    className="flex flex-col md:flex-row items-center justify-between p-8 bg-white border border-gray-100 rounded-[2.5rem] hover:shadow-2xl hover:shadow-pink-100/50 hover:border-pink-100 transition-all group"
                  >
                    <div className="flex items-center gap-6 mb-4 md:mb-0">
                      <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-pink-500 transition-colors">
                        <PackageCheck size={24} />
                      </div>
                      <div>
                        <span className="text-xs font-black text-gray-900 uppercase tracking-tighter">
                          Order No. {order._id.slice(-8).toUpperCase()}
                        </span>
                        <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-widest">
                          Amount: <span className="text-gray-900">₹{order.totalAmount.toLocaleString()}</span>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-start">
                      <div className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest ${
                        order.orderStatus === "Cancelled" ? "bg-red-50 text-red-500" : "bg-pink-50 text-pink-600"
                      }`}>
                        {order.orderStatus}
                      </div>
                      <ChevronRight size={18} className="text-gray-300 group-hover:text-pink-500 group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
};

export default Profile;