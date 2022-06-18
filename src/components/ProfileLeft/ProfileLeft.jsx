import React from "react";
import LogoSearch from "../LogoSearch/LogoSearch"
import FollwersCard from "../FollowersCard/FollowersCard"
import InfoCard from "../InfoCard/InfoCard"
const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <InfoCard />
      <FollwersCard />
    </div>
  );
};

export default ProfileLeft;
