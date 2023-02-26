import "./styles.css";

const users = [
  { id: 1, name: "Onkar Kadam" },
  { id: 2, name: "Santosh Chaugule" },
  { id: 3, name: "Yogesh Gaikwad" }
];
const userItem = users.map((item) => (
  <li key={item.id}>
    {item.id} {item.name}
  </li>
));

export default function App() {
  return (
    <>
      <h2>User list</h2>
      <ul>{userItem}</ul>
    </>
  );
}
