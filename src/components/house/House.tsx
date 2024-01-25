import styles from './house.module.css'

interface IHouse {
  name: string
  animal: string
  colors: string[]
  founder: string
}

const House = ({ name, animal, colors, founder }: IHouse) => {
  colors = colors.length ? colors : ['white', 'black']

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardHeaderName}>{name}</h3>
        <p className={styles.cardHeaderLion}>{animal}</p>
      </div>
      <div
        className={styles.ribbon}
        style={{
          background: `linear-gradient(to right, ${colors.join(', ')})`,
        }}
      ></div>
      <div>
        <p className={styles.founderContainer}>
          Founder: <span className={styles.founder}>{founder}</span>
        </p>
      </div>
    </div>
  )
}

export default House
