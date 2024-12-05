const Problem1 = () => {
  const human = [
    { name: "Rashed", age: 28, gender: "male" },
    { name: "Zareef", age: 13, gender: "male" },
    { name: "bulbuli", age: 26, gender: "female" },
    { name: "irrtiza", age: 28, gender: "female" },
  ];

  const filteredNames = human
    .filter((person) => person.gender !== "female")
    .map((person) => person.name);

  console.log(filteredNames);
  return <div></div>;
};

export default Problem1;
