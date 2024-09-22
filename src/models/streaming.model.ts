export class Streaming {
    constructor(
        public id?: number,
        public name?: string,
        public title?: string, 
        public videos?: Videos,
        public popularity?: number,
        public adult?: boolean,
        public backdrop_path?: string,
        public overview?: string,
        public poster_path?: string,
        public media_type?: string,
        public release_date?: string,
        public first_air_date?: string,
        public runtime?: number,
        public number_of_episodes?: number,
        public number_of_seasons?: number,
        public genre_ids?: number[],
    ) {}
}

export class Videos {
    constructor(
        public results: [
            {
                name_video?: string,
                key?: string,
                type?: string,
            }
        ]
    ) {}
}