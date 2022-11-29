import Header from './Header';
import Content from './Content';

const Course = ({ course: { id, name, parts } }) => {
  return (
    <div>
      <Header name={name} />
      <Content parts={parts} />
      {/*
     
      
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
  */}
    </div>
  );
};

export default Course;
