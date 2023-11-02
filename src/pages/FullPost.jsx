/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import { db, auth } from '../firebase/firebase';
import { useParams, useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from 'react-spinners'; // Import ClipLoader

function FullPost({ isAuth }) {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loadingInProgress, setLoading] = useState(true); // Add loading state
  const navigate = useNavigate();

  const deletePost = async (postId) => {
    try {
    window.scrollTo(0, 0);

      const postDocRef = doc(db, 'Posts', postId);
      await deleteDoc(postDocRef);
      notifySuccess('Post deleted successfully!');
      navigate('/blog');
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const editPost = (postId) => {
    window.scrollTo(0, 0);

    navigate(`/edit-post/${postId}`);
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postDocRef = doc(db, 'Posts', postId);
        const postDoc = await getDoc(postDocRef);

        if (postDoc.exists()) {
          setPost({ id: postDoc.id, ...postDoc.data() });
          setLoading(false); // Set loading to false when data is fetched
        } else {
          console.error('Post not found');
          setLoading(false); // Set loading to false when there's an error
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        setLoading(false); // Set loading to false when there's an error
      }
    };

    fetchPost();
  }, [postId]);

  const notifySuccess = (message) => {
    toast.success(message, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="max-w-5xl mx-auto leading-8 px-8 h-full">
      {loadingInProgress ? 
        <div className="flex justify-center items-center h-screen">
          <ClipLoader color="purple" size={50} />
        </div>
       : (
        post ? (
          <div>
            <h1 className="text-center font-bold text-4xl my-8">{post.title}</h1>
            {post.imageUrl && (
              <img
                className="w-full mb-8 rounded-md"
                src={post.imageUrl}
                alt="Post Image"
                style={{
                  maxWidth: '1024px',
                  maxHeight: '600px',
                  objectFit: 'cover',
                }}
              />
            )}
            <div>{post.postText}</div>
            <h3 className="my-4">
              <span className="font-bold">Posted By: </span>
              <span className="text-red-600">
                {post.author?.name || 'Unknown Author'}
              </span>
            </h3>
            {isAuth && post.author?.id === auth.currentUser?.uid && (
              <div className="mb-8">
                <button
                  onClick={() => editPost(post.id)}
                  className="mr-2 bg-purple-700 py-2 px-6 text-white rounded-md"
                >
                  Edit
                </button>
                <button
                  onClick={() => deletePost(post.id)}
                  className="mr-2 bg-purple-700 py-2 px-6 text-white rounded-md"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ) : (
          <p>Loading Blog...</p>
        )
      )}
    </div>
  );
}

export default FullPost;
