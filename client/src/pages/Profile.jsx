import { useEffect } from "react";

import Header from "../components/Header";
import ProfileForm from "../components/ProfileForm";
import ProfileSidebar from "../components/ProfileSidebar";
import { useDispatch } from "react-redux";

import { getProfile } from "../Api/userAPI";

const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProfile = async () => {
      await getProfile(dispatch);
    };
    fetchProfile();
  }, []);
  return (
    <div className="w-[80%] mx-auto">
      <main className="container mx-auto">
        <Header />
        <section className="grid grid-cols-5 mt-8">
          <ProfileSidebar active="account" />
          <div className="col-span-4 px-8 py-4 bg-white drop-shadow-xl">
            <h1 className="text-xl font-medium">Hồ sơ của tôi</h1>
            <span className="text-sm text-gray-500">
              Quản lý thông tin hồ sơ để bảo mật tài khoản
            </span>
            <ProfileForm />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
