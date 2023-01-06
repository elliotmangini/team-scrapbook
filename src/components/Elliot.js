import style from '../stylesheets/Elliot.module.css';


export default function Elliot () {

    return (
        <>
            <h1 className={style.page_name}>Elliot's Scrapbook</h1>
            <div className="spacer5"></div>


            <>
                <h1 className={style.post_name}>COOL CIRCLE</h1>
                <div>
                    <div className={style.circle}></div>
                </div>
                <p className="blurb">Use classname "circle" and you can copy the CSS from elliot.module.css <br />it plays pretty nicely/works in flow <br />found it online but im not sure where</p>
            </>

            <div className="spacer5"></div>

            <>
                <h1 className={style.post_name}>Faded Scrolls</h1>
                <div>
                <div className={style.outer_fade_container}>
                        <div className={style.inner_fade_container}>
                            <div className={style.content_container}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas tellus rutrum tellus pellentesque. Lobortis mattis aliquam faucibus purus. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Id volutpat lacus laoreet non curabitur. Tincidunt ornare massa eget egestas purus viverra accumsan in. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Id donec ultrices tincidunt arcu. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Habitant morbi tristique senectus et netus et malesuada. Massa placerat duis ultricies lacus sed turpis tincidunt id. Nunc pulvinar sapien et ligula ullamcorper. In hac habitasse platea dictumst quisque.
                                <br />
                                Nulla facilisi morbi tempus iaculis. Elementum pulvinar etiam non quam lacus suspendisse. Sapien et ligula ullamcorper malesuada proin libero nunc. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Enim blandit volutpat maecenas volutpat blandit. Varius duis at consectetur lorem donec massa. Consequat nisl vel pretium lectus quam id. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Pharetra massa massa ultricies mi. Nulla malesuada pellentesque elit eget gravida.
                                <br />
                                Feugiat vivamus at augue eget arcu dictum. Adipiscing elit pellentesque habitant morbi tristique. Non blandit massa enim nec dui. Cursus euismod quis viverra nibh cras pulvinar. Nullam non nisi est sit. Porttitor rhoncus dolor purus non enim praesent elementum facilisis. Maecenas ultricies mi eget mauris pharetra et. Commodo ullamcorper a lacus vestibulum sed. Lobortis elementum nibh tellus molestie nunc. Amet facilisis magna etiam tempor orci eu lobortis elementum nibh. Id leo in vitae turpis massa sed. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Nulla at volutpat diam ut venenatis tellus in metus vulputate. Sagittis nisl rhoncus mattis rhoncus urna neque. In mollis nunc sed id. Urna condimentum mattis pellentesque id nibh tortor. Dui accumsan sit amet nulla facilisi morbi. Nec feugiat nisl pretium fusce id velit ut tortor pretium. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus.
                                <br />
                                Nibh sit amet commodo nulla. Neque sodales ut etiam sit amet nisl purus in. Ornare quam viverra orci sagittis eu volutpat odio facilisis mauris. Habitant morbi tristique senectus et. Molestie at elementum eu facilisis sed. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Vulputate enim nulla aliquet porttitor lacus luctus accumsan. Non consectetur a erat nam at lectus. Cursus metus aliquam eleifend mi in. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Elit ut aliquam purus sit amet luctus. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare.
                                <br />
                                Egestas erat imperdiet sed euismod nisi porta lorem. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Orci nulla pellentesque dignissim enim. Pellentesque adipiscing commodo elit at imperdiet. Felis bibendum ut tristique et. Commodo elit at imperdiet dui accumsan sit amet. Ornare arcu dui vivamus arcu felis bibendum ut. Enim facilisis gravida neque convallis. Nunc eget lorem dolor sed. A condimentum vitae sapien pellentesque habitant. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. At tellus at urna condimentum mattis pellentesque id. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Senectus et netus et malesuada fames ac turpis egestas sed. Arcu dictum varius duis at consectetur lorem donec massa. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Eu mi bibendum neque egestas congue quisque. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Felis eget velit aliquet sagittis id consectetur.
                            </div>
                        </div>
                </div>

                    
                </div>

                <br />
                <p>
                    1) Put CSS mask-image using transparency on a content_container
                    <br />
                    <br />
                    2) Put a container inside it, and set the bounds with height and width.
                    <br />
                    <br />
                    3) Put a container inside that, which holds the content, and has margin or padding such that<br />
                    the content starts visible and then scrolls into the upper faded out zone.
                    <br />
                    <br />
                    CSS is annotated! Peep it.
                </p>
            </>

            <div className="spacer5"></div>

        </>
    )
}



// <>
//  <h1 className={style.post_name}>Title</h1>
//  <div>
//    CONTENT GOES HERE
//  </div>
//
//  </div>
//  <p>Instructions</p>
// </>
//
// <div className="spacer5"></div>