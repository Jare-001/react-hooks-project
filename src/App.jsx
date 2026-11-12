import UsersList from "./components/UsersList";

const App = () => {
  return (
    <div>
      <h2 className="heading2">Persons Details</h2>
      <p>List of users in the application</p>

      <main>
        <UsersList />
      </main>
    </div>
  );
};

export default App;