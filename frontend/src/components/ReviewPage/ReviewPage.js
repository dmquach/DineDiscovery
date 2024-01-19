import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { receiveReview } from "../../store/review";
import { useLocation } from "react-router-dom";
import "./reviewPage.css";
import csrfFetch from "../../store/csrf";
import { Modal } from "../../Context/Modal";
import UploadImage from "./uploadImage";
import ReviewErrorModal from "./ReviewErrorModal";
import Alert from "./showAlert";
import DeleteImageWarningModal from "./DeleteImageWarningModal";
import ImageDeletedModal from "./ImageDeletedModal";

const ReviewPage = () => {
  const sessionUser = useSelector((state) => state.session.user);
  // const [newPicture, setNewPicture] = useState(null);
  const location = useLocation();
  //  const { myReview } = location.state;

  const dispatch = useDispatch();
  // const url = location.pathname;
  const { review } = useParams();

  const arr = review.split("-");
  // const [hover, setHover] = useState(0);
  // const [BID, setBID] = useState(arr[1]);
  const BID = useState(arr[1])
  const [rating, setRating] = useState(arr[0]);
  const [body, setBody] = useState("");
  // const [userId, setUserId] = useState(sessionUser?.id);
  const userId = useState(sessionUser?.id);
  const [redirect, setRedirect] = useState(false);
  // const [bName, setBname] = useState(arr[2]);
  const bName = useState(arr[2])
  const [imageFiles, setImageFiles] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [imageButtonClick, setImageButtonClick] = useState(false);
  const [prevImageUrls, setPrevImageUrls] = useState([]);
  const [wasImage, setWasImage] = useState(false);
  const [myReview, setMyReview] = useState("");
  // const [alertVisible, setAlertVisible] = useState(false);
  const[deleteImage,setDeleteImage] = useState(false)
const [currentIndex,setCurrentIndex] = useState("")
const [deletedAlert,setDeletedAlert] = useState(false)

  useEffect(() => {
    if (prevImageUrls.length !== 0) {
      setWasImage(true);
    }
  }, [prevImageUrls]);

  useEffect(() => {
    if (location.state) {
      const { myReview } = location.state;
      setMyReview(myReview);
      setBody(myReview.body);
      setPrevImageUrls([...myReview.imageUrls]);
    }
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("review[business_id]", BID);
    formData.append("review[user_id]", userId);
    formData.append("review[rating]", rating);
    formData.append("review[body]", body);
    formData.append("review[firstName]", sessionUser.firstName);
    formData.append("review[lastName]", sessionUser.lastName);

    for (let i = 0; i < imageFiles.length; i++) {
      formData.append("review[images][]", imageFiles[i]);
    }

    const handleReviewResponse = (responseJson) => {
      setImageFiles([]);
      setImageUrls([]);
      setRedirect(true);
      dispatch(receiveReview(responseJson));
    };

    const postReview = async () => {
      const response = await csrfFetch("/api/reviews", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const responseJson = await response.json();
        handleReviewResponse(responseJson);
      }
    };

    const patchReview = async () => {
      const response = await csrfFetch(`/api/reviews/${myReview.id}`, {
        method: "PATCH",
        body: formData,
      });

      if (response.ok) {
        const responseJson = await response.json();
        handleReviewResponse(responseJson);
      }
    };

    if (location.pathname.includes("/review")) {
      postReview();
    } else {
      patchReview();
    }
  };

  const handleFiles = ({ currentTarget }) => {
    const files = currentTarget.files;
    const urlsLoaded = []; // keep track of loaded urls

    setImageFiles(files);
    if (files.length !== 0) {
      let filesLoaded = 0;
      const urls = [];
      Array.from(files).forEach((file, index) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          const url = fileReader.result;
          // check if url has already been loaded
          if (!urlsLoaded.includes(url)) {
            urlsLoaded.push(url);
            urls[index] = url;
          }
          if (++filesLoaded === files.length) setImageUrls(urls);
        };
      });
    } else setImageUrls([]);
  };



  const handlePostWarning = () => {
    setShowAlert(true);
    // setAlertVisible(true);
  };

  const handleImageDeleteWarning=(e,i)=>{
    e.preventDefault()
    setDeleteImage(true)
    setCurrentIndex(i)
  }


  const handleDelete = async (i) => {
    const res = await csrfFetch(`/api/reviews/${myReview.id}/delete_image`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ index: i }),
    });

    if (res.ok) {
      const updatedImageUrls = [...prevImageUrls];
      updatedImageUrls.splice(i, 1);
      setPrevImageUrls(updatedImageUrls);
    }
    setDeletedAlert(true);
    setDeleteImage(false)
  };
  const handleImageDelete = (i) => {
    const updatedImageUrls = [...imageUrls];
    updatedImageUrls.splice(i, 1);
    setImageUrls(updatedImageUrls);
    const updatedImageFiles = [...imageFiles];
    updatedImageFiles.splice(i, 1);
    setImageFiles(updatedImageFiles);
  };

  const handleModalImage = () => {
    setShowModal(true);
    setImageButtonClick(true);
  };

  if (!sessionUser) {
    return <Redirect to="/login" />;
  }

  if (redirect) {
    return <Redirect to={`/business/${BID}`} />;
  }

  return (
    <form className="reviewForm">
      <div className="imageUploadDiv ">
        <Link to={`/business/${BID}`} style={{ color: "black" }}>
          <h2>{bName}</h2>
        </Link>
      </div>
      <div className="reviewFormWrapper">
        <div className="star-rating">
          {[...Array(5)].map((star, i) => {
            i += 1;
            return (
              <span
                key={i + 88}
                className={i <= rating ? "on" : "off"}
                onMouseEnter={() => setRating(i)}
                // onMouseLeave={() => setHover(rating)}
              >
                <i className="fa-solid fa-star"></i>
              </span>
            );
          })}
        </div>

        <textarea
          maxlength="1300"
          minLength="100"
          value={body}
          placeholder={
            "Just had an incredible experience! The Garlic Knots were a tasty start, and the pizza was pure perfection – crispy crust, top-notch toppings, and a flavor explosion. Dessert pizza with Nutella and Strawberries was a delightful surprise. Friendly staff and a cozy vibe. This is now my top pick for a pizza fix! 🤤🍕 #PizzaLover #FiveStars"
          }
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      {location.pathname.includes("/edit") && (
        <>
          <div className="imageUploadDiv">
            {prevImageUrls.length === 1 ? (
              <h3>Previous Photo</h3>
            ) : (
              <h3>Previous Photos</h3>
            )}
          </div>
          <div className="reviewFormWrapper reviewPicPreview">
            {prevImageUrls &&
              prevImageUrls.map((url, i) => (
                <div
                  className="image__"
                  key={url + i}
                  style={{
                    backgroundImage: `url(${url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* <div onClick={() => handleDelete(i)}> */}
                  <div onClick={(e) => handleImageDeleteWarning(e, i)}>
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                </div>
              ))}
            {deleteImage && (
              <Modal>
                <DeleteImageWarningModal
                  handleDelete={handleDelete}
                  setDeleteImage={setDeleteImage}
                  currentIndex={currentIndex}
                />
              </Modal>
            )}
            {wasImage === false && prevImageUrls.length === 0 && (
              <div className="imageUplodeDiv">
                <i className="fa-solid fa-image"></i>
                <h1>There have been no images submitted previously.</h1>
              </div>
            )}
            {wasImage && prevImageUrls.length === 0 && (
              <div className="imageUplodeDiv">
                <i className="fa-solid fa-image"></i>
                <h1>You deleted all the previous image</h1>
              </div>
            )}
          </div>
        </>
      )}
      {location.pathname.includes("/edit") &&
        body.trim().length > 0 &&
        rating > 0 && (
          <button onClick={handleSubmit} className="submitButton">
            Update Review
          </button>
        )}
      {location.pathname.includes("/review") &&
        body.trim().length > 0 &&
        rating > 0 && (
          <button onClick={handleSubmit} className="submitButton">
            Post Review
          </button>
        )}

      {rating > 0 && body.trim().length <= 0 ? (
        <div>
          <div onClick={handlePostWarning} className="disabledButton">
            Post Review
          </div>
        </div>
      ) : rating <= 0 && body.trim().length > 0 ? (
        <div>
          <div onClick={handlePostWarning} className="disabledButton">
            Post Review
          </div>
        </div>
      ) : rating <= 0 && body.trim().length <= 0 ? (
        <div onClick={handlePostWarning} className="disabledButton">
          Post Review
        </div>
      ) : null}
      {showAlert && (
        <Modal>
          <Alert setShowAlert={setShowAlert} />
        </Modal>
      )}
      {deletedAlert && (
        <Modal>
          <ImageDeletedModal setDeletedAlert={setDeletedAlert} />
        </Modal>
      )}
    </form>
  );
};

export default ReviewPage;
