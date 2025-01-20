export default function ButtonsToActiveModal({
  setStateEditModalActive,
}: {
  setStateEditModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const PREFIX = "_btnToActiveModal-ke-32";

  const onClick = () => {
    setStateEditModalActive(true);
  };
  return (
    <div className="btns-to-active-modal btn-style-layer" prefix={PREFIX}>
      <button type="button" onClick={onClick}>
        수정하기
      </button>
    </div>
  );
}
