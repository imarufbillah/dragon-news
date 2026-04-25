import Image from "next/image";
import swimming from "@/assets/swimming.png";
import classImg from "@/assets/class.png";
import playground from "@/assets/playground.png";

const QZoneSection = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="text-xl font-bold text-dark-1 mb-6">Q-Zone</h3>
        <div className="space-y-4">
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-xl">
              <Image
                src={swimming}
                alt="Swimming"
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="mt-3 text-sm font-medium text-dark-2 text-center">
              Swimming Championship 2024
            </p>
          </div>

          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-xl">
              <Image
                src={classImg}
                alt="Class"
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="mt-3 text-sm font-medium text-dark-2 text-center">
              Education Excellence Program
            </p>
          </div>

          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-xl">
              <Image
                src={playground}
                alt="Playground"
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="mt-3 text-sm font-medium text-dark-2 text-center">
              Community Playground Initiative
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QZoneSection;
