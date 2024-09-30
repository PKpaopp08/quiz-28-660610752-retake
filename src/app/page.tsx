import Image from "next/image";
import styles from "./page.module.css";
import { comments } from "../libs/comments";
import PostOwnner from "../components/PostOwnner";
import Comment from "../components/Comment";
import { ReplyProps } from "../libs/types";



interface CommentComponent {
  userImagePath: string;
  username: string;
  commentText: string;
  likeNum: number;
  replies: ReplyProps[];
}

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <PostOwnner
          PostTitle="Natthachai Bubpa 660610752"
          content="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"
          profilePic="/profileImages/me.jpg"
          likes={55}
        ></PostOwnner>
        {/* map-loop render Comment component here */}
        {comments.map((com: CommentComponent) => (
          <Comment
            key={com.username}
            ImagePath={com.userImagePath}
            username={com.username}
            commentTitle={com.commentText}
            likes={com.likeNum}
            replies={com.replies}
          />
        ))}
      </div>
    </div>
  );
}
