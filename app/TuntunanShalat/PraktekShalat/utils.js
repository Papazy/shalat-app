const PlayAudio = async () => {
    try {
        const result = await sound.current.getStatusAsync();
        if (result.isLoaded) {
            if (result.isPlaying === false) {
                sound.current.playAsync();
                setIsPlaying(true);
            }
        }
    } catch (error) { }
};

const PauseAudio = async () => {
    try {
        const result = await sound.current.getStatusAsync();
        if (result.isLoaded) {
            if (result.isPlaying === true) {
                sound.current.pauseAsync();
                setIsPlaying(false);
            }
        }
    } catch (error) { }
};
const StopSound = async () => {
    try {
        const result = await sound.current.getStatusAsync();
        if (result.isLoaded) {
            if (result.isPlaying === true) {
                sound.current.stopAsync();
                setIsPlaying(false);
            }
        }
    } catch (error) { }
};
const exitSound = async () => {
    try {
        sound.current.stopAsync();
        setIsPlaying(false);
    } catch (error) { }
};

const UnloadAudio = async () => {
    try {
        const result = await sound.current.getStatusAsync();
        if (result.isLoaded) {
          await sound.current.unloadAsync();
          SetLoaded(false);
          SetLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
}
const LoadAudio = async (link) => {
    SetLoading(true);
    const checkLoading = await sound.current.getStatusAsync();
    if (checkLoading.isLoaded === false) {
        try {
            const result = await sound.current.loadAsync(link, {}, true);
            if (result.isLoaded === false) {
                SetLoading(false);
                console.log('Error in Loading Audio');
            } else {
                SetLoading(false);
                SetLoaded(true);
            }
        } catch (error) {
            console.log(error);
            SetLoading(false);
        }
    } else {
        SetLoading(false);
    }
};
export {
    PlayAudio,
    PauseAudio,
    StopSound,
    exitSound,
    UnloadAudio,
    LoadAudio
};