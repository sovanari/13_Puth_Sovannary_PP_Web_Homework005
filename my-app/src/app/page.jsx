import Sidebar from "./components/Sidebar";
import ItemList from "./components/ItemList";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-900 font-sans">
      <Sidebar active="Items" />
      <main className="flex-1">
        <ItemList />
      </main>

    </div>
  );
}
