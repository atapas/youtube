import {useState} from 'react';

function App() {

  const [contact, setContact] = useState({
    'fname': '',
    'email': '',
    'password': '',
    'address': '',
    'color': '',
    'city': '',
    'state': '',
    'zip': '',
    'agree': false
  });

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    if(event.target.type === 'checkbox') {
      value = event.target.checked;
    }

    setContact({
      ...contact,
      [name]: value
    })

  }

  return (
    <div className="p-8 flex justify-around">
      <form className="bg-gray-200 p-2 rounded w-1/2 mr-4">
        <div className="my-2">
          <label 
            className="mx-4"
            htmlFor="fname">Full Name</label>
          <input
            type="text"
            name="fname"
            id="fname"
            value={contact.fname}
            placeholder="Enter Full Name"
            className="border border-gray-400 rounded p-1"
            onChange={handleChange}
            required
          />
        </div>

        <div className="my-2">
          <label 
            className="mx-4"
            htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={contact.email}
            placeholder="Enter Email"
            className="border border-gray-400 rounded p-1"
            onChange={handleChange}
            required
          />
        </div>

        <div className="my-2">
          <label 
            className="mx-4"
            htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={contact.password}
            placeholder="Enter Password"
            className="border border-gray-400 rounded p-1"
            onChange={handleChange}
            required
          />
        </div>

        <div className="my-2">
          <label 
            className="mx-4"
            htmlFor="color">Your Favorite Color</label>
          <input 
            type="color" 
            name="color" 
            id="color" 
            value={contact.color}
            className="border border-gray-400 rounded p-1"
            onChange={handleChange} />
        </div>

        <div className="my-2">
          <label 
            className="mx-4"
            htmlFor="address">Address</label>
          <textarea
            name="address"
            id="address"
            placeholder="Where Can We Find You?"
            value={contact.address}
            className="border border-gray-400 rounded p-1"
            onChange={handleChange}
            required
          />
        </div>

        <div className="my-2">
          <label 
            className="mx-4"
            htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            value={contact.city}
            placeholder="Enter Your City"
            className="border border-gray-400 rounded p-1"
            onChange={handleChange}
            required
          />
        </div>

        <div className="my-2">
          <label 
            className="mx-4"
            htmlFor="state">State</label>
          <select 
            name="state" 
            id="state" 
            value={contact.state}
            className="border border-gray-400 rounded p-1" 
            onChange={handleChange}
            required>
            <option value="">Choose...</option>
            <option value="Solid">Solid</option>
            <option value="Liquid">Liquid</option>
            <option value="Gas">Gas</option>
          </select>
        </div>

        <div 
          className="mx-4">
          <label 
            className="my-2"
            htmlFor="zip">Pin/Zip</label>
          <input
            type="number"
            name="zip"
            id="zip"
            value={contact.zip}
            placeholder="Enter Zip/Pin Code"
            className="border border-gray-400 rounded p-1"
            onChange={handleChange}
            required
          />
        </div>

        <div className="my-2">
          <input 
            type="checkbox" 
            name="agree" 
            id="agree" 
            checked={contact.agree}
            className="mx-4"
            onChange={handleChange}
            required />
          <label htmlFor="agree">Say, You Agree!</label>
        </div>
      </form>

      <div className="bg-gray-200 p-2 rounded w-1/2 flex flex-col justify-center items-center">
        {
          contact.fname && (
            <p> Hey, <strong>{contact.fname}</strong>, Welcome!!!</p>
          )
        }

        { 
          contact.email && (
            <p> Thanks for giving us your email, <u>{contact.email}</u>!!!</p>
          )
        }

        {
          contact.password && (
          <p>
            Your password is of <strong>{contact.password.length}</strong>{" "}
            characters.
          </p>
        )}

        {
          contact.color && (
          <p>
            Do you know, the Hexacode of your{" "}
            <span style={{ color: contact.color }}>
              Favorite Color is: {contact.color}
            </span>
          </p>
        )}

        {
          contact.address && (
          <p>
            You stay at, {contact.address}, {contact.city}, {contact.state},{" "}
            {contact.zip}
          </p>
        )}

        {
          contact.agree ? (
          <p>You Agree, That's Great!</p>
        ) : (
          <p>You DO NOT agree with us yet!</p>
        )}
      </div>
    </div>
  );
}

export default App;
