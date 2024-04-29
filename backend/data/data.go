package data

type Music struct {
	Id          int
	Name        string
	ArtisteId   int
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
	ArtisteId   int
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
}

var AllAlbums []Album

var AllArtists []Artist

var AllGenres []Genre

var AllMusic []Music

type Recommendations struct {
	Music  [4]Music
	Album  [4]Album
	Artist [4]Artist
}
