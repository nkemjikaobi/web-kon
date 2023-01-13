import React from "react";

interface ActivityMenuProps {
  activities: string[];
}

const ActivityMenu = ({ activities }: ActivityMenuProps) => {
  return (
    <div className="smallLaptop:w-[700px] mb-4 font-nunitoSans text-base font-medium">
      {activities.length > 0 ? (
        <ul className="ml-5 list-disc bigLaptop:grid grid-rows-3 grid-flow-col gap-x-4">
          {activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      ) : (
        <span className="text-citiGray-500 italic">No activity provided yet.</span>
      )}
    </div>
  );
};

export default ActivityMenu;
