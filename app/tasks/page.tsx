import TasksList from "../components/TasksList";
// TODO: Use Api router
export default async function TasksPage(){
    const res=await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    const tasks=await res.json();
    return <TasksList tasks={tasks} />;
}