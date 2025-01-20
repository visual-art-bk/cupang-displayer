export default function PlayButton({runSliderInterID}: {
    runSliderInterID: string | number | NodeJS.Timeout | undefined;
}) {
    const onClick = () => {
        clearInterval(runSliderInterID);
      };

    return (
        <button
        onClick={onClick}
        style={{
          position: "absolute",
          fontSize: "40px",
          color: "white",
          background: "blue",
          cursor: "pointer",
        }}
      >
        STOP
      </button> 

    )
}