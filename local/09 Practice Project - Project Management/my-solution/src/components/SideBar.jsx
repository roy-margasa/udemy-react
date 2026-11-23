export default function SideBar({
  handleShowProjectForm,
  handleSeeProjectDetail,
  projects,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="text-xl font-bold text-stone-1000 my-4">Your Projects</h2>
      <button
        className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
        onClick={handleShowProjectForm}
      >
        Add project
      </button>

      <ul className="mt-8">
        {projects.length
          ? projects.map((item, index) => {
              return (
                <li
                  className="flex justify-between my-4 cursor-pointer"
                  key={item.projectTitle}
                  onClick={() => handleSeeProjectDetail(index)}
                >
                  {item.projectTitle}
                </li>
              );
            })
          : undefined}
      </ul>
    </aside>
  );
}
