import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { popularProductsData } from "../product/popular";
import { useCart } from "../context/CartContext";
import { toast } from "react-hot-toast";
import { ShoppingBag, Eye, SearchX, TrendingUp, ArrowUpRight } from "lucide-react";
import NavBar from "../components/Navbar";

const Popular = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const safeAdd = (product) => {
    addToCart({
      ...product,
      newPrice: product.newPrice ?? product.Newprice ?? 0,
      oldPrice: product.oldPrice ?? product.oldprice ?? null,
      image:
        product.image ||
        "https://images.unsplash.com/photo-1520975916090-3105956dac38",
      quantity: 1,
    });
  };

  return (
    <div className="bg-white min-h-screen">
      <NavBar />

      <main className="pt-40 pb-20 px-4 md:px-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-20">
            {popularProductsData.map((product, index) => {
              const price = product.newPrice ?? product.Newprice ?? 0;
              const old = product.oldPrice ?? product.oldprice ?? null;
              const image =
                product.image ||
                "https://images.unsplash.com/photo-1520975916090-3105956dac38";

              return (
                <div key={`${product.id}-${index}`} className="group relative flex flex-col">
                  <div
                    className="relative aspect-[3/4] w-full overflow-hidden rounded-[2.5rem] bg-gray-50 border border-gray-100 cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-pink-100/50 transition-all duration-700"
                    onClick={() => navigate(`/product/popular/${product.id}`)}
                  >
                    <img
                      src={image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                      <div className="bg-white text-gray-900 px-6 py-3 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform font-black text-[10px] uppercase tracking-widest">
                        <Eye size={14} /> Inspect_Asset
                      </div>
                    </div>

                    <div className="absolute top-6 left-6 bg-pink-600 text-white px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                      <TrendingUp size={10} />
                      <span className="text-[8px] font-black uppercase tracking-widest">
                        Trending
                      </span>
                    </div>

                    <div className="absolute top-6 right-6 text-[10px] font-black text-white/40 tracking-widest">
                      POP_UNIT_{String(index + 1).padStart(3, "0")}
                    </div>
                  </div>

                  <div className="mt-8 space-y-4 px-2">
                    <div className="flex justify-between items-start">
                      <div className="max-w-[70%]">
                        <h3 className="font-black text-sm text-gray-900 uppercase tracking-tighter leading-tight group-hover:text-pink-600 transition-colors line-clamp-1">
                          {product.name}
                        </h3>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">
                          Popular_Demand • Asset_{product.id}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-base font-black text-pink-600 block tracking-tighter">
                          ₹{price.toLocaleString()}
                        </span>
                        {old && (
                          <span className="text-[10px] font-bold line-through text-gray-300 uppercase">
                            ₹{old.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="h-px w-full bg-gray-50 group-hover:bg-pink-100 transition-colors" />

                    <div className="flex items-center justify-between">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          safeAdd(product);
                          toast.success("Manifest Updated");
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
              );
            })}
          </div>

          {popularProductsData.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center py-40 border-2 border-dashed border-gray-100 rounded-[3rem]">
              <SearchX size={48} className="text-gray-200 mb-6" />
              <h3 className="text-[12px] font-black uppercase tracking-[0.4em] text-gray-400">
                No active metrics found.
              </h3>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Popular;
