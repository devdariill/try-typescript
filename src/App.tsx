//string
//number
//booblean
//object
//array
//function
//null
//undefined
//void

import Form from "./components/Form";
import TypesComponent from "./components/types";

//never
interface Props {
  name: string;
  lastName: string;
  age: number;
}

// function App(props: Props) {
function App({ name, lastName, age }: Props) {
  // const addYear=(x:number):Array<string>=>[];
  const addYear = (x: number): number => x + 10;
  // return <div>{name + " " + lastName}</div>;
  return (
    <>
    <Form/>
      <TypesComponent />
      <div>{`my name is ${name.toLocaleUpperCase()} ${lastName} and i am 
    ${addYear(age)} years old`}</div>
    </>
  );
}
export default App;
