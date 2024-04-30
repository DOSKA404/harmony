'use client';
import React, { useEffect, useState } from 'react';
import { Box, Flex, Heading, Text, SimpleGrid, Image, Input } from '@chakra-ui/react';
import Header, { Layout } from '../../components/layout';
import NextLink from 'next/link';
import ReactPlayer from 'react-player';

interface MusicItem {
  Id: number;
  Name: string;
  ArtisteId: number;
  AlbumId: number;
  Genre: number[];
  YoutubePath: string;
  Score: number;}


const MusicData: MusicItem[] = 
  [
    {
        "Id": 1,
        "Name": "whitout me",
        "ArtisteId": 1,
        "AlbumId": 1,
        "Genre": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ],
        "YoutubePath": "https://www.youtube.com/watch?v=YVkUvmDQ3HY",
        "Score": 50
    },
    {
        "Id": 2,
        "Name": "superman",
        "ArtisteId": 1,
        "AlbumId": 1,
        "Genre": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ],
        "YoutubePath": "https://www.youtube.com/watch?v=lPlePBCS6Ic",
        "Score": 50
    },
    {
        "Id": 3,
        "Name": "shook ones part 2",
        "ArtisteId": 2,
        "AlbumId": 2,
        "Genre": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ],
        "YoutubePath": "https://www.youtube.com/watch?v=yoYZf-lBF_U",
        "Score": 50
    },
    {
        "Id": 4,
        "Name": "it was a good day",
        "ArtisteId": 3,
        "AlbumId": 3,
        "Genre": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ],
        "YoutubePath": "https://www.youtube.com/watch?v=h4UqMyldS7Q",
        "Score": 50
    },
    {
        "Id": 5,
        "Name": "you know how we do it",
        "ArtisteId": 3,
        "AlbumId": 4,
        "Genre": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ],
        "YoutubePath": "https://www.youtube.com/watch?v=HvC96EaQDmU",
        "Score": 50
    },
    {
        "Id": 6,
        "Name": "bohemian rapsody",
        "ArtisteId": 4,
        "AlbumId": 5,
        "Genre": [
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2
        ],
        "YoutubePath": "https://www.youtube.com/watch?v=fJ9rUzIMcZQ",
        "Score": 50
    },
    {
        "Id": 2,
        "Name": "superman",
        "ArtisteId": 1,
        "AlbumId": 1,
        "Genre": [
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2
        ],
        "YoutubePath": "https://www.youtube.com/watch?v=lPlePBCS6Ic",
        "Score": 50
    },
    {
        "Id": 7,
        "Name": "back in black",
        "ArtisteId": 5,
        "AlbumId": 6,
        "Genre": [
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2
        ],
        "YoutubePath": "https://www.youtube.com/watch?v=pAgnJDJN4VA",
        "Score": 50
    },
    {
        "Id": 3,
        "Name": "shook ones part 2",
        "ArtisteId": 2,
        "AlbumId": 2,
        "Genre": [
            1,
            2,
            1,
            2,
            1,
            2,
            1,
            2,
            1,
            2,
            1,
            2,
            1,
            2,
            1,
            2,
            1,
            2,
            1,
            2,
            1,
            2,
            1,
            2,
            1,
            2
        ],
        "YoutubePath": "https://www.youtube.com/watch?v=yoYZf-lBF_U",
        "Score": 50
    },
    {
        "Id": 8,
        "Name": "still loving you",
        "ArtisteId": 6,
        "AlbumId": 7,
        "Genre": [
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3
        ],
        "YoutubePath": "https://www.youtube.com/watch?v=7pOr3dBFAeY",
        "Score": 50
    },
    {
        "Id": 4,
        "Name": "it was a good day",
        "ArtisteId": 3,
        "AlbumId": 3,
        "Genre": [
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3
        ],
        "YoutubePath": "https://www.youtube.com/watch?v=h4UqMyldS7Q",
        "Score": 50
    },
    {
        "Id": 9,
        "Name": "stressed out",
        "ArtisteId": 7,
        "AlbumId": 8,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=pXRviuL6vMY",
        "Score": 0
    },
    {
        "Id": 5,
        "Name": "you know how we do it",
        "ArtisteId": 3,
        "AlbumId": 4,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=HvC96EaQDmU",
        "Score": 0
    },
    {
        "Id": 10,
        "Name": "what a wonderfull world",
        "ArtisteId": 8,
        "AlbumId": 9,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=rBrd_3VMC3c",
        "Score": 0
    },
    {
        "Id": 6,
        "Name": "bohemian rapsody",
        "ArtisteId": 4,
        "AlbumId": 5,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=fJ9rUzIMcZQ",
        "Score": 0
    },
    {
        "Id": 11,
        "Name": "hit the road jack",
        "ArtisteId": 9,
        "AlbumId": 10,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=SrnWp5O0DEs",
        "Score": 0
    },
    {
        "Id": 7,
        "Name": "back in black",
        "ArtisteId": 5,
        "AlbumId": 6,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=pAgnJDJN4VA",
        "Score": 0
    },
    {
        "Id": 8,
        "Name": "still loving you",
        "ArtisteId": 6,
        "AlbumId": 7,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=7pOr3dBFAeY",
        "Score": 0
    },
    {
        "Id": 9,
        "Name": "stressed out",
        "ArtisteId": 7,
        "AlbumId": 8,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=pXRviuL6vMY",
        "Score": 0
    },
    {
        "Id": 10,
        "Name": "what a wonderfull world",
        "ArtisteId": 8,
        "AlbumId": 9,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=rBrd_3VMC3c",
        "Score": 0
    },
    {
        "Id": 11,
        "Name": "hit the road jack",
        "ArtisteId": 9,
        "AlbumId": 10,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=SrnWp5O0DEs",
        "Score": 0
    },
    {
        "Id": 1,
        "Name": "whitout me",
        "ArtisteId": 1,
        "AlbumId": 1,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=YVkUvmDQ3HY",
        "Score": 0
    },
    {
        "Id": 2,
        "Name": "superman",
        "ArtisteId": 1,
        "AlbumId": 1,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=lPlePBCS6Ic",
        "Score": 0
    },
    {
        "Id": 3,
        "Name": "shook ones part 2",
        "ArtisteId": 2,
        "AlbumId": 2,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=yoYZf-lBF_U",
        "Score": 0
    },
    {
        "Id": 4,
        "Name": "it was a good day",
        "ArtisteId": 3,
        "AlbumId": 3,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=h4UqMyldS7Q",
        "Score": 0
    },
    {
        "Id": 5,
        "Name": "you know how we do it",
        "ArtisteId": 3,
        "AlbumId": 4,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=HvC96EaQDmU",
        "Score": 0
    },
    {
        "Id": 6,
        "Name": "bohemian rapsody",
        "ArtisteId": 4,
        "AlbumId": 5,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=fJ9rUzIMcZQ",
        "Score": 0
    },
    {
        "Id": 7,
        "Name": "back in black",
        "ArtisteId": 5,
        "AlbumId": 6,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=pAgnJDJN4VA",
        "Score": 0
    },
    {
        "Id": 8,
        "Name": "still loving you",
        "ArtisteId": 6,
        "AlbumId": 7,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=7pOr3dBFAeY",
        "Score": 0
    },
    {
        "Id": 9,
        "Name": "stressed out",
        "ArtisteId": 7,
        "AlbumId": 8,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=pXRviuL6vMY",
        "Score": 0
    },
    {
        "Id": 10,
        "Name": "what a wonderfull world",
        "ArtisteId": 8,
        "AlbumId": 9,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=rBrd_3VMC3c",
        "Score": 0
    },
    {
        "Id": 11,
        "Name": "hit the road jack",
        "ArtisteId": 9,
        "AlbumId": 10,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=SrnWp5O0DEs",
        "Score": 0
    },
    {
        "Id": 1,
        "Name": "whitout me",
        "ArtisteId": 1,
        "AlbumId": 1,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=YVkUvmDQ3HY",
        "Score": 0
    },
    {
        "Id": 2,
        "Name": "superman",
        "ArtisteId": 1,
        "AlbumId": 1,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=lPlePBCS6Ic",
        "Score": 0
    },
    {
        "Id": 3,
        "Name": "shook ones part 2",
        "ArtisteId": 2,
        "AlbumId": 2,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=yoYZf-lBF_U",
        "Score": 0
    },
    {
        "Id": 4,
        "Name": "it was a good day",
        "ArtisteId": 3,
        "AlbumId": 3,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=h4UqMyldS7Q",
        "Score": 0
    },
    {
        "Id": 5,
        "Name": "you know how we do it",
        "ArtisteId": 3,
        "AlbumId": 4,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=HvC96EaQDmU",
        "Score": 0
    },
    {
        "Id": 6,
        "Name": "bohemian rapsody",
        "ArtisteId": 4,
        "AlbumId": 5,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=fJ9rUzIMcZQ",
        "Score": 0
    },
    {
        "Id": 7,
        "Name": "back in black",
        "ArtisteId": 5,
        "AlbumId": 6,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=pAgnJDJN4VA",
        "Score": 0
    },
    {
        "Id": 8,
        "Name": "still loving you",
        "ArtisteId": 6,
        "AlbumId": 7,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=7pOr3dBFAeY",
        "Score": 0
    },
    {
        "Id": 9,
        "Name": "stressed out",
        "ArtisteId": 7,
        "AlbumId": 8,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=pXRviuL6vMY",
        "Score": 0
    },
    {
        "Id": 10,
        "Name": "what a wonderfull world",
        "ArtisteId": 8,
        "AlbumId": 9,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=rBrd_3VMC3c",
        "Score": 0
    },
    {
        "Id": 11,
        "Name": "hit the road jack",
        "ArtisteId": 9,
        "AlbumId": 10,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=SrnWp5O0DEs",
        "Score": 0
    },
    {
        "Id": 1,
        "Name": "whitout me",
        "ArtisteId": 1,
        "AlbumId": 1,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=YVkUvmDQ3HY",
        "Score": 0
    },
    {
        "Id": 2,
        "Name": "superman",
        "ArtisteId": 1,
        "AlbumId": 1,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=lPlePBCS6Ic",
        "Score": 0
    },
    {
        "Id": 3,
        "Name": "shook ones part 2",
        "ArtisteId": 2,
        "AlbumId": 2,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=yoYZf-lBF_U",
        "Score": 0
    },
    {
        "Id": 4,
        "Name": "it was a good day",
        "ArtisteId": 3,
        "AlbumId": 3,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=h4UqMyldS7Q",
        "Score": 0
    },
    {
        "Id": 5,
        "Name": "you know how we do it",
        "ArtisteId": 3,
        "AlbumId": 4,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=HvC96EaQDmU",
        "Score": 0
    },
    {
        "Id": 6,
        "Name": "bohemian rapsody",
        "ArtisteId": 4,
        "AlbumId": 5,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=fJ9rUzIMcZQ",
        "Score": 0
    },
    {
        "Id": 7,
        "Name": "back in black",
        "ArtisteId": 5,
        "AlbumId": 6,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=pAgnJDJN4VA",
        "Score": 0
    },
    {
        "Id": 8,
        "Name": "still loving you",
        "ArtisteId": 6,
        "AlbumId": 7,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=7pOr3dBFAeY",
        "Score": 0
    },
    {
        "Id": 9,
        "Name": "stressed out",
        "ArtisteId": 7,
        "AlbumId": 8,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=pXRviuL6vMY",
        "Score": 0
    },
    {
        "Id": 10,
        "Name": "what a wonderfull world",
        "ArtisteId": 8,
        "AlbumId": 9,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=rBrd_3VMC3c",
        "Score": 0
    },
    {
        "Id": 11,
        "Name": "hit the road jack",
        "ArtisteId": 9,
        "AlbumId": 10,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=SrnWp5O0DEs",
        "Score": 0
    },
    {
        "Id": 1,
        "Name": "whitout me",
        "ArtisteId": 1,
        "AlbumId": 1,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=YVkUvmDQ3HY",
        "Score": 0
    },
    {
        "Id": 2,
        "Name": "superman",
        "ArtisteId": 1,
        "AlbumId": 1,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=lPlePBCS6Ic",
        "Score": 0
    },
    {
        "Id": 3,
        "Name": "shook ones part 2",
        "ArtisteId": 2,
        "AlbumId": 2,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=yoYZf-lBF_U",
        "Score": 0
    },
    {
        "Id": 4,
        "Name": "it was a good day",
        "ArtisteId": 3,
        "AlbumId": 3,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=h4UqMyldS7Q",
        "Score": 0
    },
    {
        "Id": 5,
        "Name": "you know how we do it",
        "ArtisteId": 3,
        "AlbumId": 4,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=HvC96EaQDmU",
        "Score": 0
    },
    {
        "Id": 6,
        "Name": "bohemian rapsody",
        "ArtisteId": 4,
        "AlbumId": 5,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=fJ9rUzIMcZQ",
        "Score": 0
    },
    {
        "Id": 7,
        "Name": "back in black",
        "ArtisteId": 5,
        "AlbumId": 6,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=pAgnJDJN4VA",
        "Score": 0
    },
    {
        "Id": 8,
        "Name": "still loving you",
        "ArtisteId": 6,
        "AlbumId": 7,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=7pOr3dBFAeY",
        "Score": 0
    },
    {
        "Id": 9,
        "Name": "stressed out",
        "ArtisteId": 7,
        "AlbumId": 8,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=pXRviuL6vMY",
        "Score": 0
    },
    {
        "Id": 10,
        "Name": "what a wonderfull world",
        "ArtisteId": 8,
        "AlbumId": 9,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=rBrd_3VMC3c",
        "Score": 0
    },
    {
        "Id": 11,
        "Name": "hit the road jack",
        "ArtisteId": 9,
        "AlbumId": 10,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=SrnWp5O0DEs",
        "Score": 0
    },
    {
        "Id": 1,
        "Name": "whitout me",
        "ArtisteId": 1,
        "AlbumId": 1,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=YVkUvmDQ3HY",
        "Score": 0
    },
    {
        "Id": 2,
        "Name": "superman",
        "ArtisteId": 1,
        "AlbumId": 1,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=lPlePBCS6Ic",
        "Score": 0
    },
    {
        "Id": 3,
        "Name": "shook ones part 2",
        "ArtisteId": 2,
        "AlbumId": 2,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=yoYZf-lBF_U",
        "Score": 0
    },
    {
        "Id": 4,
        "Name": "it was a good day",
        "ArtisteId": 3,
        "AlbumId": 3,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=h4UqMyldS7Q",
        "Score": 0
    },
    {
        "Id": 5,
        "Name": "you know how we do it",
        "ArtisteId": 3,
        "AlbumId": 4,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=HvC96EaQDmU",
        "Score": 0
    },
    {
        "Id": 6,
        "Name": "bohemian rapsody",
        "ArtisteId": 4,
        "AlbumId": 5,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=fJ9rUzIMcZQ",
        "Score": 0
    },
    {
        "Id": 7,
        "Name": "back in black",
        "ArtisteId": 5,
        "AlbumId": 6,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=pAgnJDJN4VA",
        "Score": 0
    },
    {
        "Id": 8,
        "Name": "still loving you",
        "ArtisteId": 6,
        "AlbumId": 7,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=7pOr3dBFAeY",
        "Score": 0
    },
    {
        "Id": 9,
        "Name": "stressed out",
        "ArtisteId": 7,
        "AlbumId": 8,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=pXRviuL6vMY",
        "Score": 0
    },
    {
        "Id": 10,
        "Name": "what a wonderfull world",
        "ArtisteId": 8,
        "AlbumId": 9,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=rBrd_3VMC3c",
        "Score": 0
    },
    {
        "Id": 11,
        "Name": "hit the road jack",
        "ArtisteId": 9,
        "AlbumId": 10,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=SrnWp5O0DEs",
        "Score": 0
    },
    {
        "Id": 1,
        "Name": "whitout me",
        "ArtisteId": 1,
        "AlbumId": 1,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=YVkUvmDQ3HY",
        "Score": 0
    },
    {
        "Id": 2,
        "Name": "superman",
        "ArtisteId": 1,
        "AlbumId": 1,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=lPlePBCS6Ic",
        "Score": 0
    },
    {
        "Id": 3,
        "Name": "shook ones part 2",
        "ArtisteId": 2,
        "AlbumId": 2,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=yoYZf-lBF_U",
        "Score": 0
    },
    {
        "Id": 4,
        "Name": "it was a good day",
        "ArtisteId": 3,
        "AlbumId": 3,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=h4UqMyldS7Q",
        "Score": 0
    },
    {
        "Id": 5,
        "Name": "you know how we do it",
        "ArtisteId": 3,
        "AlbumId": 4,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=HvC96EaQDmU",
        "Score": 0
    },
    {
        "Id": 6,
        "Name": "bohemian rapsody",
        "ArtisteId": 4,
        "AlbumId": 5,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=fJ9rUzIMcZQ",
        "Score": 0
    },
    {
        "Id": 7,
        "Name": "back in black",
        "ArtisteId": 5,
        "AlbumId": 6,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=pAgnJDJN4VA",
        "Score": 0
    },
    {
        "Id": 8,
        "Name": "still loving you",
        "ArtisteId": 6,
        "AlbumId": 7,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=7pOr3dBFAeY",
        "Score": 0
    },
    {
        "Id": 9,
        "Name": "stressed out",
        "ArtisteId": 7,
        "AlbumId": 8,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=pXRviuL6vMY",
        "Score": 0
    },
    {
        "Id": 10,
        "Name": "what a wonderfull world",
        "ArtisteId": 8,
        "AlbumId": 9,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=rBrd_3VMC3c",
        "Score": 0
    },
    {
        "Id": 11,
        "Name": "hit the road jack",
        "ArtisteId": 9,
        "AlbumId": 10,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=SrnWp5O0DEs",
        "Score": 0
    },
    {
        "Id": 1,
        "Name": "whitout me",
        "ArtisteId": 1,
        "AlbumId": 1,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=YVkUvmDQ3HY",
        "Score": 0
    },
    {
        "Id": 2,
        "Name": "superman",
        "ArtisteId": 1,
        "AlbumId": 1,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=lPlePBCS6Ic",
        "Score": 0
    },
    {
        "Id": 3,
        "Name": "shook ones part 2",
        "ArtisteId": 2,
        "AlbumId": 2,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=yoYZf-lBF_U",
        "Score": 0
    },
    {
        "Id": 4,
        "Name": "it was a good day",
        "ArtisteId": 3,
        "AlbumId": 3,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=h4UqMyldS7Q",
        "Score": 0
    },
    {
        "Id": 5,
        "Name": "you know how we do it",
        "ArtisteId": 3,
        "AlbumId": 4,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=HvC96EaQDmU",
        "Score": 0
    },
    {
        "Id": 6,
        "Name": "bohemian rapsody",
        "ArtisteId": 4,
        "AlbumId": 5,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=fJ9rUzIMcZQ",
        "Score": 0
    },
    {
        "Id": 7,
        "Name": "back in black",
        "ArtisteId": 5,
        "AlbumId": 6,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=pAgnJDJN4VA",
        "Score": 0
    },
    {
        "Id": 8,
        "Name": "still loving you",
        "ArtisteId": 6,
        "AlbumId": 7,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=7pOr3dBFAeY",
        "Score": 0
    },
    {
        "Id": 9,
        "Name": "stressed out",
        "ArtisteId": 7,
        "AlbumId": 8,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=pXRviuL6vMY",
        "Score": 0
    },
    {
        "Id": 10,
        "Name": "what a wonderfull world",
        "ArtisteId": 8,
        "AlbumId": 9,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=rBrd_3VMC3c",
        "Score": 0
    },
    {
        "Id": 11,
        "Name": "hit the road jack",
        "ArtisteId": 9,
        "AlbumId": 10,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=SrnWp5O0DEs",
        "Score": 0
    },
    {
        "Id": 1,
        "Name": "whitout me",
        "ArtisteId": 1,
        "AlbumId": 1,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=YVkUvmDQ3HY",
        "Score": 0
    },
    {
        "Id": 2,
        "Name": "superman",
        "ArtisteId": 1,
        "AlbumId": 1,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=lPlePBCS6Ic",
        "Score": 0
    },
    {
        "Id": 3,
        "Name": "shook ones part 2",
        "ArtisteId": 2,
        "AlbumId": 2,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=yoYZf-lBF_U",
        "Score": 0
    },
    {
        "Id": 4,
        "Name": "it was a good day",
        "ArtisteId": 3,
        "AlbumId": 3,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=h4UqMyldS7Q",
        "Score": 0
    },
    {
        "Id": 5,
        "Name": "you know how we do it",
        "ArtisteId": 3,
        "AlbumId": 4,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=HvC96EaQDmU",
        "Score": 0
    },
    {
        "Id": 6,
        "Name": "bohemian rapsody",
        "ArtisteId": 4,
        "AlbumId": 5,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=fJ9rUzIMcZQ",
        "Score": 0
    },
    {
        "Id": 7,
        "Name": "back in black",
        "ArtisteId": 5,
        "AlbumId": 6,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=pAgnJDJN4VA",
        "Score": 0
    },
    {
        "Id": 8,
        "Name": "still loving you",
        "ArtisteId": 6,
        "AlbumId": 7,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=7pOr3dBFAeY",
        "Score": 0
    },
    {
        "Id": 9,
        "Name": "stressed out",
        "ArtisteId": 7,
        "AlbumId": 8,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=pXRviuL6vMY",
        "Score": 0
    },
    {
        "Id": 10,
        "Name": "what a wonderfull world",
        "ArtisteId": 8,
        "AlbumId": 9,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=rBrd_3VMC3c",
        "Score": 0
    },
    {
        "Id": 11,
        "Name": "hit the road jack",
        "ArtisteId": 9,
        "AlbumId": 10,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=SrnWp5O0DEs",
        "Score": 0
    },
    {
        "Id": 1,
        "Name": "whitout me",
        "ArtisteId": 1,
        "AlbumId": 1,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=YVkUvmDQ3HY",
        "Score": 0
    },
    {
        "Id": 2,
        "Name": "superman",
        "ArtisteId": 1,
        "AlbumId": 1,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=lPlePBCS6Ic",
        "Score": 0
    },
    {
        "Id": 3,
        "Name": "shook ones part 2",
        "ArtisteId": 2,
        "AlbumId": 2,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=yoYZf-lBF_U",
        "Score": 0
    },
    {
        "Id": 4,
        "Name": "it was a good day",
        "ArtisteId": 3,
        "AlbumId": 3,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=h4UqMyldS7Q",
        "Score": 0
    },
    {
        "Id": 5,
        "Name": "you know how we do it",
        "ArtisteId": 3,
        "AlbumId": 4,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=HvC96EaQDmU",
        "Score": 0
    },
    {
        "Id": 6,
        "Name": "bohemian rapsody",
        "ArtisteId": 4,
        "AlbumId": 5,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=fJ9rUzIMcZQ",
        "Score": 0
    },
    {
        "Id": 7,
        "Name": "back in black",
        "ArtisteId": 5,
        "AlbumId": 6,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=pAgnJDJN4VA",
        "Score": 0
    },
    {
        "Id": 8,
        "Name": "still loving you",
        "ArtisteId": 6,
        "AlbumId": 7,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=7pOr3dBFAeY",
        "Score": 0
    },
    {
        "Id": 9,
        "Name": "stressed out",
        "ArtisteId": 7,
        "AlbumId": 8,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=pXRviuL6vMY",
        "Score": 0
    },
    {
        "Id": 10,
        "Name": "what a wonderfull world",
        "ArtisteId": 8,
        "AlbumId": 9,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=rBrd_3VMC3c",
        "Score": 0
    },
    {
        "Id": 11,
        "Name": "hit the road jack",
        "ArtisteId": 9,
        "AlbumId": 10,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=SrnWp5O0DEs",
        "Score": 0
    },
    {
        "Id": 1,
        "Name": "whitout me",
        "ArtisteId": 1,
        "AlbumId": 1,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=YVkUvmDQ3HY",
        "Score": 0
    },
    {
        "Id": 2,
        "Name": "superman",
        "ArtisteId": 1,
        "AlbumId": 1,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=lPlePBCS6Ic",
        "Score": 0
    },
    {
        "Id": 3,
        "Name": "shook ones part 2",
        "ArtisteId": 2,
        "AlbumId": 2,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=yoYZf-lBF_U",
        "Score": 0
    },
    {
        "Id": 4,
        "Name": "it was a good day",
        "ArtisteId": 3,
        "AlbumId": 3,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=h4UqMyldS7Q",
        "Score": 0
    },
    {
        "Id": 5,
        "Name": "you know how we do it",
        "ArtisteId": 3,
        "AlbumId": 4,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=HvC96EaQDmU",
        "Score": 0
    },
    {
        "Id": 6,
        "Name": "bohemian rapsody",
        "ArtisteId": 4,
        "AlbumId": 5,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=fJ9rUzIMcZQ",
        "Score": 0
    },
    {
        "Id": 7,
        "Name": "back in black",
        "ArtisteId": 5,
        "AlbumId": 6,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=pAgnJDJN4VA",
        "Score": 0
    },
    {
        "Id": 8,
        "Name": "still loving you",
        "ArtisteId": 6,
        "AlbumId": 7,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=7pOr3dBFAeY",
        "Score": 0
    },
    {
        "Id": 9,
        "Name": "stressed out",
        "ArtisteId": 7,
        "AlbumId": 8,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=pXRviuL6vMY",
        "Score": 0
    },
    {
        "Id": 10,
        "Name": "what a wonderfull world",
        "ArtisteId": 8,
        "AlbumId": 9,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=rBrd_3VMC3c",
        "Score": 0
    },
    {
        "Id": 11,
        "Name": "hit the road jack",
        "ArtisteId": 9,
        "AlbumId": 10,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=SrnWp5O0DEs",
        "Score": 0
    },
    {
        "Id": 1,
        "Name": "whitout me",
        "ArtisteId": 1,
        "AlbumId": 1,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=YVkUvmDQ3HY",
        "Score": 0
    },
    {
        "Id": 2,
        "Name": "superman",
        "ArtisteId": 1,
        "AlbumId": 1,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=lPlePBCS6Ic",
        "Score": 0
    },
    {
        "Id": 3,
        "Name": "shook ones part 2",
        "ArtisteId": 2,
        "AlbumId": 2,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=yoYZf-lBF_U",
        "Score": 0
    },
    {
        "Id": 4,
        "Name": "it was a good day",
        "ArtisteId": 3,
        "AlbumId": 3,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=h4UqMyldS7Q",
        "Score": 0
    },
    {
        "Id": 5,
        "Name": "you know how we do it",
        "ArtisteId": 3,
        "AlbumId": 4,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=HvC96EaQDmU",
        "Score": 0
    },
    {
        "Id": 6,
        "Name": "bohemian rapsody",
        "ArtisteId": 4,
        "AlbumId": 5,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=fJ9rUzIMcZQ",
        "Score": 0
    },
    {
        "Id": 7,
        "Name": "back in black",
        "ArtisteId": 5,
        "AlbumId": 6,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=pAgnJDJN4VA",
        "Score": 0
    },
    {
        "Id": 8,
        "Name": "still loving you",
        "ArtisteId": 6,
        "AlbumId": 7,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=7pOr3dBFAeY",
        "Score": 0
    },
    {
        "Id": 9,
        "Name": "stressed out",
        "ArtisteId": 7,
        "AlbumId": 8,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=pXRviuL6vMY",
        "Score": 0
    },
    {
        "Id": 10,
        "Name": "what a wonderfull world",
        "ArtisteId": 8,
        "AlbumId": 9,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=rBrd_3VMC3c",
        "Score": 0
    },
    {
        "Id": 11,
        "Name": "hit the road jack",
        "ArtisteId": 9,
        "AlbumId": 10,
        "Genre": null,
        "YoutubePath": "https://www.youtube.com/watch?v=SrnWp5O0DEs",
        "Score": 0
    }
];


