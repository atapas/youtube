import React, { useState, useTransition } from 'react';
import './App.css';

export default function App({ users }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filtered, setFiltered] = useState(users);

  // A Standard Hook to mark things non-urgent
  const [isPending, startTransition] = useTransition();

  const handleChange = ({ target: { value } }) => {
    // Set the search term on the textbox
    setSearchTerm(value);

    // Execute Non-Urgent Code
    startTransition(() => {
      // Filter the user list based on the search term
      setFiltered(users.filter(
        (item) => item.name.includes(value)
      ));
    });
  };

  return (
    <div className="container">
      <div>
        {isPending ? (
          <div>Loading...</div>
        ) : (
          <p>
            {users.length !== filtered.length ? `${filtered.length} matches` : null} 
          </p>
        )}
      </div>
      
      <input onChange={handleChange} value={searchTerm} type="text" />
      
      {isPending ? (
        <div>Loading...</div>
      ) : (
        <div className="cards">
          {filtered.map((user) => (
            <div class="card">
              <div className="profile">
                <img src={user.avatar} alt={`Avatar image of ${user.name}`} />
              </div>
              <div className="body">
                <strong>{user.name}</strong>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
