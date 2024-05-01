import  { useEffect, useState } from "react";
import axios from "axios";

const Notice = () => {
  const [allImage, setAllImage] = useState(null);

  useEffect(() => {
    getPdf();
  }, []);

  const getPdf = async () => {
    try {
      const result = await axios.get("http://localhost:5000/get-pdf");
      console.log(result.data);
      setAllImage(result.data);
    } catch (error) {
      console.error("Error fetching PDFs:", error);
    }
  };

  const showPdf = (pdf) => {
    console.log(pdf);
    window.open(`http://localhost:5000/pdf/${pdf}`, "_blank", "noreferrer");
  };

  return (
    <div>
      <div>
        <h1 className="text-center text-2xl font-bold mt-4 mb-4">
          Notice Board
        </h1>
      </div>
      <div className="bg-gray-200 m-4 max-h-[400px] rounded-xl border-4 p-8 overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-fuchsia-200">
              <th className="text-xm font-bold text-teal-600">No</th>
              <th className="text-xm font-bold text-teal-600">Announcements</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {[...Array(allImage?.length || 0).keys()].map((index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td
                  onClick={() => showPdf(allImage[index]?.fileName)}
                  className="cursor-pointer"
                >
                  {allImage[index]?.title} <span className=" font-semibold  text-red-600">-({allImage[index]?.date}) </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Notice;
