import { useHouses } from '../../hooks/useHouses'
import House from '../house/House'
import styles from './house-section.module.css'

const HouseSection = () => {
  const { houses, loading, error, retry } = useHouses()

  const getColors = (houseColors: string): string[] => {
    return houseColors.split('and').map((color) => color.trim())
  }

  if (loading) {
    return (
      <div className={styles.loaderErrorContainer}>
        <div className={styles.loader}></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.loaderErrorContainer}>
        <h3>{error}</h3>
        <button onClick={() => retry()}>Retry</button>
      </div>
    )
  }

  return (
    <div className={styles.houseSection}>
      {houses.map((singleHouse) => {
        return (
          <House
            key={singleHouse.id}
            name={singleHouse.name}
            animal={singleHouse.animal}
            colors={getColors(singleHouse.houseColours)}
            founder={singleHouse.founder}
          />
        )
      })}
    </div>
  )
}

export default HouseSection
