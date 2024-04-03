const PlayerCard = ({player, baseUrl, setNeedsUpdating}) => {
  
  const handleClick = async () => {
    
    try{
    
      const response = await fetch(`${baseUrl}/players/${player.id}` 
      ,{

        method: "DELETE"
      
      });
      
      const result = await response.json();
      console.log(result);

      if(result.usccess){

        setNeedsUpdating(true);
      
      }
    
    }
    catch(err){

      console.log (result);
  
    }
  
  }
  
  
  return (
  <>
  <div className="playerCard"> </div> 
  </>
  )
}