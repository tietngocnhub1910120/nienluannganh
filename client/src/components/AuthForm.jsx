const AuthForm = () => {
  return (
    <>
      <input
        className="mt-4 w-full border-b mx-auto py-1 px-1 outline-[#d9bb36]"
        type="email"
        name="email"
        placeholder="Nhập email"
      />
      <input
        className="mt-4 w-full border-b mx-auto py-1 px-1 outline-[#d9bb36]"
        type="password"
        name="password"
        placeholder="Nhập mật khẩu"
      />
    </>
  );
};

export default AuthForm;
