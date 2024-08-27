import Counter from "./component/Counter";

//Store
interface CounterState {}

interface UserState {}

//Action
const incrementByAmount = { type: "INCREMENT", payload: 10 };
const decrement = { type: "DECREMENT" };

//Reducers

const App = () => {
  return (
    <div>
      <h2>Redux Complete learn Practices </h2>
      <Counter />
    </div>
  );
};

export default App;
