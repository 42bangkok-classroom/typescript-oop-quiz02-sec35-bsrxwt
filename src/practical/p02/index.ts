import axios from "axios";
interface Posts{
    userId: number;
    id: number;
    title: string;
    body: string;
}
interface UserSummary {
  id: number;
  title: string;
}
export const getPostsByUser = async(userId: number): Promise<UserSummary[]> =>{
    try{
        const url = "https://jsonplaceholder.typicode.com/posts";
        const resPost = await axios.get<Posts[]>(url);
        const posts = resPost.data;
        const result = posts.filter((post)=>post.userId === userId).map((post)=>({
            id: post.id,
            title: post.title,
        }));
        return result;
    }catch(error){
        return [];
    }
}