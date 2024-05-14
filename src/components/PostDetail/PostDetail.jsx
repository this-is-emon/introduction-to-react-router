import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetail = () => {
  const post = useLoaderData();
  const params = useParams();
  const { postId } = useParams();
  const navigate = useNavigate();
  const { id, title, body } = post;

  console.log(params);
  console.log(postId);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h3>Post details about: {id}</h3>
      <p>Title: {title}</p>
      <p>
        <small>{body}</small>
      </p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetail;
