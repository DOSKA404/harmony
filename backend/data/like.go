package data

import "database/sql"

func LikeArtist(artistId int, accountId int) {
	db, err := sql.Open("sqlite3", "db/data.sqlite")
	if err != nil {
		panic(err)
	}
	defer db.Close()
	db.Exec("UPDATE scoreArtiste SET score = score + 25 WHERE artisteId = ? AND accountId = ?", artistId, accountId)
	defer db.Close()

}

func DislikeArtist(artistId int, accountId int) {
	db, err := sql.Open("sqlite3", "db/data.sqlite")
	if err != nil {
		panic(err)
	}
	defer db.Close()
	db.Exec("UPDATE scoreArtiste SET score = score - 25 WHERE artisteId = ? AND accountId = ?", artistId, accountId)
	defer db.Close()

}

func LikeAlbum(artistId int, accountId int) {
	db, err := sql.Open("sqlite3", "db/data.sqlite")
	if err != nil {
		panic(err)
	}
	defer db.Close()
	db.Exec("UPDATE scoreAlbum SET score = score + 25 WHERE albumId = ? AND accountId = ?", artistId, accountId)
	defer db.Close()

}

func DislikeAlbum(artistId int, accountId int) {
	db, err := sql.Open("sqlite3", "db/data.sqlite")
	if err != nil {
		panic(err)
	}
	defer db.Close()
	db.Exec("UPDATE scoreAlbum SET score = score - 25 WHERE albumId = ? AND accountId = ?", artistId, accountId)
	defer db.Close()

}

func LikeMusic(artistId int, accountId int) {
	db, err := sql.Open("sqlite3", "db/data.sqlite")
	if err != nil {
		panic(err)
	}
	defer db.Close()
	db.Exec("UPDATE scoreMusic SET score = score + 25 WHERE MusicId = ? AND accountId = ?", artistId, accountId)
	defer db.Close()

}

func DislikeMusic(artistId int, accountId int) {
	db, err := sql.Open("sqlite3", "db/data.sqlite")
	if err != nil {
		panic(err)
	}
	defer db.Close()
	db.Exec("UPDATE scoreMusic SET score = score - 25 WHERE MusicId = ? AND accountId = ?", artistId, accountId)
	defer db.Close()

}
