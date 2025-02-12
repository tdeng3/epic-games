import useData from "./useData";

interface Genre {
    id: number;
    name: string;
}

interface FectchGenresResponse {
    cound: number;
    results: Genre[];
}

const useGenre = () => useData<Genre>('/genres')

export default useGenre