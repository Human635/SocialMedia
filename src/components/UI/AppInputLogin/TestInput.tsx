// import React, { useRef, useState, useEffect } from "react";

// export const TestInput = () => {
//   const [value, setValue] = useState<string>("");
//   const inputRef = useRef<HTMLInputElement>(null);
//   const headerRef = useRef<HTMLHeadElement>(null);

//   const focusInput = () => {
//     inputRef.current?.focus();
//   };

//   const getInputvalue = () => {
//     const value = inputRef.current?.value;
//     if (headerRef.current) {
//       headerRef.current.innerText = `Значение инпута: ${value}`;
//     }
//   };

//   return (
//     <div>
//       <h1 ref={headerRef}>Значение инпута:</h1>
//       <input
//         value={value}
//         ref={inputRef}
//         style={{ margin: 16 }}
//         onChange={(e) => setValue(e.target.value)}
//       />
//       <button onClick={focusInput}>фокус инпута</button>
//       <button onClick={getInputvalue}> Получить значение инпута</button>
//     </div>
//   );
// };
