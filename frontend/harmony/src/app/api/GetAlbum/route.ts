export interface Album {
    Id: number;
    Name: string;
    ArtisteId: number;
    Genre: number[];
    YoutubePath: string;
    Score: number;
    imageUrl: string; 
  }
  
  
  
  export async function fetchAlbums(userId: number): Promise<Album[]> {
    try {
      const API_BASE_URL = `http://localhost:8080/Music?id=${userId}`;
      const url = `${API_BASE_URL}`;
  
      const options = {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', 
        },
      };
  

      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const albums: Album[] = await response.json();
      return albums;
    } catch (error) {
      console.error('Failed to fetch albums:', error);
      return [];
    }
  }
  