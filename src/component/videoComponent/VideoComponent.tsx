interface IProps {
    srcVideo: string;
}
const VideoComponent: React.FC<IProps> = (props) => {
    return (
            <video className="w-full shadow-lg" autoPlay loop controls muted>
                    <source
                        src={`${props?.srcVideo}`}
                        type="video/mp4" />
                </video>
    );
};
export default VideoComponent;