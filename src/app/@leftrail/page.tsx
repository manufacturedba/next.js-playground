export default async function LeftRail() {
   let data = await fetch('http://localhost:3000/api/counter')
   let json = await data.json()

   return (
    <div>
      Left Rail
      {json.requestCount}
     </div>
    );
  }