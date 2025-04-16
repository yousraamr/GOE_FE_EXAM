import { HamburgerMenuIcon } from "@radix-ui/react-icons";

type MobileMenuToggleProps = {
  onToggle: () => void;
};

export default function MobileMenuToggle({ onToggle }: MobileMenuToggleProps) {
  return (
    <button onClick={onToggle} className="md:hidden cursor-pointer">
      <HamburgerMenuIcon className="h-7 w-7" 
      style={{ color: "#C79A5F" }}
      />
    </button>
  );
}