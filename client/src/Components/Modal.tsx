export function Modal() {
  return (
    <div>
      <dialog>
        <p>Are you sure you want to quit?</p>
        <form method="dialog">
          <button>Yes</button>
          <button autoFocus>No</button>
        </form>
      </dialog>
    </div>
  );
}
