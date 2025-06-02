import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxList from "./components/MailboxList/MailboxList";
import { Route, Routes } from "react-router";

const App = () => {
  const [mailboxes, setMailboxes] = useState([])

  const addBox = (newMailbox) => {
    newMailbox._id = mailboxes.length + 1
    setMailboxes([...mailboxes, newMailbox])
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes}/>} />

        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox}/>} />

        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes}/>} />

        <Route path="*" element={<h1>Whoops nothing to see here!</h1>} />
      </Routes>
  
    </>
  );
};

export default App;
