import Header from 'components/Header'

import styles from './Base.module.css'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <div className={styles.wrapper}>
    <Header />
    <main className={styles.main}>
      <section className={styles.section}>{children}</section>
    </main>
  </div>
)

export default Base
