import { useEffect, useState } from "react";

type Props = {
  Open: any;
};

function ToggleMenu({ Open }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleMenuOpening = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    Open(isOpen);
  }, [isOpen]);
  return (
    <div
      className={isOpen ? "burger-menu open" : "burger-menu"}
      onClick={handleMenuOpening}
    >
      <div className="burger-btn"></div>
    </div>
  );
}

export default ToggleMenu;
