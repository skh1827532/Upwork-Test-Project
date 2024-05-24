"use client";

import IntegrationCard from "@/app/ui-components/Card";
import { SearchIcon } from "@heroicons/react/solid";

const integrations = [
  {
    name: "Email",
    description: "Receive an email every time a user submits their answer",
    url: "/Email.png",
    status: "Active",
  },
  {
    name: "Google Sheets",
    description:
      "Send your data straight to Google Sheets. Automatically syncs as results come in.",
    url: "/Google-Sheets.png",
    status: "Inactive",
  },
  {
    name: "Excel",
    description:
      "Send your typeform responses to Excel Online. Turn feedback into graphs, support queries into workflows, and much more.",
    url: "/Excel.png",
    status: "Inactive",
  },
];

export default function Integrations() {
  return (
    <div className="p-6 bg-white min-h-screen flex flex-col justify-center items-center">
      <div className="mb-6 relative w-[70vw]">
        <input
          type="text"
          placeholder="Search integrations"
          className="w-full p-3 pl-10 border border-black rounded-md"
        />
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      </div>
      {integrations.map((integration, index) => (
        <IntegrationCard key={index} {...integration} />
      ))}
    </div>
  );
}
