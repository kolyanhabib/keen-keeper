import StatCard from "../home/StatCard";

const StatsSection = ({ friends }) => {
  const total = friends.length;
  const onTrack = friends.filter((f) => f.status === "On-Track").length;
  const needAttention = friends.filter(
    (f) => f.status === "Overdue" || f.status === "Almost Due",
  ).length;

  const interactions = friends.length;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatCard title="Total Friends" value={total} />
      <StatCard title="On Track" value={onTrack} />
      <StatCard title="Need Attention" value={needAttention} />
      <StatCard title="Interactions This Month" value={interactions} />
    </div>
  );
};

export default StatsSection;
