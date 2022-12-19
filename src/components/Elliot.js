import style from '../stylesheets/Elliot.module.css';


export default function Elliot () {

    return (
        <>
            <h1 className={style.page_name}>Elliot's Scrapbook</h1>
            <div className="spacer5"></div>

            <h1 className="title">COOL CIRCLE</h1>
            <div>
                <div className={style.circle}></div>
            </div>
            <p className="blurb">Use classname "circle" and you can copy the CSS from elliot.module.css <br />it plays pretty nicely/works in flow <br />found it online but im not sure where</p>

        </>
    )
}