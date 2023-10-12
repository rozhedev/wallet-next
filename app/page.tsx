import Image from 'next/image'
import styles from './page.module.css';
import {assetsTableItem} from "../types/assets"

export default function Home() {
    console.log(assetsTableItem);
  return (
    <h1>Start dev</h1>
  )
}
