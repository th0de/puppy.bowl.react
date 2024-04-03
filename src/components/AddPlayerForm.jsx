import { useState } from "react";

const AddPlayerForm = () => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState ("");
  const [imageUrl, setImageUrl] = useState("");


  const postPlayer = async () => {
    try{
      // use fetch to make a POST request to the API
      const response = await fetch(baseUrl, {
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify ({
          name: name,
          breed: breed,
          imageUrl :imageUrl
        })
   
      });
      const result = await response.json();
      console.log(result);
      setName("");
      setBreed("")
      setImageUrl("")
      if (result.success){
      }
    } catch (err) {
      console.log(err);
    }
  };

 }
  const handleSubmit = (e) => {
    e.preventDefault();
    postPlayer();
 }


  return (
    <>
    <h3>Add Player:</h3>
   {/* form that takes in a name, breed, probably some other things*/}
   <form onSubmit={handleSubmit}>
    <label>
      Puppy Name:
      <input 
      type="text" 
      id="name" 
      value={name} 
      onChange={(e) => setName(e.target.value)}>
      </input> 
    </label>
    <label>
      Puppy Breed:
      <input 
      type="submit" 
      value="AddPuppy">
      </input>
    </label>
   </form>
  </>
);

export default AddPlayerForm

