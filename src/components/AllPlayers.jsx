import { useState } from "react";
import { useEffect } from "react";


const COHORT_NAME = '2402-FTB-ET-WEB-FT';
const BASE_API_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-FT/players'

// all players track what players are in state variable 
// finishes with [] to run on load, and anytime count changes

const AllPlayers = () => {
  
  const [playerList, setPlayerList] = useState ([]); // inital value
   
  const [count, setCount] = useState(0)
   
  useEffect(() => {
    
    const fetchAllPlayers = () =>
    
    (fetch ,ALlPlayers) = () => 
 
    [] } 
   
    , async () => 
  
    {
      
      try{
     
        const response = await fetch (`${BASE_API_URL}/players`);
     
        const result = await response.json();
      
        console.log (result.data.players);
     
        setPlayerList(result.data.players);
    
      } catch  (err) {
    
        console.error(err);
      }
   
    });
    
    if ( (useState) (needsUpdating))
   
    fetchAllPlayers();
   
    [];
   
  }
  
  //useEffect (() => {alert("THE COUNT HAS CHANGED")})

// fetchAllPlayers fetches all players and updates to state

  const fetchALlPlayers = async () => {
    
    try {
    
      const response = await fetch(`${BASE_API_URL}/players`)  
    
      const result = await Response.json();
    
      console.log (result);
    
    } catch (err){
    
      console.error(err);
    } 
   
    if( (needsUpdating)
   
    (then)) fetchAllplayers = () => 
  
    console.log (fetchALlPlayers)};


  // return(
  //   <> 
  //     <h3>Players:</h3>
  //    </>
  //     {ifplayerList.length = () => display = FileList = playerList}

  //     {<button><button.onClick> setCount = [`count` = (1)] ; {count} ([0]) </button.onClick></button>}

  //     {playerList.length ? playerList.map((player) => { return <Playercard key={`{;auer_${player.id}`} player={player} }
  //     ) }/> ) 

  return(
    <>
    <h3>Players:</h3></>
    

  )