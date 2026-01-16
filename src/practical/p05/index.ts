import axios from "axios";
interface Comments {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}
interface reComment{
    id: number;
    body: string;
}
export const safeFetchComment = async(commentId:number): Promise<reComment | null> => {

    try{
        const resComment = await axios.get<Comments>(``);
        const {id,body} = resComment.data;
        return {id,body};
    }catch(error){
    return null;
    }
}