import React,{useState, useEffect} from "react";
import axios from "axios";

//https://gateway.marvel.com:443/v1/public/comics/66594/characters?limit=10&apikey=7259dfc17fbc60139f991fd2c2fab763 Api
//public key: 7259dfc17fbc60139f991fd2c2fab763
//private key: 5dfb08362a5377cdc86065151cee224ea4884636
//ts 1
// ts+privatekey+publickey
// 15dfb08362a5377cdc86065151cee224ea48846367259dfc17fbc60139f991fd2c2fab763
//hash 79b5faa956605d8c2cbda68b11ebf3a7
// https://gateway.marvel.com:443/v1/public/comics/66594/characters?limit=10&?ts=1&apikey=7259dfc17fbc60139f991fd2c2fab763&hash=79b5faa956605d8c2cbda68b11ebf3a7

function Personajes() {
    const [personajes, setPersonajes] = useState([])

    useEffect(()=>{
        axios.get('https://gateway.marvel.com/v1/public/series/22547/characters?ts=1&limit=10&apikey=7259dfc17fbc60139f991fd2c2fab763&hash=79b5faa956605d8c2cbda68b11ebf3a7')
        .then(res=>[
            setPersonajes(res.data.data.results)
        ]).catch(error=>console.log(error))
    },[])

console.log(personajes);

    return(
        <>
        <div className='personajes-div'>



        <div className="row row-cols-1 row-cols-md-3 g-4" style={{display: "flex", flexWrap: "wrap"}}>

        {
             personajes.map(per => {
                    console.log();
                    return(
                    <div className="col">

            <div className="card" style={{width: "18rem", height: "18rem"}}>

                <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`} className="card-img-top" alt="..." />
                <div className="card-body">
                <p className="card-text">{per.name}</p>

            </div>
            </div>
            </div>)
                    
                })
        }

        
        </div>
        </div>
        </>
    )
}

export default Personajes