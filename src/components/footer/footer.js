import React from 'react'
import './footer.css'

const Footer = ({props}) => {
    // const {name, dateFrom, dateTo, guests, category, image, copy} = props
    /* eslint-disable import/no-dynamic-require */
    /* eslint-disable global-require */
    // const cardImage = require(`../../assets/${image}`)

    return (
        <footer className="landingpagefooter">
            <div className="landingpagefooterdiv">
                <div className="landingpagefooterdivitembr"></div>
                <div className="landingpagefooterdivitem">
                    <a className="landingpagefooterdivitemlink" href="/">
                        {' '}
                        {/* contact us{' '} */}
                    </a>
                </div>
                <div className="landingpagefooterdivitem">
                    <a className="landingpagefooterdivitemlink" href="/">
                        visit Github repo
                    </a>
                </div>
                <div className="landingpagefooterdivitem">
                    <a
                        className="landingpagefooterdivitemlink"
                        href="https://github.com/s-Hale/BuildTravelCards">
                        {/* {" "} &#9749; */}
                    </a>
                </div>
                <div
                    className="landingpagefooterdivitem"
                    className="landingpagefooterdivitembr"></div>
            </div>
        </footer>
    )
}

export default Footer
