type FullColorButtonProps = {
  text: string;
  onClick: () => void;
};

function FullColorButton({ text, onClick }: FullColorButtonProps) {
  return (
    <div
      className="bg-[#7833FF] cursor-pointer  text-white font-bold text-[16px] text-center p-3 rounded-full hover:bg-white hover:text-[#7833FF]"
      onClick={onClick}
    >
      {text}
    </div>
  );
}

export default FullColorButton;
