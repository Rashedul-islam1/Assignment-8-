const Problem5 = () => {
  // Array of person objects
  const human = [
    { name: "Rashed", age: 28 },
    { name: "Bulbuli", age: 26 },
    { name: "zareef", age: 13 },
  ];

  const ageModify = (name, newAge) => {
    const person = human.find((item) => item.name === name);
    if (person) {
      person.age = newAge;
    }
  };

  ageModify("zareef", 20);

  console.log(human);

  return <div></div>;
};

export default Problem5;
