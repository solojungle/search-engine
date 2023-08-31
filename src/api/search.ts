export async function searchVideos(query: string) {
    const URL = `${process.env.NEXT_PUBLIC_SEARCH_ENGINE_API_BASE_URL}search?query=${query}`;
    try {
        const res = await fetch(URL);
        const data = await res.json();

        return data;
    } catch (err) {
        console.log(err);
    }
}