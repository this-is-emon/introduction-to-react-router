import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;
  const navigate = useNavigate();

  const postStyle = {
    border: "2px solid yellow",
    padding: "10px",
    borderRadius: "20px",
  };

  const handleShowDetail = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div style={postStyle}>
      <h2>Post of Id : {id} </h2>
      <p>{title}</p>
      <Link to={`/post/${id}`}>Post Detail</Link>
      <button onClick={handleShowDetail}>Click to see Details</button>
    </div>
  );
};

export default Post;

Post.propTypes = {
  post: PropTypes.object,
};
