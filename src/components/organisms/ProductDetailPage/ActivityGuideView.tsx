import React from "react";

import ActivityMenu from "@components/molecules/ActivityMenu";

interface ActivityGuideViewProps {
  activities: [];
}

const ActivityGuideView = ({ activities }: ActivityGuideViewProps) => {
  return (
    <div>
      <div>
        <ActivityMenu activities={activities} />
      </div>
      {/* <div className="bg-citiBlue-50 w-[976px] h-[122px] rounded-xl "><GuideView /></div> */}
    </div>
  );
};

export default ActivityGuideView;
