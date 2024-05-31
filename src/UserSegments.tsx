import { Segment } from "./types";

interface UserSegmentsProps {
  userSegments: Array<Segment>;
  deleteUserSegment: (id: string | undefined) => void;
}

const UserSegments: React.FC<UserSegmentsProps> = ({
  userSegments,
  deleteUserSegment,
}) => (
  <ul>
    {userSegments.map((segment, i) => (
      <li key={i}>
        <button
          onClick={() => deleteUserSegment && deleteUserSegment(segment.id)}
        >
          X
        </button>
        <p>Name: {segment.name}</p>
        <p>Description: {segment.description}</p>
      </li>
    ))}
  </ul>
);

export default UserSegments;
