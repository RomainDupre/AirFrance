import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IPassagerDto, Passager } from '../models/passager.model';

@Injectable({
  providedIn: 'root'
})
export class PassagerService {

  constructor(private http: HttpClient) { }

  /**
   * Récupération de la liste des vols en départ d'un aéroport donné en paramètre et selon un intervalle de temps donné.
   * Open Sky REST API
   * https://openskynetwork.github.io/opensky-api/rest.html#departures-by-airport
   */
  getPassagers(icao: string): Observable<any[]> {
    return this.http.get<any>('https://randomuser.me/api?results=20&inc=name,picture,email&seed='+icao)
  }
}
 /**
  *
  * {
    "results": [
        {
            "name": {
                "title": "Mrs",
                "first": "Britney",
                "last": "Reid"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/48.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/48.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/48.jpg"
            }
        },
        {
            "name": {
                "title": "Mr",
                "first": "Magnus",
                "last": "Christiansen"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/82.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/82.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/82.jpg"
            }
        },
        {
            "name": {
                "title": "Mr",
                "first": "Blagoje",
                "last": "Nenezić"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/79.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/79.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/79.jpg"
            }
        },
        {
            "name": {
                "title": "Mrs",
                "first": "Clara",
                "last": "Lévesque"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/39.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/39.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/39.jpg"
            }
        },
        {
            "name": {
                "title": "Miss",
                "first": "پارمیس",
                "last": "صدر"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/37.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/37.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/37.jpg"
            }
        },
        {
            "name": {
                "title": "Ms",
                "first": "Tatolyuba",
                "last": "Sergiienko"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/89.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/89.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/89.jpg"
            }
        },
        {
            "name": {
                "title": "Ms",
                "first": "Yasemin",
                "last": "Kılıççı"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/13.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/13.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/13.jpg"
            }
        },
        {
            "name": {
                "title": "Ms",
                "first": "Nalan",
                "last": "Özkara"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/11.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/11.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/11.jpg"
            }
        },
        {
            "name": {
                "title": "Mrs",
                "first": "Aracema",
                "last": "da Costa"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/80.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/80.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/80.jpg"
            }
        },
        {
            "name": {
                "title": "Mr",
                "first": "Jayden",
                "last": "Lavoie"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/11.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/11.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/11.jpg"
            }
        },
        {
            "name": {
                "title": "Mrs",
                "first": "فاطمه زهرا",
                "last": "سالاری"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/38.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/38.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/38.jpg"
            }
        },
        {
            "name": {
                "title": "Ms",
                "first": "Ava",
                "last": "Nicolas"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/89.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/89.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/89.jpg"
            }
        },
        {
            "name": {
                "title": "Mr",
                "first": "Aleksi",
                "last": "Keranen"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/71.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/71.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/71.jpg"
            }
        },
        {
            "name": {
                "title": "Miss",
                "first": "Mathilde",
                "last": "Petersen"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/42.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/42.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/42.jpg"
            }
        },
        {
            "name": {
                "title": "Ms",
                "first": "Asha",
                "last": "Rajesh"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/82.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/82.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/82.jpg"
            }
        },
        {
            "name": {
                "title": "Mrs",
                "first": "آوا",
                "last": "پارسا"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/85.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/85.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/85.jpg"
            }
        },
        {
            "name": {
                "title": "Mrs",
                "first": "Méline",
                "last": "Gonzalez"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/70.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/70.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/70.jpg"
            }
        },
        {
            "name": {
                "title": "Miss",
                "first": "Mia",
                "last": "Jean-Baptiste"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/55.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/55.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/55.jpg"
            }
        },
        {
            "name": {
                "title": "Mr",
                "first": "Darrell",
                "last": "Dean"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/76.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/76.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/76.jpg"
            }
        },
        {
            "name": {
                "title": "Mr",
                "first": "Théodore",
                "last": "Rolland"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/87.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/87.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/87.jpg"
            }
        }
    ],
    "info": {
        "seed": "${icao}",
        "results": 20,
        "page": 1,
        "version": "1.4"
    }
}
  */