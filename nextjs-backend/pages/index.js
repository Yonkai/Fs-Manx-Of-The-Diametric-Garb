// import Layout from '../components/MyLayout.js';
// import Link from 'next/link';

//Functional Component
const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1>Manx Boards</h1>
    <ul>
      <PostLink id="MaskedRoute1" title="Board 1"/>
      <PostLink id="Pikachu" title="Board 2"/>
      <PostLink id="MaskedRoute3" title="Board 3"/>
    </ul>
  </Layout>
)

// import Layout from '../components/MyLayout.js'
// import Link from 'next/link'
// import fetch from 'isomorphic-unfetch'

// const Index = (props) => (
//   <Layout>
//     <h1>Batman TV Shows</h1>
//     <ul>
//       {props.shows.map(({show}) => (
//         <li key={show.id}>
//           <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
//             <a>{show.name}</a>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </Layout>
// )


// //A static async function you can add into any page in your app. 
// //Using this, we can fetch data and send them as props to our page.
// Index.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
//   const data = await res.json()

//   console.log(`Show data fetched. Count: ${data.length}`)

//   return {
//     shows: data
//   }
// }

// export default Index
