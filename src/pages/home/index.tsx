
import { Link as ReactRouterLink } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";



// interface Params {
//   exerciseName: string;
// }
function teste(){
    console.log('cliquei nele inacinho')
}

export const Home = () => {
  return (
  <>
        {/* <Button onClick={teste} buttonfilled='true'>Pessoa Usuária</Button> */}
  {/* <span style={{marginLeft: '32px'}}>
  <Button  onClick={teste} >Profissional</Button>
  </span> */}

  </>
  );
};
