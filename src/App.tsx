import styles from './app.module.css'
import HouseSection from './components/house-section/HouseSection'

function App() {
  return (
    <div className={styles.appContainer}>
      <h1>Houses</h1>
      <HouseSection />
    </div>
  )
}

export default App
