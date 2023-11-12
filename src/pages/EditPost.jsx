import { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useAuth } from '../AuthContext'; // Import your authentication context

function EditPost() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth(); // Get user information from the authentication context

  const [post, setPost] = useState({
    title: '',
    postText: '',
  });

  useEffect(() => {
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

  const handleQuillChange = (html) => {
    setPost((prevPost) => ({
      ...prevPost,
      postText: html,
    }));
  };

  const notifySuccess = () => {
    toast.success('Post edited successfully!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleEditPost = async () => {
    try {
      window.scrollTo(0, 0);
      const postDocRef = doc(db, 'Posts', postId);

      // Check if the user is the author of the post
      if (user && postDocRef.author.id === user.uid) {
        await updateDoc(postDocRef, {
          title: post.title,
          postText: post.postText,
        });

        notifySuccess();
        navigate('/blog');
      } else {
        console.error('Unauthorized to edit this post.');
        // Handle unauthorized access (redirect, toast, etc.)
      }
    } catch (error) {
      console.error('Error editing post:', error);
    }
  };

  const handleDeletePost = async () => {
    try {
      window.scrollTo(0, 0);
      const postDocRef = doc(db, 'Posts', postId);

      // Check if the user is the author of the post
      if (user && postDocRef.author.id === user.uid) {
        await deleteDoc(postDocRef);
        notifySuccess();
        navigate('/blog');
      } else {
        console.error('Unauthorized to delete this post.');
        // Handle unauthorized access (redirect, toast, etc.)
      }
    } catch (error) {
      console.error('Error deleting post:', error);
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
      <ReactQuill
        value={post.postText}
        onChange={handleQuillChange}
        placeholder="Post text"
        className="w-full h-40 border rounded-md p-2 mb-4"
      />
      <button
        onClick={handleEditPost}
        className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Save Changes
      </button>
      <button
        onClick={handleDeletePost}
        className="bg-red-700 text-white px-4 py-2 rounded-md ml-2 hover:bg-red-600"
      >
        Delete Post
      </button>
      <ToastContainer />
    </div>
  );
}

export default EditPost;
