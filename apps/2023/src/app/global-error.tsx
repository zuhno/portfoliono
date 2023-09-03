"use client";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html lang="en">
      <body>
        <h2>Something went wrong</h2>
        <p id="error">{`Global error: ${error?.message}`}</p>
        {(error as any)?.digest ? <p id="digest">{(error as any)?.digest}</p> : null}
        <button onClick={() => reset()} type="button">
          Try again
        </button>
      </body>
    </html>
  );
}
