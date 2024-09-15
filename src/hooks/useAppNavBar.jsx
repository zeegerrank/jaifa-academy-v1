import { useState } from "react";

function useAppNavBar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((pr) => !pr);

  return { open, setOpen, handleOpen };
}

export default useAppNavBar;
