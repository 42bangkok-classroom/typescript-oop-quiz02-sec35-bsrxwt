import axios from "axios";
interface Comment{
  postId: number;
  id:number;
  name: string;
  email: string;
  body: string;
}
interface CommentCounts {
  [key: number]:number;
}
export const countCommentsByPost = async(): Promise<CommentCounts|null> => {
    try {
        const url = "https://jsonplaceholder.typicode.com/comments";
        const response = await axios.get<Comment[]>(url);
        const comments = response.data;
        const result = comments.reduce((acc, comment) => {      
        acc[comment.postId] = (acc[comment.postId] || 0) + 1;
          return acc;
        }, {} as CommentCounts);
        return result;
    } catch (error) {
        return {};
    }
};