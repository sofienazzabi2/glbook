import classNames from "classnames";
import { MessageType } from "../../common/types";
import { formatDate } from "../../helpers/helpers";

type ChatMessageProps = {
  sentByCurrentUser: boolean;
  message: MessageType;
};

const ChatMessage = ({ sentByCurrentUser, message }: ChatMessageProps) => {
  return (
    <div
      className={classNames("flex gap-3 items-center max-w-[70%]", {
        "ml-auto  flex-row-reverse": sentByCurrentUser,
      })}
    >
      <p
        className={classNames("  p-5 rounded-md", {
          "bg-dark text-black": sentByCurrentUser,
          "bg-secondary text-white": !sentByCurrentUser,
        })}
      >
        {message.text}
      </p>
      <p>{formatDate(new Date(message.createdAt))}</p>
    </div>
  );
};

export default ChatMessage;
