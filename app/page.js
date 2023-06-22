'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function Home() {
  const apple =  (item) =>{
    alert(item)
  }
  const route = useRouter()
  return (
    <main >
    <h1>Event Function and State</h1>
    <button onClick={()=>apple('mango')}>Click me year</button>
    <Link href='/about'>Route</Link>
    <Link href='/about/about1'>Route1</Link>
    <Link href='/about/about2'>Route2</Link>

    <br />
    <br />  
    <button onClick={() => route.push('/about')}>go to</button>

    <br />
    <br />
    <br />
    <br />
    <Link href='/blog'><button>with link</button></Link>

    <br />
    <br />
    <br />
    <br />

    </main> 
  );
}




