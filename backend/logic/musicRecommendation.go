package logic

import (
	data "backend/data"
	"sort"
)

func recomendation() []data.Music {
	playlistToReturn := []data.Music{}
	for _, v := range data.AllMusic {
		if v.Score > 50 {
			playlistToReturn = append(playlistToReturn, v)
		}
	}
	sort.Slice(playlistToReturn, func(i, j int) bool {
		return playlistToReturn[i].Score < playlistToReturn[j].Score
	})
	return playlistToReturn
}
