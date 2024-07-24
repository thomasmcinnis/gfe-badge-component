import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

const projects = ['badge-component', 'badge-component'];

function prettyName(project: string) {
  return project
    .split('-')
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

function Index() {
  return (
    <div className="m-8 text-zinc-800">
      <h1 className="text-2xl pb-2">Completed React Projects</h1>
      <p className="text-sm text">
        The following are simple components built for challenges on
        GreatFrontEnd Projects.
      </p>
      <ul className="pt-6">
        {projects.map((project) => (
          <li>
            <a href={`/${project}`} className="underline">
              {prettyName(project)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
