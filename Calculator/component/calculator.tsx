import { useState } from "react"
export default function Calculator() {
    const ans = () => { try { setvalue(eval(value)) } catch (error) { alert("error") } }
    const clear = () => { try { setvalue("") } catch (error) { alert("error") } }
    const [value, setvalue] = useState("0")

    return (
        <div className="container text-center bg-info">

            <input className="p-4 mt-2" type="text" value={value} id="inputField" title="Enter your value" placeholder="Enter your value" />
            <br />
            <input className="p-3 mx-3 mt-2" type="button" value="1" onClick={(e) => setvalue(value + (e.target as HTMLInputElement).value)} />
            <input className="p-3 mx-3 mt-2" type="button" value="2" onClick={(e) => setvalue(value + (e.target as HTMLInputElement).value)} />
            <input className="p-3 mx-3 mt-2" type="button" value="3" onClick={(e) => setvalue(value + (e.target as HTMLInputElement).value)} />
            <input className="p-3 mx-3 mt-2" type="button" value="4" onClick={(e) => setvalue(value + (e.target as HTMLInputElement).value)} />
            <input className="p-3 mx-3 mt-2" type="button" value="5" onClick={(e) => setvalue(value + (e.target as HTMLInputElement).value)} />
            <br />
            <input className="p-3 mx-3 mt-2" type="button" value="6" onClick={(e) => setvalue(value + (e.target as HTMLInputElement).value)} />
            <input className="p-3 mx-3 mt-2" type="button" value="7" onClick={(e) => setvalue(value + (e.target as HTMLInputElement).value)} />
            <input className="p-3 mx-3 mt-2" type="button" value="8" onClick={(e) => setvalue(value + (e.target as HTMLInputElement).value)} />
            <input className="p-3 mx-3 mt-2" type="button" value="9" onClick={(e) => setvalue(value + (e.target as HTMLInputElement).value)} />
            <input className="p-3 mx-3 mt-2" type="button" value="0" onClick={(e) => setvalue(value + (e.target as HTMLInputElement).value)} />
            <br />
            <input className="p-3 mx-3 mt-2" type="button" value="+" onClick={(e) => setvalue(value + (e.target as HTMLInputElement).value)} />
            <input className="p-3 mx-3 mt-2" type="button" value="-" onClick={(e) => setvalue(value + (e.target as HTMLInputElement).value)} />
            <input className="p-3 mx-3 mt-2" type="button" value="*" onClick={(e) => setvalue(value + (e.target as HTMLInputElement).value)} />
            <input className="p-3 mx-3 mt-2" type="button" value="/" onClick={(e) => setvalue(value + (e.target as HTMLInputElement).value)} />
            <input className="p-3 mx-3 mt-2" type="button" value="%" onClick={(e) => setvalue(value + (e.target as HTMLInputElement).value)} />
            <br />

            <input className="p-3 mx-3 mt-2 mb-2" type="button" value="." onClick={(e) => setvalue(value + (e.target as HTMLInputElement).value)} />
            <input className="p-3 mx-3 mt-2" type="button" value="%" onClick={(e) => setvalue(value + (e.target as HTMLInputElement).value)} />
            <input className="p-3 mx-3 mt-2" type="button" value="=" onClick={() => ans()} />
            <input className="p-3 mx-3 mt-2" type="button" value="AC" onClick={() => clear()} />

        </div>
    )
}
