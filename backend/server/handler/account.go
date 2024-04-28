package handler

import (
	"net/http"
)

func AccountConnected(w http.ResponseWriter, r *http.Request) {
	// renvoi le comptes connecté
}

func Registered(w http.ResponseWriter, r *http.Request) {
	// creer un compte a l'inscription
}

func Login(w http.ResponseWriter, r *http.Request) {
	// connecte un compte
}

func InitScore(accountId int) {

}
