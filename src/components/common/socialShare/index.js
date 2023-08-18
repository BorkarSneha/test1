import { FacebookShareButton, LinkedinShareButton, TwitterShareButton} from 'react-share';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

import "./socialshare.css"

function SocialShare (props) {
  return (
    <div className="social-section">
       <FacebookShareButton 
            url={props?.details?.hostedUrl}
            title={props?.details?.title}
        >
            <div className="social-icon"><FacebookIcon fontSize="large"/></div>
        </FacebookShareButton>
        <LinkedinShareButton 
            url={props?.details?.hostedUrl}
            title={props?.details?.title}
        >
            <div className="social-icon"><LinkedInIcon fontSize="large"/></div>
        </LinkedinShareButton>
        <TwitterShareButton 
            url={props?.details?.hostedUrl}
            title={props?.details?.title}
        >
            <div className="social-icon"><TwitterIcon fontSize="large"/></div>
        </TwitterShareButton>
    </div>
  )
}

export default SocialShare;