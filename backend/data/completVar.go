package data

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

func InitMusic(accountId int) {
	db, err := sql.Open("sqlite3", "data.sqlite")
	if err != nil {
		panic(err)
	}

	row, err := db.Query("SELECT id  FROM music")
	if err != nil {
		panic(err)
	}
	for row.Next() {
		var id int

		err = row.Scan(&id)
		if err != nil {
			panic(err)
		}

		db.Query("INSERT INTO scoreMusic (accountId, musicId, score) VALUES (?,?,?)", accountId, id, 50)
	}

	row, err = db.Query("SELECT id  FROM album")
	if err != nil {
		panic(err)
	}
	for row.Next() {
		var id int

		err = row.Scan(&id)
		if err != nil {
			panic(err)
		}

		db.Query("INSERT INTO scoreAlbum (accountId, albumId, score) VALUES (?,?,?)", accountId, id, 50)
	}
	row, err = db.Query("SELECT id  FROM artist")
	if err != nil {
		panic(err)
	}
	for row.Next() {
		var id int

		err = row.Scan(&id)
		if err != nil {
			panic(err)
		}

		db.Query("INSERT INTO scoreArtiste (accountId, artisteId, score) VALUES (?,?,?)", accountId, id, 50)
	}
	row, err = db.Query("SELECT id,name  FROM genre")
	if err != nil {
		panic(err)
	}
	for row.Next() {
		var id int

		err = row.Scan(&id)
		if err != nil {
			panic(err)
		}

		db.Query("INSERT INTO scoreGenre (accountId, genreId, score) VALUES (?,?,?)", accountId, id, 50)
	}

}
