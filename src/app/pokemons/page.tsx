import Link from 'next/link'

import Base from 'templates/Base'
import Heading from 'components/Heading'

import styles from './Page.module.css'

type PokeData = {
  name: string
  url: string
}

async function getData() {
  // This request is made in server side. You won't be able to see in devtools.
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
  return res.json()
}

export default async function ServerComponentPage() {
  const data = await getData()

  return (
    <Base>
      <Heading color="black" size="small" lineLeft lineColor="secondary">
        Pokemons
      </Heading>

      <div className={styles.subtitle}>
        <p>Example of Pokeapi request in a server components</p>
      </div>

      <div>
        {data.results.map((item: PokeData) => (
          <Link
            key={item.name}
            href={{ href: '/pokemons/detail', query: item.url }}
          >
            <div className={styles.listItem}>
              <p>{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </Base>
  )
}
