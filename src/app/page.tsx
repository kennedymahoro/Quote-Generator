import {useQuery} from 'react-query'
export default function Home() {

 function FetchQuote() {
    const {isLoading, data, error} = useQuery("https://api.hamatim.com/quote", ()=> {

    });

  } 

/*
  async function quoteGen() {
    const res = await fetch("https://api.hamatim.com/quote")
    const data = await res.json()
    const quote = data.text;
    const author = data.author;
    const book = data.book;

    console.log(data)
  }

  quoteGen();
  */
  return (
    <main className=" w-screen h-screen">
      <div>Hello World</div>
      <div>{data}</div>
    </main>
  )
}
