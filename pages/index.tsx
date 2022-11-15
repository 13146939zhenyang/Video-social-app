import axios from "axios";
import NoResults from "../components/NoResults";
import VideoCard from "../components/VideoCard";
import { Video } from "../types";
import { BASE_URL } from "../utils";

interface IProps {
  videos: Video[];
}

const Home = ({ videos }: IProps) => {
  return (
    <div className="flex flex-col gap-10 videos h-full">
      {videos.length ? (
        videos.map((video: Video) => <VideoCard post={video} key={video._id} />)
      ) : (
        <NoResults text={"No Videos"} />
      )}
    </div>
  );
};

// when page refreshes, this function is called on server side
export const getServerSideProps = async () => {
  const { data } = await axios.get(`${BASE_URL}/api/post`);
  return {
    props: {
      videos: data,
    },
  };
}; // This is the function that will be called on the server side

export default Home;
