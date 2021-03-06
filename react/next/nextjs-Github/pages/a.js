import Link from 'next/link'
import {withRouter} from 'next/router'
import styled from 'styled-components'

const Title = styled.h1 `
  color: yellow;
  font-size:40px;
`

const A = ({router,name}) => (
  <>
    <Title>This is Title</Title>
    <Link href="#aaa">
      <a>{router.query.id}{name}</a>
    </Link>

    <style jsx>{`
      a {
        color: blue;
      }
      `}</style>
    <style jsx global>{`
      a {
        color: red;
      }
      `}</style>
  </>
)
A.getInitialProps = async(ctx) => {

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