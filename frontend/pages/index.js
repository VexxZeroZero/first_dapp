import Head from 'next/head'
import ChangeBG from '../components/ChangeBG'
import getContract from '../utils/getContact';
import { useState } from 'react';

export default function Home(props) {

  const [bgColor, setBgColor] = useState(props.bgColor);

  return <>
    <Head>
      <title>Change background via smart contract</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="container" style={{background:bgColor}}>
      <ChangeBG bgColor={bgColor} setBgColor={setBgColor}/>
    </div>
  </>
}

export async function getServerSideProps(){
  const contract = await getContract();
  const bgColor = await contract.color(); 

  return {
      props: {bgColor:bgColor},
  }
}