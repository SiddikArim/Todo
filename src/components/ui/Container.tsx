type TChildrenProps = {
  children: React.ReactNode;
};
const Container = ({ children }: TChildrenProps) => {
  return <div className="h-screen max-w-7xl mx-auto">{children}</div>;
};

export default Container;
