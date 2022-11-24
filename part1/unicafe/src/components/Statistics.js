import React from 'react';

const Statistic = ({ text, value }) => {
  return (
    !!value && (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    )
  );
};

const Statistics = ({ statistics }) => {
  return statistics.total ? (
    <table>
      <tbody>
        {Object.keys(statistics).map((key, index) => {
          return <Statistic key={index} text={key} value={statistics[key]} />;
        })}
      </tbody>
    </table>
  ) : (
    <p>No feedback given!</p>
  );
};

export default Statistics;
