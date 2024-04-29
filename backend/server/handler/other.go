package handler

import (
	"encoding/json"
	"net/http"
)

func Test(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
		return
	}

	response := map[string]string{"message": "Hello World"}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

func GetSearchKeyWord(w http.ResponseWriter, r *http.Request) {
	//recuperre la recherch de la bars de recherch
}

func PostSearchResult(w http.ResponseWriter, r *http.Request) {
	//renvoi le resultat de la recherche
}

func GetGenre(w http.ResponseWriter, r *http.Request) {
	//recupere le genre souhaité
}

func PostArtistByGenre(w http.ResponseWriter, r *http.Request) {
	//renvoi les artistes d'un genre precis
}

func LikeArtist(w http.ResponseWriter, r *http.Request) {
	//ajoute un artiste a la liste des artistes aimées
}

func DislikeArtist(w http.ResponseWriter, r *http.Request) {
	//ajoute un artiste a la liste des artistes non aimées
}

func PostMainPageMusic(w http.ResponseWriter, r *http.Request) {
	//renvoi les musics de la page principale
}
