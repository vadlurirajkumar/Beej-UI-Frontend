import { Link } from "react-router-dom";
import airgarge from '../../../../../Assets/airgaragelogo.png'
import airtable from '../../../../../Assets/Airtable_Logo.png'
import checkr from '../../../../../Assets/Checkr_Logo.png'
import dave from '../../../../../Assets/dave-logo.png'


export const InvestCard = [
    
        {
            investImg:airgarge,
            title:<Link>Airgarge</Link>,
            industry:"Service",
            latest: "5,00,000",
            color:"#ffffff",
        },
        {
            investImg:airtable,
            title:<Link>Airtable</Link>,
            industry:"Service",
            latest: "2,00,000",
            color:"#ffffff",

        },
        {
            investImg:checkr,
            title:<Link>Checkr</Link>,
            industry:"Service",
            latest: "1,00,000",
            color:"#ffffff",

        },
        {
            investImg:dave,
            title:<Link>Dave</Link>,
            industry:"Service",
            latest: "3,00,000",
            color:"#ffffff",

        },
    ]
