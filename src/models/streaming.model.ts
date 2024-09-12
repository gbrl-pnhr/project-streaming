export class Streamings {
    constructor(
        public id?: number,
        public name?: string,
        public title?: string, 
        public adult?: boolean,
        public media_type?: string,
        public videos?: Videos,
        public backdrop_path?: string,
        public poster_path?: string,
        public popularity?: number,
        public release_date?: string,
        public overview?: string,
        public first_air_date?: string,
        public genre_ids?: number[],
        public number_of_episodes?: number,
        public number_of_seasons?: number,
        public runtime?: number,
    ) {}
}

class Videos {
    constructor(
        public results: [
            {
                name_video?: string,
                type?: string,
                key?: string,
            }
        ]
    ) {}
}