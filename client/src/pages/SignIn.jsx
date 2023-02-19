import AuthForm from "../components/AuthForm";

const SignIn = () => {
  return (
    <div className="app__container mt-8">
      <h1 className="text-center text-xl font-bold text-black">ĐĂNG NHẬP</h1>
      <div className="w-full mt-8 px-4 py-3 md:w-1/2 mx-auto bg-gray-100 flex flex-col justify-center">
        <AuthForm />
        <button className="mt-4 px-8 py-3 bg-primary rounded-sm hover:bg-hover cursor-pointer text-white font-bold ">
          ĐĂNG NHẬP
        </button>
      </div>
    </div>
  );
};

export default SignIn;
