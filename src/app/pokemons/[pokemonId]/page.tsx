// import { usePathname } from 'next/navigation'

import Base from 'templates/Base'
import Heading from 'components/Heading'

async function getData(id: number) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  return res.json()
}

export default async function PokemonDetail() {
  // const pathname = usePathname() || ''
  // const pokemonId = pathname[pathname?.length - 1]

  const data = await getData(1)
  console.log(data)

  return (
    <Base>
      <Heading color="black" size="small" lineLeft lineColor="secondary">
        {data.name}
      </Heading>
      <div>details</div>
    </Base>
  )
}
