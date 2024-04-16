package server

import (
	"backend/server/handler"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

func Server() {
	fmt.Println("server starting on port 8080")
	r := mux.NewRouter()
	r.HandleFunc("/AccountGet", handler.AccountGet).Methods("GET")

	http.ListenAndServe(":8080", r)
}
