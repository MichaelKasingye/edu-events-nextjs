import { FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon, TwitterIcon, TwitterShareButton, EmailShareButton, EmailIcon } from 'react-share'

const ShareEvent = ({shareUrl, title, body}) => {
    return (
        <ol className="list-unstyled d-flex">
              <li className="px-1">
                <TwitterShareButton
                url={shareUrl}
                title={title}
                >
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
              </li>
              <li className="px-1">
                <WhatsappShareButton
                url={shareUrl}
                title={title}
                >
                  <WhatsappIcon size={32} round={true} />
                </WhatsappShareButton>
              </li>
              <li className="px-1">
                
                <FacebookShareButton 
                url={shareUrl}
                title={title}
                >
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
              </li>
              <li className="px-1">
                <EmailShareButton
                url={shareUrl}
                title={title}
                body={body}
                >
                  <EmailIcon size={32} round={true} />
                </EmailShareButton>
              </li>
            </ol>
    )
}

export default ShareEvent
