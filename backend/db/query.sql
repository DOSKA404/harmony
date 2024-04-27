INSERT INTO "album" ("id", "name", "artistId") VALUES
('1', 'the eminem show', '1');

INSERT INTO "album" ("id", "name", "artistId") VALUES
('2', 'the infamous', '2');

INSERT INTO "album" ("id", "name", "artistId") VALUES
('3', 'the predator', '3');

INSERT INTO "album" ("id", "name", "artistId") VALUES
('4', 'lethal injection', '3');

INSERT INTO "album" ("id", "name", "artistId") VALUES
('5', 'a night at the opera', '4');

INSERT INTO "album" ("id", "name", "artistId") VALUES
('6', 'back in black', '5');

INSERT INTO "album" ("id", "name", "artistId") VALUES
('7', 'love at first sting', '6');

INSERT INTO "album" ("id", "name", "artistId") VALUES
('8', 'blurryface', '7');

INSERT INTO "album" ("id", "name", "artistId") VALUES
('9', 'what a wonderfull world', '8');

INSERT INTO "album" ("id", "name", "artistId") VALUES
('10', 'greatest hit', '9');

INSERT INTO "artist" ("id", "name") VALUES
('1', 'eminem');

INSERT INTO "artist" ("id", "name") VALUES
('2', 'mobb deep');

INSERT INTO "artist" ("id", "name") VALUES
('3', 'ice cube');

INSERT INTO "artist" ("id", "name") VALUES
('4', 'queen');

INSERT INTO "artist" ("id", "name") VALUES
('5', 'acdc');

INSERT INTO "artist" ("id", "name") VALUES
('6', 'scorpions');

INSERT INTO "artist" ("id", "name") VALUES
('7', 'twenty one pilotes');

INSERT INTO "artist" ("id", "name") VALUES
('8', 'louis armstrong');

INSERT INTO "artist" ("id", "name") VALUES
('9', 'ray charles');

INSERT INTO "genre" ("id", "name") VALUES
('1', 'rap');

INSERT INTO "genre" ("id", "name") VALUES
('2', 'rock');

INSERT INTO "genre" ("id", "name") VALUES
('3', 'jazz');

INSERT INTO "genreLinkAlbum" ("id", "albumId", "genreId") VALUES
('1', '1', '1');

INSERT INTO "genreLinkAlbum" ("id", "albumId", "genreId") VALUES
('2', '2', '1');

INSERT INTO "genreLinkAlbum" ("id", "albumId", "genreId") VALUES
('3', '3', '1');

INSERT INTO "genreLinkAlbum" ("id", "albumId", "genreId") VALUES
('4', '4', '1');

INSERT INTO "genreLinkAlbum" ("id", "albumId", "genreId") VALUES
('5', '5', '2');

INSERT INTO "genreLinkAlbum" ("id", "albumId", "genreId") VALUES
('6', '6', '2');

INSERT INTO "genreLinkAlbum" ("id", "albumId", "genreId") VALUES
('7', '7', '2');

INSERT INTO "genreLinkAlbum" ("id", "albumId", "genreId") VALUES
('8', '8', '1');

INSERT INTO "genreLinkAlbum" ("id", "albumId", "genreId") VALUES
('9', '8', '2');

INSERT INTO "genreLinkAlbum" ("id", "albumId", "genreId") VALUES
('10', '9', '3');

INSERT INTO "genreLinkAlbum" ("id", "albumId", "genreId") VALUES
('11', '10', '3');

INSERT INTO "genreLinkArtist" ("id", "artistId", "genreId") VALUES
('1', '1', '1');

INSERT INTO "genreLinkArtist" ("id", "artistId", "genreId") VALUES
('2', '2', '1');

INSERT INTO "genreLinkArtist" ("id", "artistId", "genreId") VALUES
('3', '3', '1');

INSERT INTO "genreLinkArtist" ("id", "artistId", "genreId") VALUES
('4', '4', '2');

INSERT INTO "genreLinkArtist" ("id", "artistId", "genreId") VALUES
('5', '5', '2');

INSERT INTO "genreLinkArtist" ("id", "artistId", "genreId") VALUES
('6', '6', '2');

INSERT INTO "genreLinkArtist" ("id", "artistId", "genreId") VALUES
('7', '7', '1');

INSERT INTO "genreLinkArtist" ("id", "artistId", "genreId") VALUES
('8', '7', '2');

INSERT INTO "genreLinkArtist" ("id", "artistId", "genreId") VALUES
('9', '8', '3');

INSERT INTO "genreLinkArtist" ("id", "artistId", "genreId") VALUES
('10', '9', '3');

INSERT INTO "genreLinkMusic" ("id", "musicId", "genreId") VALUES
('1', '1', '1');

INSERT INTO "genreLinkMusic" ("id", "musicId", "genreId") VALUES
('2', '2', '1');

INSERT INTO "genreLinkMusic" ("id", "musicId", "genreId") VALUES
('3', '3', '1');

INSERT INTO "genreLinkMusic" ("id", "musicId", "genreId") VALUES
('4', '4', '1');

INSERT INTO "genreLinkMusic" ("id", "musicId", "genreId") VALUES
('5', '5', '1');

INSERT INTO "genreLinkMusic" ("id", "musicId", "genreId") VALUES
('6', '6', '2');

INSERT INTO "genreLinkMusic" ("id", "musicId", "genreId") VALUES
('7', '7', '2');

INSERT INTO "genreLinkMusic" ("id", "musicId", "genreId") VALUES
('8', '8', '2');

INSERT INTO "genreLinkMusic" ("id", "musicId", "genreId") VALUES
('9', '9', '1');

INSERT INTO "genreLinkMusic" ("id", "musicId", "genreId") VALUES
('10', '9', '2');

INSERT INTO "genreLinkMusic" ("id", "musicId", "genreId") VALUES
('11', '10', '3');

INSERT INTO "genreLinkMusic" ("id", "musicId", "genreId") VALUES
('12', '11', '3');

INSERT INTO "music" ("id", "name", "artisteId", "albumId") VALUES
('1', 'whitout me', '1', '1');

INSERT INTO "music" ("id", "name", "artisteId", "albumId") VALUES
('2', 'superman', '1', '1');

INSERT INTO "music" ("id", "name", "artisteId", "albumId") VALUES
('3', 'shook ones part 2', '2', '2');

INSERT INTO "music" ("id", "name", "artisteId", "albumId") VALUES
('4', 'it was a good day', '3', '3');

INSERT INTO "music" ("id", "name", "artisteId", "albumId") VALUES
('5', 'you know how we do it', '3', '4');

INSERT INTO "music" ("id", "name", "artisteId", "albumId") VALUES
('6', 'bohemian rapsody', '4', '5');

INSERT INTO "music" ("id", "name", "artisteId", "albumId") VALUES
('7', 'back in black', '5', '6');

INSERT INTO "music" ("id", "name", "artisteId", "albumId") VALUES
('8', 'still loving you', '6', '7');

INSERT INTO "music" ("id", "name", "artisteId", "albumId") VALUES
('9', 'stressed out', '7', '8');

INSERT INTO "music" ("id", "name", "artisteId", "albumId") VALUES
('10', 'what a wonderfull world', '8', '9');

INSERT INTO "music" ("id", "name", "artisteId", "albumId") VALUES
('11', 'hit the road jack', '9', '10');