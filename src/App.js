import "./styles.css";
import Data from "./data.json"; // 追加

export default function App() {
  const Datas = Data.data;

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>some magic happen!</h2>
      <div>
        <ul>
          {Datas.map((user) => (
            <li key={user.id}>
              {user.first_name}: {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
