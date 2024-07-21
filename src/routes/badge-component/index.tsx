import { createFileRoute } from '@tanstack/react-router';
import BadgeComponent from '../../components/BadgeComponent.tsx';

export const Route = createFileRoute('/badge-component/')({
  component: BadgeSection,
});

type BadgeSize = 'small' | 'medium' | 'large';
type BadgeRole = 'neutral' | 'error' | 'warning' | 'success' | 'brand';

const badgeSizes: BadgeSize[] = ['small', 'medium', 'large'];
const badgeRoles: BadgeRole[] = [
  'neutral',
  'error',
  'warning',
  'success',
  'brand',
];

function BadgeSection() {
  return (
    <main className="flex flex-column justify-center">
      <div className="flex flex-col w-[240px] mt-[200px] gap-6">
        {badgeRoles.map((role) => (
          <div className="flex gap-6 items-center" key={role}>
            {badgeSizes.map((size) => (
              <BadgeComponent size={size} role={role} key={`${size}-${role}`}>
                Label
              </BadgeComponent>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
