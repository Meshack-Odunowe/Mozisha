import { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditPost() {
  const { postId } = useParams(); // Get the postId from the URL
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: '',
    postText: '',
  });

  useEffect(() => {
    // Fetch the post data based on postId
    const fetchPostData = async () => {
      try {
        const postDocRef = doc(db, 'Posts', postId);
        const postDocSnapshot = await getDoc(postDocRef);

        if (postDocSnapshot.exists()) {
          const postData = postDocSnapshot.data();
          setPost({
            title: postData.title,
            postText: postData.postText,
          });
        }
      } catch (error) {
        console.error('Error fetching post data:', error);
      }
    };

    fetchPostData();
  }, [postId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const notifySuccess = () => {
    toast.success('Post edited successfully!', {
      position: 'top-right',
      autoClose: 2000, // Adjust the duration as needed
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleEditPost = async () => {
    try {
          window.scrollTo(0, 0); // Scroll to the top of the page
      const postDocRef = doc(db, 'Posts', postId);
      await updateDoc(postDocRef, {
        title: post.title,
        postText: post.postText,
      });
      notifySuccess(); // Show a success toast
      navigate('/blog'); // Navigate to the blog page after editing
    } catch (error) {
      console.error('Error editing post:', error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Edit Post</h1>
      <input
        type="text"
        name="title"
        value={post.title}
        onChange={handleInputChange}
        placeholder="Title"
        className="w-full border rounded-md p-2 mb-4"
      />
      <textarea
        name="postText"
        value={post.postText}
        onChange={handleInputChange}
        placeholder="Post text"
        className="w-full h-40 border rounded-md p-2 mb-4"
      />
      <button
        onClick={handleEditPost}
        className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Save Changes
      </button>
      <ToastContainer /> {/* Add the toast container */}
    </div>
  );
}

export default EditPost;
