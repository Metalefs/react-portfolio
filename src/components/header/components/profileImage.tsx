import { useContext } from 'react';
import { SharedData, SharedDataContext } from "../../../hocs/sharedDataProvider";

function ProfileImage() {
  const sharedBasicInfo = useContext(SharedDataContext) as SharedData;

    const profilepic = sharedBasicInfo.basic_info.image;
    return ( <img
        className="profile-image img-fluid mb-1"
        width="300"
        height="300"
        style={{ borderRadius: "20%" }}
        src={process.env.PUBLIC_URL +profilepic}
        alt="profile"
      /> );
}

export default ProfileImage;