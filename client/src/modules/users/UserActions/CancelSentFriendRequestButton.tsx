import Button from "../../../components/Button/Button";
import {
  useDeleteFriendRequest,
  useGetSentFriendRequests,
} from "../../../modules/users/apiClient";

const CancelSentFriendRequestButton = ({ userId }: { userId: string }) => {
  const { data: sentFriendRequests = [] } = useGetSentFriendRequests();
  const { mutate: deleteFriendRequest } = useDeleteFriendRequest();

  const currentRequest = sentFriendRequests.find(
    (request) => request.to === userId
  );

  return (
    <Button
      className="text-white"
      color="secondary"
      onClick={() => {
        deleteFriendRequest(currentRequest?._id);
      }}
    >
      Cancel request
    </Button>
  );
};

export default CancelSentFriendRequestButton;
