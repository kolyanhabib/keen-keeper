import useFriends from "../../context/useFriends";
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from "recharts";

const StatsPage = () => {
  const { interactions } = useFriends();

  const counts = {
    Call: 0,
    Text: 0,
    Video: 0,
  };

  interactions.forEach((item) => {
    if (counts[item.type] !== undefined) {
      counts[item.type]++;
    }
  });

  const data = [
    { name: "Text", value: counts.Text, fill: "#7f37f5" },
    { name: "Call", value: counts.Call, fill: "#244D3F" },
    { name: "Video", value: counts.Video, fill: "#37a163" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] mb-8">
        Friendship Analytics
      </h1>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-[#244D3F] mb-6">
          By Interaction Type
        </h3>

        <div className="w-full h-75">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                innerRadius={70}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
                isAnimationActive={true}
              ></Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
