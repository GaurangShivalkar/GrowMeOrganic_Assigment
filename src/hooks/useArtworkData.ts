import { useState, useEffect } from "react";
import { Artwork } from "../types/Artwork";
import { getArtworks } from "../services/artworkService";

export const useArtworkData = (currentPage: number) => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [totalRecords, setTotalRecords] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, pagination } = await getArtworks(currentPage);
        setArtworks(data);
        setTotalRecords(pagination.total);
      } catch (error) {
        console.error("Error fetching artworks:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  return { artworks, totalRecords };
};
