// components/Counter.js
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../store/counterSlice';

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="text-center">
      <h1 className="text-xl font-bold">Count: {count}</h1>
      <div className="flex gap-4 mt-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
