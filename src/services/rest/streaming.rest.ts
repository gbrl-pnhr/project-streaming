import type { QueryParams } from '@/models/queryParams.model';
import api from '@/services/api-config/rxjs-config';
import type { Observable } from 'rxjs';

export class StreamingRest {
    getAll(params: QueryParams): Observable<any> {
        const url: string = `/trending/all/day?page=${ params.page || 1 }&language=pt-BR`;
        return api.get(url);
    }

    getMovies(params: QueryParams): Observable<any> {
        const url: string = `/trending/movie/day?page=${ params.page || 1 }&language=pt-BR`;
        return api.get(url);
    }

    getSeries(params: QueryParams): Observable<any> {
        const url: string = `/trending/tv/day?page=${ params.page || 1 }&language=pt-BR`;
        return api.get(url);
    }

    getDetails(params: QueryParams): Observable<any> {
        const url: string = `/${ params.mediaType }/${ params.id }?append_to_response=videos`;
        return api.get(url);
    }
}