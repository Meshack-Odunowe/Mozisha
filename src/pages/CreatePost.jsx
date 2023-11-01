import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase/firebase";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import DOMPurify from "dompurify"; // Import DOMPurify

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const postsCollectionRef = collection(db, "Posts");
  const navigate = useNavigate();
  const storage = getStorage();

  const createPost = async () => {
    if (title.trim() === "" || postText.trim() === "") {
      alert("Please provide both a title and post text.");
      return;
    }

    setLoading(true);

    if (image) {
      const imageRef = ref(storage, "post-images/" + image.name);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      // Sanitize user's HTML input
      const sanitizedPostText = DOMPurify.sanitize(postText);

      await addDoc(postsCollectionRef, {
        title,
        postText: sanitizedPostText, // Use the sanitized content
        imageUrl,
        author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
      });

      setLoading(false);
      navigate("/blog");
    } else {
      const sanitizedPostText = DOMPurify.sanitize(postText);

      await addDoc(postsCollectionRef, {
        title,
        postText: sanitizedPostText,
        author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
      });

      setLoading(false);
      navigate("/");
    }
  };

  return (
    <div>
      <div className="max-w-5xl mx-auto flex flex-col bg-purple-100 p-8 rounded-lg h-full">
        <h1 className="text-4xl font-bold my-4">Create A Post</h1>

        <label className="font-bold mt-4 text-lg">Title:</label>
        <input
          className="p-4 rounded-md shadow-md"
          placeholder="Title..."
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label className="font-bold mt-4 text-lg">Post:</label>
        <textarea
          className="p-4 rounded-md shadow-md"
          placeholder="Post..."
          value={postText}
          onChange={(event) => setPostText(event.target.value)}
          rows={4}
        />
        <label className="font-bold mt-4 text-lg">Image:</label>
        <input
          className="p-4 rounded-md shadow-md"
          type="file"
          accept="image/*"
          onChange={(event) => setImage(event.target.files[0])}
        />
        <button
          onClick={createPost}
          className="text-white bg-purple-700 py-2 px-6 rounded-md my-8"
        >
          Submit Post
        </button>

        {loading && (
          <div className="text-center">
            <ClipLoader color={"purple"} size={50} />
          </div>
        )}
      </div>
    </div>
  );
}

export default CreatePost;
