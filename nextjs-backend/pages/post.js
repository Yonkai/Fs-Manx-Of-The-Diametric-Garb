import {withRouter} from 'next/router';
import Layout from '../components/MyLayout.js';

//withRouter can be used on any component in a next.js application
const Content = withRouter((props) => (
    <div>
      <h1>{props.router.query.title}</h1>
      <p>This is the blog post content.</p>
    </div>
  ))

const Page = (props) => (
    <Layout>
       <Content />
    </Layout>
)

export default Page