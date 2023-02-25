import { useEffect, useState } from "react";
import ColorSelector from "../components/ColorSelector";
import AddNewNote from "../components/AddNewNote";
import { NoteObject } from "../types/Interfaces";
import { useMediaQuery } from "../hooks/useMediaQuery";
import ToggleMenu from "../components/ToggleMenu";

type props = {
  addNewNote: any;
  open: any;
};

enum color {
  default = 0,
  yellow = 1,
  blue = 2,
  pink = 3,
}

function Sidebar({ addNewNote, open }: props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [newNote, setNewNote] = useState<NoteObject>({
    _id: "",
    content: "",
    creationDate: "",
    creationTime: "",
  });
  const [noteColor, setNoteColor] = useState<color>(color.yellow);

  const sm = useMediaQuery("(min-width: 640px)");
  const md = useMediaQuery("(min-width: 768px)");
  const lg = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    console.log("addNewNote", newNote);
    if (newNote._id) addNewNote(newNote);
  }, [newNote]);

  useEffect(() => {
    open(isOpen);
  }, [isOpen]);

  return (
    <nav
      className={
        isOpen
          ? "bg-primary-light w-screen min-h-screen fixed lg:max-w-[20vw] shadow-2xl z-10"
          : "max-w-[20%] fixed z-10"
      }
    >
      <div className="flex justify-start mt-4 mr-4 ml-4">
        <ToggleMenu Open={(isOpen: boolean) => setIsOpen(isOpen)} />
      </div>
      <div className={isOpen ? "w-[80%] m-auto" : "w-[80%] m-auto hidden"}>
        <ColorSelector
          selectColor={(noteColor: color) => setNoteColor(noteColor)}
        />
        <AddNewNote addNewNote={(newNote: NoteObject) => setNewNote(newNote)} />
      </div>
    </nav>
  );
}

export default Sidebar;
