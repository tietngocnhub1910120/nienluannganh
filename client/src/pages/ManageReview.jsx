import { useEffect } from "react";
import NavAdmin from "../components/NavAdmin";
import ReviewTable from "../components/Manage/ReviewTable";
import TopPane from "../components/TopPane";
import { getAllReview } from "../Api/reviewAPI";
import { useDispatch } from "react-redux";

const ManageReview = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAllReview = async () => {
            await getAllReview(dispatch);
        };
        fetchAllReview();
    }, []);
    return (
        <div className="container mx-auto mt-24 shadow-xl">
            <div className="flex">
                <div className="w-[25%] min-h-[80vh] ">
                    <NavAdmin navActive={"review"} />
                </div>
                <div className="flex-1 h-full">
                    <TopPane tab='review' />

                    <div className="w-full h-full">
                        <div className="rounded-lg border border-gray-200 shadow-md mx-2 mt-16 h-full max-h-[600px] overflow-y-auto">
                            {<ReviewTable />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageReview;
