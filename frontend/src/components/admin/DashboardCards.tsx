import { Callback } from "./types";

interface Props {
  callbacks: Callback[];
}

export default function DashboardCards({ callbacks }: Props) {
  const total = callbacks.length;

  const pending = callbacks.filter(
    (callback) => callback.status === "Pending"
  ).length;

  const completed = callbacks.filter(
    (callback) => callback.status === "Completed"
  ).length;

  return (
    <div className="grid md:grid-cols-3 gap-8 mb-10">

      <div className="bg-slate-900 rounded-xl p-8 shadow-lg">
        <p className="text-gray-400 text-lg">
          Total Requests
        </p>

        <h2 className="text-5xl font-bold mt-4">
          {total}
        </h2>
      </div>

      <div className="bg-yellow-500 rounded-xl p-8 shadow-lg">
        <p className="text-black text-lg font-semibold">
          Pending
        </p>

        <h2 className="text-5xl font-bold mt-4 text-black">
          {pending}
        </h2>
      </div>

      <div className="bg-green-600 rounded-xl p-8 shadow-lg">
        <p className="text-lg font-semibold">
          Completed
        </p>

        <h2 className="text-5xl font-bold mt-4">
          {completed}
        </h2>
      </div>

    </div>
  );
}