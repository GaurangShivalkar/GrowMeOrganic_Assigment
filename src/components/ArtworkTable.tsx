import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Artwork } from "../types/Artwork";
import { ColumnMeta } from "../types/ColumnMeta";
import SelectionHeader from "./SelectionHeader";

interface ArtworkTableProps {
  artworks: Artwork[];
  selectedArtworks: Artwork[];
  onSelectionChange: (artworks: Artwork[]) => void;
  onPageChange: (page: number) => void;
  totalRecords: number;
  recordsPerPage: number;
  currentPage: number;
  onSelectRows: (rowsToSelect: number) => void;
}

const ArtworkTable = ({
  artworks,
  selectedArtworks,
  onSelectionChange,
  onPageChange,
  totalRecords,
  recordsPerPage,
  currentPage,
  onSelectRows,
}: ArtworkTableProps) => {
  const columns: ColumnMeta[] = [
    { field: "title", header: "Title" },
    { field: "place_of_origin", header: "Place of Origin" },
    { field: "artist_display", header: "Artist Display" },
    { field: "inscriptions", header: "Inscriptions" },
    { field: "date_start", header: "Date Start" },
    { field: "date_end", header: "Date End" },
  ];

  return (
    <DataTable
      value={artworks}
      paginator
      rows={recordsPerPage}
      totalRecords={totalRecords}
      lazy
      onPage={(e) => onPageChange(e.page !== undefined ? e.page + 1 : 1)}
      first={(currentPage - 1) * recordsPerPage}
      showGridlines
      size="small"
      selection={selectedArtworks}
      onSelectionChange={(e) => onSelectionChange(e.value)}
      dataKey="id"
      tableStyle={{ minWidth: "50rem" }}
      selectionMode="multiple"
    >
      <Column
        selectionMode="multiple"
        header={<SelectionHeader onSubmit={onSelectRows} />}
        headerStyle={{ width: "5rem", paddingRight: "1rem" }}
      ></Column>
      {columns.map((col) => (
        <Column key={col.field} field={col.field} header={col.header} />
      ))}
    </DataTable>
  );
};

export default ArtworkTable;
