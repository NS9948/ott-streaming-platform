const ActionButton = ({ title, onClick, isActive }) => {
  return (
    <div 
      onClick={(e) => {
        e.stopPropagation(); 
        onClick && onClick();
      }}
      className='flex items-center gap-1 text-[9px] cursor-pointer'
    >
      <div
        className={`h-5 w-5 border rounded-full flex items-center justify-center text-[10px] transition
        ${
          isActive
            ? "bg-[#3DEEE9] text-black border-[#3DEEE9]"
            : "bg-black border-[#3DEEE9] hover:bg-[#3DEEE9]"
        }`}
      >
        {isActive ? "✔" : "+"}
      </div>

      <p className='font-bold'>{title}</p>
    </div>
  )
}

export default ActionButton