import Base from 'templates/Base'
import Heading from 'components/Heading'

async function getData() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return res.json()
}

export default async function ServerComponentPage() {
  const values = await getData()

  return (
    <Base>
      <Heading color="black" size="small" lineLeft lineColor="secondary">
        Server Component
      </Heading>
    </Base>
  )
}
