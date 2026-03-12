import { Bookmark, Eye } from "lucide-react";

export default function ItemCard({ item, onBookmark, onView }) {
  // Mapping the data fields from items.js to the component
  const name = item.item_name;
  const price = item.item_price;
  const description = item.item_description;
  const isBookmarked = item.saved;

  return (
    <div className="group flex items-center gap-6 py-4 border-b border-gray-800 hover:bg-gray-800/30 transition-colors px-2">
      
      {/* Product Image */}
      <div className="h-20 w-32 flex-shrink-0 overflow-hidden rounded-md bg-gray-800">
        <img
          src={item.image}
          alt={name}
          className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-medium text-gray-200">{name}</h3>
          <span className="text-sm text-gray-500">${Number(price || 0).toFixed(2)}</span>
          
          <button
            onClick={() => onBookmark(item.id)}
            className={`transition-colors ${isBookmarked ? "text-white" : "text-gray-600 hover:text-white"}`}
          >
            <Bookmark size={16} fill={isBookmarked ? "currentColor" : "none"} />
          </button>
        </div>
        <p className="text-xs text-gray-600 mt-1 max-w-xl line-clamp-1">
          {description}
        </p>
      </div>

      <button
        onClick={() => onView(item)}
        className="flex items-center gap-1 bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] uppercase tracking-tighter px-2 py-1 rounded transition-colors"
      >
        <Eye size={12} />
        View
      </button>
    </div>
  );
}