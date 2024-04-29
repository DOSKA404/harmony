// api.ts
export interface Album {
    Id: number;
    Name: string;
    ArtisteId: number;
    Genre: number[];
    YoutubePath: string;
    Score: number;
    imageUrl: string;  // Assurez-vous que cette propriété est gérée par votre API ou ajoutez-la.
  }
  
  // Constante pour l'URL de base de l'API
  const API_BASE_URL = 'http://localhost:8080/Album';
  
  export async function fetchAlbums(userId: number, search: number): Promise<Album[]> {
    try {
      // Construction de l'URL de la requête
      const url = `${API_BASE_URL}`;
  
      // Configuration de la requête
      const options = {
        method: 'POST', // Utilisation de POST selon la configuration du serveur
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // Content-Type approprié pour les données de formulaire
        },
        body: `id=${userId}&search=${search}` // Corps de la requête avec les données sous forme de chaîne de formulaire
      };
  
      // Execution de la requête
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Décodage de la réponse JSON
      const albums: Album[] = await response.json();
      return albums;
    } catch (error) {
      console.error('Failed to fetch albums:', error);
      return [];
    }
  }
  