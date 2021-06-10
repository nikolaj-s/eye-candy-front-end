
import React from 'react'
import { useSelector } from 'react-redux';
import { selectError, selectExpandedLoading } from '../ExpandedViewFeature';

import "./SubNav.css"

export const SubNav = (props) => {

    const link = window.location.href.split('?')[0];

    const loading = useSelector(selectExpandedLoading)

    const error = useSelector(selectError);

    const download = () => {

        

        const image_element = document.getElementById('expanded-image')

        if (props.imageLoadingError === true) {

            const key = props.url.match(/[a-z0-9]{6}.jpg/)[0].split('.')[0]

            window.open(`https://wallhaven.cc/w/${key}`)

            return
        } else if (image_element !== null && image_element.src.startsWith('data:image')) {

            const a = document.createElement('a')

            a.href = image_element.src;

            a.download = "eye-candy-wallpaper";

            document.body.appendChild(a)

            a.click()

            document.body.removeChild(a)

            return;
        }

        window.open(props.url)
    }

    const copyLink = () => {
        try {
            navigator.clipboard.writeText(link)
        } catch (e) {
            // copy link for safari
            const textArea = document.createElement('textarea')

            textArea.value = link;

            document.body.appendChild(textArea)

            const range = document.createRange()

            range.selectNodeContents(textArea)

            const selection = window.getSelection();

            selection.removeAllRanges();

            selection.addRange(range);

            textArea.setSelectionRange(0, 99999999)

            document.execCommand('copy');
            document.body.removeChild(textArea);
        }
        props.copiedAnim()
    }

    return (
        <div className="sub-nav-container">
            <div className="clicks-container">
                <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M22.5701 2.22235C22.2979 1.40487 21.7121 0.729005 20.9416 0.343438C20.171 -0.0421302 19.2789 -0.105816 18.4614 0.166391C17.6439 0.438598 16.968 1.0244 16.5824 1.79493C16.1969 2.56545 16.1332 3.45759 16.4054 4.27507L19.6534 14.019C19.9256 14.8365 20.5114 15.5123 21.282 15.8979C22.0525 16.2835 22.9447 16.3471 23.7622 16.0749C24.5797 15.8027 25.2555 15.2169 25.6411 14.4464C26.0267 13.6759 26.0904 12.7837 25.8182 11.9663L22.5701 2.22235V2.22235ZM44.5203 12.041C45.1119 11.4284 45.4393 10.6079 45.4319 9.75633C45.4245 8.90473 45.0829 8.0901 44.4807 7.4879C43.8785 6.8857 43.0639 6.54411 42.2122 6.53671C41.3606 6.52931 40.5402 6.85669 39.9276 7.44833L33.4315 13.9443C32.8399 14.5568 32.5125 15.3773 32.5199 16.2289C32.5273 17.0805 32.8689 17.8951 33.4711 18.4973C34.0733 19.0995 34.888 19.4411 35.7396 19.4485C36.5912 19.4559 37.4116 19.1285 38.0242 18.5369L44.5203 12.041ZM4.27728 16.4062C3.45978 16.1336 2.56746 16.1969 1.79662 16.5821C1.02577 16.9674 0.43955 17.6431 0.166908 18.4606C-0.105735 19.278 -0.0424614 20.1704 0.342809 20.9412C0.728078 21.712 1.40379 22.2982 2.22128 22.5709L11.9653 25.8188C12.7828 26.091 13.675 26.0274 14.4455 25.6418C15.2161 25.2562 15.8019 24.5804 16.0741 23.7629C16.3463 22.9454 16.2826 22.0533 15.897 21.2827C15.5115 20.5122 14.8356 19.9264 14.0181 19.6542L4.27403 16.4062H4.27728ZM27.0946 22.9346C26.5142 22.7236 25.8856 22.6825 25.2826 22.8161C24.6796 22.9496 24.1272 23.2524 23.6901 23.6887C23.253 24.1251 22.9494 24.677 22.8149 25.2798C22.6804 25.8826 22.7206 26.5113 22.9307 27.092L35.9228 62.8197C36.1476 63.4377 36.5549 63.973 37.0906 64.3546C37.6263 64.7362 38.2652 64.9461 38.9229 64.9567C39.5805 64.9673 40.2259 64.7779 40.7736 64.4137C41.3212 64.0495 41.7455 63.5276 41.9901 62.9171L46.6575 51.2537L59.4157 64.0084C59.7153 64.3186 60.0737 64.5661 60.47 64.7363C60.8663 64.9065 61.2925 64.9961 61.7238 64.9999C62.155 65.0036 62.5827 64.9214 62.9819 64.7581C63.3811 64.5948 63.7437 64.3536 64.0487 64.0487C64.3536 63.7437 64.5948 63.3811 64.7581 62.9819C64.9214 62.5828 65.0036 62.1551 64.9999 61.7238C64.9961 61.2925 64.9065 60.8663 64.7363 60.4701C64.5661 60.0738 64.3186 59.7154 64.0084 59.4158L51.2502 46.6578L62.9171 41.9937C63.5287 41.7497 64.0517 41.3255 64.4167 40.7774C64.7817 40.2294 64.9715 39.5833 64.961 38.9249C64.9504 38.2665 64.7399 37.6268 64.3575 37.0908C63.9751 36.5547 63.4388 36.1475 62.8196 35.9233L27.0914 22.9314L27.0946 22.9346ZM18.5361 38.0247C18.8463 37.7251 19.0938 37.3667 19.264 36.9704C19.4342 36.5742 19.5238 36.148 19.5276 35.7167C19.5313 35.2854 19.4491 34.8577 19.2858 34.4586C19.1225 34.0594 18.8813 33.6968 18.5764 33.3918C18.2714 33.0868 17.9087 32.8457 17.5096 32.6824C17.1104 32.5191 16.6827 32.4369 16.2514 32.4406C15.8202 32.4444 15.394 32.534 14.9977 32.7042C14.6014 32.8744 14.243 33.1219 13.9434 33.4321L7.44735 39.928C7.13713 40.2276 6.88969 40.586 6.71946 40.9823C6.54924 41.3785 6.45964 41.8047 6.45589 42.236C6.45214 42.6673 6.53432 43.095 6.69764 43.4941C6.86095 43.8933 7.10212 44.2559 7.40709 44.5609C7.71206 44.8658 8.0747 45.107 8.47387 45.2703C8.87304 45.4336 9.30074 45.5158 9.73201 45.5121C10.1633 45.5083 10.5895 45.4187 10.9858 45.2485C11.382 45.0783 11.7404 44.8308 12.0401 44.5206L18.5361 38.0247Z" fill="black"/>
                </svg>
               
            </div>
            <h3>{props.clicks}</h3>
            <div onClick={loading || error ? null : download} style={loading || error ? {opacity: 0.5, cursor: 'default'} : {}} className={loading || error ? "button-container loading-prevent-action" : "button-container"}>
                <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.34375 46.4062C2.96535 46.4062 3.56149 46.6532 4.00103 47.0927C4.44057 47.5323 4.6875 48.1284 4.6875 48.75V60.4688C4.6875 61.712 5.18136 62.9042 6.06044 63.7833C6.93951 64.6624 8.1318 65.1562 9.375 65.1562H65.625C66.8682 65.1562 68.0605 64.6624 68.9396 63.7833C69.8186 62.9042 70.3125 61.712 70.3125 60.4688V48.75C70.3125 48.1284 70.5594 47.5323 70.999 47.0927C71.4385 46.6532 72.0346 46.4062 72.6562 46.4062C73.2779 46.4062 73.874 46.6532 74.3135 47.0927C74.7531 47.5323 75 48.1284 75 48.75V60.4688C75 62.9552 74.0123 65.3397 72.2541 67.0979C70.496 68.856 68.1114 69.8438 65.625 69.8438H9.375C6.8886 69.8438 4.50403 68.856 2.74587 67.0979C0.987721 65.3397 0 62.9552 0 60.4688V48.75C0 48.1284 0.24693 47.5323 0.686468 47.0927C1.12601 46.6532 1.72215 46.4062 2.34375 46.4062Z" fill="black"/>
                <path d="M35.8402 55.5656C36.0579 55.7839 36.3165 55.9571 36.6013 56.0752C36.886 56.1934 37.1913 56.2542 37.4995 56.2542C37.8078 56.2542 38.1131 56.1934 38.3978 56.0752C38.6826 55.9571 38.9412 55.7839 39.1589 55.5656L53.2214 41.5031C53.6615 41.063 53.9088 40.4661 53.9088 39.8438C53.9088 39.2214 53.6615 38.6245 53.2214 38.1844C52.7813 37.7443 52.1844 37.497 51.562 37.497C50.9397 37.497 50.3428 37.7443 49.9027 38.1844L39.8433 48.2484V7.03125C39.8433 6.40965 39.5964 5.81351 39.1568 5.37397C38.7173 4.93443 38.1211 4.6875 37.4995 4.6875C36.8779 4.6875 36.2818 4.93443 35.8423 5.37397C35.4027 5.81351 35.1558 6.40965 35.1558 7.03125V48.2484L25.0964 38.1844C24.6563 37.7443 24.0594 37.497 23.437 37.497C22.8147 37.497 22.2178 37.7443 21.7777 38.1844C21.3376 38.6245 21.0903 39.2214 21.0903 39.8438C21.0903 40.4661 21.3376 41.063 21.7777 41.5031L35.8402 55.5656Z" fill="black"/>
                </svg>
            </div>
            <div onClick={copyLink} className="button-container">
                <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M41.0752 29.9246C38.1174 26.968 34.1066 25.3072 29.9245 25.3072C25.7425 25.3072 21.7316 26.968 18.7738 29.9246L7.61951 41.0753C4.66169 44.0332 3 48.0449 3 52.2279C3 56.4109 4.66169 60.4226 7.61951 63.3804C10.5773 66.3383 14.589 68 18.772 68C22.955 68 26.9667 66.3383 29.9245 63.3804L35.4999 57.8051" stroke="black" strokeWidth="4.67" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M29.9248 41.0754C32.8826 44.0319 36.8934 45.6928 41.0755 45.6928C45.2575 45.6928 49.2684 44.0319 52.2262 41.0754L63.3805 29.9246C66.3383 26.9668 68 22.9551 68 18.7721C68 14.5891 66.3383 10.5774 63.3805 7.61954C60.4227 4.6617 56.411 3 52.228 3C48.045 3 44.0333 4.6617 41.0755 7.61954L35.5001 13.1949" stroke="black" strokeWidth="4.67" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            
        </div>
    )
}
