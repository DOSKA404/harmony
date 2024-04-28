package data

import (
	"database/sql"
)

func OpenDb() (db *sql.DB) {
	db, err := sql.Open("sqlite3", "/db/data.sqlite")
	if err != nil {
		panic(err)
	}

	defer db.Close()
	return db
}

func InitMusic(accountId int) {
	db := OpenDb()

	row, err := db.Query("SELECT id, name, artisteId, albumId, youtubePath  FROM music")
	if err != nil {
		panic(err)
	}
	for row.Next() {
		var id int
		var name string
		var artisteId int
		var albumId int
		var youtubePath string
		err = row.Scan(&id, &name, &artisteId, &albumId, &youtubePath)
		if err != nil {
			panic(err)
		}
		music := Music{
			Id:          id,
			Name:        name,
			ArtisteId:   artisteId,
			AlbumId:     albumId,
			YoutubePath: youtubePath,
		}
		AllMusic = append(AllMusic, music)
	}

	row, err = db.Query("SELECT id,name,artisteId,youtubePath  FROM album")
	if err != nil {
		panic(err)
	}
	for row.Next() {
		var id int
		var name string
		var artisteId int
		var youtubePath string
		err = row.Scan(&id, &name, &artisteId, &youtubePath)
		if err != nil {
			panic(err)
		}
		album := Album{
			Id:          id,
			Name:        name,
			ArtisteId:   artisteId,
			YoutubePath: youtubePath,
		}
		AllAlbums = append(AllAlbums, album)
	}
	row, err = db.Query("SELECT id,name  FROM artist")
	if err != nil {
		panic(err)
	}
	for row.Next() {
		var id int
		var name string
		err = row.Scan(&id, &name)
		if err != nil {
			panic(err)
		}
		artist := Artist{
			Id:   id,
			Name: name,
		}
		AllArtists = append(AllArtists, artist)
	}
	row, err = db.Query("SELECT id,name  FROM genre")
	if err != nil {
		panic(err)
	}
	for row.Next() {
		var id int
		var name string
		err = row.Scan(&id, &name)
		if err != nil {
			panic(err)
		}
		genre := Genre{
			Id:   id,
			Name: name,
		}
		AllGenres = append(AllGenres, genre)
	}

	row, err = db.Query("SELECT id, musicId,genreId  FROM genreLinkMusic")
	if err != nil {
		panic(err)
	}
	for row.Next() {
		var id int
		var musicId int
		var genreId int
		err = row.Scan(&id, &musicId, &genreId)
		if err != nil {
			panic(err)
		}
		AllMusic[musicId].Genre = append(AllMusic[musicId].Genre, AllGenres[genreId])

	}
	row, err = db.Query("SELECT id, albumId,genreId  FROM genreLinkAlbum")
	if err != nil {
		panic(err)
	}
	for row.Next() {
		var id int
		var albumId int
		var genreId int
		err = row.Scan(&id, &albumId, &genreId)
		if err != nil {
			panic(err)
		}
		AllAlbums[albumId].Genre = append(AllAlbums[albumId].Genre, AllGenres[genreId])
	}
	row, err = db.Query("SELECT id, artisteId,genreId  FROM genreLinkArtist")
	if err != nil {
		panic(err)
	}
	for row.Next() {
		var id int
		var artisteId int
		var genreId int
		err = row.Scan(&id, &artisteId, &genreId)
		if err != nil {
			panic(err)
		}
		AllArtists[artisteId].Genre = append(AllArtists[artisteId].Genre, AllGenres[genreId])
	}

	row, err = db.Query("SELECT musicId ,score FROM scoreMusic WHERE accountId = ?", accountId)
	if err != nil {
		panic(err)
	}
	for row.Next() {
		var musicId int
		var score int
		err = row.Scan(&musicId, &score)
		if err != nil {
			panic(err)
		}
		AllMusic[musicId].Score = score
	}
	row, err = db.Query("SELECT albumId ,score FROM albumMusic WHERE accountId = ?", accountId)
	if err != nil {
		panic(err)
	}
	for row.Next() {
		var albumId int
		var score int
		err = row.Scan(&albumId, &score)
		if err != nil {
			panic(err)
		}
		AllAlbums[albumId].Score = score
	}
	row, err = db.Query("SELECT artisteId ,score FROM scoreArtist WHERE accountId =?", accountId)
	if err != nil {
		panic(err)
	}
	for row.Next() {
		var artisteId int
		var score int
		err = row.Scan(&artisteId, &score)
		if err != nil {
			panic(err)
		}
		AllArtists[artisteId].Score = score
	}
	row, err = db.Query("SELECT genreId ,score FROM scoreGenre WHERE accountId =?", accountId)
	if err != nil {
		panic(err)
	}
	for row.Next() {
		var genreId int
		var score int
		err = row.Scan(&genreId, &score)
		if err != nil {
			panic(err)
		}
		AllGenres[genreId].Score = score
	}
}
