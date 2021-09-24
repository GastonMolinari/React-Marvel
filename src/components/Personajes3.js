import React,{useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


//public key: 7259dfc17fbc60139f991fd2c2fab763
//private key: 5dfb08362a5377cdc86065151cee224ea4884636
//ts 1
// ts+privatekey+publickey
// 15dfb08362a5377cdc86065151cee224ea48846367259dfc17fbc60139f991fd2c2fab763
//hash 79b5faa956605d8c2cbda68b11ebf3a7
// https://gateway.marvel.com/v1/public/series/22547/characters?ts=1&limit=10&offset=20&apikey=7259dfc17fbc60139f991fd2c2fab763&hash=79b5faa956605d8c2cbda68b11ebf3a7
function Personajes3() {
    const [personajes, setPersonajes] = useState([])

    useEffect(()=>{
        axios.get('https://gateway.marvel.com/v1/public/series/22547/characters?ts=1&limit=10&offset=20&apikey=7259dfc17fbc60139f991fd2c2fab763&hash=79b5faa956605d8c2cbda68b11ebf3a7')
        .then(res=>[
            setPersonajes(res.data.data.results)
        ]).catch(error=>console.log(error))
    },[])

console.log(personajes);

    return(
        <>
        <div className='personajes-div'>

        <h1 style={{margin: "0px", paddingTop: "50px", paddingBlock: "50px", display: "flex", justifyContent: "center", color: "white"}}> Los heroes mas poderosos del planeta </h1>

        <div className="row row-cols-1 row-cols-md-3 g-4" style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", marginLeft: "2%"}}>

        {
             personajes.map(per => {
                    console.log();
                    return(
                    
                    <div className="col">
                        

            <div className="card" style={{width: "15rem", height: "15rem"}}>

                <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`} className="card-img-top" alt="..." />
                <div className="card-body">
                <p className="card-text">{per.name}</p>

            </div>
            </div>
            </div>
            )
                    
                })
        }

        
        </div>
        </div>
        <div style={{textAlign: "center"}}>
            <Link to="/personajes" className="personajes-link1">1</Link>
            <Link to="/personajes1" className="personajes-link1">2</Link>
            <Link to="/personajes2" className="personajes-link1">3</Link>
        </div>
        </>
    )
}

export default Personajes3