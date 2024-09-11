import Head from "next/head";
import Heading from "./heading";
export default function page(){
const a = 5;
const b = 10;

return(
    <main>
    <Heading />
    <p>DEMO for web2</p>
    <p>{a} + {b} = {a + b}</p>
    </main>
)
}