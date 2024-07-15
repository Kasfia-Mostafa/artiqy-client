import { TrendData } from "@/Data/TrendData";

const TrendCard = () => {
  return (
    <div className="flex flex-col gap-4 bg-blue-100 p-4 rounded-lg mt-6">
      <h3 className="text-teal-600 font-extrabold my-4">Trends For You</h3>
      {TrendData.map((Trend) => {
        return (
          <div key={Trend.name} className="flex flex-col gap-4">
            <span className="font-bold">#{Trend.name}</span>
            <span>{Trend.shares} k shares</span>
          </div>
        );
      })}
    </div>
  );
};

export default TrendCard;
