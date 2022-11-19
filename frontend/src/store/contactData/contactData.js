import React from 'react';

let title = (
    <span>
        Media, Business development <br /> and partnerships:
    </span>
);
let text1 = <span>https://twitter.com/mechteamplug?t=Axl-sd4ytSaCoV8bYlj-SA&s=08</span>;
let text2 = (
    <span>
        https://www.instagram.com
        <br />
        /mechteamplug/
    </span>
);

export const contactData = [
    {
        key: 'cd1',
        title: 'Mailing Address',
        text1: 'Plot 1b, industrial avenue,',
        text2: 'Apapa. Lagos',
        text3: '+2348100123456',
        text4: 'enquiries@mystockplug.com'
    },
    {
        key: 'cd2',
        title: 'For general enquiries',
        text1: 'support@mystockplug.com'
    },
    {
        key: 'cd3',
        title: title,
        text1: 'business@mystockplug.com'
    }
];
export const socialData = [
    {
        key: 'sd1',
        title: 'Instagram',
        text1: text2
    },
    {
        key: 'sd2',
        title: 'Twitter',
        text1: text1
    },
    {
        key: 'sd3',
        title: `Facebook`,
        text1: 'www.facebook.com/mystockplug'
    }
];
