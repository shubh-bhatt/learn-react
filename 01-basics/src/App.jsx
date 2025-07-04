const App = () => {
  const profiles = [
    { name: "Shubham", age: 23 },
    { name: "Anurag", age: 18 },
    { name: "Dhanesh", age: 28 },
  ];

  let updatedProfiles = profiles.map((profile, index) => {
    return (
      <li key={index}>
        <span>{profile.name}</span> | <span>{profile.age}</span>
      </li>
    );
  });

  return (
    <div>
      <h1>Rendering JSON</h1>
      <ol>{updatedProfiles}</ol>
    </div>
  );
};

export default App;
