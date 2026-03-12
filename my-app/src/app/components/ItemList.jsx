"use client";

import { useState } from "react";
import { Search, Bookmark, ArrowDownAZ, ArrowUpAZ, X } from "lucide-react";
import ItemCard from "./ItemCard";
import { items as initialItems } from "../data/items";

export default function ItemList() {
  const [items, setItems] = useState(initialItems);
  const [search, setSearch] = useState("");
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [sortBy, setSortBy] = useState("default");

  const handleBookmark = (id) => {
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, saved: !item.saved } : item
    ));
  };

  const filtered = items.filter(item => {
    const matchesSearch = item.item_name.toLowerCase().includes(search.toLowerCase());
    const matchesSaved = showBookmarks ? item.saved : true;
    return matchesSearch && matchesSaved;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "az") return a.item_name.localeCompare(b.item_name);
    if (sortBy === "za") return b.item_name.localeCompare(a.item_name);
    return 0;
  });

  return (
    <div className="flex flex-col h-full bg-[#0b0e14] text-gray-400">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
        <h1 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Items</h1>
        
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative flex items-center">
            <Search size={14} className="absolute left-2 text-gray-600" />
            <input 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by item name..."
              className="bg-transparent border-none text-xs w-40 focus:ring-0 placeholder-gray-600"
            />
          </div>

          {/* Header Controls */}
          <div className="flex items-center gap-2 border-l border-gray-800 pl-4">
             <button 
              onClick={() => setShowBookmarks(!showBookmarks)}
              className={`flex items-center gap-1 text-[11px] ${showBookmarks ? "text-yellow-500" : "hover:text-white"}`}
            >
              <Bookmark size={14} fill={showBookmarks ? "currentColor" : "none"} />
              Your Bookmark
              <span className="text-yellow-500 font-bold">{items.filter(i => i.saved).length}</span>
            </button>
            
            <button onClick={() => setSortBy("az")} className={sortBy === "az" ? "text-white" : ""}>
              <ArrowDownAZ size={16} />
            </button>
            <button onClick={() => setSortBy("za")} className={sortBy === "za" ? "text-white" : ""}>
              <ArrowUpAZ size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto px-6">
        {sorted.map(item => (
          <ItemCard 
            key={item.id} 
            item={item} 
            onBookmark={handleBookmark} 
            onView={(i) => console.log("Viewing:", i)} 
          />
        ))}
      </div>
    </div>
  );
}