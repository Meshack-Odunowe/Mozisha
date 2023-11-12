/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase/firebase';
import { toast } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import ReactQuill from 'react-quill';

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

// eslint-disable-next-line react/prop-types
function CreatePost({ isAuth }) {
  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const postsCollectionRef = collection(db, 'Posts');
  const navigate = useNavigate();
  const storage = getStorage();
  const [editorHtml, setEditorHtml] = useState('');
  const quillModules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      ['bold', 'italic', 'underline'],
      ['image', 'link'],
    ],
  };
  
  const quillFormats = [
    'header',
    'font',
    'bold',
    'italic',
    'underline',
    'link',
    'image',
  ];
  
  const createPost = async () => {
    window.scrollTo(0, 0);
  
    
  
    if (title.trim() === '' || editorHtml.trim() === '') {
      toast.error('Please provide both a title and post text.');
      return;
    }
  
    setLoading(true);
  
    console.log('Before adding post to Firestore');
  
    try {
      if (image) {
        const imageRef = ref(storage, 'post-images/' + image.name);
        await uploadBytes(imageRef, image);
        const imageUrl = await getDownloadURL(imageRef);
  
        await addDoc(postsCollectionRef, {
          title,
          postText: editorHtml,
          imageUrl,
          author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
        });
  
        console.log('Firestore operation successful');
      } else {
        await addDoc(postsCollectionRef, {
          title,
          postText: editorHtml,
          author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
        });
  
        console.log('Firestore operation successful');
      }
  
      setLoading(false);
      navigate('/blog');
  
      toast.success('Post created successfully', {
        position: 'top-right',
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error('Error in Firestore operation:', error);
      setLoading(false);
    }
  };
  
  

  return (
    <div>
      <div className='max-w-5xl mx-auto flex flex-col bg-purple-100 p-8 rounded-lg h-full'>
        <h1 className='md:text-4xl text-2xl font-bold my-4'>Create A Post</h1>

        <label className='font-bold mt-4 text-lg'>Title:</label>
        <input
          className='p-4 rounded-md shadow-md'
          placeholder='Title...'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label className='font-bold mt-4 text-lg'>Post:</label>
        <ReactQuill
          className='bg-white  shadow-md rounded-md'
  value={editorHtml}
  onChange={setEditorHtml}
  modules={quillModules}
  formats={quillFormats}
/>


        <label className='font-bold mt-4 text-lg'>Image:</label>
        <input
          className='p-4 rounded-md shadow-md border '
          type='file'
          accept='image/*'
          onChange={(event) => setImage(event.target.files[0])}
        />
        <button
          onClick={createPost}
          className='text-white bg-purple-700 py-2 px-6 rounded-md my-8'
        >
          Submit Post
        </button>

        {loading && (
          <div className='text-center'>
            <ClipLoader color={'purple'} size={50} />
          </div>
        )}
      </div>
    </div>
  );
}

export default CreatePost;
