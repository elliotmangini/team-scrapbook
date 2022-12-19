import style from '../stylesheets/Nessa.module.css';


export default function Nessa () {

    return (
        <>
            <h1 className={style.page_name}>Nessa's Scrapbook</h1>
            <div className="spacer5"></div>

            <h1 className="title">Example "Post"</h1>
            <div>
                Put Shit In Here
            </div>
            <p className="blurb">Short blurb about this scrapbook entry.</p>
        </>
    )
}