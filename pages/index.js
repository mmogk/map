import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Map from '../components/Map'



export default function Home() {
  return (
    <>
      <Head>
        <title>Skytrain Expo Line</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/busicon.png" />
      </Head>
      <img src='https://www.translink.ca/-/media/translink/logos/translink_logo.svg?extension=webp&hash=EBABCEA0317878DD8B014CD42A992F3C' style={{width: '15%', padding: 15}}></img>
      <h1 style={{padding: 15}}>Skytrain Stations - Expo Line</h1>
      <main className={styles.main}>
        <Map/>
      </main>
      <p>The Expo Line operates two routes:</p>
      <ul>
        <li>
        <p>Waterfront Station (Downtown Vancouver) to King George Station (Surrey)</p>
        </li>
        <li>
        <p>Waterfront Station (Downtown Vancouver) to Production Way, University Station (Burnaby)</p>
        </li>
      </ul>
      <br />
      <p>Transfer to the Millennium Line at the following stations:</p>
        <ul>
          <li>
          <p>Commercial, Broadway Station</p>
          </li>
          <li>
          <p>Lougheed Town Centre Station</p>
          </li>
          <li>
          <p>Production Way, University Station</p>
          </li>
        </ul>
        <br />
        <p>Use Columbia Station to transfer to and from a train going to either King George or Production Way–University.</p>
        <p>Use Waterfront Station to transfer to the Canada Line, SeaBus, or West Coast Express.</p>
        <br /><br />
        <div style={{backgroundColor: 'lightblue'}}>
          <div style={{width:'40%', padding:10}}>
          <img src='https://www.translink.ca/-/media/translink/logos/translink_logo.svg?extension=webp&hash=EBABCEA0317878DD8B014CD42A992F3C' style={{width: '30%', paddingLeft: 15}}></img>
            <p>Metro Vancouver&apos;s transportation network, serving residents and visitors with public transit, major roads, bridges and Trip Planning.</p>
          </div>

        </div>
    </>
  )
}