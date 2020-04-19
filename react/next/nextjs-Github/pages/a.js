import Link from 'next/link'
import {withRouter} from 'next/router'

const A = ({router,name}) => (
<Link href="#aaa"><a>{router.query.id}{name}</a></Link>
)
A.getInitialProps = async() => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'wn'
      })
    },1000)
  })
  return await promise
}

export default  withRouter(A)