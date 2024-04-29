package data

import (
	"database/sql"
	"errors"
	"fmt"
)

func AddAccount(username string, password string) (Account, error) {
	var account Account
	db, err := sql.Open("sqlite3", "db/data.sqlite")
	if err != nil {
		fmt.Println("ici", err)
		return Account{}, err
	}
	defer db.Close()

	row, err := db.Query("SELECT username FROM account WHERE username = ?", username)
	if err != nil {
		fmt.Println("ici", err)
		return Account{}, err
	}

	for row.Next() {
		var name string
		if err := row.Scan(&name); err != nil {
			return Account{}, err
		}
		if name == username {
			return Account{}, errors.New("Username already exists")
		}
	}

	stmt, err := db.Prepare("INSERT INTO account (username, password) VALUES (?,?)")
	if err != nil {
		return Account{}, err
	}
	defer stmt.Close()

	_, err = stmt.Exec(username, password)
	if err != nil {
		return Account{}, err
	}

	// Retrieve the newly inserted account
	row, err = db.Query("SELECT id, username FROM account WHERE username = ?", username)
	if err != nil {
		return Account{}, err
	}
	defer row.Close()

	for row.Next() {
		var id int
		var name string
		if err := row.Scan(&id, &name); err != nil {
			return Account{}, err
		}
		account = Account{
			Id:       id,
			Username: name,
		}
	}

	InitScore(account.Id)

	return account, nil
}

func InitScore(accountId int) {
	fmt.Print("InitScore")
	db, err := sql.Open("sqlite3", "db/data.sqlite")
	if err != nil {
		panic(err)
	}
	defer db.Close()

	var music []int
	row, err := db.Query("SELECT id FROM music")
	if err != nil {
		panic(err)
	}
	for row.Next() {

		var id int
		err = row.Scan(&id)
		if err != nil {
			panic(err)
		}
		music = append(music, id)

	}
	for _, id := range music {
		stmt, err := db.Prepare("INSERT INTO scoreMusic (musicId, accountId,score) VALUES (?,?,?)")
		if err != nil {
			panic(err)
		}
		defer stmt.Close()
		_, err = stmt.Exec(id, accountId, 50)
		if err != nil {
			panic(err)
		}
	}

	var album []int
	row, err = db.Query("SELECT id FROM album")
	if err != nil {
		panic(err)
	}
	for row.Next() {

		var id int
		err = row.Scan(&id)
		if err != nil {
			panic(err)
		}
		album = append(album, id)

	}
	for _, id := range album {
		stmt, err := db.Prepare("INSERT INTO scoreAlbum (albumId, accountId,score) VALUES (?,?,?)")
		if err != nil {
			panic(err)
		}
		defer stmt.Close()
		_, err = stmt.Exec(id, accountId, 50)
		if err != nil {
			panic(err)
		}
	}
	var artist []int
	row, err = db.Query("SELECT id FROM artist")
	if err != nil {
		panic(err)
	}
	for row.Next() {

		var id int
		err = row.Scan(&id)
		if err != nil {
			panic(err)
		}
		artist = append(artist, id)

	}
	for _, id := range artist {
		stmt, err := db.Prepare("INSERT INTO scoreArtiste (artisteId, accountId,score) VALUES (?,?,?)")
		if err != nil {
			panic(err)
		}
		defer stmt.Close()
		_, err = stmt.Exec(id, accountId, 50)
		if err != nil {
			panic(err)
		}
	}
	var genre []int
	row, err = db.Query("SELECT id FROM genre")
	if err != nil {
		panic(err)
	}
	for row.Next() {

		var id int
		err = row.Scan(&id)
		if err != nil {
			panic(err)
		}
		genre = append(genre, id)

	}
	for _, id := range genre {
		stmt, err := db.Prepare("INSERT INTO scoreGenre (genreId, accountId,score) VALUES (?,?,?)")
		if err != nil {
			panic(err)
		}
		defer stmt.Close()
		_, err = stmt.Exec(id, accountId, 50)
		if err != nil {
			panic(err)
		}
	}

}

func VerifAccount(username string, password string) (Account, error) {
	var account Account
	db, err := sql.Open("sqlite3", "db/data.sqlite")
	if err != nil {
		panic(err)
	}
	defer db.Close()

	row, err := db.Query("SELECT id, username FROM account WHERE username = ? AND password = ?", username, password)
	if err != nil {
		return Account{}, err
	}
	defer row.Close()

	for row.Next() {
		var id int
		var name string
		if err := row.Scan(&id, &name); err != nil {
			return Account{}, err
		}
		account = Account{
			Id:       id,
			Username: name,
		}
	}

	if account.Username == "" {
		return Account{}, errors.New("Username or password is incorrect")
	}

	return account, nil
}
