import React, { useState } from 'react'
import { FaCommentDots } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { addPost, addComment } from '../Redux/auth/action';
import Navbar from './Navbar/Navbar';

const Post = () => {
  const dispatch = useDispatch();
  const postData = useSelector((state) => state.postData);
  const commentData = useSelector((state) => state.commentData);

  const [activePostIndex, setActivePostIndex] = useState(null);
  const [postValue, setPostValue] = useState({
    Title: '',
    description: '',
  });
  const [commentValue, setCommentValue] = useState({
    comment: '',
  });

  const toggleCommentBox = (index) => {
    setActivePostIndex(index === activePostIndex ? null : index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostValue((prevPostValue) => ({
      ...prevPostValue,
      [name]: value,
    }));
  };

  const handlePost = (e) => {
    e.preventDefault();
    if (postValue.Title) {
      dispatch(addPost(postValue));
    }

    setPostValue({
      Title: '',
      description: '',
    });
  };

  const handalChangeComment = (e) => {
    const { name, value } = e.target;
    setCommentValue((prevCommentValue) => ({  
      ...prevCommentValue,
      [name]: value,
    }));
  };

  const handlesetCommnets = (e, postIndex) => {
    e.preventDefault();
    if (commentValue.comment) {
      dispatch(addComment({ postIndex, comment: commentValue.comment }));
    }
    console.log(commentValue.comment,"hlksdhgfuk");

    setCommentValue({
      comment: '',
    });
  };


  return (
    <>
    <Navbar/>
      <div className="heading text-center font-bold text-2xl m-5 text-gray-800">New Post</div>

      <div className=" mx-auto w-10/12 p-4  max-w-2xl ">
        <div className='editor text-gray-800 border border-gray-300 shadow-lg  flex flex-col rounded-lg '>
          <input className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellCheck="false" name="Title" value={postValue.Title} onChange={handleChange} placeholder="Title" type="text" />
          <textarea className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" name="description" value={postValue.description} spellCheck="false" onChange={handleChange} placeholder="Describe everything about this post here"></textarea>

          <div className="buttons flex mt-4">
            <button className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">Cancel</button>
            <button onClick={handlePost} className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">Post</button>
          </div>
        </div>
        <div className="w-full editor bg-slate-100 text-gray-800 border-gray-300 shadow-lg border px-6 py-8 mt-6 overflow-hidden  rounded-lg lg:max-w-4xl">
          {postData?.map((item, index) => (
            <div key={index} className="bg-white rounded-lg mb-5">
              <div className="w-full bg-slate-500  px-6 py-4 rounded shadow-md ring-1 ring-gray-900/10 ">
                <div>
                  <h3 className="text-2xl text-white font-semibold">{item.Title}</h3>
                  <div className="flex items-center mb-4 space-x-2">
                    <span className="text-xs text-gray-500"></span>
                    <span className="text-xs text-gray-500"></span>
                  </div>
                  <p className="text-base text-white">{item.description}</p>
                </div>

              </div>

              <button
                type="button"
                onClick={() => toggleCommentBox(index)}
                className="flex items-center mt-4  ml-5 text-indigo-500"
              >
                <FaCommentDots className="" />
              </button>

              <section class=" dark:bg-gray-900  antialiased ">
                <div class="max-w-2xl mx-auto px-4">

                  {activePostIndex === index && (
                    <>

                      <div class="flex justify-between items-center mb-6">
                      </div>
                      <form key={index} class="mb-6">
                        <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                          <label for="comment" class="sr-only">Your comment</label>
                          <textarea id="comment" rows="1"
                            class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                            placeholder="Write a comment..."
                            value={commentValue.comment}
                            onChange={(e) => handalChangeComment(e,)}
                            name="comment"
                          ></textarea>
                        </div>
                        <button type="submit"
                          onClick={(e) => handlesetCommnets(e, index)}
                          class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white  bg-indigo-600 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                          Post comment
                        </button>
                      </form>
                    </>

                  )}

                  {commentData?.map((cmt, commentIndex) => {
                    if (cmt.postIndex === index) {
                      return (



                        <article key={commentIndex} class="p-6 text-base bg-white rounded-lg dark:bg-gray-900 mb-5 ">
                          <footer class="flex justify-between items-center mb-2">
                            <div class="flex items-center">
                              <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                                <img
                                  class="mr-2 w-6 h-6 rounded-full"
                                  src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                  alt="Michael Gough" />Michael Gough</p>
                              <p class="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-02-08"
                                title="February 8th, 2022">Feb. 8, 2022</time></p>
                            </div>
                          </footer>
                          <p class="text-gray-500 dark:text-gray-400" > {cmt.comment}</p>
                          <div class="flex items-center mt-4 space-x-4">
                            <button type="button"
                              class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium">
                              <svg class="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                              </svg>
                              Reply
                            </button>
                          </div>
                        </article>

                      );
                    }
                    return null;
                  })}

                </div>
              </section>

            </div>
          ))}

        </div>

      </div>

    </>

  )
  
}

export default Post
