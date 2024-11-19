export default function Greeting({ name, lastname, age }) {
  return (
    <h1>
      Hello, {name} {lastname} {age + 2}!
    </h1>
  );
}
