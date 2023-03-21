// import React from "react";
// import { useEffect, useState } from "react";
// const photoPath = "https://image.tmdb.org/t/p/w300_and_h450_bestv2";
// const videoPath = "https://www.youtube.com/embed/";
// const BrowsePage = () => {
//   const [videos, setVideos] = useState([]);
//   const [images, setImages] = useState([]);
//   const [allVideos, setAllVideos] = useState([]);
//   useEffect(() => {
//     const fetchVideo = async () => {
//       try {
//         const response = await fetch(
//           "https://api.themoviedb.org/3/tv/135157?api_key=057e037396b3e44f631f913549e9891d&language=en-US"
//         );
//         const data = await response.json();
//         console.log(data);
//         setVideos([data]);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     const fetchImages = async () => {
//       try {
//         const response = await fetch(
//           "https://api.themoviedb.org/3/tv/135157/images?api_key=057e037396b3e44f631f913549e9891d&language=en-US"
//         );
//         const data = await response.json();
//         console.log(data);
//         setImages(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     const fetchAllVideos = async () => {
//       try {
//         const response = await fetch(
//           "https://api.themoviedb.org/3/tv/135157/videos?api_key=057e037396b3e44f631f913549e9891d&language=en-US"
//         );
//         const data = await response.json();
//         // console.log(data);
//         setAllVideos([data.results[1]]);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchVideo();
//     fetchAllVideos();
//     // fetchImages();
//   }, []);
//   // console.log(videos);
//   // console.log(images);
//   console.log(allVideos);

//   return (
//     <div>
//       <h1 className="text-6xl font-bold underline m-0">Video List</h1>
//       <div className="flex flex-col justify-center items-center">
//         {videos.map((video) => (
//           <div
//             className="flex flex-col justify-center items-center"
//             // key={video._id}
//           >
//             <h2 className="font-bold">{video.name}</h2>
//             <p className="max-w-[1000px] px-[10px] my-[10px]">
//               {video.overview}
//               {/* {video.poster_path} */}
//               {/* {photoPath + video.poster_path} */}
//             </p>
//             <img src={`${photoPath}${video.poster_path}`} />
//             {allVideos.id}
//             {/* <video src={`${videoPath}${allVideos.key}`}></video> */}
//           </div>
//         ))}
//         {allVideos.map((video) => (
//           <div>
//             <iframe
//               width="1405"
//               height="799"
//               src="https://www.youtube.com/embed/D4XAhpYe32M?"
//               title="Alchemy of Souls | Official Teaser | Netflix [ENG SUB]"
//               frameborder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//               allowfullscreen
//             ></iframe>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BrowsePage;
