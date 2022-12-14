import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

export const PostForm = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const schema = yup.object().shape({
    title: yup.string().required('You must add a Title'),
    description: yup.string().required('You must add Description'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const postsRef = collection(db, 'posts');

  const onCreatePost = async (data) => {
    await addDoc(postsRef, {
      ...data,
      username: user.displayName,
      userId: user?.uid,
    });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit(onCreatePost)}>
      <div>
        <input placeholder="Title" {...register('title')} />
        <p style={{ color: 'red' }}>{errors.title?.message}</p>
      </div>
      <div>
        <textarea placeholder="Description" {...register('description')} />
        <p style={{ color: 'red' }}>{errors.description?.message}</p>
      </div>
      <input type="submit" className="btn" />
    </form>
  );
};
