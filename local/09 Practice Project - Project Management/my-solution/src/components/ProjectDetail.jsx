import { useRef } from 'react';

export default function ProjectDetail({ handleAddNewTask, project }) {
  const taskInput = useRef();

  function onAddNewTask() {
    handleAddNewTask(taskInput.current.value);
  }
  return (
    <>
      <h1>{project?.projectTitle}</h1>
      <p>{project?.projectDescription}</p>
      <hr />
      <h2>Tasks</h2>
      <div>
        <input ref={taskInput} type="text" />
        <button onClick={onAddNewTask}>Add Task</button>
      </div>
      <ul>
        {project?.tasks.length
          ? project.tasks.map((task, index) => <li key={index}>{task}</li>)
          : undefined}
      </ul>
    </>
  );
}
