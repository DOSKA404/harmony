package handler

import (
	"net/http"
)

func GetMusicByName(w http.ResponseWriter, r *http.Request) {
	//recupere le nom de la music
}

func LikeMusic(w http.ResponseWriter, r *http.Request) {
	//ajoute une music a la liste des musics aimées
}

func DislikeMusic(w http.ResponseWriter, r *http.Request) {
	//ajoute une music a la liste des musics non aimées
}
