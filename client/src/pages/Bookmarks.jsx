import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// Components
import ProfileSidebar from "../components/Profile/ProfileSidebar";
import Header from "../components/Header";
import ProductItem from "../components/ProductItem";
// Utils
import renderSavedProduct from "../utils/renderSavedProduct";
// API
import { getProfile } from "../Api/userAPI";
const Bookmarks = () => {
  const user = useSelector((state) => state.auth.user);
  const { profile } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProfile = async () => {
      await getProfile(dispatch);
    };
    fetchProfile();
  }, [profile]);
  return (
    <div className="w-[80%] mx-auto">
      <main className="container mx-auto">
        <Header />
        <section className="grid grid-cols-5 mt-8">
          <ProfileSidebar active="bookmark" />
          <div className="col-span-4 ">
            <div className="grid grid-cols-4 gap-5">
              {profile && profile?.bookmarks?.length > 0 ? (
                profile.bookmarks.map((product) => {
                  return (
                    <ProductItem
                      data={product}
                      key={product._id}
                      savedProduct={renderSavedProduct(user, product._id)}
                    />
                  );
                })
              ) : (
                <p>
                  Hãy thêm vào bộ sưu tập nào{" "}
                  <Link to={"/products"}>
                    <span className="text-blue-500">tại đây</span>
                  </Link>
                </p>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Bookmarks;
