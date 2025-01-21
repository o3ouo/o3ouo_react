import { useSelector } from 'react-redux';

export default function Box () {
  const count = useSelector(state => state.count);
  return (
    <div>
      <h2>box{count}</h2>
    </div>
  );
}