import React, { useState } from "react";
import { Segment } from "./types";

interface UserSegmentsProps {
  userSegments: Array<Segment>;
  deleteUserSegment: (id: string | undefined) => void;
}

interface SegmentComponentProps {
  segment: Segment;
  deleteUserSegment: (id: string | undefined) => void;
}

const SegmentComponent: React.FC<SegmentComponentProps> = ({
  segment,
  deleteUserSegment,
}) => {
  const [users, setUsers] = useState<string[]>(["Joe", "John", "James"]);
  const [assignedUsers, setAssignedUsers] = useState<string[]>([]);

  return (
    <li>
      <button onClick={() => deleteUserSegment(segment.id)}>X</button>
      <p>Name: {segment.name}</p>
      <p>Description: {segment.description}</p>
      <select
        onChange={({ target }) => {
          if (assignedUsers.includes(target.value)) return;
          setAssignedUsers((prev) => [...prev, target.value]);
        }}
      >
        {users.map((user, i) => (
          <option key={`user-${i}`} value={user}>
            {user}
          </option>
        ))}
      </select>
      {assignedUsers.map((assignedUser) => (
        <button
          key={assignedUser}
          onClick={() =>
            setAssignedUsers(
              assignedUsers.filter((user) => user !== assignedUser)
            )
          }
        >
          {assignedUser}
        </button>
      ))}
    </li>
  );
};

const UserSegments: React.FC<UserSegmentsProps> = ({
  userSegments,
  deleteUserSegment,
}) => {
  return (
    <ul>
      {userSegments.map((segment) => (
        <SegmentComponent
          key={segment.id}
          segment={segment}
          deleteUserSegment={deleteUserSegment}
        />
      ))}
    </ul>
  );
};

export default UserSegments;
