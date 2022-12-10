import React from 'react';
import { IoLogoTwitter, IoLogoLinkedin, IoLogoReddit } from 'react-icons/io';
import { TwitterShareButton, LinkedinShareButton, RedditShareButton} from 'next-share';

const Share = ({close, currentStock}) => {
    const url = 'https://yieldvest.hng.tech'
  return (
    <div className='absolute inset-0 flex justify-center items-center'>
        <div className="z-[999999999] bg-black  p-[20px] text-white">
            <div className="text-[21px] mb-[20px] text-center">
                Share this on socials
            </div>
            <div className="flex justify-between items-center gap-[20px] " >
                <TwitterShareButton
                    url={url}
                    title={`Share this on twiiter now ${currentStock}`}
                >
                    <IoLogoTwitter className='text-white text-[32px]' />
                </TwitterShareButton>
                <LinkedinShareButton
                    url={url}
                    title={'Share this stock on linkedin'}
                >
                    <IoLogoLinkedin className='text-white text-[32px]' />
                </LinkedinShareButton>
                <RedditShareButton
                    url={url}
                    title={'Share this on Linkedin'}
                >
                    <IoLogoReddit className='text-white text-[32px]' />
                </RedditShareButton>
            </div>
        </div>
        <div className='absolute inset-0 bg-black opacity-60 z-[99999999]' onClick={() => close(false)}></div>
    </div>
  )
}

export default Share