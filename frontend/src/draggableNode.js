// draggableNode.js

export const DraggableNode = ({ type, label, className, icon, description }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType }
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="relative group">
      <span className="absolute top-20 w-52 border border-gray-400 p-2 bg-gray-50 rounded text-xs hidden opacity-0 group-hover:block group-hover:opacity-100 transition-opacity duration-500 z-50 text-gray-700">
        <h1>{label} Node</h1>
        <h3 className="font-semibold">{description}</h3>
      </span>
      <div
        className={`cursor-grab min-w-16 aspect-square p-1 text-gray-500 flex flex-col items-center justify-center bg-gray-50 border border-gray-200 rounded-lg ${className}`}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        draggable
      >
        {icon && <span className="mb-1">{icon}</span>}
        <h6 className='text-[10px]'>{label}</h6>
      </div>
    </div>
  );
};
