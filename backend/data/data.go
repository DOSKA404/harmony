package data

type Music struct {
	Id          int
	Name        string
	ArtistId    int
	AlbumId     int
	Genre       []Genre
	YoutubePath string
	Score       int
}

type Playlist struct {
	Id    int
	Name  string
	Music []Music
	Genre []Genre
}

type Album struct {
	Id          int
	Name        string
	ArtistId    int
	Genre       []Genre
	YoutubePath string
	Score       int
}

type Artist struct {
	Id    int
	Name  string
	Score int
	Genre []Genre
}

type Genre struct {
	Id    int
	Name  string
	Score int
}

type Account struct {
	Id       int
	Username string
	Password string
}

var AllAlbums []Album

var AllArtists []Artist

var AllGenres []Genre

var AllMusic []Music
