package server

import (
	handler "backend/server/handler"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

func Server() {
	fmt.Println("server starting on port 8080")
	r := mux.NewRouter()
	r.HandleFunc("/AccountGet", handler.Test).Methods("GET")
	r.HandleFunc("/Register", handler.Register).Methods("POST")
	r.HandleFunc("/Login", handler.Login).Methods("POST")
	r.HandleFunc("/Recommendation", handler.PostMainPageMusic).Methods("POST")
	r.HandleFunc("/Artist", handler.PostArtist).Methods("POST")
	r.HandleFunc("/Music", handler.PostMusic).Methods("POST")
	r.HandleFunc("/Album", handler.PostAlbum).Methods("POST")
	r.HandleFunc("/Genre", handler.PostGenre).Methods("POST")
	r.HandleFunc("/AlbumContent", handler.AlbumContent).Methods("POST")
	r.HandleFunc("/ArtistContent", handler.ArtistContent).Methods("POST")

	http.ListenAndServe(":8080", r)
}
