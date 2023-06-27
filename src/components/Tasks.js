//In order to use state inside a function we use a hook called useState


const Tasks = ({tasks}) => {
  
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
