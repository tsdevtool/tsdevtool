import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { decrement, increment } from "./redux/slides/counterSlice";
function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const Button = styled.button({
    backgroundColor: "blue",
  });
  return (
    <div>
      <div>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <span>{count}</span>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
}

export default App;
