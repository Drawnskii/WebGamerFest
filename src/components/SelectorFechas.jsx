function SelectorFechas({ label, onChange }) {
  return (
    <div className="mb-2">
      <label className="text-white">{label}</label>
      <div className="relative">
        <input
          type="date"
          className="w-full outline-none rounded-md pl-2 pr-2 py-2"
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SelectorFechas;
