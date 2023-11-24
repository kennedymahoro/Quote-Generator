export default function Home() {

  async function quoteGen() {
    const res = await fetch("https://api.hamatim.com/quote")
    const data = await res.json()
    const quote = data.text;
    const author = data.author;
    const book = data.book;

    <div> {quote} </div>
    console.log(data)
  }
  quoteGen();
  return (
  <main className=" w-screen h-screen">
    <div>Hello World</div>
    </main>
  )
}
