import Comp from '../components/comp'
import {withRouter} from 'next/router'

const A = ({router}) => <Comp>{router.query.id}</Comp>

export default  withRouter(A)