import FileSaver from 'file-saver';
import {surpriseMePrompts, weatherData} from "../constants";

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    if (randomPrompt === prompt) return getRandomPrompt(prompt);

    return randomPrompt;
}

export async function downloadImage(_id, photo) {
    FileSaver.saveAs(photo, `download-${_id}.jpg`);
}

export function createPrompt(form) {
    let fogValue = "";
    let clodyValue = "";
    let moonValue = "";
    
    // fog
    if (form.fog >= 1 && form.fog <= 3) {
        fogValue = weatherData.fog[0];
    } else if (form.fog >= 4 && form.fog <= 6) {
        fogValue = weatherData.fog[1];
    } else if (form.fog >= 7) {
        fogValue = weatherData.fog[2];
    }

    // clouds
    if (form.clody >= 1 && form.clody <= 2) {
        clodyValue = weatherData.clody[0];
    } else if (form.clody >= 3 && form.clody <= 5) {
        clodyValue = weatherData.clody[1];
    } else if (form.clody >= 6 && form.clody <= 7) {
        clodyValue = weatherData.clody[2];
    } else if (form.clody >= 8) {
        clodyValue = weatherData.clody[3];
    }

    // moon
    if (form.moon == 1) {
        moonValue = weatherData.moon[0];
    } else if (form.moon == 2) {
        moonValue = weatherData.moon[1];
    } else if (form.moon == 3) {
        moonValue = weatherData.moon[2];
    } else if (form.moon == 4) {
        moonValue = weatherData.moon[3];
    } else if (form.moon == 5) {
        moonValue = weatherData.moon[4];
    } else if (form.moon == 6) {
        moonValue = weatherData.moon[5];
    } else if (form.moon == 7) {
        moonValue = weatherData.moon[6];
    } else if (form.moon == 9) {
        moonValue = weatherData.moon[7];
    }

    if (!form.prompt) {
        form.prompt = ''
    }
//The stars twinkle above like a million diamonds in the night sky
    //a photo of the night sky with a lot of stars and a beautiful landscape and the moon in the background, telephoto photography
    //floating among the stars
    if (fogValue || clodyValue || moonValue) {
        return (
            form.prompt + ' ' +
            'high quality photo of a'
            + ' night sky and ' +
            fogValue +
            (fogValue && clodyValue ? `and ${clodyValue}` : clodyValue) +
            (fogValue || clodyValue ? " weather" : "") +
            ((fogValue || clodyValue) && moonValue
                ? ` and with moon ${moonValue} phase`
                : moonValue
                    ? `moon ${moonValue} phase`
                    : "") +
            ' 8k'
        );
    } else {
        return form.prompt;
    }
}