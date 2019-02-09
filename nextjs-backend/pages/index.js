// This is the Link API
import Link from 'next/link'

const Index = () => (
  <div>
    <Link href="/subboard">
      <a>Access boards</a>
    </Link>
  </div>
)

export default Index