import { useState } from "react";
import useFriends from "../../context/useFriends";

import callImg from "../../assets/call.png";
import textImg from "../../assets/text.png";
import videoImg from "../../assets/video.png";

const Timeline = () => {
  const { interactions } = useFriends();
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const getImage = (type) => {
    if (type === "Call") return callImg;
    if (type === "Text") return textImg;
    if (type === "Video") return videoImg;
  };


  const filteredData = interactions.filter((item) => {
    const matchType = filter === "All" || item.type === filter;
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());

    return matchType && matchSearch;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#1F2937] font-bold mb-6">
        Timeline
      </h1>

      
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-6">
        
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-200 outline-none rounded-lg py-2 px-4 text-sm cursor-pointer"
        >
          <option value="All">All</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>

      
        <input
          type="text"
          placeholder="Search by friend name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-200 outline-none rounded-lg py-2 px-4 text-sm w-full md:w-64"
        />
      </div>

      <div className="space-y-6">
        {filteredData.length === 0 ? (
          <h2 className="text-gray-500 text-2xl md:text-3xl">
            No activity found
          </h2>
        ) : (
          filteredData.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3 transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={getImage(item.type)}
                alt={item.type}
                className="w-7 h-7 object-contain"
              />

              <div>
                <p className="font-medium text-lg text-[#244D3F]">
                  {item.type}
                  <span className="text-[16px] text-[#64748B]">
                    {" "}
                    with {item.name}
                  </span>
                </p>
                <p className="text-sm text-[#64748B] font-medium">
                  {item.time}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Timeline;
