package data

type Music struct {
	Id          int
	Name        string
	ArtisteId   int
	AlbumId     int
	Genre       []int
	YoutubePath string
	Score       int
}

type Playlist struct {
	Id    int
	Name  string
	Music []Music
	Genre []int
}

type Album struct {
	Id          int
	Name        string
	ArtisteId   int
	Genre       []int
	YoutubePath string
	Score       int
}

type Artist struct {
	Id    int
	Name  string
	Score int
	Genre []int
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

type ReturnStruct struct {
	Music  []Music
	Album  []Album
	Artist []Artist
}
