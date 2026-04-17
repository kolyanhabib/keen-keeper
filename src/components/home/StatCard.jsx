const StatCard = ({ title, value }) => {
  return (
    <div className="bg-white rounded-lg p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1">
      <h2 className="text-3xl font-semibold text-[#244D3F]">{value}</h2>
      <p className="text-[#64748B] mt-2">{title}</p>
    </div>
  );
};

export default StatCard;
