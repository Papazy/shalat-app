import {Audio} from 'expo-av';

export const LoadAudio = async (link, onPlaybackStatusUpdate, setIsLoaded) => {
    try {
        const { sound } = await Audio.Sound.createAsync(link, {}, onPlaybackStatusUpdate);
        setIsLoaded(true);
        console.log('Sound sudah di load');
        return sound;
    }catch(error){
        console.log(error);
    }
    return null;
}

export const PlayAudio = async (audio, setIsPlaying) => {
    try {
        await audio.playAsync();
        setIsPlaying(true);
    }catch(error){
        console.log(error);
    }
}

export const PauseAudio = async (audio, setIsPlaying) => {
    try{
        await audio.pauseAsync();
        setIsPlaying(false);
    }catch(error){
        console.log(error);
    }
}

export const StopAudio = async (audio, setIsPlaying) => {
    try{
        await audio.stopAsync();
        setIsPlaying(false);
    }catch(error){
        console.log(error)
    }
}

export const UnloadAudio = async (audio, setIsLoaded) => {
    try{
        await audio.unloadAsync();
        setIsLoaded(false);
    }catch(error){
        console.log(error);
    }
}

