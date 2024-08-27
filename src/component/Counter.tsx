import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import {
  decrement,
  increment,
  incrementByAmount
} from "../state/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>
        {count}
      </h2>
      <div>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          increment
        </button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
    </div>
  );
};

export default Counter;
