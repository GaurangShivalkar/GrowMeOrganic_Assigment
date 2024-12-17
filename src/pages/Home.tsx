import { useState } from "react";
import { Artwork } from "../types/Artwork";
import { useArtworkData } from "../hooks/useArtworkData";
import ArtworkTable from "../components/ArtworkTable";
import { getArtworks } from "../services/artworkService"; // Import service for fetching pages

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 12;

  const { artworks, totalRecords } = useArtworkData(currentPage);
  const [selectedArtworks, setSelectedArtworks] = useState<Artwork[]>([]);

  const handleRowSelection = async (rowsToSelect: number) => {
    const totalPages = Math.ceil(totalRecords / recordsPerPage);

    let selectedCount = 0;
    const newSelectedArtworks: Artwork[] = [];

    for (let page = 1; page <= totalPages && selectedCount < rowsToSelect; page++) {
      const { data: pageData } = await getArtworks(page);

      const remainingRows = rowsToSelect - selectedCount;
      const rowsToAdd = pageData.slice(0, remainingRows);

      newSelectedArtworks.push(...rowsToAdd);
      selectedCount += rowsToAdd.length;
    }

    setSelectedArtworks(newSelectedArtworks);
  };

  return (
    <div className="card">
      <ArtworkTable
        artworks={artworks}
        selectedArtworks={selectedArtworks}
        onSelectionChange={setSelectedArtworks}
        onPageChange={setCurrentPage}
        totalRecords={totalRecords}
        recordsPerPage={recordsPerPage}
        currentPage={currentPage}
        onSelectRows={handleRowSelection}
      />
    </div>
  );
}

export default Home;
