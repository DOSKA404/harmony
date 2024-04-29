package handler

import (
	"backend/data"
	logic "backend/logic"
	"encoding/json"
	"net/http"
	"strconv"
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

	if r.Method != http.MethodPost {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
		return
	}

	err := r.ParseForm()
	if err != nil {
		http.Error(w, "Could not parse form", http.StatusBadRequest)
		return
	}

	accountId := r.FormValue("id")
	accountIdInt, err := strconv.Atoi(accountId)
	if err != nil {
		http.Error(w, "Could not parse form", http.StatusBadRequest)
		return
	}
	recomendation := logic.Recommendation(accountIdInt)

	jsonBytes, err := json.Marshal(recomendation)
	if err != nil {
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(jsonBytes)
}

func PostArtist(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
		return
	}

	err := r.ParseForm()
	if err != nil {
		http.Error(w, "Could not parse form", http.StatusBadRequest)
		return
	}

	accountId := r.FormValue("id")
	accountIdInt, err := strconv.Atoi(accountId)
	if err != nil {
		http.Error(w, "Could not parse form", http.StatusBadRequest)
		return
	}
	data.InitMusic(accountIdInt)
	recomendation := data.AllArtists

	jsonBytes, err := json.Marshal(recomendation)
	if err != nil {
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(jsonBytes)
}

func PostAlbum(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
		return
	}

	err := r.ParseForm()
	if err != nil {
		http.Error(w, "Could not parse form", http.StatusBadRequest)
		return
	}

	accountId := r.FormValue("id")
	accountIdInt, err := strconv.Atoi(accountId)
	if err != nil {
		http.Error(w, "Could not parse form", http.StatusBadRequest)
		return
	}
	data.InitMusic(accountIdInt)
	recomendation := data.AllAlbums

	jsonBytes, err := json.Marshal(recomendation)
	if err != nil {
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(jsonBytes)
	//renvoi les albums
}

func PostMusic(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
		return
	}

	err := r.ParseForm()
	if err != nil {
		http.Error(w, "Could not parse form", http.StatusBadRequest)
		return
	}

	accountId := r.FormValue("id")
	accountIdInt, err := strconv.Atoi(accountId)
	if err != nil {
		http.Error(w, "Could not parse form", http.StatusBadRequest)
		return
	}
	data.InitMusic(accountIdInt)
	recomendation := data.AllMusic

	jsonBytes, err := json.Marshal(recomendation)
	if err != nil {
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(jsonBytes)
}

func PostGenre(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
		return
	}

	err := r.ParseForm()
	if err != nil {
		http.Error(w, "Could not parse form", http.StatusBadRequest)
		return
	}

	accountId := r.FormValue("id")
	accountIdInt, err := strconv.Atoi(accountId)
	if err != nil {
		http.Error(w, "Could not parse form", http.StatusBadRequest)
		return
	}
	data.InitMusic(accountIdInt)
	recomendation := data.AllGenres

	jsonBytes, err := json.Marshal(recomendation)
	if err != nil {
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(jsonBytes)
}

func AlbumContent(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
		return
	}

	err := r.ParseForm()
	if err != nil {
		http.Error(w, "Could not parse form", http.StatusBadRequest)
		return
	}

	albumId := r.FormValue("id")
	albumIdInt, err := strconv.Atoi(albumId)
	if err != nil {
		http.Error(w, "Could not parse form", http.StatusBadRequest)
		return
	}
	recomendation := data.RecupAlbumContent(albumIdInt)

	jsonBytes, err := json.Marshal(recomendation)
	if err != nil {
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(jsonBytes)
}
