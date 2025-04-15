import React, { useState, useRef } from "react";
import { delay, motion } from "motion/react";
const AudioPlayer = ({ isVisible }) => {
  const [isPlaying, setisPlaying] = useState(false);
  const [currentTime, setcurrentTime] = useState(0);
  const [duration, setduration] = useState(0);
  const [songIndex, setsongIndex] = useState(0);
  const [volume, setVolume] = useState(1); // Default volume is 100%
  const audioRef = useRef(null);

  const songs = [
    {
      title: "Aaj Ki Raat",
      artist:
        "Amitabh Bhattacharya, Sachin-Jigar, Madhubanti Bagchi, Divya Kumar",
      image:
        "https://c.saavncdn.com/373/Stree-2-Hindi-2024-20240828083834-500x500.jpg",
      src: "/assets/audio/one.mp3",
      bgcolor: "bg-gradient-to-tr from-[#051937] via-[#008793] to-[#a8eb12]",
      playerBgColor: "bg-gradient-to-tr from-black via-[#562e63] to-[#d8423b]",
    },
    {
      title: "Ayi Nai",
      artist:
        "Amitabh Bhattacharya, Sachin-Jigar, Pawan Singh, Simran Choudhary, Divya Kumar",
      image:
        "https://c.saavncdn.com/373/Stree-2-Hindi-2024-20240828083834-500x500.jpg",
      src: "/assets/audio/two.mp3",
      bgcolor: "bg-gradient-to-tr from-black via-[#562e63] to-[#d8423b]",
      playerBgColor:
        "bg-gradient-to-tr from-[#d2d2d2] via-[#9cb3d2] to-[#009dc6]",
    },
    {
      title: "Sugar & Brownies",
      artist: "Sugar & Brownies by DHARIA",
      image:
        "https://c.saavncdn.com/059/Sugar-Brownies-English-2019-20190326005637-500x500.jpg",
      src: "/assets/audio/three.mp3",
      bgcolor: "bg-gradient-to-tr from-[#589d41] via-[#007a62] to-[#080808]",
      playerBgColor:
        "bg-gradient-to-tr from-[#141e30] via-[#1c2c42] to-[#243b55]",
    },
    {
      title: "Die With Smile",
      artist: "Die With A Smile by Lady Gaga, Bruno Mars",
      image:
        "https://c.saavncdn.com/060/Die-With-A-Smile-English-2024-20240816103634-500x500.jpg",
      src: "/assets/audio/four.mp3",
      bgcolor: "bg-gradient-to-r from-[#434343] to-[#000000]",
      playerBgColor: "bg-gradient-to-r from-[#ff7e5f] to-[#feb47b]",
    },
    {
      title: "Maan Meri Jaan",
      artist: "Champagne Talk  by King",
      image:
        "https://c.saavncdn.com/734/Champagne-Talk-Hindi-2022-20221008011951-500x500.jpg",
      src: "/assets/audio/five.mp3",
      bgcolor: "bg-gradient-to-r from-[#8e44ad] to-[#3498db]",
      playerBgColor: "bg-gradient-to-r from-[#00c9ff] to-[#92fe9d]",
    },
  ];

  function handlePlayPause() {
    const a = audioRef.current;
    if (isPlaying) {
      a.pause();
    } else {
      a.play();
    }
    setisPlaying(!isPlaying);
  }
  function nextSongHandler() {
    setsongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setisPlaying(false);
  }
  function prevSongHandler() {
    setsongIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
    setisPlaying(false);
  }
  function onTimeUpdate() {
    setcurrentTime(audioRef.current.currentTime);
    setduration(audioRef.current.duration);
  }
  function handleSeek(e) {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setcurrentTime(newTime);
  }
  function formatTime(time) {
    if (isNaN(time)) return "00:00";
    return new Date(time * 1000).toISOString().substr(14, 5);
  }
  function handleVolumeChange(e) {
    const newVolume = e.target.value;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  }
  

  return (
    <div className="w-full p-3 h-screen bg-gradient-to-tr from-black via-[#2a1e1b] to-[#58815e] grid place-items-center">
      <motion.div
        key={songIndex}
        className={`xl:w-[39rem] ${songs[songIndex].bgcolor} px-4 py-5 rounded-2xl`}
        initial={{
          x: -50,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          ease: "linear",
        }}
      >
        <h1 className="text-3xl text-center font-bold text-zinc-300">
          MY MUSIC PLAYER
        </h1>
        <div
          className="flex justify-center items-center mt-5"
        >
          <motion.img
            src={songs[songIndex].image}
            alt={songs[songIndex].title}
            className="w-[16rem] h-[16rem] rounded-[7%]"
            initial={{
              x: -50,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              ease: "linear",
            }}
          />
        </div>
        <motion.p
          className="text-[2rem] text-emerald-400 text-center font-medium mt-3"
          initial={{
            x: -50,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.3,
            ease: "backOut",
          }}
        >
          {songs[songIndex].title}
        </motion.p>
        <motion.p
          className="text-[1.1rem] text-zinc-300 text-center font-medium mt-3"
          initial={{
            x: -50,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.1,
            ease: "circOut",
          }}
        >
          {songs[songIndex].artist}
        </motion.p>
        <div className="w-full p-3 mt-2">
          <audio
            ref={audioRef}
            src={songs[songIndex].src}
            onTimeUpdate={onTimeUpdate}
            onLoadedMetadata={onTimeUpdate}
            onEnded={nextSongHandler}
          />
          <motion.input
            type="range"
            className="w-full cursor-pointer"
            min={0}
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1.8,
            }}
          />
          <div className="mx-3 flex justify-between">
            <p className="text-[1.2rem] font-medium">
              {formatTime(currentTime)}
            </p>
            <p className="text-[1.2rem] font-medium">{formatTime(duration)}</p>
          </div>

          <div className="mt-5">
            <label className="block text-zinc-300 text-center mb-2">
              Volume
            </label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01" // Allows fine volume control
              value={volume}
              onChange={handleVolumeChange}
              className="w-full cursor-pointer"
            />
            <p className="text-center mt-2 text-zinc-300">
              {Math.round(volume * 100)}%
            </p>
          </div>

          <motion.div
            className={`${songs[songIndex].playerBgColor}
            border-[0.1rem]
            border-white 
            mt-5 text-[2.4rem] text-center flex justify-evenly p-2 rounded-4xl`}
            initial={{
              y: 70,
            }}
            animate={{
              y: 0,
            }}
            transition={{
              duration: 0.5,
              ease: "linear",
            }}
          >
            <motion.button
              onClick={prevSongHandler}
              className="active:scale-90  hover:scale-[1.1] transition ease-in-out"
              initial={{
                x: -50,
              }}
              animate={{
                x: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 1.5,
                ease: "backOut",
              }}
            >
              ⏮️
            </motion.button>
            <motion.button
              onClick={handlePlayPause}
              className="active:scale-90 hover:scale-[1.1] transition ease-in-out"
              initial={{
                x: -50,
              }}
              animate={{
                x: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 1.5,
                ease: "backOut",
              }}
            >
              {isPlaying ? "⏸️" : "▶️"}
            </motion.button>
            <motion.button
              onClick={nextSongHandler}
              className="active:scale-90 hover:scale-[1.1] transition ease-in-out"
              initial={{
                x: -50,
              }}
              animate={{
                x: 0,
              }}
              transition={{
                delay: 0.9,
                duration: 1.7,
                ease: "backOut",
              }}
            >
              ⏭️
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AudioPlayer;
