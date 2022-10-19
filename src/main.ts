/// <reference types="@workadventure/iframe-api-typings" />

import {bootstrapExtra} from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ', WA.player.tags)

    WA.room.onEnterLayer('clockZone').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup", "It's " + time, []);
    })

    WA.room.onLeaveLayer('clockZone').subscribe(closePopUp)

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

    // WA.room.onEnterLayer("silentZone").subscribe(() => {
    // WA.chat.sendChatMessage("Hello!", "Mr Robot");
// });

}).catch(e => console.error(e));

WA.camera.followPlayer(true);

// const myWebsite = await WA.ui.website.open({
//     url: "https://wikipedia.org",
//     position: {
//         vertical: "middle",
//         horizontal: "middle",
//     },
//     size: {
//         height: "50vh",
//         width: "50vw",
//     },
// });
//
// myWebsite.position.vertical = "top";

// WA.chat.sendChatMessage('Hello world', 'Mr Robot');

// WA.nav.goToPage('https://www.wikipedia.org/');
// const coWebsite = await WA.nav.openCoWebSite('https://en.wikipedia.org/wiki/Metaverse',true,"",70,1,true,true);
// coWebsite.close();

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};
