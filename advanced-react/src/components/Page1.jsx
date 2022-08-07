import { Link } from 'react-router-dom';

export const Page1 = () => {
  const arr = [...Array(20).keys()];
  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to="/page1/detailA" state={{ arr: arr }}>DetailA</Link>
      <br/>
      <Link to="/page1/detailB">DetailB</Link>
    </div>
  );
};
