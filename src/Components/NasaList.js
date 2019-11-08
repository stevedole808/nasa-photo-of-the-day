import React, {useState, useEffect} from "react";
import axios from "axios";
import NasaCard from './NasaCard';
import { Container, Row } from "reactstrap";

export default function NasaList() {
    const [nasa, setNasa] = useState ([]);

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=LDKzXhsnHsjwl11xa5ufzIQ9s5UbRojub4g0e1Dd"
        )
        .then(response => {
            setNasa(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.log("The data was not returned", error);
    })
},[]);

return (
    <Container>
      <Row> 
        <NasaCard nasa={nasa}/>
        {console.log(nasa)}
      </Row>
    </Container>
  );
}
