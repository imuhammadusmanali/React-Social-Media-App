import { getDocs, collection } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { db, auth } from '../config/firebase';
import { Post } from './post';

export const Home = () => {
  const [user] = useAuthState(auth);

  const [postsList, setPostsList] = useState(null);

  const postsRef = collection(db, 'posts');

  const getPosts = async () => {
    const data = await getDocs(postsRef);
    setPostsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {user && (
        <div>
          {postsList?.map((post) => (
            <Post post={post} />
          ))}
        </div>
      )}
    </div>
  );
};
