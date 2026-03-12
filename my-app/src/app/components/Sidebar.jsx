import { LayoutDashboard, Package, ShoppingCart, Users, Settings } from "lucide-react";

const menuItems = [
  { label: "Overview",  icon: LayoutDashboard },
  { label: "Items",     icon: Package },
  { label: "Orders",    icon: ShoppingCart },
  { label: "Customers", icon: Users },
  { label: "Settings",  icon: Settings },
];

export default function Sidebar({ active = "Items" }) {
  return (
    <aside className="w-48 bg-gray-900 min-h-screen flex flex-col pt-6 px-3">
      <p className="text-xs text-gray-500 uppercase tracking-widest px-3 mb-3">
        Dashboard
      </p>

      <nav className="flex flex-col gap-1">
        {menuItems.map(({ label, icon: Icon }) => (
          <button
            key={label}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors
              ${label === active
                ? "bg-gray-700 text-white"           // active style
                : "text-gray-400 hover:text-white hover:bg-gray-800"  // default style
              }`}
          >
            <Icon size={16} />
            {label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
