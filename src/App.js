import { useEffect, useState } from "react";
import { request } from "graphql-request";
import "./styles.css";

export default function App() {
  const [members, setMembers] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      const { members } = await request(
        "https://api-ap-northeast-1.graphcms.com/v2/ckuzc9owr0kmd01z4g3kl3csf/master",
        `query {
          members {
            name
            password
          }
        }`
      );
      setMembers(members);
    };
    fetchMembers();
  }, []);
  if (!members) return <p>loading ... </p>;
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <ul>
        {members.map((member, index) => (
          <li key={index}>
            {member.name}/{member.password}
          </li>
        ))}
      </ul>
    </div>
  );
}
