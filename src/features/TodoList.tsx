import { useState, useEffect } from "react";
import TodoListItems from "../components/TodoListItems";
import Sidebar from "../layout/sidebar";

import useFetch from "../hooks/useFetch";

import { NoteObject } from "../types/Interfaces";
import Pagination from "../components/Pagination";

function TodoList() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [notes, setNotes] = useState<NoteObject[]>([]);
  const [newNote, setNewNote] = useState<NoteObject>({
    _id: "",
    content: "",
    creationDate: "",
    creationTime: "",
  });
  const [curentPage, setCurrentPage] = useState<number>(1);
  const [notesPerPage, setNotesPerPage] = useState<number>(8);
  const lastNoteIndex = curentPage * notesPerPage;
  const firstNoteIndex = lastNoteIndex - notesPerPage;
  const currentNotes = notes.slice(firstNoteIndex, lastNoteIndex);

  let updatedNoteList: NoteObject[] = [];

  useEffect(() => {
    useFetch<NoteObject[]>("http://localhost:8080/note/query", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((data) => {
      console.log(data);
      setNotes(data);
    });
  }, []);

  useEffect(() => {
    console.log("newNote", newNote);
    console.log("notes", notes);
    updatedNoteList = [...notes];
    if (newNote && notes.indexOf(newNote) === -1) {
      updatedNoteList.push(newNote);
    }
    setNotes(updatedNoteList);
  }, [newNote]);

  return (
    <div className="flex">
      <Sidebar
        addNewNote={(newNote: NoteObject) => setNewNote(newNote)}
        open={(isOpen: boolean) => setIsOpen(isOpen)}
      />
      <div
        className={
          isOpen
            ? "min-h-screen min-w-[100vw] blur-md"
            : "min-h-screen min-w-[100vw]"
        }
      >
        <section className="flex flex-col  max-w-[80%] m-auto gap-7 mt-5 mb-10 lg:max-w-[50%]">
          <h1 className="text-center text-3xl font-bold text-black">Uptodo</h1>
          <TodoListItems
            setNotes={(notes: NoteObject[]) => setNotes(notes)}
            notes={currentNotes}
          />
          <Pagination
            totalNotes={notes.length}
            notesPerPage={notesPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={curentPage}
          />
        </section>
      </div>
    </div>
  );
}

export default TodoList;
