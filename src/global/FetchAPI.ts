export const URL = "https://pokeapi.co/api/v2";

export const detailFetcher = (name: string) => async () => {
    const details = await fetch(URL + "/pokemon/" + name)
        .then((res) => res.json());

    const species = await fetch(details.species.url)
        .then((res) => res.json());

    return {...details, names: species.names};
};

export const listFetcher = () => async () => {
    return await fetch(URL + "/pokemon?limit=100&offset=0")
        .then((res) => res.json());
};



