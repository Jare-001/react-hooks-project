const UserCard = ({
  name,
  email,
  phoneNumber,
  city,
  street,
  companyName,
  catchPhrase,
}) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phoneNumber}</p>

      <div className="comp-address">
        <div className="comp">
          <p><strong>Company Name:</strong> {companyName}</p>
          <p><strong>Tagline:</strong> {catchPhrase}</p>
        </div>
        <div className="address">
          <p><strong>Address:</strong> {street}</p>
          <p><strong>City:</strong> {city}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;