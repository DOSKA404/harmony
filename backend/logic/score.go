package logic

import (
	data "backend/data"
)

func addScore(musicId int, scoreToAdd int) {
	db := data.OpenDb()

	stmt, err := db.Prepare("UPDATE ScoreMusic SET score = score +? WHERE musicId =?")
	if err != nil {
		panic(err.Error())
	}
	defer stmt.Close()
	_, err = stmt.Exec(scoreToAdd, musicId)
	if err != nil {
		panic(err.Error())
	}
	defer db.Close()
}

func removeScore(musicId int, scoreToRemove int) {
	db := data.OpenDb()

	stmt, err := db.Prepare("UPDATE ScoreMusic SET score = score -? WHERE musicId =?")
	if err != nil {
		panic(err.Error())
	}
	defer stmt.Close()
	_, err = stmt.Exec(scoreToRemove, musicId)
	if err != nil {
		panic(err.Error())
	}
	defer db.Close()
}
