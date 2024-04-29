package logic

import "database/sql"

func addScore(musicId int, scoreToAdd int) {
	db, err := sql.Open("sqlite3", "db/data.sqlite")
	if err != nil {
		panic(err.Error())
	}
	defer db.Close()

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
	db, err := sql.Open("sqlite3", "db/data.sqlite")
	if err != nil {
		panic(err.Error())
	}
	defer db.Close()

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
