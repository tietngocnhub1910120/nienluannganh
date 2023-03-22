import ProfileSidebar from "../components/ProfileSidebar";
import srcProduct1 from "../assets/upload_1aa6f23a22d74fa88509f30ff89740b1_large.webp";
import Header from "../components/Header";

const Purchase = () => {
  return (
    <div className="w-[80%] mx-auto">
      <main className="container mx-auto">
        <Header />
        <section className="grid grid-cols-5 mt-8">
          <ProfileSidebar active="order" />
          <div className="col-span-4 ">
            <ul className="max-h-screen overflow-y-auto">
              <li className="px-8 py-4 bg-white drop-shadow-xl mb-8">
                <span className="text-green-600">ĐANG GIAO</span>
                <div className="py-5 border-t border-b flex">
                  <figure className="w-20">
                    <img src={srcProduct1} alt="" />
                  </figure>
                  <div className="ml-8">
                    <p>Bàn sofa thời trang Noguchi Home'furni</p>
                    <span>Phân loại : {"60x80"}</span>
                    <p>x1</p>
                  </div>
                  <span className="ml-auto text-red-400">1,200,000$</span>
                </div>
                <div className="text-right mt-8">
                  <p>
                    Thành tiền :{" "}
                    <span className="text-xl text-red-400">1,200,000$</span>
                  </p>
                  <button className="mt-4 px-3 py-2 bg-primary text-white cursor-pointer rounded">
                    Đánh giá
                  </button>
                </div>
              </li>
              <li className="px-8 py-4 bg-white drop-shadow-xl mb-8">
                <span className="text-green-600">ĐANG GIAO</span>
                <div className="py-5 border-t border-b flex">
                  <figure className="w-20">
                    <img src={srcProduct1} alt="" />
                  </figure>
                  <div className="ml-8">
                    <p>Bàn sofa thời trang Noguchi Home'furni</p>
                    <span>Phân loại : {"60x80"}</span>
                    <p>x1</p>
                  </div>
                  <span className="ml-auto text-red-400">1,200,000$</span>
                </div>
                <div className="text-right mt-8">
                  <p>
                    Thành tiền :{" "}
                    <span className="text-xl text-red-400">1,200,000$</span>
                  </p>
                  <button className="mt-4 px-3 py-2 bg-primary text-white cursor-pointer rounded">
                    Đánh giá
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Purchase;
