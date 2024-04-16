package handler

import (
	"net/http"
)

func GetRadioByTheme(w http.ResponseWriter, r *http.Request) {
	//recupere le nom de la radio souhaité
}

func GetRadioByEnvy(w http.ResponseWriter, r *http.Request) {
	//recupere le nom de la radio avec les recomendations du user
}

func PostRadio(w http.ResponseWriter, r *http.Request) {
	//renvoi la bonne radio
}
