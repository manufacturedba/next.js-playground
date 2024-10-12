import Link from "next/link";

export default async function Navbar() {
   let data = await fetch('http://localhost:3000/api/counter');
   let json = await data.json(); 
    return (
     <div>
        Navbar
        {json.requestCount}
        
        <nav>
         <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/pageOne">Page 1</Link>
            </li>
            <li>
                <Link href="/pageTwo">Page 2</Link>
            </li>
         </ul>
        </nav>
     </div>
    );
  }