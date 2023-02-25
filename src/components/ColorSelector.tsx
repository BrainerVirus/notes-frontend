import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { color } from "../types/Interfaces";

type props = {
  selectColor: any;
};

function ColorSelector({ selectColor }: props) {
  const [noteColor, setNoteColor] = useState<color>(color.yellow);
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  useEffect(() => {
    selectColor(noteColor);
  }, [noteColor]);

  const handleActiveColor = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    switch (e.currentTarget.id) {
      case "yellow":
        setNoteColor(color.yellow);
        break;
      case "blue":
        setNoteColor(color.blue);
        break;
      case "pink":
        setNoteColor(color.pink);
        break;
      default:
        setNoteColor(color.yellow);
    }
  };

  return (
    <>
      <motion.h2
        variants={item}
        className="font-bold text-white text-left mt-2 text-xl "
      >
        Choose a color
      </motion.h2>
      <div className="flex justify-around mt-9 items-center">
        <motion.div
          variants={item}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`bg-yellow-400 min-w-[50px] max-w-[80px] min-h-[50px]  max-h-[80px] shadow-lg hover:cursor-pointer ${
            noteColor === color.yellow
              ? "border-quinary-light border-4 border-solid"
              : ""
          }`}
          onClick={handleActiveColor}
          id="yellow"
        ></motion.div>
        <motion.div
          variants={item}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`bg-blue-700 min-w-[50px]  max-w-[80px] min-h-[50px]  max-h-[80px] shadow-lg hover:cursor-pointer ${
            noteColor === color.blue
              ? "border-quinary-light border-4 border-solid"
              : ""
          }`}
          onClick={handleActiveColor}
          id="blue"
        ></motion.div>
        <motion.div
          variants={item}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`bg-pink-300 min-w-[50px] max-w-[80px] min-h-[50px]  max-h-[80px] shadow-lg hover:cursor-pointer ${
            noteColor === color.pink
              ? "border-quinary-light border-4 border-solid"
              : ""
          }`}
          id="pink"
          onClick={handleActiveColor}
        ></motion.div>
      </div>
    </>
  );
}

export default ColorSelector;
