import Facebook from '../../icons/social/Facebook'
import Instagram from '../../icons/social/Instagram'
import TikTok from '../../icons/social/TikTok'
import Twitter from '../../icons/social/Twitter'
import YouTube from '../../icons/social/Youtube'

export default function SocialMediaLinks({ socialMedia }) {
  return (
    <>
      {socialMedia.facebook_id && (
        <a
          href={`https://facebook.com/${socialMedia.facebook_id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook />
        </a>
      )}

      {socialMedia.instagram_id && (
        <a
          href={`https://instagram.com/${socialMedia.instagram_id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram size="26" />
        </a>
      )}

      {socialMedia.tiktok_id && (
        <a
          href={`https://tiktok.com/@${socialMedia.tiktok_id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <TikTok />
        </a>
      )}

      {socialMedia.twitter_id && (
        <a
          href={`https://twitter.com/${socialMedia.twitter_id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter />
        </a>
      )}

      {socialMedia.youtube_id && (
        <a
          href={`https://youtube.com/${socialMedia.youtube_id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <YouTube />
        </a>
      )}
    </>
  )
}
