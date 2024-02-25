import "./DeleteImageWarning.css"
const ImageDeletedModal = ({ setDeletedAlert }) => {
  return (
    <div className="deleteWarning">
      <div className="searchBar_heading">
        <div>
          <h1>DineDiscovery</h1>
          <i className="fa-brands fa-yelp" style={{ fontSize: "25px" }}></i>
        </div>
        <div
          className="searchBar_closeModal"
          onClick={() => setDeletedAlert(false)}
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
      <div className="deletedSuccess">
        <i className="fa-solid fa-check"></i>
        <h1>Success!</h1>
        <p>Your image was deleted!</p>
      </div>
    </div>
  );
};
export default ImageDeletedModal;
