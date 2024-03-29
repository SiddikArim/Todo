// import { useAppSelector } from "@/redux/hook";
import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard, { TTodoTasks } from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  const [priority, setPriority] = useState("");

  // const state = useAppSelector((state) => state.todo.todos);

  const { data: todos, isLoading, isError } = useGetTodosQuery(priority);

  if (isLoading) return <p>Loading....Please Wait</p>;
  if (isError) return <p>Something Went Wrong</p>;
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal></AddTodoModal>
        <TodoFilter priority={priority} setPriority={setPriority}></TodoFilter>
      </div>
      <div className="w-full h-full rounded-xl p-[5px]  bg-primary-gradient">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3 ">
          {todos?.data?.map((todoTask: TTodoTasks) => (
            <TodoCard
              // key={todoTask.id}
              // id={todoTask._id}
              // title={todoTask.title}
              // description={todoTask.description}
              // isCompleted={todoTask.isCompleted}
              // priority={todoTask.priority}
              {...todoTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
