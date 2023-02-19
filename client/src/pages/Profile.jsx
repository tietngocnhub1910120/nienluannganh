import ProfileForm from "../components/ProfileForm";
import ProfileSidebar from "../components/ProfileSidebar";
const Profile = () => {
  return (
    <main className="app__container mt-6">
      <section className="grid grid-cols-5">
        <ProfileSidebar />
        <div className="col-span-4 px-8 py-4 bg-white drop-shadow-xl">
          <h1 className="text-xl font-medium">Hồ sơ của tôi</h1>
          <span className="text-sm text-gray-500">
            Quản lý thông tin hồ sơ để bảo mật tài khoản
          </span>
          <ProfileForm />
        </div>
      </section>
    </main>
  );
};

export default Profile;
