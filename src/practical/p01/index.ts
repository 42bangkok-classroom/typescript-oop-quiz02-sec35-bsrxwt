import axios from "axios";
interface Posts{
    userId: number;
    id: number;
    title: string;
    body: string;
}
interface RePosts{
    id: number;
    title: string;
}

export const getEdgePosts = async (): Promise<RePosts[]> => {
    try{
        const url = "https://jsonplaceholder.typicode.com/posts";
        const resPosts = await axios.get<Posts[]>(url);
        const posts = resPosts.data;
        if(!posts.length){
            return [];
        }
        const Fpost = posts[0];
        const Lpost = posts[posts.length-1];
        const result = [Fpost,Lpost].map((post)=>({
            id: post.id,
            title: post.title,
        }));
        return result;
    }catch(error){
        return [];
    }
}
