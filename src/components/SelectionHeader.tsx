import { OverlayPanel } from "primereact/overlaypanel";
import { Button } from "primereact/button";
import { useRef } from "react";
import RowSelectionForm from "./RowSelectionForm";

interface SelectionHeaderProps {
  onSubmit: (rowsToSelect: number) => void;
}

const SelectionHeader = ({ onSubmit }: SelectionHeaderProps) => {
  const op = useRef<OverlayPanel>(null);

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <Button
        type="button"
        icon="pi pi-chevron-down"
        className="p-button-sm p-button-text"
        onClick={(e) => op.current?.toggle(e)}
      />
      <OverlayPanel ref={op}>
        <RowSelectionForm onSubmit={onSubmit} />
      </OverlayPanel>
    </div>
  );
};

export default SelectionHeader;
