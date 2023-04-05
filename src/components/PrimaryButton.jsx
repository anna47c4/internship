function PrimaryButton({ className, clickAction, desc }) {
  return (
    <>
      <button className={className} onClick={clickAction}>
        {desc}
      </button>
    </>
  );
}

export default PrimaryButton;
