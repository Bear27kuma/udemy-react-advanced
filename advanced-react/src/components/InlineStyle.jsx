export const InlineStyle = () => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: '8px',
    padding: '8px',
    border: 'solid 2px #392eff',
    borderRadius: '20px'
  };
  const titleStyle = {
    margin: 0,
    color: '#3d84a8'
  };
  const buttonStyle = {
    padding: '8px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#abedd8'
  };
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- Inline Style -</p>
      <button style={buttonStyle}>FIGHT!</button>
    </div>
  );
};
