import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

import "./socialshare.css"

const SocialShare = ({ hostedUrl, title }) =>
(
    <div className="social-section">
        <FacebookShareButton
            url={hostedUrl}
            title={title}
        >
            <div className="social-icon"><FacebookIcon fontSize="large" /></div>
        </FacebookShareButton>
        <LinkedinShareButton
            url={hostedUrl}
            title={title}
        >
            <div className="social-icon"><LinkedInIcon fontSize="large" /></div>
        </LinkedinShareButton>
        <TwitterShareButton
            url={hostedUrl}
            title={title}
        >
            <div className="social-icon"><TwitterIcon fontSize="large" /></div>
        </TwitterShareButton>
    </div>
)

export default SocialShare;