import { useState } from "react";

function useAppNavBar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((pr) => !pr);

  return { open, handleOpen };
}

export default useAppNavBar;
