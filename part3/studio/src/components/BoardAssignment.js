import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [{
      label: "Dessert",
      value: "1"
   }, 
   {
      label: "Comfort Food",
      value: "2"
   }, 
   {
      label: "Sweet Tooth",
      value: "3"
   }];

   const [boardName, setBoardName] = useState('no boards yet!');
   const handleChange = (event) => {
      setBoardName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map(( obj => {
            return (
         <option value={obj.value}>{obj.label}</option>
         )}
         ))}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}