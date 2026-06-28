interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({
  search,
  setSearch,
}: Props) {
  return (
    <div className="mb-8">

      <input
        type="text"
        placeholder="🔍 Search customer by name or phone..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

    </div>
  );
}