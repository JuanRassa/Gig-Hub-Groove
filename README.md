# Gig Hub Groove

## Description

Gig Hub Groove is an application created for people who endorse concerts and festivals. With Gig Hub Groove you can discover trendy events in your location, create a list of events that you want to go and be always aware of what is happening around you. More over, you can learn more about your favorite bands and discover new ones based on the genre that you enjoy.

## Data

### Event

```
"id": Number
"type": String
"name": String
"geoCountryIso2": String
"geoCityName": String
"start-date": String
"end-date": String
"location": {
  "type": String enum[venue, arena, stadium, theater, club]
  "name": String
  "capacity": Number
  "postalAddress": String
}
"performer": [
  {
    "name": String,
    "geoCountryIso2": String,
    "urlImage": String,
    "genre": String[],
    "url": String
  }
]
"urlImage": String
"description": String
```

### Artist

```
"id": Number
"name": String,
"geoCountryIso2": String,
"urlImage": String,
"genre": String[],
"url": String
```

### Users

```
"id": Number
"username": String
"password": String
"favorites": FestivalId[]
```

## APIs

- [Jam Base](https://apidocs.jambase.com/)
- [Spotify (TBC)](https://developer.spotify.com/)

## Packages

- React
- Vite
- Axios
- Material UI

## Links

### Git

#### Front End: [Gig Hub Groove](https://github.com/JuanRassa/Gig-Hub-Groove)

#### Back End: [Gig Hub Independent](https://github.com/JuanRassa/Gig-Hub-Independent)

#### Deploy Link: TBC

## Contributors

- Yane Ully Martins - [YaneUlly](https://github.com/YaneUlly) - [Linkedin](https://www.linkedin.com/in/yane-ully-martins-76691496/)
- Juan Manuel Rassa Sterling - [JuanRassa](https://github.com/JuanRassa) - [Linkedin](https://www.linkedin.com/in/juanrassasterling/)
