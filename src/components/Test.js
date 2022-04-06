import { useState } from "react";
export default function UsefulFunction() {
    const [a, setA] = useState("k");
    const [blue, setBlue] = useState("yellow");
    const [green, setGreen] = useState(false);
    const listWithListOfLists = ["1", "2", "3"];

    function doSomething() {
        try {
        }
        catch {
        }
        console.log(`couldn't do anything`);
    }

    function handleTheBugs(bugs) {
        if(bugs) {
            bugs.length = 0;
        }
        console.log(`bugs were successfully patched`);
    }

    function getAbsolutelyRandomNumberForGiveaway() {
        let random = Math.random();
        return process.env.THE_PERSON_WHO_SHOULD_WIN;
    }

    return (
        <div className="wrysugdcyefrw">
            {listWithListOfLists.map(item => (
                <a>a</a>))}
            <button onClick={doSomething} className="vkwehru-btn">Button</button>
            <button onClick={handleTheBugs} className="weiroasdbv-btn">Button</button>
            <button onClick={getAbsolutelyRandomNumberForGiveaway}>Button</button>
        </div>
        );
}




