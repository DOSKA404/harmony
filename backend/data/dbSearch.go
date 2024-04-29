package data

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

func RecupAlbumContent(albumIdInt int) []Music {
	db, err := sql.Open("sqlite3", "db/data.sqlite")
	if err != nil {
		panic(err)
	}
	defer db.Close()
	rows, err := db.Query("SELECT * FROM music WHERE albumId =?", albumIdInt)
	if err != nil {
		panic(err)
	}
	var music []Music
	for rows.Next() {
		var id int
		var name string
		var artisteId int
		var albumId int
		var youtubePath string
		err = rows.Scan(&id, &name, &artisteId, &albumId, &youtubePath)
		if err != nil {
			panic(err)
		}
		music = append(music, Music{
			Id:          id,
			Name:        name,
			ArtisteId:   artisteId,
			AlbumId:     albumId,
			YoutubePath: youtubePath,
		})
	}
	return music

}
