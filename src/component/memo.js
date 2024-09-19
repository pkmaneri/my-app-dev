// import React, { useState, useMemo } from 'react';

// const MemoList = () => {
//   const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
//   const [filterEven, setFilterEven] = useState(true);

//   const filteredNumbers = useMemo(() => {
//     console.log('Filtering numbers...');
//     return numbers.filter(num => (filterEven ? num % 2 === 0 : num % 2 !== 0));
//   }, [numbers, filterEven]);

//   return (
//     <div>
//       <h1>Filtered Numbers</h1>
//       <button onClick={() => setFilterEven(!filterEven)}>
//         Toggle to {filterEven ? 'Show Odds' : 'Show Evens'}
//       </button>
//       <ul>
//         {filteredNumbers.map(num => (
//           <li key={num}>{num}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MemoList;


import React, { useState, useMemo} from 'react';

const MemoList = () => {
  const [number, setNumber] = useState(0);

  const squaredValue = useMemo(() => {
    // console.log('Calculating square...');
    return number * number;
  }, [number]);
 
  return (
    <div>
      <h1>Square Calculator</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <p>Squared Value: {squaredValue}</p>
    </div>
  );
};

export default MemoList;

