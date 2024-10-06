import Button from "../../../components/Button/Button";
import { useSendFriendRequestV2 } from "../../../modules/users/apiClient";

const AddFriendButton = ({ userId }: { userId: string }) => {
  const { mutate: sendFriendRequest } = useSendFriendRequestV2();

  return (
    <Button
      className="text-white"
      color="secondary"
      onClick={() => sendFriendRequest(userId)}
    >
      Add friend
    </Button>
  );
};

export default AddFriendButton;
