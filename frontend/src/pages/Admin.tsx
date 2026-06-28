import { toast } from "sonner";
import { useEffect, useMemo, useState } from "react";
import { logout } from "../utils/auth";

import {
  getCallbacks,
  deleteCallback,
  updateCallbackStatus,
} from "../api/callback.api";

import DashboardCards from "../components/admin/DashboardCards";
import SearchBar from "../components/admin/SearchBar";
import { Callback } from "../components/admin/types";

export default function Admin() {
  const [callbacks, setCallbacks] = useState<Callback[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  async function loadCallbacks() {
    try {
      const data = await getCallbacks();
      setCallbacks(data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load callbacks.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCallbacks();
  }, []);

  async function handleDelete(id: string) {
    if (!confirm("Delete this callback request?")) return;

    try {
      await deleteCallback(id);
      toast.success("Callback deleted successfully.")
      loadCallbacks();
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete callback.");
    }
  }

  async function handleComplete(id: string) {
    try {
      await updateCallbackStatus(id, "Completed");
      toast.success("Callback marked as completed.");
      loadCallbacks();
    } catch (err) {
      console.error(err);
      toast.error("Failed to update callback.");
    }
  }

  const filteredCallbacks = useMemo(() => {
    return callbacks.filter((callback) => {
      const keyword = search.toLowerCase();

      return (
        callback.name.toLowerCase().includes(keyword) ||
        callback.phone.includes(keyword)
      );
    });
  }, [callbacks, search]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">

      <div className="flex justify-between items-center mb-10">
        <h1 className="text-5xl font-bold">
          NEXTGEN Admin Dashboard
        </h1>

        <button
         onClick={logout}
         className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold transition">
          Logout
         </button>
      </div>

      <DashboardCards callbacks={callbacks} />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="bg-slate-900 rounded-xl p-8 shadow-xl overflow-x-auto">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold">
            Callback Requests
          </h2>

          <span className="bg-blue-600 px-5 py-2 rounded-full font-semibold">
            {filteredCallbacks.length} Customers
          </span>

        </div>

        <table className="w-full border-collapse">

          <thead>

            <tr className="border-b border-slate-700 text-lg">

              <th className="text-left py-5">Name</th>

              <th className="text-left">Phone</th>

              <th className="text-left">Service</th>

              <th className="text-left">Message</th>

              <th className="text-left">Status</th>

              <th className="text-left">Date</th>

              <th className="text-center">Actions</th>

            </tr>

          </thead>

          <tbody>

            {filteredCallbacks.map((callback, index) => (

              <tr
                key={callback.id}
                className={`border-b border-slate-800 hover:bg-slate-800 transition ${
                  index % 2 === 0 ? "bg-slate-900" : "bg-slate-950"
                }`}
              >

                <td className="py-6 font-semibold">
                  {callback.name}
                </td>

                <td>{callback.phone}</td>

                <td>{callback.service}</td>

                <td className="max-w-sm break-words text-slate-300">
                  {callback.message || "-"}
                </td>

                <td>

                  <span
                    className={`px-4 py-2 rounded-full font-bold ${
                      callback.status === "Pending"
                        ? "bg-yellow-400 text-black"
                        : "bg-green-600"
                    }`}
                  >
                    {callback.status}
                  </span>

                </td>

                <td>
                  {new Date(callback.createdAt).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                  <br />
                  <span className="text-sm text-slate-400">
                    {new Date(callback.createdAt).toLocaleTimeString("en-IN", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </td>

                <td>

                  <div className="flex flex-wrap justify-center gap-2">

                    <a
                      href={`tel:${callback.phone}`}
                      className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold transition"
                    >
                      📞 Call
                    </a>

                    <a
                      href={`https://wa.me/91${callback.phone}`}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-semibold transition"
                    >
                      💬 WhatsApp
                    </a>

                    {callback.status === "Pending" && (
                      <button
                        onClick={() => handleComplete(callback.id)}
                        className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg font-semibold transition"
                      >
                        ✓ Complete
                      </button>
                    )}

                    <button
                      onClick={() => handleDelete(callback.id)}
                      className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold transition"
                    >
                      🗑 Delete
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}