export default function Music() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredMusic, setFilteredMusic] = useState(MusicData);
  
    useEffect(() => {
      const filtered = MusicData.filter(music =>
        music.Name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredMusic(filtered);
    }, [searchTerm]);
  
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    return (
      <Layout>
        <Header />
        <Box w="full" bg="#0A0F12" minH="100vh">
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            p={6}
          >
            <Heading color="white" fontSize="3xl" mb={8}>
              Parcourir la Musique
            </Heading>
            <Flex align="center" justifyContent="center" w="full" mb={8}>
              <Input
                placeholder="Rechercher musiques, albums, artistes..."
                variant="flushed"
                size="md"
                focusBorderColor="teal.800"
                _placeholder={{ color: 'rgba(255, 255, 255, 0.7)' }}
                onChange={handleSearchChange}
                width="50%" // Augmenter la taille de l'input
              />
            </Flex>
            <SimpleGrid columns={3} spacing={10} w="full">
              {filteredMusic.map((music) => (
                <Flex
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  key={music.Id}
                  bgGradient="linear(to-r, #333333, #1a1a1a)"
                  p={6}
                  borderRadius="lg"
                  boxShadow="xl"
                >
      <img src="/HARMONYLOGO.png" alt="Harmony Icon" width="90" height="90" style={{ marginRight: '8px' }} />
                  <Heading size="md" color="white" mb={2}>{music.Name}</Heading>
                  <NextLink href={`/music/${music.Id}`} passHref>
                    <Text mt={4} as="a" color="teal.400" cursor="pointer">Écouter</Text>
                  </NextLink>
                </Flex>
              ))}
            </SimpleGrid>
          </Flex>
        </Box>
      </Layout>
    );
  }
