import { useContext, useEffect, useState, useCallback } from 'react'
import { MdTune } from "react-icons/md";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import CardProduct from '../components/CardProduct';
import Title from '../components/Title';
import { shopDataContext } from '../context/ShopContext';

const Collections = () => {
  let { products, search, showSearch } = useContext(shopDataContext);
  let [showFilter, setShowFilter] = useState(false);
  let [filterProduct, setFilterProduct] = useState([]);
  let [category, setCategory] = useState([]);
  let [subCategory, setSubCategory] = useState([]);
  let [sortType, setSortType] = useState("relevant");

  // Toggle category filter
  const toggleCategory = useCallback((e) => {
    const value = e.target.value;
    setCategory(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  }, []);

  // Toggle subcategory filter
  const toggleSubCategory = useCallback((e) => {
    const value = e.target.value;
    setSubCategory(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  }, []);

 // Apply filters
const applyFilter = () => {
  let productCopy = [...products];

  if (showSearch && search?.trim()) {
    productCopy = productCopy.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase().trim())
    );
  }

  if (category.length > 0) {
    productCopy = productCopy.filter(item => category.includes(item.category));
  }

  if (subCategory.length > 0) {
    productCopy = productCopy.filter(item => subCategory.includes(item.subCategory));
  }

  setFilterProduct(productCopy);
};

// Sort products
const sortProduct = () => {
  let sortedProducts = [...filterProduct];

  switch (sortType) {
    case "low-high":
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    case "high-low":
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
    default:
      // ✅ don't call applyFilter here
      break;
  }
  setFilterProduct(sortedProducts);
};

// Effects
useEffect(() => {
  applyFilter();
}, [products, showSearch, search, category, subCategory]);

useEffect(() => {
  sortProduct();
}, [sortType]);


  useEffect(() => {
    setFilterProduct(products);
  }, [products]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white flex flex-col lg:flex-row gap-0 overflow-x-hidden pb-8 pt-20">
      
      {/* Filter Sidebar */}
      <div className={`w-full lg:w-64 xl:w-72 lg:min-h-screen lg:fixed lg:left-0 lg:z-40 transition-all duration-300 ${
        showFilter 
          ? 'lg:h-screen bg-slate-800/95 backdrop-blur-sm shadow-2xl' 
          : 'lg:h-16'
      } p-4 sm:p-6 border-r border-slate-600/50`}>
        
        {/* Filter Toggle */}
        <button 
          className="w-full text-xl font-bold flex items-center gap-2 pb-4 mb-4 border-b border-slate-600 text-cyan-300 hover:text-cyan-200 transition-colors duration-200 group"
          onClick={() => setShowFilter(prev => !prev)}
        >
          <MdTune className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
          FILTERS
          <span className="ml-auto lg:hidden">
            {showFilter ? <FaChevronDown className="w-4 h-4" /> : <FaChevronRight className="w-4 h-4" />}
          </span>
        </button>

        {/* Filters Content */}
        <div className={`${showFilter ? 'block' : 'hidden lg:block'} space-y-4`}>
          
          {/* Categories */}
          <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-200 shadow-lg hover:shadow-cyan-500/20">
            <h3 className="text-lg font-semibold text-cyan-300 mb-3">CATEGORIES</h3>
            <div className="space-y-3">
              {['Men', 'Women', 'Kids'].map((cat) => (
                <label key={cat} className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-700/50 cursor-pointer group transition-all duration-200">
                  <input 
                    type="checkbox" 
                    value={cat} 
                    className="w-4 h-4 text-cyan-500 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500 focus:ring-2 accent-cyan-500 cursor-pointer group-hover:scale-110 transition-transform duration-200"
                    onChange={toggleCategory}
                  />
                  <span className="text-sm font-medium text-slate-200 group-hover:text-white">{cat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Subcategories */}
          <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-200 shadow-lg hover:shadow-emerald-500/20">
            <h3 className="text-lg font-semibold text-emerald-300 mb-3">SUB-CATEGORIES</h3>
            <div className="space-y-3">
              {['TopWear', 'BottomWear', 'WinterWear'].map((sub) => (
                <label key={sub} className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-700/50 cursor-pointer group transition-all duration-200">
                  <input 
                    type="checkbox" 
                    value={sub} 
                    className="w-4 h-4 text-emerald-500 bg-slate-700 border-slate-600 rounded focus:ring-emerald-500 focus:ring-2 accent-emerald-500 cursor-pointer group-hover:scale-110 transition-transform duration-200"
                    onChange={toggleSubCategory}
                  />
                  <span className="text-sm font-medium text-slate-200 group-hover:text-white">{sub}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:pl-0 xl:pl-72 w-full min-h-screen">
        {/* Header */}
        <div className="p-4 sm:p-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <Title text1="All" text2="COLLECTIONS" />
            
            {/* Sort Select */}
            <select 
              className="bg-slate-800/80 backdrop-blur-sm w-full lg:w-48 h-12 px-4 text-white rounded-2xl border-2 border-slate-600/50 hover:border-cyan-400/70 focus:border-cyan-400/70 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 shadow-lg hover:shadow-cyan-500/20 transition-all duration-200 text-sm font-medium"
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value="relevant">Sort By: Relevant</option>
              <option value="low-high">Sort By: Low to High</option>
              <option value="high-low">Sort By: High to Low</option>
            </select>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 px-2 sm:px-4">
            {filterProduct.length > 0 ? (
              filterProduct.map((item, idx) => (
                <CardProduct 
                  key={item._id || idx} 
                  id={item._id} 
                  name={item.name} 
                  price={item.price} 
                  image={item.image1.url}
                />
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-20 text-center bg-slate-800/30 rounded-2xl">
                <div className="w-20 h-20 bg-slate-700 rounded-2xl flex items-center justify-center mb-4">
                  <MdTune className="w-10 h-10 text-slate-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-300 mb-2">No products found</h3>
                <p className="text-slate-500">Try adjusting your filters or search terms</p>
              </div>
            )}
          </div>

          {/* Loading/Empty state padding */}
          {filterProduct.length === 0 && (
            <div className="h-32" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Collections;