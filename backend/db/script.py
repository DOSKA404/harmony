import sqlite3

# Connexion à la base de données (ou création si elle n'existe pas)
conn = sqlite3.connect('bd.sqlite')
cursor = conn.cursor()

# Insertion des données
artist_data = [
    ( 'eminem'),
    ( 'mobb deep'),
    ( 'ice cube'),
    ( 'queen'),
    ( 'acdc'),
    ( 'scorpions'),
    ( 'twenty one pilots'),
    ('louis armstrong'),
    ('ray charles')
]

album_data = [
    ( 'the eminem show', 1),
    ('the infamous', 2),
    ( 'the predator', 3),
    ( 'lethal injection', 3),
    ( 'a night at the opera', 4),
    ( 'back in black', 5),
    ( 'love at first sting', 6),
    ( 'blurryface', 7),
    ( 'what a wonderful world', 8),
    ( 'greatest hits', 9)
]

genre_data = [
    ( 'rap'),
    ( 'rock'),
    ( 'jazz')
]

genre_link_album_data = [
    ( 1, 1),
    ( 2, 1),
    ( 3, 1),
    ( 4, 1),
    ( 5, 2),
    ( 6, 2),
    ( 7, 2),
    ( 8, 1),
    ( 8, 2),
    ( 9, 3),
    ( 10, 3)
]

genre_link_artist_data = [
    (1, 1),
    (2, 1),
    (3, 1),
    (4, 2),
    (5, 2),
    (6, 2),
    (7, 1),
    (7, 2),
    (8, 3),
    ( 9, 3)
]

music_data = [
    ( 'without me', 1, 1),
    ( 'superman', 1, 1),
    ( 'shook ones part 2', 2, 2),
    ( 'it was a good day', 3, 3),
    ( 'you know how we do it', 3, 4),
    ( 'bohemian rhapsody', 4, 5),
    ( 'back in black', 5, 6),
    ( 'still loving you', 6, 7),
    ( 'stressed out', 7, 8),
    ( 'what a wonderful world', 8, 9),
    ( 'hit the road jack', 9, 10)
]

# Insertion des données dans les tables
cursor.executemany('INSERT INTO artist VALUES ( ?)', artist_data)
cursor.executemany('INSERT INTO album VALUES ( ?, ?)', album_data)
cursor.executemany('INSERT INTO genre VALUES ( ?)', genre_data)
cursor.executemany('INSERT INTO genreLinkAlbum VALUES ( ?, ?)', genre_link_album_data)
cursor.executemany('INSERT INTO genreLinkArtist VALUES ( ?, ?)', genre_link_artist_data)
cursor.executemany('INSERT INTO music VALUES ( ?, ?, ?)', music_data)

# Commit des modifications et fermeture de la connexion
conn.commit()
conn.close()
