export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- Styled JSX -</p>
        <button className="button">FIGHT!</button>
      </div>
      <style jsx="true">{`
        .container {
          display: flex;
          align-items: center;
          justify-content: space-around;
          margin: 8px;
          padding: 8px;
          border: solid 2px #392eff;
          border-radius: 20px;
        }
        .title {
          margin: 0;
          color: #3d84a8;
        }
        .button {
          padding: 8px;
          border: none;
          border-radius: 8px;
          background-color: #abedd8;
        }
      `}</style>
    </>
  );
};
