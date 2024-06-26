import type { Schema } from "../amplify/data/resource";
import SegmentForm from "./SegmentForm";
import UserSegments from "./UserSegments";
import { Segment } from "./types";

interface MessagesProps {
  messages: Array<Schema["Message"]["type"]>;
  deleteMessage: (id: string) => void;
  deleteUserSegment: (id: string | undefined) => void;
  userSegments: Array<Segment>;
  onCreateSegment: (messageID: string) => (segment: Segment) => void;
}

const Messages: React.FC<MessagesProps> = ({
  messages,
  deleteMessage,
  userSegments,
  onCreateSegment,
  deleteUserSegment,
}) => (
  <ul>
    {messages.map((message) => (
      <li key={message.id}>
        <button onClick={() => deleteMessage(message.id)}>X</button>
        <h2>{message.title}</h2>
        <p>Description: {message.content}</p>
        <p>createAt: {message.createdAt}</p>
        <UserSegments
          userSegments={userSegments.filter(
            (segment) => segment.messageID === message.id
          )}
          deleteUserSegment={deleteUserSegment}
        />
        <SegmentForm onSubmit={onCreateSegment(message.id)} />
      </li>
    ))}
  </ul>
);

export default Messages;
