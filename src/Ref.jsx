import { useRef, useState } from "react";

export default function Ref() {
  const value = useRef(0);
  const update = useState(0)[1];
  let test = 0;
  return (
    <>
      {value.current}
      <button
        onClick={() => {
          value.current += 1;
          update(value.current);
        }}
      >
        响应式
      </button>
      <button
        onClick={() => {
            test += 2;
          console.log(test);
        }}
      >
        computed
      </button>
    </>
  );
}
