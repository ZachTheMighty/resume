import General from "./sections/general.jsx";
import Education from "./sections/education.jsx";
import Practical from "./sections/practical.jsx";

export default function GenerateResume({onGenerate}) {
    return (
        <>
        <General />
        <Education />
        <Practical />
<button onClick={onGenerate}>Generate resume</button>
        </>
    );
}
