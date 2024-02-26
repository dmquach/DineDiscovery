import  {useRef } from "react";
import "./uploadImage.css"
const UploadImage = ({
  setShowModal,
  handleFiles,
  imageUrls,
  handleImageDelete,
}) => {
  const myButton = useRef();

  return (
    <div className="uploadImageModalDiv">
      <div className="searchBar_heading">
        <div>
          <h1>DineDiscovery</h1>
          <i className="fa-brands fa-yelp" style={{ fontSize: "25px" }}></i>
        </div>
        <div
          className="searchBar_closeModal"
          onClick={() => setShowModal(false)}
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
      <div className="uploadImageWrapper">
        <div className="modalImageDiv">
          {imageUrls &&
            imageUrls.map((url, i) => (
              <div
                className="image__"
                key={url + i}
                style={{
                  backgroundImage: `url(${url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div onClick={() => handleImageDelete(i)}>
                  <i className="fa-solid fa-xmark"></i>
                </div>
              </div>
            ))}
        </div>

        <div className="imageInfoDiv">
          {imageUrls.length === 0 ? (
            <div className="imageHowto">
              <h1>Attach Photos</h1>
            </div>
          ) : (
            <h1>How does it look?</h1>
          )}

          <div className="uploadImage_ButtonsDiv">
            <div
              className="modal_button"
              onClick={() => myButton.current.click()}
            >
              {imageUrls.length === 0 ? "Attach Images" : "Change Images"}
            </div>
            {imageUrls.length !== 0 && (
              <div
                className="modal_button submit"
                onClick={() => setShowModal(false)}
              >
                Submit
              </div>
            )}
          </div>
          <input
            ref={myButton}
            className="submitButton"
            type="file"
            style={{ display: "none" }}
            onChange={handleFiles}
            multiple
            onClick={(e) => (e.currentTarget.value = null)}
          />
        </div>
      </div>
    </div>
  );
};

export default UploadImage
