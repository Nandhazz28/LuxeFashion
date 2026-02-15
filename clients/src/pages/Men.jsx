import React, { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";
import ProductSearch from "../components/ProductSearch";
import { Mens } from "../product/men";
import { useCart } from "../context/CartContext";
import { toast } from "react-hot-toast";
import {
  ShoppingBag,
  Sparkles,
  ArrowUpRight,
  SearchX,
  Eye,
} from "lucide-react";

const Men = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = useMemo(() => {
    return Object.values(Mens)
      .flat()
      .map((item, idx) => ({
        ...item,
        category: "men",
        newPrice: item.newPrice ?? item.Newprice ?? 0,
        oldPrice: item.oldPrice ?? item.oldprice ?? 0,
        quantity: 1,
        image:
          item.image ||
          "https://images.unsplash.com/photo-1520975916090-3105956dac38",
      }));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="bg-white min-h-screen">
      <NavBar />

      <main className="pt-40 pb-20 px-4 md:px-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-10">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-pink-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">
                  Sector_01 // Menswear
                </span>
              </div>
              <h1 className="text-6xl md:text-9xl font-black text-gray-900 tracking-tighter leading-[0.8] uppercase">
                Men's <br />
                <span className="text-pink-600 italic font-serif lowercase tracking-normal">
                  Collection
                </span>
              </h1>
            </div>

            <div className="w-full lg:w-96">
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2 ml-1">
                Archive_Filter
              </p>
              <ProductSearch value={search} onChange={setSearch} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-20">
            {filteredProducts.map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="group relative flex flex-col"
              >
                <div
                  className="relative aspect-[3/4] w-full overflow-hidden rounded-[2.5rem] bg-gray-50 border border-gray-100 cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-pink-100/50 transition-all duration-700"
                  onClick={() => navigate(`/product/men/${product.id}`)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="bg-white text-gray-900 px-6 py-3 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform font-black text-[10px] uppercase tracking-widest">
                      <Eye size={14} /> Inspect_Asset
                    </div>
                  </div>

                  <div className="absolute top-6 right-6 text-[10px] font-black text-white/40 tracking-widest">
                    M_UNIT_{product.id.toString().padStart(3, "0")}
                  </div>

                  <div className="absolute bottom-6 left-6 text-[10px] font-black text-white/60 tracking-tighter">
                    ITEM_{String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="mt-8 space-y-4 px-2">
                  <div className="flex justify-between items-start">
                    <div className="max-w-[70%]">
                      <h3 className="font-black text-sm text-gray-900 uppercase tracking-tighter leading-tight group-hover:text-pink-600 transition-colors line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">
                        Core_Archive • Seasonal_Drop
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-base font-black text-gray-900 block tracking-tighter">
                        ₹{product.newPrice.toLocaleString()}
                      </span>
                      <span className="text-[10px] font-bold line-through text-gray-300 uppercase">
                        ₹{product.oldPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="h-px w-full bg-gray-50 group-hover:bg-pink-100 transition-colors" />

                  <div className="flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();

                        addToCart(product);

                        toast.success("Manifest Updated", {
                          style: {
                            borderRadius: "1rem",
                            background: "#111",
                            color: "#fff",
                            fontSize: "10px",
                            fontWeight: "900",
                            textTransform: "uppercase",
                            letterSpacing: "0.2em",
                          },
                        });
                      }}
                      className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 hover:text-pink-600 transition-colors"
                    >
                      <ShoppingBag size={14} /> Add_to_Manifest
                    </button>
                    <ArrowUpRight
                      size={14}
                      className="text-gray-300 group-hover:text-pink-500 transition-colors"
                    />
                  </div>
                </div>
              </div>
            ))}

            {filteredProducts.length === 0 && (
              <div className="col-span-full flex flex-col items-center justify-center py-40 border-2 border-dashed border-gray-100 rounded-[3rem]">
                <SearchX size={48} className="text-gray-200 mb-6" />
                <h3 className="text-[12px] font-black uppercase tracking-[0.4em] text-gray-400">
                  No records found for "{search}"
                </h3>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Men;
