import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;

  const postStyle = {
    border: "2px solid yellow",
    padding: "10px",
    borderRadius: "20px",
  };

  return (
    <div style={postStyle}>
      <h2>Post of Id : {id} </h2>
      <p>{title}</p>
      <Link to={`/post/${id}`}>Post Detail</Link>
    </div>
  );
};

export default Post;

Post.propTypes = {
  post: PropTypes.object,
};
