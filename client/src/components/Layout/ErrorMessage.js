const ErrorMessage = ({ errors }) => {
  if (!errors || errors.length === 0) return null;

  return (
    <div className="error-messages">
      <p style={{ color: 'red', fontWeight: 'bold' }}>Please fix the following errors:</p>
      <ul style={{ color: 'red' }}>
        {errors.map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
    </div>
  );
};

export default ErrorMessage;