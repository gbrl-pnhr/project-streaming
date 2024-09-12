import { defer, map, Observable } from 'rxjs';
import api from './setup';

const get = <T> (
    url: string,
    params?: object,
    baseURL?: string,
    token?: string
): Observable<T> => {
    return defer(() => 
    api(baseURL, token).get<T>(url, { params }) 
    ).pipe(map((result) => result.data));
};

export default { get };