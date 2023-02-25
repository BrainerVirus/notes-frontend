import { useEffect, useState, useRef, useId } from "react";
import { motion, AnimatePresence, Reorder } from "framer-motion";

import ColorSelector from "./ColorSelector";
import { NoteObject } from "../types/Interfaces";

type props = {
  setNotes: any;
  notes: NoteObject[];
};

function RenderTodoList({ setNotes, notes }: props) {
  const [noteBgColor, setNoteBgColor] = useState<string>("bg-yellow-400");
  const [notesIds, setNotesIds] = useState<string[]>([]);
  useEffect(() => {
    const notesIdsArray = notes.map((note) => note._id);
    setNotesIds(notesIdsArray);
  }, [notes]);
  return (
    <div>
      <Reorder.Group values={notesIds} onReorder={setNotesIds}>
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-4 text-center gap-10">
          {notesIds.map((noteId) => (
            <Reorder.Item key={noteId} value={noteId} drag>
              {
                <motion.div
                  className={`p-4 shadow-lg ${noteBgColor} min-h-[10rem] h-[12rem] max-w-[12rem] min-w-[10rem] w-full  m-auto mt-9`}
                >
                  <textarea
                    className="bg-transparent max-w-full outline-none h-full resize-none"
                    maxLength={62}
                    defaultValue={
                      notes.find((note) => note._id === noteId)?.content
                    }
                  ></textarea>
                </motion.div>
              }
            </Reorder.Item>
          ))}
        </div>
      </Reorder.Group>
    </div>
  );
}

export default RenderTodoList;
