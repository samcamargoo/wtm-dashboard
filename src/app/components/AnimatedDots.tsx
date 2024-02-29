export const AnimatedDots = () => {
  return (
    <div className="flex gap-1">
      <div className="h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-2 w-2 bg-white rounded-full animate-bounce"></div>
    </div>
  );
};
