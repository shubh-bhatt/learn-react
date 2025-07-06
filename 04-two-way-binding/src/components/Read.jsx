const Read = (props) => {
  let users = props.users;
  let renderuser = users.map((user, index) => {
    return <li key={index}>{user.name}</li>;
  });

  return (
    <div>
      <h1>User Info</h1>
      <ol>{renderuser}</ol>
    </div>
  );
};

export default Read;
