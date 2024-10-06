import { NotificationTypesEnum } from "../../components/Notification";
import { useDeleteComment } from "../../modules/posts/apiClient";
import { useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { showNotification } from "../../store/ui/uiSlice";

type DeleteCommentProps = {
  postId: string;
  commentId: string;
  onDeleteCommentSucceeded: (commentId: string) => void;
};

const DeleteComment = ({
  commentId,
  onDeleteCommentSucceeded,
}: DeleteCommentProps) => {
  const dispatch = useDispatch();

  const {
    execute: deleteComment,
    isLoading,
    isSucceeded,
  } = useDeleteComment(commentId);

  useEffect(() => {
    if (!isSucceeded) return;
    dispatch(
      showNotification({
        text: "Comment deleted successfuly!",
        type: NotificationTypesEnum.success,
        autoDismiss: 2000,
      })
    );
    onDeleteCommentSucceeded(commentId);
  }, [commentId, dispatch, isSucceeded, onDeleteCommentSucceeded]);

  return (
    <button
      onClick={() => {
        if (window.confirm("Are you sure?")) {
          deleteComment();
        }
      }}
    >
      {isLoading ? "..." : <IoIosClose className="text-black" />}
    </button>
  );
};

export default DeleteComment;
