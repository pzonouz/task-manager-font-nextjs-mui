import AddTask from "../components/AddTask";
import TasksList from "../components/TasksList";
export default async function TasksPage() {
  const resCategories = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/categories`
  );
  const categories = await resCategories.json();

  const resPriorities = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/priorities`
  );
  const priorities = await resPriorities.json();

  const resTasks = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks`);
  const tasks = await resTasks.json();
  return (
    <>
      <AddTask categories={categories} priorities={priorities} />
      <TasksList tasks={tasks} categories={categories} priorities={priorities} />
    </>
  );
}
