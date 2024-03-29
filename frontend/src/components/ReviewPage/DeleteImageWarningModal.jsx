import "./DeleteImageWarning.css";
const DeleteImageWarningModal = ({
  handleDelete,
  setDeleteImage,
  currentIndex,

}) => {
  return (
    <>
      <div className="deleteWarning">
        <div className="searchBar_heading">
          <div>
            <h1>DineDiscovery</h1>
            <i className="fa-brands fa-yelp" style={{ fontSize: "25px" }}></i>
          </div>
          <div
            className="searchBar_closeModal"
            onClick={() => setDeleteImage(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div className="uploadImageWrapper">
          <div className="areYouSure">
            {/* <img
              // src="https://cdni.iconscout.com/illustration/premium/thumb/delete-files-6771626-5639807.png?f=webp"
              width="300px"
            /> */}
            <div className="Warning">
              <i className="fa-solid fa-triangle-exclamation"></i>
              <h1>Warning</h1>
            </div>
            <p>
              <span>Deleting the image cannot be undone.</span>
            </p>
            <h2>Are you sure you?</h2>
          </div>
          <div className="areYouSure_Button">
            <div
              className="yes_delete"
              onClick={() => handleDelete(currentIndex)}
            >
              Yes
            </div>
            <div className="No_" onClick={() => setDeleteImage(false)}>
              No
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteImageWarningModal;
