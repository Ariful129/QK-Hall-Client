import {  useState } from "react";
import axios from "axios";


const NoticeUpload = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [date, setDate] = useState(""); // Initialize 'date' state

  const [uploadStatus, setUploadStatus] = useState("");
 // const [allImage, setAllImage] = useState(null);
  // const [pdfFile, setPdfFile] = useState(null);


  // useEffect(() => {
  //   getPdf();
  // }, []);
  // const getPdf = async () => {
  //   try {
  //     const result = await axios.get("https://qk-hall-server.vercel.app/get-pdf");
  //     console.log(result.data);
  //     setAllImage(result.data);
  //   } catch (error) {
  //     console.error("Error fetching PDFs:", error);
  //   }
  // };



  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !file) {
      setUploadStatus("Please fill in all fields");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    formData.append("date", date);

    try {
      const response = await axios.post("https://qk-hall-server.vercel.app/upload-pdf", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        setUploadStatus("PDF uploaded successfully");

        // Clear the form fields after successful submission
        setTitle("");
        setFile(null);


      }
    } catch (error) {
      console.error("Error uploading PDF:", error);
      setUploadStatus("Failed to upload PDF");
    }
  };

  // const showPdf = (pdf) => {
  //   console.log(pdf)
  //   window.open(`https://qk-hall-server.vercel.app/pdf/${pdf}`, "_blank", "noreferrer");
  // };



  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl bg-black text-white p-2 font-bold mb-4 text-center">Upload PDF</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="title" className="block font-medium mb-1">
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div className="mb-4">
      <h1 className="font-semibold text-xl">
        <div className="form-control">
          <label htmlFor="date">Date:</label>
          <input 
            type="date" 
            id="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            className="input input-bordered" 
            placeholder="email" 
            required 
          />
        </div>
      </h1>
    </div>
        <div className="mb-4">
          <label htmlFor="pdf" className="block font-medium mb-1">
            PDF:
          </label>
          <input
            type="file"
            id="pdf"
            onChange={handleFileChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Upload
        </button>
        {uploadStatus && <p className="mt-2 text-red-500">{uploadStatus}</p>}
      </form>



      {/* <div className="output-div">
        {allImage == null
          ? ""
          : allImage.map((data, index) => {
            return (
              <div className="inner-div" key={index}>
                <h6>Title: {data.title} </h6>

                <button
                  className="btn btn-primary"
                  onClick={() => showPdf(data.fileName)}
                >
                  Show Pdf
                </button>
              </div>
            );
          })}
      </div> */}






    </div>
  );
};

export default NoticeUpload;
