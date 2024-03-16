import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  // const state = useAppSelector((state) => state.todo.todos);

  const { data: state } = useGetTodosQuery(undefined);
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal></AddTodoModal>
        <TodoFilter></TodoFilter>
      </div>
      <div className="w-full h-full rounded-xl p-[5px]  bg-primary-gradient">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3 ">
          {state ? (
            <p>No data</p>
          ) : (
            state.map((todoTask) => (
              <TodoCard
                id={todoTask.id}
                title={todoTask.title}
                description={todoTask.description}
                isCompleted={todoTask.isCompleted}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
