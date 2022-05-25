/* eslint-disable camelcase */
export type SinglePokemon = {
    name: string
    url: string
    abilities: {
        ability: {
            name: string
        }
    }[]
    id: number
    height: number
    weight: number
    base_experience: number
    moves: {
        move: {
            name: string
            url: string
        }
    }[]
    stats: {
        base_stat: number
        stat: {
            name:string
        }
    }[]
}

export type AllPokemons = {
    count: number
    next: string
    previous: null | string
    results: Pokemon[]
}

export type Pokemon = {
    name: string
    url: string
}
