
import { PostType } from "./types";
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import XMark from "../../assets/x-mark.svg";

const dateHeaders = {
  "Content-Type": "application/json"
};

const newPostObj : PostType = {
  id: "2",
  title: "Swiss",
  description: "Ovo je moje predobro putovanje u Švicarsku, bilo je odlično!",
  hashtags: ["swiss", "travel", "hollidays", "influensanje"],
  img_url:
    "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
};


const Instagram = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [modal, setModal] = useState<boolean>(false);

  const getPosts = () => {
    fetch(`http://localhost:3000/instagram`)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
        setPosts(jsonData);
      })
      .catch((error) => console.error(error));
  };

  const createPost = (obj: PostType) => {
    console.log("podatci: ", obj);
    fetch(`http://localhost:3000/instagram`, {
      method: "POST",
      headers: dateHeaders,
      body: JSON.stringify(obj),
    })
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      getPosts();
      setModal(false);
    })
    .catch((error) => console.error(error));
  };

  const handlePost = () => {
    const titleValue = document.querySelector(
      "#post__title"
    ) as HTMLInputElement;
    const descValue = document.querySelector(
      "#post__desc"
    ) as HTMLTextAreaElement;
    const imgValue = document.querySelector(
      "#post__img"
    ) as HTMLInputElement;

    const newPost: PostType = {
      id: uuidv4(),
      title: titleValue.value,
      description: descValue.value,
      hashtags: [],
      img_url: imgValue.value,
    };

    debugger;
    createPost(newPost);
  }

 
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container container--insta">
      <h1>Instagram Clone</h1>

      {posts.map((post) => {
        return(
          <div className="post" key={post.id}>
            <h4 id="post__title">{post.title}</h4>
            <p id="post__desc">{post.description}</p>
            <img
              className="post__img"
              src={newPostObj.img_url}
              alt="instagram img"
            />
             <button onClick={() => setModal(true)} className="btn">
                Add new post
             </button>
          </div>
        );
      })}

{modal ? (
        <>
          <div
            className="custom-modal__overlay"
            onClick={() => setModal(false)}
          ></div>
          <div className="custom-modal">
            <div className="custom-modal__header">
              <div className="custom-modal__header__title">Dodaj novi post</div>
              <div
                className="custom-modal__close"
                onClick={() => setModal(false)}
              >
                <img src={XMark} />
              </div>
            </div>
            <div className="custom-modal__body">
              <div>
                <div className="field">
                  <label htmlFor="title">Post title</label>
                  <input
                    id="post_title"
                    className="input input--rounded"
                    name="title"
                    type="text"
                  />
                </div>
                <div className="field">
                  <label htmlFor="description">Post Description</label>
                  <textarea
                    id="post_desc"
                    className="input input--rounded"
                    name="description"
                  ></textarea>
                </div>
                <div className="field">
                  <label htmlFor="img">Post img</label>
                  <input
                    id="post_img"
                    className="input input--rounded"
                    name="img"
                    type="text"
                  />
                </div>
                <button className="btn" onClick={() => handlePost()}>
                  Post
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};


export default Instagram;
