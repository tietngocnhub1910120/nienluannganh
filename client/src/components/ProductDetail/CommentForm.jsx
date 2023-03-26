const CommentForm = () => {
  return (
    <div className="w-full">
      <p className="font-semibold my-4">0 Bình luận</p>
      <textarea
        className="py-1 px-2 outline-none border rounded-md"
        name="comment"
        cols="100"
        rows="6"
        placeholder="Viết đánh giá..."
      ></textarea>

      <button className="block px-3 py-2 mt-2 bg-blue-700 rounded-md text-white">
        Đánh giá
      </button>
    </div>
  );
};

export default CommentForm;
