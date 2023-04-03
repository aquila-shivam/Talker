import CommentItems from "./CommentItems";

interface CommentFeedProps{
    comments?:Record<string,any>[];
}

const CommentFeed : React.FC<CommentFeedProps> = ({
    comments =[]
}) => {
  return (
   <>
    {comments.map((comment)=>(
        <CommentItems key={comment.id} data={comment}/>
    ))}

   </>
  )
}

export default CommentFeed
