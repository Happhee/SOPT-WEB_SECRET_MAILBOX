import { BrowserRouter, Route, Routes } from "react-router-dom";

import EditLetter from "../../pages/EditLetter";
import Error404 from "../../pages/Error404";
import LetterMain from "../../pages/LetterMain";
import WriteLetter from "../../pages/WriteLetter";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/Happhee/SOPT-WEB_SECRET_MAILBOX/"
          element={<LetterMain />}
        />
        <Route
          path="/Happhee/SOPT-WEB_SECRET_MAILBOX/write"
          element={<WriteLetter />}
        />
        <Route
          path="/Happhee/SOPT-WEB_SECRET_MAILBOX/edit"
          element={<EditLetter />}
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
