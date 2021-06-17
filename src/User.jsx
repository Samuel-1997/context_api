import React, {useContext} from 'react'
import { contex } from './DataCenter'


export default function User(props) {

const {supprime}=useContext(contex)

    return (

<div className="col-3">
<div className="card" style={{width: '18rem'}}>
    <img src={props.data.avatar_url} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{props.data.login}</h5>
      <a target="_blank" href={props.data.html_url} className="btn btn-primary">Cliquez sur le Lien</a>
      <button onClick={() =>supprime(props.data.id)} className="btn btn-danger ">Delete</button>
    </div>
</div>
</div>

    )
}
