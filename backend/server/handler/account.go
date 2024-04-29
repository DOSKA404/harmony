package handler

import (
	data "backend/data"
	"encoding/json"
	"net/http"
)

func AccountConnected(w http.ResponseWriter, r *http.Request) {
	// renvoi le comptes connecté
}

func Register(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
		return
	}

	err := r.ParseForm()
	if err != nil {
		http.Error(w, "Could not parse form", http.StatusBadRequest)
		return
	}

	username := r.FormValue("username")
	password := r.FormValue("password")
	var account data.Account
	account, err = data.AddAccount(username, password)
	if err != nil {
		http.Error(w, "Could not create account", http.StatusBadRequest)
		return
	}

	jsonBytes, err := json.Marshal(account)
	if err != nil {
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(jsonBytes)
}

func Login(w http.ResponseWriter, r *http.Request) {
	// connecte un compte
}

func InitScore(accountId int) {

}
