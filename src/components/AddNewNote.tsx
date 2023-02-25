import { useState } from "react";
import { motion } from "framer-motion";
import { NoteObject } from "../types/Interfaces";
import { v4 as uuidv4 } from "uuid";

type props = {
  addNewNote: any;
};

function AddNewNote({ addNewNote }: props) {
  const [noteBgColor, setNoteBgColor] = useState<string>("bg-yellow-400");
  const [newNote, setnewNote] = useState<NoteObject>({
    _id: "",
    content: "",
    creationDate: "",
    creationTime: "",
  });

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    if (e.target.value && newNote) {
      console.log("newNote: ", newNote);
      fetch("http://localhost:8080/note/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: newNote.content }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          addNewNote(newNote);
          setnewNote({
            _id: "",
            content: "",
            creationDate: "",
            creationTime: "",
          });
        });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    const _id = uuidv4();
    const content = e.target.value;
    const creationDate = new Date().toDateString();
    const creationTime = new Date().toTimeString();
    setnewNote({
      _id,
      content,
      creationDate,
      creationTime,
    });
  };
  return (
    <>
      <motion.h2
        variants={item}
        className="font-bold text-white text-left mt-14 text-xl"
      >
        Add a new note
      </motion.h2>
      <motion.div
        variants={item}
        className={`p-4 shadow-lg ${noteBgColor} min-h-[10rem] h-[12rem] max-w-[12rem] min-w-[10rem] w-full  m-auto mt-9`}
      >
        <textarea
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Agregar nota..."
          className="bg-transparent max-w-full outline-none h-full resize-none"
          maxLength={62}
          value={newNote.content}
        ></textarea>
      </motion.div>
    </>
  );
}

export default AddNewNote;
