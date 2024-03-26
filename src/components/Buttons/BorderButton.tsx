type BorderButtonProps = {
  text: string;
  onClick: () => void;
};

function BorderButton({ text, onClick }: BorderButtonProps) {
  return (
    <div
      className="bg-[transparent] cursor-pointer  text-white font-bold text-[16px] text-center border border-white p-3 rounded-full hover:bg-white hover:text-[#7833FF]"
      onClick={onClick}
    >
      {text}
    </div>
  );
}

export default BorderButton;
