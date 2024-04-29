package logic

import (
	data "backend/data"
	"strings"
)

func Search(id int, name string) data.ReturnStruct {
	data.InitMusic(id)

	var returnData data.ReturnStruct

	for _, music := range data.AllMusic {
		// Vérifier si le nom de la musique contient la chaîne de recherche (ignorer la casse)
		if strings.Contains(strings.ToLower(music.Name), strings.ToLower(name)) {
			// Ajouter la musique correspondante à la liste de correspondance
			returnData.Music = append(returnData.Music, music)
		}
	}
	for _, artist := range data.AllArtists {
		// Vérifier si le nom de la musique contient la chaîne de recherche (ignorer la casse)
		if strings.Contains(strings.ToLower(artist.Name), strings.ToLower(name)) {
			// Ajouter la musique correspondante à la liste de correspondance
			returnData.Artist = append(returnData.Artist, artist)
		}
	}

	return returnData

}
