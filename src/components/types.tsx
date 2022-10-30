function TypesComponent() {
    const name ="ronald";
    const age = 30;
    const hasHobbies = true;
    const hobbies = ["sports", "cooking"];
    const points =[100,99,95]
    const table: [string,number] =["game",99]
    return (
        <div>
            <h1>{typeof(name)}</h1>
            <h1>{typeof(age)}</h1>
            <h1>{typeof(hasHobbies)}</h1>
            <h1>{hobbies.map((hobby)=>hobby)}</h1>
            <h1>{points.map((point)=>point)}</h1>
            <h1>{table.map((score)=>score)}</h1>
        </div>
    )
  }
  export default TypesComponent;

  //edit the tsconfig.json file