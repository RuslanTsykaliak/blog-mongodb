'use client'

import { SetStateAction, createContext } from "react";

type PostsContextProps = {
  posts: never[];
  setPosts: Dispatch<SetStateAction<never[]>>;
};

const PostsContext = createContext<PostsContextProps>()
export default PostsContext
