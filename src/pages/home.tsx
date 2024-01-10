import { useSelector } from "react-redux";

export const HomeComponent = () => {
  const { count } = useSelector((s) => s.counter);
  return (
    <>
      <h1>this is a home page {count}</h1>
    </>
  );
};
