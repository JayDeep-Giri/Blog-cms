import Header from '@/app/components/Header'
import Link from 'next/link'

const Notfound = () => {
  return (
    <div>
        <Header title='404 - Page Not Found' />
        <div>
            <Link href='/'>Return Home</Link>
        </div>
    </div>
  )
}

export default Notfound