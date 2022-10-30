import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
interface Post {
  id: number;
  title: string;
  description: string;
}
function Form() {
  const [post, setPost] = useState({
    title: "",
    description: "",
  });
  const [newPost, setNewPost] = useState<Post | undefined>();
  const hadleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPost({
      ...post,
      [name]: value,
    });
    console.log(name, value);
  };
  const hadleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault(); 
    const res = await axios.post<Post>("https://jsonplaceholder.typicode.com/posts",
      post);
    console.log(res);
    console.log(res.data.id);
    console.log(res.data.title);
    console.log(res.data.description);
    setNewPost(res.data);
    // const res=await axios.post<string[]>('https://jsonplaceholder.typicode.com/posts',post)
    // console.log(res.data.length);
  };
  return (
    <>
      <form onSubmit={hadleSubmit}>
        <input name="title" type="text" onChange={hadleChange} />;
        <textarea
          name="description"
          id=""
          rows={3}
          onChange={hadleChange}
        ></textarea>
        <button>save</button>
      </form>
      {JSON.stringify(newPost)}
    </>
  );
}
export default Form;

// edit: I've added the `as HTMLElement` to the `getElementById` call. This is because the `getElementById` method returns `HTMLElement | null` and the `render` method expects `HTMLElement`.