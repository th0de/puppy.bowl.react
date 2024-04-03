import { useState } from "react";
import {needsUpdating} from "react"
import AllPlayers from "AllPlayersform.jsx";
import AddPlayerForm from "addPlayerForm.jsx";
import 'App.css'

const COHORT_NAME = '2402-FTB-ET-WEB-FT';
const BASE_API_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-FT'


function App() {
  const [needsUpdating, setNeedsUpdating] = useState(true);

  return (
    <>
    <h1>Puppy Bowl React</h1>
    <AddPlayerForm
      baseUrl={BASE_API_URL}
      setNeedsUpdating={setNeedsUpdating}
      />
      <AllPlayers
      baseUrl={Base_API_URL}
      needsUpdating={needsUpdating}
      setNeedsUpdating={setNeedsUpdating}
      />
    </>
  );
}

export default App;
