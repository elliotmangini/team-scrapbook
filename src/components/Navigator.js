import { Link } from 'react-router-dom';

export default function Navigator ({targetRoute, setTargetRoute}) {

    function navigate (target) {
        setTargetRoute(target);
        console.log("click");
    }

    return (
        <>
        <div className="spacer5"></div>
        <div className="spacer5"></div>
        <Link to="/Elliot">Elliot's Scraps</Link>
        <br />
        <br />
        <br />
        <Link to="/Nessa">Nessa's Scraps</Link>
        </>
    )
}