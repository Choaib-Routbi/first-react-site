import React from "react";

const Contact = () => {
    return <>
        <div className="contact-section-holder">
            <div className="contact-section">
                <div className="section-title">Contact us<br/><span className="subtitles">Lcons urLorem ipsum Cumque saepe eligendi</span>
            </div>
            <div className="contact-section-container">
                <div className="form-title">What do <br/> you <br/> think<br/><span className="form-subtitle">saepesit ec saepesit adipis icing !</span></div>
                <form id="contact-form" name="contact-form" className="contact-section-form">
                    <div className="form-fields-container">
                        <label htmlFor="form-name">name :</label>
                        <input id="form-name" className="form-input-name" type="text" placeholder="type name ... "></input>
                        <label htmlFor="form-email">email :</label>
                        <input aria-autocomplete="none" id="form-email" className="form-input-email" type="email" placeholder="type email ... " ></input>
                        <label htmlFor="form-message" >massage :</label>
                        <textarea id="form-message" className="form-input-message" type="text" placeholder="tell us ... "></textarea>
                        <button type="reset" form="contact-form" className="form-btn">{"Send "} <svg className="form-send-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.<path d="M568.4 37.7C578.2 34.2 589 36.7 596.4 44C603.8 51.3 606.2 62.2 602.7 72L424.7 568.9C419.7 582.8 406.6 592 391.9 592C377.7 592 364.9 583.4 359.6 570.3L295.4 412.3C290.9 401.3 292.9 388.7 300.6 379.7L395.1 267.3C400.2 261.2 399.8 252.3 394.2 246.7C388.6 241.1 379.6 240.7 373.6 245.8L261.2 340.1C252.1 347.7 239.6 349.7 228.6 345.3L70.1 280.8C57 275.5 48.4 262.7 48.4 248.5C48.4 233.8 57.6 220.7 71.5 215.7L568.4 37.7z"/></svg></button>
                    </div>

                </form>

            </div>

            </div>
        </div>
    </>


}

export default Contact