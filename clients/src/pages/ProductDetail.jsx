import React, { useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";
import { Mens } from "../product/men";
import { Womens } from "../product/women";
import { Kids } from "../product/kid";
import { popularProductsData } from "../product/popular";
import { useCart } from "../context/CartContext";
import { toast } from "react-hot-toast";
import {
  ShoppingBag,
  ChevronLeft,
  Truck,
  RotateCcw,
  ShieldCheck,
  Star,
} from "lucide-react";

const ProductDetail = () => {
  const { category, id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState("M");

  const products = useMemo(() => {
    const flatten = (items, cat) => {
      if (Array.isArray(items)) {
        return items.map((item) => ({
          ...item,
          category: cat,
          newPrice: item.newPrice ?? item.Newprice ?? 0,
          oldPrice: item.oldPrice ?? item.oldprice ?? null,
          image:
            item.image ||
            "https://images.unsplash.com/photo-1520975916090-3105956dac38",
        }));
      }
      return Object.values(items)
        .flat()
        .map((item) => ({
          ...item,
          category: cat,
          newPrice: item.newPrice ?? item.Newprice ?? 0,
          oldPrice: item.oldPrice ?? item.oldprice ?? null,
          image:
            item.image ||
            "https://images.unsplash.com/photo-1520975916090-3105956dac38",
        }));
    };

    return [
      ...flatten(Mens, "men"),
      ...flatten(Womens, "women"),
      ...flatten(Kids, "kids"),
      ...flatten(popularProductsData, "popular"),
    ];
  }, []);

  const product = products.find(
    (p) =>
      String(p.id) === String(id) &&
      String(p.category).toLowerCase() ===
        String(category).toLowerCase()
  );

  const safeAdd = (product, size) => {
    addToCart({
      ...product,
      size,
      quantity: 1,
    });
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <h2 className="text-2xl font-black uppercase tracking-tighter">
          Product Not Found
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 text-pink-600 font-bold uppercase text-xs tracking-widest"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <NavBar />

      <main className="max-w-7xl mx-auto px-6 py-24">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors mb-12 group"
        >
          <ChevronLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">
            Back to Collection
          </span>
        </button>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-4">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-gray-100 shadow-2xl shadow-pink-100/20">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="flex flex-col pt-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-pink-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                (4.8 Reviews)
              </span>
            </div>

            <h1 className="text-5xl font-black text-gray-900 tracking-tighter mb-4 leading-tight">
              {product.name}
            </h1>

            <p className="text-[11px] font-black uppercase tracking-[0.4em] text-pink-500 mb-8">
              {product.category} • Premium Selection
            </p>

            <div className="flex items-baseline gap-4 mb-10 border-b border-gray-100 pb-10">
              <span className="text-4xl font-black text-gray-900 tracking-tighter">
                ₹{product.newPrice.toLocaleString()}
              </span>
              {product.oldPrice && (
                <span className="text-xl line-through text-gray-300 font-bold">
                  ₹{product.oldPrice.toLocaleString()}
                </span>
              )}
            </div>

            <p className="text-gray-500 leading-relaxed mb-10 max-w-md">
              {product.description ||
                "Indulge in the finest craftsmanship. This piece combines contemporary silhouettes with timeless elegance."}
            </p>

            <div className="mb-10">
              <h3 className="text-[11px] font-black uppercase tracking-widest mb-4">
                Select Size
              </h3>
              <div className="flex gap-3">
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-14 h-14 rounded-2xl font-black text-xs transition-all duration-300 border-2 ${
                      selectedSize === size
                        ? "bg-gray-900 border-gray-900 text-white shadow-lg"
                        : "border-gray-100 text-gray-400 hover:border-pink-200"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => {
                  safeAdd(product, selectedSize);
                  toast.success(`${product.name} Added`);
                }}
                className="flex-1 bg-gray-900 text-white h-16 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-pink-600 transition-all active:scale-95 shadow-xl shadow-gray-200"
              >
                <ShoppingBag size={18} />
                Add to Bag
              </button>

              <button
                onClick={() => {
                  safeAdd(product, selectedSize);
                  navigate("/cart");
                }}
                className="flex-1 border-2 border-gray-900 h-16 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all active:scale-95"
              >
                Buy it Now
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-gray-100">
              <Info icon={<Truck size={18} />} text="Free Express Delivery" />
              <Info icon={<RotateCcw size={18} />} text="30-Day Returns" />
              <Info icon={<ShieldCheck size={18} />} text="Secure Checkout" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const Info = ({ icon, text }) => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-pink-500">
      {icon}
    </div>
    <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">
      {text}
    </span>
  </div>
);

export default ProductDetail;
