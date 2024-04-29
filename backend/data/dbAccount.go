package data

import "errors"

func AddAccount(username string, pasword string) (Account, error) {
	var account Account
	db := OpenDb()

	row, err := db.Query("SELECT username FROM account WHERE username = ?", username)
	if err != nil {
		panic(err)
	}

	for row.Next() {
		var name string
		err = row.Scan(&name)
		if err != nil {
			panic(err)
		}
		if name == username {
			return Account{}, errors.New("Username already exists")
		}
	}

	stmt, err := db.Prepare("INSERT INTO Account (username, password) VALUES (?,?)")
	if err != nil {
		panic(err.Error())
	}
	defer stmt.Close()
	db = OpenDb()
	row, err = db.Query("SELECT id,username FROM account WHERE username = ?", username)
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
		account = Account{
			Id:       id,
			Username: name,
		}
	}
	return account, nil

}

func InitScore(accountId int) {
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

}
