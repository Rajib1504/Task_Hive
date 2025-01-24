import { useEffect, useState } from "react";
import UseAxiosSecure from "../../../Hooks/UseAxios/UseAxiosSecure";
import UseAuth from "../../../Hooks/useAuth/UseAuth";
import { toast } from "react-toastify";

const Subbmissions = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const [fullDetails, setFullDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate total pages
  const totalPages = Math.ceil(fullDetails.length / itemsPerPage);

  // Data for the current page
  const currentData = fullDetails.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    axiosSecure
      .get(`/submitData/${user.email}`)
      .then((res) => {
        const data = res.data;
        setFullDetails(data);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="max-w-md mx-auto">
        <h3 className="text-lg sm:2xl md:4xl font-bold text-center pb-2 mb-4 border-b-2 ">
          {user?.displayName}'s Submissions count is {fullDetails.length}
        </h3>
      </div>
      {/* Table for worker submitted data */}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* Head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Payment</th>
              <th>Buyer Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Display current page data */}
            {currentData.map((detail, idx) => (
              <tr key={detail._id}>
                <th>{(currentPage - 1) * itemsPerPage + idx + 1}</th>
                <td>{detail.task_title}</td>
                <td>$ {detail.payable_amount}</td>
                <td>{detail.Buyer_name}</td>
                <td>
                  {detail.status === "pending" && (
                    <span className="badge bg-secondary rounded-full px-3 py-2">
                      {detail.status}
                    </span>
                  )}
                  {detail.status === "Approved" && (
                    <span className="badge bg-green-300 rounded-full px-3 py-2">
                      {detail.status}
                    </span>
                  )}
                  {detail.status === "Rejected" && (
                    <span className="badge bg-red-300 rounded-full px-3 py-2">
                      {detail.status}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <div className="btn-group">
          {[...Array(totalPages).keys()].map((num) => (
            <button
              key={num}
              className={`btn ${currentPage === num + 1 ? "btn-primary" : ""}`}
              onClick={() => handlePageChange(num + 1)}
            >
              {num + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Subbmissions;
