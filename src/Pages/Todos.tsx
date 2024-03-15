import TodoContainer from "@/components/Todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todos = () => {
  return (
    <Container>
      <h1 className="text-center text-3xl font-semibold my-10">ToDo list</h1>
      <TodoContainer />
    </Container>
  );
};

export default Todos;
