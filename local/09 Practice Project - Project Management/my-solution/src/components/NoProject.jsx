import noProjectImage from '../assets/no-projects.png';

export default function NoProject({ handleShowProjectForm }) {
  return (
    <div>
      <img src={noProjectImage} className="w-16 h-16 object-contain mx-auto" />
      <div>No Project Selected</div>
      <div>Select a project or create a new one</div>
      <button
        onClick={handleShowProjectForm}
        className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
      >
        Create new project
      </button>
    </div>
  );
}
