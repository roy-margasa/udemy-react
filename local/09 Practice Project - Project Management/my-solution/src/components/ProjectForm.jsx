import { useRef } from 'react';

export default function ProjectForm({
  handleCloseProjectForm,
  handleSaveNewProject,
}) {
  const projectTitle = useRef();
  const projectDescription = useRef();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSaveNewProject(
          projectTitle.current.value,
          projectDescription.current.value,
        );
      }}
    >
      <div>
        <button
          type="button"
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          onClick={handleCloseProjectForm}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
        >
          Save
        </button>
      </div>
      <div>
        <div>
          <label className="text-sm font-bold uppercase text-stone-500">
            Title
          </label>
          <input
            ref={projectTitle}
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          />
        </div>
        <div>
          <label className="text-sm font-bold uppercase text-stone-500">
            Description
          </label>
          <textarea
            ref={projectDescription}
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          ></textarea>
        </div>
      </div>
    </form>
  );
}
