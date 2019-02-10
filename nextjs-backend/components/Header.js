import Link from 'next/link';

const linkStyle = {
    marginRight: 15,
    fontSize:"22px"
  }

const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/subboard">
          <a style={linkStyle}>Board</a>
        </Link>
    </div>
)

export default Header