import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Rajesh",
      image:
        "https://www.planetware.com/wpimages/2020/01/india-in-pictures-beautiful-places-to-photograph-taj-mahal.jpg",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
