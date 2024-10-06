import Button from "../../../components/Button/Button";
import {
  useAcceptFriendRequest,
  useDeleteFriendRequest,
  useGetReceivedFriendRequest,
} from "../../../modules/users/apiClient";

const RespondToFriendRequestButton = ({ userId }: { userId: string }) => {
  const { data: receivedFriendRequests = [] } = useGetReceivedFriendRequest();
  const { mutate: deleteFriendRequest } = useDeleteFriendRequest();

  const { mutate: acceptFriendRequest } = useAcceptFriendRequest();

  const currentRequest = receivedFriendRequests.find(
    (request) => request.from === userId
  );

  return (
    <div className="flex gap-3">
      <Button
        className="text-white"
        color="secondary"
        onClick={() => acceptFriendRequest(currentRequest?._id)}
      >
        Accept
      </Button>
      <Button
        className="text-white"
        color="danger"
        onClick={() => deleteFriendRequest(currentRequest?._id)}
      >
        Decline
      </Button>
    </div>
  );
};

export default RespondToFriendRequestButton;
