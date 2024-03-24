"use client";
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      An Error Has Occured {error.message}
      <button onClick={() => reset()}>Retry</button>
    </>
  );
}
