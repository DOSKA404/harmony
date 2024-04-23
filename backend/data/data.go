package data

type music struct {
	id          int
	name        string
	artist      artist
	album       album
	year        int
	genre       []genre
	length      int
	youtubePath string
	score       int
}

type playlist struct {
	id       int
	name     string
	music    []music
	genre    []genre
	musicNum int
}

type album struct {
	id       int
	name     string
	artist   string
	music    []music
	genre    []genre
	musicNum int
}

type artist struct {
	id       int
	name     string
	music    []music
	genre    []genre
	musicNum int
	album    []album
	albumNum int
	score    int
}

type genre struct {
	id    int
	name  string
	score int
}

type account struct {
	id       int
	username string
	password string
}
