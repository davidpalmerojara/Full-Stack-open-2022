import Part from './Part';

const Content = ({ parts }) => {
  const total = parts.reduce((total, parts) => total + parts.exercises, 0);

  return (
    <div>
      {parts.map((part) => {
        return <Part key={part.id} part={part} />;
      })}
      <h4>total of {total} exercises</h4>
    </div>
  );
};

export default Content;
