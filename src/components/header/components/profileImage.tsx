import { useContext } from 'react';
import { SharedData, SharedDataContext } from "../../../hocs/sharedDataProvider";

function ProfileImage() {
  const sharedBasicInfo = useContext(SharedDataContext) as SharedData;

    const profilepic = sharedBasicInfo.basic_info.image;
    return ( <img
        className="profile-image img-fluid mb-1"
        width="200"
        height="200"
        style={{ filter: 'greyscale(100%)', borderRadius: "20%",border:"none" }}
        src={process?.env.PUBLIC_URL +profilepic}
        alt="profile"
      /> );
}

export default ProfileImage;