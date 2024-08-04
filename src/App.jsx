// src/App.jsx
import './App.css';

const App = () => {
  const items = [
    { name: 'harry potter', read: true },
    { name: 'dune', read: false },
    { name: 'The Witcher', read: true },
  ];

  return (
    <>
      <h1>Book reading List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index} className={item.read ? 'Has been read' : 'has been not read`'}>
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;