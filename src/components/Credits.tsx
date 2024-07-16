export default function Credits() {
  return (
    <div className="fixed left-6 bottom-6 text-[11px] text-neutral-500">
      {`A challenge by `}
      <a
        className="font-bold text-black"
        href="https://www.greatfrontend.com/projects?ref=challenges"
        target="_blank"
      >
        GreatFrontEnd Projects
      </a>
      {`. Built by `}
      <a
        className="font-bold text-black"
        href="https://www.greatfrontend.com/projects/u/9c2f4c3b"
        target="_blank"
      >
        Thomas
      </a>
      .
    </div>
  );
}
