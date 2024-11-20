export default function FruitList() {
  const fruits = [
    { name: "Apple", color: "Green" },
    { name: "Banana", color: "yellow" },
    { name: "Cherry", color: "red" },
  ];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit.name}</li>
      ))}
    </ul>
  );
}
