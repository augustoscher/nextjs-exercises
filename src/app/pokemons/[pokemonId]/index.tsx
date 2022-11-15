import { useRouter } from 'next/router'

import Base from 'templates/Base'
import Heading from 'components/Heading'

async function getData(id: number) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  return res.json()
}

export default async function PokemonDetail() {
  const router = useRouter()
  const { pokemonId } = router.query
  console.log(pokemonId)

  const data = await getData(1)
  console.log(data)

  return (
    <Base>
      <Heading color="black" size="small" lineLeft lineColor="secondary">
        Name of the Pokemon
      </Heading>
      <div>details</div>
    </Base>
  )
}
