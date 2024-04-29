package logic

import (
	data "backend/data"
	"sort"
)

func recommendation(accountId int) data.Recommendations {
	data.InitMusic(accountId)
	var bestMusic [4]data.Music
	var bestAlbum [4]data.Album
	var bestArtist [4]data.Artist

	sort.Slice(data.AllMusic, func(i, j int) bool {
		return data.AllMusic[i].Score > data.AllMusic[j].Score
	})

	for i := 0; i < 4; i++ {
		bestMusic[i] = data.AllMusic[i]
	}

	sort.Slice(data.AllAlbums, func(i, j int) bool {
		return data.AllAlbums[i].Score > data.AllAlbums[j].Score
	})

	for i := 0; i < 4; i++ {
		bestAlbum[i] = data.AllAlbums[i]
	}

	sort.Slice(data.AllArtists, func(i, j int) bool {
		return data.AllArtists[i].Score > data.AllArtists[j].Score
	})

	for i := 0; i < 4; i++ {
		bestArtist[i] = data.AllArtists[i]
	}

	playlistToReturn := data.Recommendations{
		Music:  bestMusic,
		Album:  bestAlbum,
		Artist: bestArtist,
	}
	return playlistToReturn

}
