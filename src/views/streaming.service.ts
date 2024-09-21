import type { QueryParams } from "@/models/query-params.model";
import { StreamingRest } from "@/services/rest/streaming.rest";
import { BehaviorSubject, Observable, take } from "rxjs";

export class StreamingService{
    constructor(
        private _streamings = new StreamingRest() 
    ) {}

    private streaming$: BehaviorSubject<any> = new BehaviorSubject<any>([]);

    streamings: Observable<any> = this.streaming$.asObservable();
    
    getAllStreamings(query: QueryParams): void {
        this._streamings.getAll(query)
            .pipe(take(1))
            .subscribe({
                next: (response) => {
                    this.streaming$.next(response);
                }
            });
    }

    getMovies(query: QueryParams): void {
        this._streamings.getMovies(query)
            .pipe(take(1))
            .subscribe({
                next: (response) => {
                    this.streaming$.next(response);
                }
            });
    }

    getSeries(query: QueryParams): void {
        this._streamings.getSeries(query)
            .pipe(take(1))
            .subscribe({
                next: (response) => {
                    this.streaming$.next(response);
                }
            });
    }
}