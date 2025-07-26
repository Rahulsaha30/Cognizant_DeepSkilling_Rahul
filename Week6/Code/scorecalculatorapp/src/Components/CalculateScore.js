import React from 'react'; 
import '../Stylesheets/mystyle.css'; 

const percentToDecimal = (decimal) => {
 
  return (decimal.toFixed(2) + '%');
};

const calcScore = (total, goal) => {
 
  return percentToDecimal(total / goal);
};

export const CalculateScore = ({
  Name,
  School,
  total,
  goal
}) => {
  return (
    <div className="formatstyle">
      {}
      <h1 className="student-details-heading">Student Details:</h1>

      <div className="Name">
        <b>Name:</b> {}
        <span>{Name}</span>
      </div>

      <div className="School">
        <b>School:</b> {}
        <span>{School}</span>
      </div>

      <div className="Total">
        <b>Total:</b> {}
        <span>{total}</span> Marks
      </div>

      <div className="Score">
        <b>Score:</b>
        <span>{calcScore(total, goal)}</span>
      </div>
    </div>
  );
};