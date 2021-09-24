import React,{useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//https://gateway.marvel.com:443/v1/public/comics?limit=10&apikey=7259dfc17fbc60139f991fd2c2fab763 Api
//public key: 7259dfc17fbc60139f991fd2c2fab763
//private key: 5dfb08362a5377cdc86065151cee224ea4884636
//ts 1
// ts+privatekey+publickey
// 15dfb08362a5377cdc86065151cee224ea48846367259dfc17fbc60139f991fd2c2fab763
//hash 79b5faa956605d8c2cbda68b11ebf3a7
// https://gateway.marvel.com/v1/public/comics?limit=10&offset=20&ts=1&apikey=7259dfc17fbc60139f991fd2c2fab763&hash=79b5faa956605d8c2cbda68b11ebf3a7

function Comics3() {
    const [comics, setComics] = useState([])

    useEffect(()=>{
        axios.get('https://gateway.marvel.com/v1/public/comics?limit=10&offset=20&ts=1&apikey=7259dfc17fbc60139f991fd2c2fab763&hash=79b5faa956605d8c2cbda68b11ebf3a7')
        .then(res=>[
            setComics(res.data.data.results)
        ]).catch(error=>console.log(error))
    },[])

console.log(comics);

    return(
        <>
        <div className='personajes-div'>

        <h1 style={{margin: "0px", paddingTop: "50px", paddingBlock: "50px", display: "flex", justifyContent: "center", color: "white"}}> Los heroes mas poderosos del planeta </h1>

        <div className="row row-cols-1 row-cols-md-3 g-4" style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", marginLeft: "2%"}}>

        {
             comics.map(per => {
                    console.log();
                    return(
                    
                    <div className="col">
                        

            <div className="card-comic" style={{width: "15rem", height: "15rem"}}>

                <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`} className="card-img-top" alt="..." />
                <div className="card-body">
                <p className="card-text-comic" style={{fontSize: "13px", textAlign: "center"}}>{per.title}</p>

            </div>
            </div>
            </div>
            )
                    
                })
        }

        
        </div>
        </div>
        <div style={{textAlign: "center"}}>
            <Link to="/comics" className="personajes-link1">1</Link>
            <Link to="/comics1" className="personajes-link1">2</Link>
            <Link to="/comics2" className="personajes-link1">3</Link>
        </div>
        </>
    )
}

export default Comics3