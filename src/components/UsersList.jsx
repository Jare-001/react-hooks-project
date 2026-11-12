import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "./UserCard";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    }
    fetchData();
  }, []);

  return (
    <div className="userlist">
      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
          phoneNumber={user.phone}
          street={user.address.street}
          city={user.address.city}
          companyName={user.company.name}
          catchPhrase={user.company.catchPhrase}
        />
      ))}
    </div>
  );
};

export default UsersList;