const Greet = ({ name }: { name?: string }) => {
  if (name) return <h1>Hello {name}</h1>;

  return (
    <div>
      <button>Login</button>;
    </div>
  );
};

export default Greet;
