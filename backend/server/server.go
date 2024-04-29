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

	http.ListenAndServe(":8080", r)
}
