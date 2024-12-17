import { Button } from "primereact/button";

interface RowSelectionFormProps {
  onSubmit: (rowsToSelect: number) => void;
}

const RowSelectionForm = ({ onSubmit }: RowSelectionFormProps) => {
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const inputValue = (event.target as HTMLFormElement).elements.namedItem("numberInput") as HTMLInputElement;
    const rowsToSelect = parseInt(inputValue.value);
    if (!isNaN(rowsToSelect)) {
      onSubmit(rowsToSelect);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      style={{ display: "flex", flexDirection: "column", padding: "1px" }}
    >
      <label htmlFor="numberInput" style={{ fontWeight: "bold" }}>
        Enter Number of Rows to Select
      </label>
      <input
        type="number"
        id="numberInput"
        name="numberInput"
        placeholder="Enter a value"
        style={{ padding: "1px" }}
      />
      <Button type="submit" label="Submit" className="p-button-sm" />
    </form>
  );
};

export default RowSelectionForm;
