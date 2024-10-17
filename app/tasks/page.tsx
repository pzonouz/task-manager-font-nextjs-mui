import AddTask from "../components/AddTask";
import TasksList from "../components/TasksList";
export default async function TasksPage() {
  const resCategories = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/categories`,
    {
      cache: "no-cache",
    },
  );
  const categories = await resCategories.json();

  const resPriorities = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/priorities`,
    { cache: "no-cache" },
  );
  const priorities = await resPriorities.json();

  const resTasks = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks`);
  const tasks = await resTasks.json();
  if (!Array.isArray(tasks)) {
    //TODO:Implement NextAut
    return <div>{tasks.error.detail}</div>;
  }
  return (
    <>
      <AddTask categories={categories} priorities={priorities} />
      <TasksList
        tasks={tasks}
        categories={categories}
        priorities={priorities}
      />
    </>
  );
}
