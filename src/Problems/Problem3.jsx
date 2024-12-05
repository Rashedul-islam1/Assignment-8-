const Problem3 = () => {
  // Function to square a number
  const square = (num) => num * num;

  // Function to double a number
  const double = (num) => num * 2;

  // Function to add 5 to a number
  const addFive = (num) => num + 5;

  // Composing the functions
  const FinalFunction = (num) => addFive(double(square(num)));

  // Test the composed function
  console.log(FinalFunction(3)); // Output: 23

  return <div></div>;
};

export default Problem3;
