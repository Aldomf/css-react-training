function Dialog({
  dialogRef,
}: {
  dialogRef: React.RefObject<HTMLDialogElement | null>;
}) {
  return (
    <dialog
      ref={dialogRef}
      className="p-8 rounded-lg text-black backdrop:bg-black/60 backdrop:backdrop-blur-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 bg-white"
    >
      <p className="text-lg font-bold">This is a dialog!</p>
      <form
        method="dialog"
        className="flex flex-col justify-center items-center"
      >
        <button className="mt-4 bg-red-500 px-3 py-1 text-white rounded">
          Close
        </button>
      </form>
    </dialog>
  );
}

export default Dialog;
