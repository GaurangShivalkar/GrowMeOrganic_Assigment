export const getArtworks = async (page: number) => {
    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks?page=${page}`
    );
  
    if (!response.ok) {
      throw new Error(`Failed to fetch artworks: ${response.statusText}`);
    }
  
    const data = await response.json();
    return { data: data.data, pagination: data.pagination };
  };
  