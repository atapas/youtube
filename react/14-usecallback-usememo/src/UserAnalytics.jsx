import { useState, useMemo } from "react";

const getAgeAnalytics = (data) => {
  // Do something dramatically slow here!
};

const UserAnalytics = () => {
  const [users, setUsers] = useState([]);

  const ageData = getAgeAnalytics(users);

  // const ageData = useMemo(() => getAgeAnalytics(users), [users]);

  return <div>{ageData}</div>;
};
