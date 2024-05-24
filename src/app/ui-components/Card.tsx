"use client";
import { Button } from "@/components/ui/button";
import { useState, FC } from "react";
import { CheckIcon } from "@heroicons/react/solid";
import Image from "next/image";

interface IntegrationCardProps {
  name: string;
  description: string;
  url: string;
  status: string;
}

const IntegrationCard: FC<IntegrationCardProps> = ({
  name,
  description,
  url,
  status,
}) => {
  const [isConnected, setIsConnected] = useState(status === "Active");

  const handleConnect = () => {
    // setIsConnected(!isConnected);
    console.log("Clicked the button");
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-4 border border-gray-200 rounded-lg mb-4 bg-white shadow-sm w-full sm:w-[70vw] max-w-[90vw] mx-auto text-[14px]">
      <div className="flex items-center mb-4 sm:mb-0">
        <Image src={url} alt={name} width={60} height={80} className="mr-8" />
        <div>
          <h3 className="text-lg font-medium  text-gray-900 text-[14px]">
            {name}{" "}
            {isConnected ? (
              <span className="text-green-600 text-[14px] font-semibold bg-[#EBF9F1] py-2 rounded-[20px] px-4 mr-4">
                Active <CheckIcon className="h-5 w-5 inline" />
              </span>
            ) : null}
          </h3>
          <p className="text-gray-500">{description}</p>
        </div>
      </div>
      <div className="flex items-center">
        {!isConnected && <Button onClick={handleConnect}>Connect</Button>}
      </div>
    </div>
  );
};

export default IntegrationCard;
