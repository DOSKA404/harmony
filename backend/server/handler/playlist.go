package handler

import (
	"net/http"
)

func CreatePlaylist(w http.ResponseWriter, r *http.Request) {
	//creer une nouvelle playlist
}

func AddMusicToPlaylist(w http.ResponseWriter, r *http.Request) {
	//ajoute une music a la playlist
}

func DeleteMusicFromPlaylist(w http.ResponseWriter, r *http.Request) {
	//supprime une music de la playlist
}

func DeletePlaylist(w http.ResponseWriter, r *http.Request) {
	//supprime une playlist
}

func GetPlaylist(w http.ResponseWriter, r *http.Request) {
	//recupere la playlist
}

func PostAllPlaylists(w http.ResponseWriter, r *http.Request) {
	//recupere toutes les playlists
}

func PostPlaylistByGenre(w http.ResponseWriter, r *http.Request) {
	//renvoi toutes les playlists d'un genre precis
}
