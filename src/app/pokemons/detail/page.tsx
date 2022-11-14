import Base from 'templates/Base'
import Heading from 'components/Heading'

type PokeDetail = {
  url: string
}

async function getData(url: string) {
  // This request is made in server side. You won't be able to see in devtools.
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  const res = await fetch(url)
  return res.json()
}

export default async function PokeDetail({ url }: PokeDetail) {
  const data = await getData(url)
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
