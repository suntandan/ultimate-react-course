import styles from './Map.module.css'
import SideBar from './SideBar'
import Map from './Map'

function Map() {
  return (
    <div className={styles.mapContainer}>
      <SideBar />
      <Map />
    </div>
  )
}

export default Map


