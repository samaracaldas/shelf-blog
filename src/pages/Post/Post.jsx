import styles from './Post.module.css';

// hooks
import { useParams } from 'react-router-dom';
import { useFetchDocument } from '../../hooks/useFetchDocument';

const Post = () => {

    const { id } = useParams();
    const { document: post, loading } = useFetchDocument("posts", id)

  return (
    <div className={styles.post_container}>
      {loading && <p>Carregando post...</p>}
      {post && (
        <>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.content}>
          <img src={post.image} alt={post.title} className={styles.image} />
          <div className={styles.text_container}>
            <p className={styles.body}>{post.body}</p>
            <div className={styles.tags}>
              {post.tags.map((tag) => (
                <p key={tag} className={styles.tag}>
                  <span>#</span>
                  {tag}
                </p>
              ))}
            </div>
            <p className={styles.createdBy}>— {post.createdBy}</p>
          </div>
        </div>
      </>
      )}
    </div>
  )
}

export default Post