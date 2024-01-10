import {
  decrement,
  increment,
} from "./redux/features/counterSlice";
import { HomeComponent } from "./pages/home";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const { count } = useAppSelector((currentState) => currentState.counter);
  const dispatch = useAppDispatch();

  // const customIncrementHandel = (e) => {
  //   e.preventDefault();
  //   const customNumber = parseInt(e.target.customInput.value);
  //   dispatch(customIncrement(customNumber));
  //   console.log(e.target.customInput.value)
  // };

  return (
    <>
      <HomeComponent></HomeComponent>
      <div className="w-1/2 mx-auto border-2 border-blue-500 mt-52 rounded-md">
        <div className="flex m-20">
          <button
            onClick={() => dispatch(decrement(1))}
            className="px-3 py-2 rounded-md bg-red-500 text-xl font-semibold text-white"
          >
            Decrement
          </button>
          <h1 className="text-3xl mx-32">{count}</h1>

          <button
            onClick={() => dispatch(increment(1))}
            className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white"
          >
            Increment
          </button>

          {/* <form action="" onSubmit={customIncrementHandel}>
            <input type="text" name="customInput" />
            <button className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white">
              Custom Increment
            </button>
          </form> */}
        </div>
      </div>
    </>
  );
}

export default App;
